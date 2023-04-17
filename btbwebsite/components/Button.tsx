import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';

const buttonStyle = cva('rounded flex-row items-center justify-evenly', {
	variants: {
		variant: {
			'primary-base': 'bg-accent text-light text-lg py-3 px-4',
			'primary-sm': 'bg-accent text-light text-sm py-1 px-3',
			'secondary-base': 'bg-dark-600 text-white text-lg py-2 px-4',
			'secondary-sm': 'bg-dark-600 text-white text-sm py-1 px-2',
		},
	},
});

interface ButtonProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
		VariantProps<typeof buttonStyle> {
	children: React.ReactNode;
	variant: 'primary-base' | 'secondary-base' | 'primary-sm' | 'secondary-sm';
	icon?: React.ReactNode;
	href: string;
}

export default function Button({
	children,
	variant,
	icon,
	href,
	...props
}: ButtonProps) {
	return (
		<Link href={href} {...props} className={buttonStyle({ variant })}>
			{icon && icon}
			<span>{children}</span>
		</Link>
	);
}