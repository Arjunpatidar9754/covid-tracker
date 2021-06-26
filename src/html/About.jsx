import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Team.css';
import logo from './images/arjun.jpg';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Twitter } from '@material-ui/icons';

const About = () =>{

	return(
			<>
			<div className="team-boxed">
		        <div className="container">
		            <div className="intro">
		                <h2 className="text-center">Team </h2>
		                <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
		            </div>
		            <div className="row people">
		                <div className="col-md-6 col-lg-4 item">
		                    <div className="box"><img className="rounded-circle" src={logo} alt="logo" />
		                        <h3 className="name">Ben Johnson</h3>
		                        <p className="title">Musician</p>
		                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
		                        <div className="teamSocial">
		                        	<span><FacebookIcon /></span>
		                        	<span><Twitter /></span>
		                        	<span><InstagramIcon /></span>
		                        </div>
		                    </div>
		                </div>
		                <div className="col-md-6 col-lg-4 item">
		                    <div className="box"><img className="rounded-circle" src={logo} alt="logo" />
		                        <h3 className="name">Emily Clark</h3>
		                        <p className="title">Artist</p>
		                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
		                        <div className="teamSocial">
		                        	<span><FacebookIcon /></span>
		                        	<span><Twitter /></span>
		                        	<span><InstagramIcon /></span>
		                        </div>
		                    </div>
		                </div>
		                <div className="col-md-6 col-lg-4 item">
		                    <div className="box"><img className="rounded-circle" src={logo} alt="logo" />
		                        <h3 className="name">Carl Kent</h3>
		                        <p className="title">Stylist</p>
		                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
		                        <div className="teamSocial">
		                        	<span><FacebookIcon /></span>
		                        	<span><Twitter /></span>
		                        	<span><InstagramIcon /></span>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
			</>
		);
}

export default About;