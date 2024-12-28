import { useEffect, useRef, useState } from 'react';
import { getLogs } from '@/services';
import generateRandomLog from '@/utils/generate-log';
import { useQuery, useQueryClient } from '@tanstack/react-query';

interface LogContainerProps {
  keyName: string;
  name: string;
  handleClick: (value: string) => void;
  isFullHeight?: boolean;
}

/**
 * 로그 컨테이너 컴포넌트
 *
 * 주어진 로그 배열을 순차적으로 렌더링하여, 로그 리스트를 표시하는 컨테이너를 반환합니다.
 * @param {string} keyName: 로그 항목의 고유한 식별자(로그를 추적할 때 사용됩니다).
 * @param {string} name: 로그 컨테이너의 제목입니다.
 * @param {boolean} [isFullHeight] 로그 컨테이너의 풀 높이 여부
 *
 * @param {LogContainerProps} props - 로그 컨테이너에 필요한 속성 값들
 * @returns {React.ReactNode} - 로그 항목들이 렌더링된 JSX
 */
export default function LogContainer({
  keyName,
  name,
  handleClick,
  isFullHeight = false,
}: LogContainerProps): React.ReactNode {
  const queryClient = useQueryClient();
  const { data: keyNameLogs } = useQuery({
    queryKey: [`${keyName}-logs`],
    queryFn: () => getLogs(keyName),
    initialData: [],
  });
  const scrollRef = useRef<HTMLDivElement>(null);
  const userScrolled = useRef(false);
  const [lastUserScrollTime, setLastUserScrollTime] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      userScrolled.current = true;
      setLastUserScrollTime(Date.now());
    };

    const scrollElement = scrollRef.current;
    scrollElement?.addEventListener('scroll', handleScroll);

    return () => scrollElement?.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const now = Date.now();
    const shouldScroll = now - lastUserScrollTime > 5000;

    if (!userScrolled.current || shouldScroll) {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
      userScrolled.current = false;
    }
  }, [keyNameLogs, lastUserScrollTime]);

  useEffect(() => {
    const addRandomLog = () => {
      const randomLog = generateRandomLog();
      queryClient.setQueryData([`${keyName}-logs`], (oldLogs: string[] | undefined) => {
        return oldLogs ? [...oldLogs, randomLog] : [randomLog];
      });
    };

    const interval = setInterval(() => {
      const randomDelay = Math.floor(Math.random() * (2000 - 100 + 1)) + 100;
      setTimeout(addRandomLog, randomDelay);
    }, 2000);

    return () => clearInterval(interval);
  }, [keyName, queryClient]);

  return (
    <div className={`border w-full ${isFullHeight ? 'h-full' : 'h-[360px]'} shadow-md`}>
      <div className="w-full bg-white h-full overflow-hidden">
        <div className="w-full bg-primary h-[44px] shadow-sm flex flex-row justify-between items-center">
          <p className="px-4 py-4 font-bold">{name}</p>
          <button onClick={() => handleClick(name)} className="mr-2 bg-white h-[26px] px-2 rounded-[13px] text-[14px]">
            상세보기
          </button>
        </div>
        <div className="w-full h-full">
          <div ref={scrollRef} className="w-full h-full p-2 px-4 overflow-y-scroll">
            {keyNameLogs?.map((log, index) => (
              <p key={`log-${keyName}-${index}`} className="mb-2 leading-relaxed">
                {log}
              </p>
            ))}
            <div className="h-40" />
          </div>
        </div>
      </div>
    </div>
  );
}

LogContainer.displayName = 'LogContainer';
