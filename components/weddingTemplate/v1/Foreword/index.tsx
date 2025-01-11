import Image from "next/image";

import { ForewordStyled } from "./styled";
import configs from "configs";

export default function Foreword() {
  return (
    <ForewordStyled className="container flex flex-col items-center justify-center px-5 py-16 md:px-10">
      <div className="mb-20 w-full max-w-[750px]">
        <h2 className="animate-box mb-2 font-sacra text-[40px] font-bold leading-normal text-pink md:text-6xl">
          Dear all,
        </h2>
        <p className="animate-box mb-5 text-lg italic leading-loose text-gray">
          Trân trọng thân mời,
        </p>
        <p className="animate-box mb-5 text-lg leading-loose text-gray">
          {configs.husbandName} và {configs.wifeName} xin thân mời toàn thể anh
          chị em và các bạn tới dự bữa cơm thân mật mừng lễ thành hôn của chúng
          mình vào hồi 08h ngày 19/01 (dương lịch) - tức 20/12 Âm lịch
        </p>
        <p className="animate-box text-lg leading-loose text-gray">
          Đây cũng là dịp chúng mình gửi lời cảm ơn đến tất cả anh chị em và bạn
          bè đã đồng hành cùng chặng đường xây dựng hạnh phúc trong thời gian
          qua. ​Sự hiện diện của mọi người là niềm vui, niềm hạnh phúc đong đầy,
          niềm vinh hạnh của gia đình chúng mình!!
        </p>
      </div>
    </ForewordStyled>
  );
}
