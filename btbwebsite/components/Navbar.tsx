import Link from 'next/link';
import Image from 'next/image';
import { InstagramLogo, TiktokLogo, List, X } from 'phosphor-react';
import { useState } from 'react';
import { companyData } from '@/utils/company-data';

export function Navbar() {
	const [navbar, setNavbar] = useState(false);

	const navList = (
		<ul className='flex flex-col md:flex-row text-light font-semibold gap-5'>
			<li>
				<Link href='/' className='p-2'>Home</Link>
			</li>
			<li>
				<Link href='/about' className='p-2'>About Us</Link>
			</li>
            <li>
				<Link href='/products' className='p-2'>Products</Link>
			</li>
			<li>
				<Link href='/contact' className='p-2'>Contact Us</Link>
			</li>
		</ul>
	);

	const socialIcons = (
		<ul className='flex flex-row justify-center gap-2 text-light'>
			<li>
				<Link href={companyData.socialMedia.instagram} target='__blank'>
					<InstagramLogo weight='fill' />
				</Link>
			</li>
			<li>
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
					navbar ? 'max-h-screen' : 'max-h-14'
				} bg-dark-600/50 p-4 rounded-md max-w-5xl mx-auto backdrop-blur-lg transition-all duration-500 ease-in-out overflow-hidden`}
			>
				<div className='flex flex-row justify-between'>
					<div className='flex flex-row gap-x-2'>
						<Link href='/'>
							<Image
							src={companyData.logos.logomark}
							alt='Beneath the Bark Logo'
							width={100}
							height={100}
							></Image>
						</Link>
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
					<div className='md:hidden flex flex-col'>
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