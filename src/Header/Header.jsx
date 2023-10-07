import BreakingNews from '../Home/BreakingNews';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className=''>
            <div className='text-center'>
                <img className='mx-auto' src={logo} alt="" />
                <p className=' text-2xl'>Journalism Without Fear or Favour</p>
                <p className='text-3xl'>{moment().format("dddd, MMMM D, YYYY")}</p>


            </div>
            <BreakingNews></BreakingNews>
        </div>

    );
};

export default Header;