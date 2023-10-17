import Image from "next/image";
import Alex from '../../../public/alex-hero.jpg';

export default function Hero(): JSX.Element {
    return (
        <section className="relative mt-3  mobile:w-[480px] mobile:mx-auto tablet:w-[640px]   laptop:w-[1024px]  desktop:w-[1280px]  " >
            <Image src={Alex} alt="Alex" className=" w-full rounded-sm" priority />

            <div className="absolute w-full h-full bg-radial-gradient from-mainColor top-0 left-0">
                <h1 className="absolute  left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] flex flex-row gap-14 text-xl tracking-widest mobile:text-2xl tablet:text-3xl tablet:tracking-[.4em] laptop:text-4xl italic laptop:tracking-[.9em]"><span>Alex</span> <span>Goroshko</span></h1>
            </div>
        </section >
    )
}