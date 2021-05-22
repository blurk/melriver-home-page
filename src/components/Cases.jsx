import React from 'react';
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg';
import { ReactComponent as CasesNext } from '../assets/arrow-right.svg';

import curologyMin from '../assets/curology-min.png';
import yourspaceMin from '../assets/yourspace-min.png';
import luminMin from '../assets/lumin-min.png';

const caseStudies = [
	{
		id: 'case-1',
		subtitle: 'Curology',
		title: "A custom for your skin's unique needs",
		img: curologyMin
	},
	{
		id: 'case-2',
		subtitle: 'Yourspace',
		title: 'Open space floor plans for your next venture',
		img: yourspaceMin
	},
	{
		id: 'case-3',
		subtitle: 'Lumin',
		title: 'For your best look ever',
		img: luminMin
	}
];

export default function Cases() {
	return (
		<section className='cases'>
			<div className='container-fluid'>
				<div className='cases-navigation'>
					<div className='cases-arrow prev disabled'>
						<CasesPrev />
					</div>
					<div className='cases-arrow next'>
						<CasesNext />
					</div>
				</div>
				<div className='row'>
					{caseStudies.map((caseStudy) => (
						<div className='case' key={caseStudy.id}>
							<div className='case-details'>
								<span>{caseStudy.subtitle}</span>
								<h2>{caseStudy.title}</h2>
							</div>
							<div className='case-image'>
								<img src={caseStudy.img} alt={caseStudy.title} />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
