import { Footer, Navbar } from '../components';
import { About, Explore, GetStarted, Hero, Insights } from '../sections';

const Page = () => (
  <div className="bg-primary-white overflow-hidden">
    <Navbar />
    <Hero />
    <div className="black-background overflow-hidden" style={{ 'background-color': '#131313' }}>
      <div className="relative">
        <GetStarted />
      </div>
      <div className="relative mt-24">
        <Explore />
      </div>
      <div className="relative">
        <Insights />
      </div>
      <About />
      <Footer />
    </div>
  </div>
);

export default Page;
