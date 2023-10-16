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
        <header className="absolute left-1/2 translate-x-[-50%] flex flex-row justify-between w-full px-5 py-2 items-center  mobile:w-[480px] mobile:mx-auto tablet:w-[640px] tablet:px-8 tablet:py-4  desktop:w-[1280px] desktop:px-14">
            <Image src={Logo} alt="logo" className="w-10 h-10" />
            <Sheet>
                <SheetTrigger className="laptop:hidden ">
                    <RxHamburgerMenu className='h-8 w-8' />
                </SheetTrigger>
                <SheetContent className="bg-backgroundBurger overflow-y-scroll">
                    <ul className="flex flex-col items-center gap-6 pt-20  ">
                        <li ><SheetClose ><Links href="https://open.spotify.com/artist/1IHidn13htJrgxUiBgke5F" size="s" className="flex flex-row gap-3 items-center text-burgerLinkColor"> <SiSpotify /><span>Spotify</span></Links> </SheetClose></li>
                        <li><SheetClose ><Links href="https://music.apple.com/ua/artist/alex-goroshko/1508207527" size="s" className="flex flex-row gap-3 items-center text-burgerLinkColor"><SiApplemusic /><span>Apple Music</span></Links> </SheetClose></li>
                        <li><SheetClose ><Links href="https://www.amazon.com/s?k=Alex+Goroshko&i=digital-music&qid=1641898959&search-type=ss&ref=sr_pg_2" size="s" className="flex flex-row gap-3 items-center text-burgerLinkColor"><ImAmazon /><span>Amazon</span></Links> </SheetClose></li>
                        <li><SheetClose ><Links href="https://music.youtube.com/browse/UC5dZant-Sucog_ziaC-MUpg" size="s" className="flex flex-row gap-3 items-center text-burgerLinkColor"><ImYoutube /><span>Youtube</span> </Links></SheetClose></li>
                        <li><SheetClose ><Links href="https://alexgoroshko.bandcamp.com/" size="s" className="flex flex-row gap-3 items-center text-burgerLinkColor"><SiBandcamp /><span>Bandcamp</span> </Links></SheetClose></li>
                        <li><SheetClose ><Links href="https://www.instagram.com/alexgoroshko8/" size="s" className="flex flex-row gap-3 items-center text-burgerLinkColor"><SiInstagram /><span>Instagram</span> </Links></SheetClose></li>
                        <li><SheetClose ><Links href="https://www.facebook.com/alexander.goroshko.OR/" size="s" className="flex flex-row gap-3 items-center text-burgerLinkColor"><SiFacebook /><span>Facebook</span> </Links></SheetClose></li>
                    </ul>
                </SheetContent>
            </Sheet>

        </header >
    )
}