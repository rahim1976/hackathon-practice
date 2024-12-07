import Navbar from '@/components/Navbar';
import Header from '../components/Header';
import Hero from '@/components/Hero';
import Flash from '../components/Flash';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div>
     
      <Header/>
      <Navbar/>
      <Hero/>
      <Flash/>
      <Footer/>
    </div>
  );
};

export default Home;