import Link from 'next/link';
import Image from 'next/image';
import { InstagramLogo, TiktokLogo, List, X } from 'phosphor-react';
import { useState } from 'react';
import { companyData } from '@/utils/company-data';

export function Navbar() {
	const [navbar, setNavbar] = useState(false);

	const navList = (
		<ul className='flex flex-col md:flex-row text-light font-semibold gap-5'>
			<li className='text-lg hover:opacity-80'>
				<Link href='/' className='p-2'>Home</Link>
			</li>
			<li className='text-lg hover:opacity-80'>
				<Link href='/about' className='p-2'>About Us</Link>
			</li>
            <li className='text-lg hover:opacity-80'>
				<Link href='/ourwork' className='p-2'>Our Work</Link>
			</li>
			<li className='text-lg hover:opacity-80'>
				<Link href='/contact' className='p-2'>Contact Us</Link>
			</li>
		</ul>
	);

	const socialIcons = (
		<ul className='flex flex-row justify-center gap-3 text-light'>
			<li className='text-3xl hover:opacity-80'>
				<Link href={companyData.socialMedia.instagram} target='__blank'>
					<InstagramLogo weight='fill' />
				</Link>
			</li>
			<li className='text-3xl hover:opacity-80'>
				<Link href={companyData.socialMedia.tikTok} target='__blank'>
					<TiktokLogo weight='fill' />
				</Link>
			</li>
		</ul>
	);

	return (
		<header className='p-4 flex-[0.25] fixed top-0 z-50 w-screen'>
			<nav
				className={`${
					navbar ? 'max-h-screen' : 'max-h-16'
				} bg-dark-600/60 p-5 rounded-md max-w-5xl mx-auto backdrop-blur-sm transition-all duration-500 ease-in-out`}
			>
				<div className='flex flex-row justify-between'>
					<div className='flex flex-row text-light gap-x-2'>
						logo
					</div>
					<div className='md:hidden text-light text-2xl'>
						<button onClick={() => setNavbar(!navbar)}>
							<span className='sr-only'>Menu</span>
							{navbar ? <X weight='bold' /> : <List weight='fill' />}
						</button>
					</div>
					<div className='hidden md:flex flex-row text-sm'>
						{navList}
						<div className='ml-8 text-2xl'>{socialIcons}</div>
					</div>
				</div>
				{navbar ? (
					<div className='md:hidden flex flex-col pt-4'>
						{navList}
						<div className='flex flex-col justify-between gap-4 items-stretch text-center w-1/3 text-4xl m-auto'>
							{socialIcons}
						</div>
					</div>
				) : null}
			</nav>
		</header>
	);
}