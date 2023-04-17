import Head from "next/head";
import { SeoProps } from '@/utils/Props'

export default function HeadComponent({title, description}: SeoProps) {
    const defaultDescription = 
        'Custom wood furniture - LaSalle, Ontario';
    return (
        <Head>
            <meta charSet='utf-8' />
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta name='robots' content='index, follow' />
			<title>{title}</title>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='description' content={description || defaultDescription} />
			<meta name='keywords' content='Custom, Wood, Live, Edge, Furniture, Windsor' />
			<link rel='icon' href='/' />
        </Head>
    );
}
