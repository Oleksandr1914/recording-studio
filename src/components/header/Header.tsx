import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx";
import { ImAmazon, ImYoutube } from "react-icons/im";
import { SiApplemusic, SiSpotify, SiBandcamp, SiInstagram, SiFacebook } from "react-icons/si";
import Logo from '../../../public/logo.jpg';
import Image from "next/image";
import Links from "../Links/Links";


export default function Header(): JSX.Element {
    return (
        <header className=" flex flex-row justify-between w-full px-5 py-2 items-center  mobile:w-[480px] mobile:mx-auto tablet:w-[640px] tablet:px-8 tablet:py-4 laptop:w-[1024px] leptop:px-10 laptop:py-5 desktop:w-[1280px] desktop:px-14">
            <Image src={Logo} alt="logo" className="w-10 h-10" />
            <Sheet>
                <SheetTrigger className="laptop:hidden ">
                    <RxHamburgerMenu className='h-8 w-8' />
                </SheetTrigger>
                <SheetContent className="bg-backgroundBurger overflow-y-scroll">
                    <ul className="flex flex-col items-center gap-6 pt-20  ">
                        <li ><SheetClose ><Links href="https://open.spotify.com/artist/1IHidn13htJrgxUiBgke5F" size="s" className="flex flex-row gap-3 items-center text-burgerLinkColor"> <SiSpotify /><span>Spotify</span></Links> </SheetClose></li>
                        <li><SheetClose ><Links href="https://music.apple.com/ua/artist/alex-goroshko/1508207527" size="s" className="flex flex-row gap-3 items-center text-burgerLinkColor"><SiApplemusic /><span>Apple Music</span></Links> </SheetClose></li>
                        <li><SheetClose ><Links href="https://music.youtube.com/browse/UC5dZant-Sucog_ziaC-MUpg" size="s" className="flex flex-row gap-3 items-center text-burgerLinkColor"><ImYoutube /><span>Youtube</span> </Links></SheetClose></li>
                        <li><SheetClose ><Links href="https://alexgoroshko.bandcamp.com/" size="s" className="flex flex-row gap-3 items-center text-burgerLinkColor"><SiBandcamp /><span>Bandcamp</span> </Links></SheetClose></li>
                        <li><SheetClose ><Links href="https://www.instagram.com/alexgoroshko8/" size="s" className="flex flex-row gap-3 items-center text-burgerLinkColor"><SiInstagram /><span>Instagram</span> </Links></SheetClose></li>
                    </ul>
                </SheetContent>
            </Sheet>
            <ul className='hidden laptop:flex laptop:flex-row laptop:gap-9 laptop:ml-auto desktop:gap-12'>
                <li ><Links href="https://open.spotify.com/artist/1IHidn13htJrgxUiBgke5F" size="s" className="flex flex-row gap-3 items-center"> <SiSpotify className="w-6 h-6 desktop:w-7 desktop:h-7" /></Links> </li>
                <li><Links href="https://music.apple.com/ua/artist/alex-goroshko/1508207527" size="s" className="flex flex-row gap-3 items-center"><SiApplemusic className="w-6 h-6 desktop:w-7 desktop:h-7" /></Links> </li>
                <li><Links href="https://music.youtube.com/browse/UC5dZant-Sucog_ziaC-MUpg" size="s" className="flex flex-row gap-3 items-center"><ImYoutube className="w-6 h-6 desktop:w-7 desktop:h-7" /></Links></li>
                <li><Links href="https://alexgoroshko.bandcamp.com/" size="s" className="flex flex-row gap-3 items-center"><SiBandcamp className="w-6 h-6 desktop:w-7 desktop:h-7" /></Links></li>
                <li><Links href="https://www.instagram.com/alexgoroshko8/" size="s" className="flex flex-row gap-3 items-center"><SiInstagram className="w-6 h-6 desktop:w-7 desktop:h-7" /></Links></li>
            </ul>
        </header >
    )
}