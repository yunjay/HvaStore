import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';

import Router from 'next/router';
import NProgress from 'nprogress';

//Event Listeners for routing
Router.onRouteChangeStart=()=>{
    console.log('onRouteChangeStart Triggered');
    NProgress.start();
};
Router.onRouteChangeComplete=()=>{
    console.log('onRouteChangeComplete Triggered');
    NProgress.done();
};
Router.onRouteChangeError=()=>{
    console.log('onRouteChangeError Triggered');
    NProgress.done();
};

const Logo = styled.h1`
    font-size:3rem;
    margin-left:2rem;
    position:relative;
    z-index:2;
    transform: skew(-7deg);
    a {
        padding: 0.5rem 1rem;
        background: ${props=>props.theme.orange};
        color: white;
        text-transform: uppercase;
        text-decoration: none; 
    }
    @media(max-width:1302px){
        margin:0;
        text-align:center;
    }
`;
const StyledHeader = styled.header`
    .bar{
        border-bottom: 10px solid ${p=>p.theme.black};
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;
        @media (max-width: 1302px){
            grid-template-columns:1fr;
            justify-content:center;
        }
    }
    .sub-bar{
        display:grid;
        grid-template-columns:1fr auto;
        border-bottom:1px solid ${p=>p.theme.lightgrey};
    }

`;


const Header = ()=>(
    <StyledHeader>
        <div className="bar">
        <Logo>  
            <Link  href="/">
            <a>Hackuva Store</a>
            </Link>
        </Logo>
        <Nav/>
        </div>
        <div className="sub-bar">
            <p>검색</p>
        </div>
        <div>장바구니</div>
        
    </StyledHeader>
)

export default Header;