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
	const [dimensions, setdimensions] = useState({
		height: window.innerHeight,
		width: window.innerWidth
	});

	useEffect(() => {
		gsap.to('body', 0, {
			css: { visibility: 'visible' }
		});

		const debouncedHandleResize = debounce(function handleResize() {
			setdimensions({
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
			<Header dimensions={dimensions} />

			<div className='App'>
				{routes.map(({ path, component: Component }) => (
					<Route key={path} exact path={path}>
						<Component dimensions={dimensions} />
					</Route>
				))}
			</div>
			<Navigation />
		</>
	);
}

export default App;
