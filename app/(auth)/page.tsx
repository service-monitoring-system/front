'use client';

import { useState } from 'react';
import LogContainer from '@/components/log-container';
import { getProjects } from '@/services';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const [show, setShow] = useState<boolean>(false);
  const { isLoading, data: projects } = useQuery({
    queryKey: ['proejcts'],
    queryFn: () => getProjects('example'),
  });
  const handleClick = (projectId: string): void => {
    console.log({ projectId });
    setShow(true);
  };

  return (
    <section>
      <div
        className="py-[70px] px-[20px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 min-h-screen origin-center transition-all duration-300 ease-in-out"
        style={{ transform: show ? 'scale(0.95)' : 'scale(1)' }}
      >
        {isLoading
          ? '로딩 중'
          : projects?.map((project, index) => {
              return (
                <LogContainer
                  handleClick={handleClick}
                  key={`proejct-${project}-${index}`}
                  name={project}
                  keyName={project}
                />
              );
            })}
      </div>
      <section className={`${show ? 'h-screen overflow-hidden' : ''}`}>
        <div
          style={{ transform: show ? 'scale(0.95)' : 'scale(1)' }}
          className={`origin-center transition-all duration-300 ease-in-out`}
        ></div>
        {show && (
          <div
            style={{ opacity: show ? 0.3 : 0 }}
            onClick={() => setShow(false)}
            className={`w-screen h-screen fixed top-0 left-0 bg-black transition-all duration-300`}
          ></div>
        )}
        <div
          className={`h-screen fixed top-0 right-0 bg-white rounded-tl-[30px] rounded-bl-[30px] duration-300 ease-in-out shadow-xl z-[2]`}
          style={{
            width: show ? '90%' : 0,
          }}
        >
          <div className="px-6 py-8">
            <LogContainer
              handleClick={handleClick}
              key={`proejct-proejctN-99`}
              name={`Project N`}
              keyName={`Project N`}
              isFullHeight
            />
          </div>
        </div>
      </section>
    </section>
  );
}
