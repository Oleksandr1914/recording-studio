
export default function Hero(): JSX.Element {
    return (
        <div style={{
            backgroundImage: `url('/alex-hero.jpg')`,
        }} className=" bg-no-repeat bg-cover bg-top flex w-full h-80 items-center mobile:h-[440px] tablet:h-[510px] laptop:h-[680px]  desktop:h-[890px] " >
        </div >
    )
}