import Layout from '@/components/Layout';
import Image from 'next/image';
import Button from '@/components/Button';
import { HeroSection } from '@/components/HeroSection';

export default function Home() {
  return (
    <Layout
    title='Home - BTB'
    description='Custom wood furniture - LaSalle, Ontario'>
      <HeroSection></HeroSection>
    </Layout>
  )
}
