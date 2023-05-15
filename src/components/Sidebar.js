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
    const { cart, clearCart, total } = useContext(CartContext);
    const { isOpen, handleClose } = useContext(SidebarContext);
    return (
        <div
            className={`${
                isOpen ? 'right-0' : '-right-full'
            } w-full bg-white px-4 fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20  px -4 lg:px-[35px]`}
        >
            <div className="flex items-center justify-between py-6 border-b ">
                <div className="font-sans uppercase text-base font-semibold">Giỏ hàng</div>
                <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center">
                    <IoMdArrowForward className="text-2xl" />
                </div>
            </div>

            <div className=" flex flex-col px-4 gap-y-2 h-[520px] lg:h-[520px] overflow-y-auto overflow-x-hidden border-b">
                {cart.length > 0 ? (
                    cart.map((item) => <CartItem key={item.id} item={item} />)
                ) : (
                    <div className="flex items-center justify-center  font-sans text-base font-semibold uppercase mt-10">
                        Chưa có sản phẩm
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-y-3 py-4 mt-4">
                <div className="flex items-center justify-between w-full">
                    <div className="uppercase font-semibold">
                        <span className="mr-2 ">Total: </span> ${parseFloat(total).toFixed(2)}
                    </div>
                    <div
                        onClick={clearCart}
                        className="cursor-pointer py-4 bg-red-500 h-12 w-12 text-white flex justify-center items-center"
                    >
                        <FiTrash2 />
                    </div>
                </div>
                <Link className="bg-gray-200 p-4 flex justify-center items-center text-primary w-full font-medium">
                    View Cart
                </Link>
                <Link className="bg-primary p-4 flex justify-center items-center text-white w-full font-medium">
                    Checkout
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
