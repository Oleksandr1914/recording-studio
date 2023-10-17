import Image from "next/image";
import Alex from '../../../public/alex-hero.jpg';

export default function Hero(): JSX.Element {
    return (
        <section className="mt-3 px-5 mobile:w-[480px] mobile:mx-auto tablet:w-[640px] tablet:px-8  laptop:w-[1024px] leptop:px-10 desktop:w-[1280px] desktop:px-14 " >
            <Image src={Alex} alt="Alex" className="w-full rounded-sm" priority />
        </section >
    )
}