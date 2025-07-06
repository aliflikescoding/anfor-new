import React from "react";
import Image from "next/image";

const ThreeImage = () => {
  return (
    <div className="w-[600px] sm:w- max-h-[300px] relative">
      <Image
        src="/images/gallery2.png"
        alt="image one"
        height={0}
        width={0}
        sizes="100vw"
        className="w-[80%] h-auto mx-auto rounded-2xl"
      />
      <Image
        src="/images/gallery2.png"
        alt="image one"
        height={0}
        width={0}
        sizes="100vw"
        className="w-[25%] h-auto absolute bottom-[-45%] left-[-5%] rounded-2xl"
      />
      <Image
        src="/images/gallery2.png"
        alt="image one"
        height={0}
        width={0}
        sizes="100vw"
        className="w-[20%] h-auto absolute top-[-7.5%] right-[-2%] rounded-2xl"
      />

      {/* Bottom-right squares - largest */}
      <div className="rounded-2xl w-[18%] h-[32%] bg-primary absolute left-[0] top-[-10%]"></div>
      <div className="rounded-2xl w-[12%] h-[24%] bg-white absolute left-[3.5%] top-[-7.5%]"></div>

      {/* Bottom-right squares - largest */}
      <div className="rounded-2xl w-[18%] h-[32%] bg-primary absolute right-[8%] bottom-[-35%]"></div>
      <div className="rounded-2xl w-[12%] h-[24%] bg-white absolute right-[10%] bottom-[-32%]"></div>
    </div>
  );
};

export default ThreeImage;
