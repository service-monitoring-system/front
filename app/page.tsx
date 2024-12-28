'use client';

import LogContainer from '@components/log-container';
import { getProjects } from '@services';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { isLoading, data: projects } = useQuery({
    queryKey: ['proejcts'],
    queryFn: () => getProjects('example'),
  });
  return (
    <div className="py-[70px] px-[20px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 min-h-screen">
      {isLoading
        ? '로딩 중'
        : projects?.map((project, index) => {
            return <LogContainer key={`proejct-${project}-${index}`} name={project} keyName={project} />;
          })}
    </div>
  );
}
