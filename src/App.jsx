import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './pages/About';
import Approach from './pages/Approach';
import CaseStudies from './pages/CaseStudies';
import Home from './pages/Home';
import Services from './pages/Services';
import './styles/App.scss';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/case-studies',
		name: 'CaseStudies',
		component: CaseStudies
	},
	{
		path: '/services',
		name: 'Services',
		component: Services
	},
	{
		path: '/approach',
		name: 'Approach',
		component: Approach
	},
	{
		path: '/about-us',
		name: 'About Us',
		component: About
	}
];

function debounce(fn, ms) {
	let timer;
	return () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			timer = null;
			fn.apply(this, arguments);
		}, ms);
	};
}

function App() {
	gsap.to('body', 0, {
		css: { visibility: 'visible' }
	});

	const [dimension, setDimension] = useState({
		height: window.innerHeight,
		width: window.innerWidth
	});

	useEffect(() => {
		let vh = dimension.height * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		const debouncedHandleResize = debounce(function handleResize() {
			setDimension({
				height: window.innerHeight,
				width: window.innerWidth
			});
		}, 1000);

		window.addEventListener('resize', debouncedHandleResize);
		return () => {
			window.removeEventListener('resize', debouncedHandleResize);
		};
	}, []);

	return (
		<>
			<Header />

			<div className='App'>
				{routes.map((route) => (
					<Route
						key={route.path}
						component={route.component}
						exact
						path={route.path}
					/>
				))}
			</div>
			<Navigation />
		</>
	);
}

export default App;
