import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Cases from '../components/Cases';
import IntroOverlay from '../components/IntroOverlay';

const tl = gsap.timeline();

const homeAnimation = (handleAnimationComplete) => {
	tl.from('.line span', 1.8, {
		y: 100,
		ease: 'power4.out',
		delay: 1,
		skewY: 7,
		stagger: {
			amount: 0.3
		}
	})
		.to('.overlay-top', 1.6, {
			height: 0,
			ease: 'expo.inOut',
			stagger: 0.4
		})
		.to('.overlay-bottom', 1.6, {
			width: 0,
			ease: 'expo.inOut',
			delay: -0.8,
			stagger: {
				amount: 0.4
			}
		})
		.from('.case-image img', 1.6, {
			scale: 1.4,
			ease: 'expo.inOut',
			delay: -2,
			stagger: {
				amount: 0.4
			},
			onComplete: handleAnimationComplete
		});
};

export default function Home() {
	const [isAnimationComplete, setIsAnimationComplete] = useState(false);

	const handleAnimationComplete = () => {
		setIsAnimationComplete(true);
	};

	useEffect(() => {
		homeAnimation(handleAnimationComplete);
	}, []);

	return (
		<>
			{!isAnimationComplete && <IntroOverlay />}
			<Banner />
			<Cases />
		</>
	);
}
