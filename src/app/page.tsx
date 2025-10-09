'use client'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Benefits from '../components/Benefits';
import OutcomeMatrix from '../components/OutcomeMatrix';
import Proof from '../components/Proof';
import Deliverables from '../components/Deliverables';
import QuickStart from '../components/QuickStart';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Clients />
      <Problem />
      <Solution />
      <Deliverables />
      <Proof />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
