import react from "react";
import "../App.css";
function Footer(){
    return <>
    
     <footer className="footer">
    <div className="container">
      <div className="row">
       
        <div className="col-md-4">
          <h5>About Us</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio auctor, ullamcorper ante sed, viverra elit.</p>
        </div>

    
        <div className="col-md-4">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">About</a></li>
            <li><a href="#" className="text-white">Services</a></li>
            <li><a href="#" className="text-white">Contact</a></li>
          </ul>
        </div>

    
        <div className="col-md-4">
          <h5>Follow Us</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white">Facebook</a></li>
            <li><a href="#" className="text-white">Twitter</a></li>
            <li><a href="#" className="text-white">Instagram</a></li>
            <li><a href="#" className="text-white">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2025 Your Website. All rights reserved.</p>
     </div>
    </div>
  </footer>
  </>
}export default Footer;