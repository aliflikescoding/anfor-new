'use client';

import Image from 'next/image';

const EventSection = () => {
  return (
    <div className="bg-[#FEB82F]">
      
      {/* ========================= Halaman 1 ========================= */}
      <div className="container mx-auto px-6 md:px-28 lg:px-40">
        <div className="pt-24 pb-10">
          <h2 className="text-[28px] md:text-[35px] lg:text-[50px] font-bold italic leading-tight text-left text-white">
            Kenapa hanya jadi penonton, kalau lewat <span className="font-bold">seminar</span> ini kamu bisa ikut membentuk <span className="font-bold">masa depan teknologi?</span>
          </h2>
        </div>
      </div>

      {/* Separator full width */}
      <div className="w-full">
        <Image
          src="/images/strline.png"
          alt="Star Line"
          width={1920}
          height={200}
          className="w-full h-auto"
        />
      </div>

      {/* Konten setelah separator */}
      <div className="container mx-auto px-6 md:px-28 lg:px-40 pt-10 pb-24">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/headerevent.png"
              alt="Event Header"
              width={600}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 text-white text-sm md:text-base lg:text-[18px] leading-relaxed">
            Di tengah arus perubahan digital yang semakin cepat, seminar Anforcom 2025 menghadirkan para ahli, praktisi, dan inovator untuk membagikan wawasan, pengalaman, serta gagasan masa depan.
          </div>
        </div>
      </div>

      {/* ========================= Halaman 2 ========================= */}
      <div className="container mx-auto px-6 md:px-28 lg:px-40 min-h-screen flex flex-col justify-center gap-16 py-10">
        
        {/* Seminar 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <Image
              src="/images/event1.png"
              alt="Seminar 1"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 text-white">
            <p className="italic font-semibold text-sm md:text-base lg:text-[18px] mb-2">Seminar 1</p>
            <h3 className="font-semibold text-[22px] md:text-[30px] lg:text-[40px] leading-snug mb-2">
              Tips dan Trik dalam Menghubungi Dosen
            </h3>
            <p className="text-sm md:text-base lg:text-[18px]">
              Mochammad Dzahwan ‘Wanceng’ Fadholy<br />
              Women Heart Engineer @ Wanceng Inc.
            </p>
          </div>
        </div>

        {/* Seminar 2 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <Image
              src="/images/event1.png"
              alt="Seminar 2"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 text-white">
            <p className="italic font-semibold text-sm md:text-base lg:text-[18px] mb-2">Seminar 2</p>
            <h3 className="font-semibold text-[22px] md:text-[30px] lg:text-[40px] leading-snug mb-2">
              Membangun Relasi Profesional di Dunia Digital
            </h3>
            <p className="text-sm md:text-base lg:text-[18px]">
              Rani Puspitasari<br />
              Community Builder @ Digital Connect
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventSection;
