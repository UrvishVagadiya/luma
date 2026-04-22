import Navbar from './components/Navbar';
import Hero from './components/Hero';

const page = () => {
  return (
    <div className="min-h-screen bg-linear-to-r from-grad-from via-grad-via via-20% to-grad-to">
      <Navbar />
      <Hero />
    </div>
  );
};

export default page;
