import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../../../public/logo.jpg';
import Image from "next/image";


export default function Header(): JSX.Element {
    return (
        <header className="relative flex flex-row justify-between px-5 py-2 items-center mobile:w-[480px] mobile:mx-auto tablet:w-[640px] tablet:px-8 tablet:py-4  desktop:w-[1280px] desktop:px-14">
            <Image src={Logo} alt="logo" className="w-10 h-10" />
            <Sheet>
                <SheetTrigger className="laptop:hidden ">
                    <RxHamburgerMenu className='h-8 w-8' />
                </SheetTrigger>
                <SheetContent className="bg-backgroundBurger overflow-y-scroll">
                </SheetContent>
            </Sheet>

        </header >
    )
}