import React from "react";
import Image from "next/image";

const ThreeImage = () => {
  return (
    <>
      {/* Normal layout */}
      <div className="w-[600px] max-h-[300px] relative hidden sm:block">
        <Image
          src="/images/gallery2.png"
          alt="image one"
          height={0}
          width={0}
          sizes="100vw"
          className="w-[480px] h-auto mx-auto rounded-2xl"
        />
        <Image
          src="/images/gallery2.png"
          alt="image one"
          height={0}
          width={0}
          sizes="100vw"
          className="w-[150px] h-auto absolute bottom-[-135px] left-[-30px] rounded-2xl"
        />
        <Image
          src="/images/gallery2.png"
          alt="image one"
          height={0}
          width={0}
          sizes="100vw"
          className="w-[120px] h-auto absolute top-[-22.5px] right-[-12px] rounded-2xl"
        />

        <div className="rounded-2xl w-[108px] h-[96px] bg-primary absolute left-0 top-[-30px]"></div>
        <div className="rounded-2xl w-[72px] h-[72px] bg-white absolute left-[21px] top-[-22.5px]"></div>

        <div className="rounded-2xl w-[108px] h-[96px] bg-primary absolute right-[48px] bottom-[-105px]"></div>
        <div className="rounded-2xl w-[72px] h-[72px] bg-white absolute right-[60px] bottom-[-96px]"></div>
      </div>

      {/* Mobile / below sm */}
      <div className="w-[300px] max-h-[150px] relative sm:hidden block">
        <Image
          src="/images/gallery2.png"
          alt="image one"
          height={0}
          width={0}
          sizes="100vw"
          className="w-[240px] h-auto mx-auto rounded-2xl"
        />
        <Image
          src="/images/gallery2.png"
          alt="image one"
          height={0}
          width={0}
          sizes="100vw"
          className="w-[75px] h-auto absolute bottom-[-67.5px] left-[-15px] rounded-2xl"
        />
        <Image
          src="/images/gallery2.png"
          alt="image one"
          height={0}
          width={0}
          sizes="100vw"
          className="w-[60px] h-auto absolute top-[-11.25px] right-[-6px] rounded-2xl"
        />

        <div className="rounded-lg w-[54px] h-[48px] bg-primary absolute left-0 top-[-15px]"></div>
        <div className="rounded-lg w-[36px] h-[36px] bg-white absolute left-[10.5px] top-[-11.25px]"></div>

        <div className="rounded-lg w-[54px] h-[48px] bg-primary absolute right-[24px] bottom-[-52.5px]"></div>
        <div className="rounded-lg w-[36px] h-[36px] bg-white absolute right-[30px] bottom-[-48px]"></div>
      </div>
    </>
  );
};

export default ThreeImage;
