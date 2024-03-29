import Link from 'next/link';
import Image from 'next/image';
import { InstagramLogo, TiktokLogo} from 'phosphor-react';
import { companyData } from '@/utils/company-data';

export function Footer() {
	return (
		<footer className=' bg-dark-600'>
			<hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-accent to-transparent opacity-25 dark:opacity-100" />
			<div className='w-full p-4 py-6 lg:py-8'>
				<div className='lg:flex lg:justify-evenly gap-2'>
					<div className='flex flex-row items-center h-1/4 gap-x-4 mb-10'>
						<Link href='/'>
							<Image
							src={companyData.logos.watermark}
							alt='Beneath the Bark Logo'
							width={50}
							height={50}
							></Image>
						</Link>
						<span className='text-sm text-light'>
							&copy; 2023 All Rights Reserved.
						</span>
					</div>
					<div className='grid grid-cols-2'>
						<div className='text-light mr-8'>
							<ul className='space-y-3'>
                                <li className='hover:opacity-80'>
                                    <Link href='/'>Home</Link>
                                </li>
                                <li className='hover:opacity-80'>
                                    <Link href='/about'>About Us</Link>
                                </li>
                                <li className='hover:opacity-80'>
                                    <Link href='/ourwork'>Our Work</Link>
                                </li>
                                <li className='hover:opacity-80'>
                                    <Link href='/contact'>Contact Us</Link>
                                </li>
							</ul>
						</div>
						<div className='text-light'>
							<h2 className='mb-3 uppercase font-bold'>Follow Us</h2>
							<ul className='flex flex-row gap-2 text-2xl'>
								<li className='hover:opacity-80'>
									<Link href={companyData.socialMedia.instagram} target='__blank'>
										<InstagramLogo weight='fill' />
									</Link>
								</li>
								<li className='hover:opacity-80'>
									<Link href={companyData.socialMedia.tikTok} target='__blank'>
										<TiktokLogo weight='fill' />
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}