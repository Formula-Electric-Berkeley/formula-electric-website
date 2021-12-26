import React from 'react';
import $ from 'jquery';

import SiteNavbar from './SiteNavbar';
import '../css/Subteam.css';
import HeaderAboutUs from '../img/header-about.png';
import HeaderAboutUsMobile from '../img/mobile/header-about-mobile.png';


const subteamPage = () => {
	$(document).ready(function () {
		/* Check the location of each desired element */
		$('.fade-in').each(async function (i) {
			var top_of_object = $(this).offset().top;
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > top_of_object) {
				$(this).animate({ opacity: '1' }, 550);
			}
		});
		/* Every time the window is scrolled */
		$(window).scroll(async function () {
			/* Check the location of each desired element */
			$('.fade-in').each(function (i) {
				var top_of_object = $(this).offset().top;
				var bottom_of_window = $(window).scrollTop() + $(window).height();

				/* If the object is completely visible in the window, fade it it */
				if (bottom_of_window > top_of_object) {
					$(this).animate({ opacity: '1' }, 350);
				}
			});
		});
	});
	return (
		<div className="error-page">
			<SiteNavbar bg="#1c1c1c" />
			<img
				src={HeaderAboutUs}
				alt="header about us"
				className="header selectDisable large-screen"
				id="header"
			/>
			<img
				src={HeaderAboutUsMobile}
				alt="header about us"
				className="header selectDisable small-screen"
				id="header"
			/>
			<h1 style={{ color: '#fdb515', fontSize: '164px', zIndex: '3' }}>404</h1>
			<p style={{ color: '#4592db', fontSize: '24px', zIndex: '3' }}>
				Hi this is the subteam page template!
			</p>
		</div>
	);
};

export default subteamPage;