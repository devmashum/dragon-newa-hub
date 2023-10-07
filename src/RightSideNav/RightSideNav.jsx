import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../assets/qZone1.png'
import qZone2 from '../assets/qZone2.png'
import qZone3 from '../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>

            <div className="border p-4 space-y-3 mb-6">
                <div><h2 className=" text-3xl">Login With</h2></div>
                <button className='btn bt-outline w-full'>
                    <FaGoogle></FaGoogle> Google
                </button>
                <button className='btn bt-outline w-full'>
                    <FaGithub></FaGithub> Github
                </button>




            </div>



            <div className="border p-4 space-y-3 mb-6">
                <div><h2 className=" text-3xl">Find Us On</h2></div>
                <a className='p-4 flex justify-start items-center gap-2 border rounded-t-lg' href="">
                    <FaFacebook className='text-2xl'></FaFacebook>
                    <span className='text-2xl'>Facebook</span>
                </a>
                <a className='p-4 flex justify-start items-center gap-2 border' href="">
                    <FaTwitter className='text-2xl'></FaTwitter>
                    <span className='text-2xl'>Twitter</span>
                </a>
                <a className='p-4 flex justify-start items-center gap-2 border rounded-b-lg' href="">
                    <FaInstagram className='text-2xl'></FaInstagram>
                    <span className='text-2xl'>Instagram</span>
                </a>

            </div>
            <div className="border p-4 space-y-3 mb-6">
                <div><h2 className=" text-3xl">Q-Zone</h2></div>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />


            </div>


        </div>
        // 



    );
};

export default RightSideNav;