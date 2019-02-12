import Nav from './Nav';

const Header = ()=>(
    <div>
        <div className="bar">
            <a href="">Hva Store</a>
            <Nav/>
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <div>
            <div>Cart</div>
        </div>
    </div>
)

export default Header;