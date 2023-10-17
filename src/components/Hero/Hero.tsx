import Image from "next/image";
import Alex from '../../../public/alex-hero.jpg';

export default function Hero(): JSX.Element {
    return (
        <section className="mt-3  mobile:w-[480px] mobile:mx-auto tablet:w-[640px]   laptop:w-[1024px]  desktop:w-[1280px]  " >
            <Image src={Alex} alt="Alex" className="w-full rounded-sm" priority />
        </section >
    )
}