'use client';

import { useRouter } from 'next/navigation';

const LoginClientPage = () => {
  const router = useRouter();
  const handleStart = (): void => {
    router.push('/');
  };
  return (
    <section className="w-screen h-screen flex flex-row justify-center items-center px-4">
      <div className="min-w-full sm:min-w-[350px] min-h-[220px] bg-white shadow-lg px-4 flex flex-col justify-center rounded-[10px]">
        <input
          type="text"
          className="w-full h-[40px] my-1 shadow-md border-button border px-[12px] rounded-[10px] outline-none"
          placeholder="key를 입력해주세요."
        />
        <button onClick={handleStart} className="w-full h-[40px] rounded-[10px] my-1 shadow-md bg-button text-white">
          <p>시작하기</p>
        </button>
        <button className="w-full h-[40px] rounded-[10px] my-1 shadow-md bg-button text-white">
          <p>key 발급 받기</p>
        </button>
      </div>
    </section>
  );
};

export default LoginClientPage;
