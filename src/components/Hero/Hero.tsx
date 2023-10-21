import Image from "next/image";
import Alex from "../../../public/alex-hero.jpg";

export default function Hero(): JSX.Element {
    return (
        <section className="relative mt-3  mobile:w-[480px] mobile:mx-auto tablet:w-[640px]   laptop:w-[1024px]  desktop:w-[1280px]  ">
            <Image src={Alex} alt="Alex" className=" w-full rounded-sm" priority />

            <div className="absolute w-full h-full bg-radial-gradient from-mainColor top-0 left-0">
                <div className="absolute  left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] flex flex-col items-center ">
                    <h1 className="flex flex-row gap-6 text-xl tracking-[.2em] mobile:text-2xl tablet:text-3xl tablet:tracking-[.4em] laptop:text-5xl laptop:tracking-[.7em]">
                        <span>ALEX</span> <span>GOROSHKO</span>
                    </h1>
                    <p className="flex gap-2 mt-2 text-xs tablet:text-base tablet:mt-6 laptop:gap-4 laptop:mt-12 laptop:text-2xl">
                        <span>COMPOSER</span>
                        <span>&</span>
                        <span>SONGWRITER</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
