import Link from 'next/link';
import NavStyles from './styles/NavStyles';


const Nav = () => (
    <NavStyles>
    <Link href='/items'>    
    <a>구매</a>
    </Link>        
    <Link href='/sell'>     
    <a>판매</a>
    </Link>
    <Link href='/signup'>   
    <a>회원가입</a>
    </Link>
    <Link href='/orders'>   
    <a>주문</a>
    </Link>
    <Link href='/me'>       
    <a>내 정보</a>
    </Link>
    </NavStyles>
    
)

export default Nav;