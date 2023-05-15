import { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import Logo from '../img/logo.svg';

import { CartContext } from '../contexts/CartContext';

import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const [isActive, setIsActive] = useState(true);
    const { itemAmount } = useContext(CartContext);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    });
    return (
        <header
            className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6 '} fixed w-full z-10 transition-all`}
        >
            <div className="container flex mx-auto items-center justify-between h-full">
                <Link to={'/'}>
                    <div className="flex items-center justify-center">
                        <img className="w-[40px]" src={Logo} alt="" />
                        <span className="font-semibold ml-2 text-xl ">Alex T</span>
                    </div>
                </Link>
                <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative ">
                    <BsBag className="text-2xl" />
                    <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                        {itemAmount}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
