import Image from "next/image";
import Alex from '../../../public/alex-hero.jpg';
export default function Hero(): JSX.Element {
    return (
        <div style={{
            backgroundImage: `url('/alex-hero.jpg')`,
        }} className=" bg-no-repeat bg-cover bg-top flex w-full h-80 items-center mobile:h-96 tablet:h-[510px] laptop:h-[680px]  desktop:h-[890px] " >
            {/* <Image src={Alex} alt="logo" className="w-full h-80 mobile:h-96 tablet:h-[510px] laptop:h-[680px]  desktop:h-[890px]" /> */}
        </div >
    )
}