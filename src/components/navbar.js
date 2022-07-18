import "./navbar.css";

const Navbar = () => {

    return (
      
        <>
      
            <header>
                
                <h1 id="logo">COL'CACCHIO</h1>
                
                <nav>
                    
                    <ul>
                        
                        <li><a href="#">Home</a></li>
                        
                        <li><a href="#">MENU</a></li>
                        
                        <li><a href="#">RESTATURANTS</a></li>
                        
                        <li><a href="#">PROMOTIONS</a></li>
                        
                        <li><a href="#">FRANCHISE</a></li>

                        <li><a href="#">OPPORTUNITIES</a></li>
                        
                        <li><a href="#">Contact</a></li>
                        
                    </ul>
                    
                </nav>

                <div className = " socialMediaLinks">
                        
                    <i className="fab fa-facebook-f icon"></i>

                    <i className="fab fa-instagram icon"></i>

                    <i className="fab fa-twitter icon"></i>

                </div>
                
            </header>
            
        </>
        
    )
    
}

export default Navbar
