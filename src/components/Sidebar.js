import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';

//import component
import CartItem from '../components/CartItem';
//import sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
//import cart context
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
    const { clearCart } = useContext(CartContext);
    const { isOpen, handleClose } = useContext(SidebarContext);
    const { cart } = useContext(CartContext);
    console.log(cart);
    return (
        <div
            className={`${
                isOpen ? 'right-0' : '-right-full'
            } w-full bg-white fixed top-0 h-full  shadow-2xl md:w-[35vw] xl:max-w[30vw] transition-all duration-300 z-20  px-4 lg:px-[35px]`}
        >
            <div className="flex items-center justify-between py-6 border-b ">
                <div className="font-sans uppercase text-base font-semibold">Giỏ hàng</div>
                <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center">
                    <IoMdArrowForward className="text-2xl" />
                </div>
            </div>

            <div>
                {/* {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))} */}
                {cart.length > 0 ? (
                    cart.map((item) => <CartItem key={item.id} item={item} />)
                ) : (
                    <div className="font-sans text-base font-semibold uppercase mt-10"> Chưa có sản phẩm</div>
                )}
            </div>

            <div className="flex flex-col gap-y-4 py-4 mt-4">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <span>Total</span>
                    </div>
                    <div
                        onClick={clearCart}
                        className="cursor-pointer pu-4 bg-red-500 h-12 w-12 text-white flex justify-center items-center"
                    >
                        <FiTrash2 />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
