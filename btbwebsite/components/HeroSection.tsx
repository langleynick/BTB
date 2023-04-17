import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

export function HeroSection() {
    return (
        <section className='flex flex-col relative min-h-[75vh] text-left p-20'>
            <div className='absolute w-full h-full top-0 right-0 z-20'>
                <div className='absolute inset-0 w-full h-2/5 mt-auto z-10 bg-gradient-to-t from-dark-500 to-transparent' />
                <Image
                    src='/hero-banner.jpeg'
                    alt='Nature Image'
                    fill
                    className='w-full object-cover'
                />
            </div>
            <div className='grid grid-cols-1 gap-5 max-w-[70ch] z-40 mt-64 p-10 rounded-xl bg-dark-500 bg-opacity-70'>
				<h1 className='text-white font-bold text-4xl md:text-6xl'>
					Beneath The Bark
				</h1>
                <h2 className='text-white font-bold text-2xl md:text-4xl'>
                    Custom Woodworking
                </h2>
				<p className='text-light text-sm md:text-xl max-w-[52ch]'>
					Intro text here.
				</p>
				<div className='flex flex-row text-center items-center gap-2'>
					<Button variant='primary-base' href='/contact'>
						Contact Us
					</Button>
					<Button variant='secondary-sm' href='/products'>
						Our Products
					</Button>
				</div>
			</div>
        </section>
    )
}