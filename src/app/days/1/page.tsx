import React from 'react';

const ChallengeOne = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <main className="w-[400px] h-[400px] rounded-sm shadow-[1px_2px_10px_rgba(155,0,0,0.3)] bg-gradient-to-tr from-[#43389F] to-[#4ec6ca] font-mono text-white antialiased relative">
        <section className="absolute top-[50.8%] left-[50.5%] -translate-x-1/2 -translate-y-1/2 text-center">
          <header className="relative h-[100px] w-[200px]">
            <div className="absolute z-[1] top-0 left-[-16px] h-[40px] w-[20px] bg-white rounded-sm rotate-[50deg] shadow-[0_0_13px_rgba(0,0,0,0.2)]" />
            <div className="absolute z-[10] top-0 left-0 h-[100px] w-[24px] bg-white rounded-sm shadow-[0_0_13px_rgba(0,0,0,0.2)]" />
            <div className="absolute z-[8] top-0 left-[17px] h-[100px] w-[100px] rounded-full border-[24px] border-white box-border shadow-[0_0_13px_rgba(0,0,0,0.2)]" />
            <div className="absolute z-[6] top-0 left-[100px] h-[100px] w-[100px] rounded-full border-[24px] border-white box-border shadow-[0_0_13px_rgba(0,0,0,0.2)]" />
          </header>
          <h1 className="relative z-[20] text-[82px] leading-[60px] uppercase font-bold mt-[6px]">
            Days
          </h1>
          <p className="relative z-[20] text-[23px] leading-[20px] uppercase font-bold tracking-[.04em]">
            CSS Challenge
          </p>
        </section>
      </main>
    </div>
  );
};

export default ChallengeOne;
