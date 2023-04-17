import HeadComponent from '@/components/Head';
import { Navbar } from '@/components/Navbar';
import { LayoutProps } from '@/utils/Props';
import { Footer } from '@/components/Footer';

export default function Layout({ children, title, description}: LayoutProps) {
    return (
        <>
            <HeadComponent title={title} description={description} />
            <Navbar />
            <main className='min-h-screen'>
                {children}
            </main>
            <Footer />
        </>
    )
}