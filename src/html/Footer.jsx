import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { WhatsApp, Twitter } from '@material-ui/icons';
import {Link} from 'react-router-dom';


const Footer = () =>{
	return(
		<>
		    <div className="footer">
		        <div className="container">
		            <div className="row">
		                <div className="col-md-4">
		                    <div className="footer-col">
		                        <h4>About Us</h4>
		                        <p>We're passionate about creating the best react applications for personal development</p>
		                    </div>
		                </div>
		                <div className="col-md-4">
		                    <div className="footer-col middle">
		                        <h4>Important Links</h4>
		                        <ul className="list-unstyled li-space-lg">
		                            <li className="media">
		                                <i className="fas fa-square"></i>
		                                <div className="media-body">Our project partners <a className="turquoise" href="#your-link">ourTeam</a></div>
		                            </li>
		                            <li className="media">
		                                <i className="fas fa-square"></i>
		                                <div className="media-body">Read our <a className="turquoise" href="terms-conditions.html">Terms & Conditions</a>, <a className="turquoise" href="privacy-policy.html">Privacy Policy</a></div>
		                            </li>
		                        </ul>
		                    </div>
		                </div>
		                <div className="col-md-4">
		                    <div className="footer-col last">
		                        <h4>Social Media</h4>
		                        
			                      <span className="myIconDiv">
			                      	<a href="#your-link">
			                         	<i className="myIcon"><FacebookIcon /></i>
			                        </a>
			                      </span>
			                      <span className="myIconDiv">
			                        <a href="#your-link">
			                          <span className="myIcon"><Twitter /></span>
			                        </a>
			                      </span>
			                      <span className="myIconDiv">
			                        <a href="#your-link">
			                          <span className="myIcon"><InstagramIcon /></span>
			                        </a>
			                      </span>
			                      <span className="myIconDiv">
			                        <a href="#your-link">
			                        	<span className="myIcon"><LinkedInIcon /></span>   
			                        </a>
			                      </span>
			                      <span className="myIconDiv">
			                        <a href="#your-link">
			                          <span className="myIcon"><WhatsApp /></span>
			                        </a>
			                     </span>
		                    </div> 
		                </div>
		            </div>
		        </div>
		    </div> 
		    


		    
		    <div className="copyright">
		        <div className="container">
		            <div className="row">
		                <div className="col-lg-12">
		                    <p className="p-small">Copyright© ArjTechnologies by <Link href="#">Arjun</Link></p>
		                </div>
		            </div> 
		        </div> 
		    </div>  
		    
		    
		</>
		);
}

export default Footer;