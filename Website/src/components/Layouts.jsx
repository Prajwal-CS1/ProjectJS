import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import StarsBackground from './StarsBackground';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-cosmic-primary to-cosmic-secondary text-white font-sans">
      <StarsBackground />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}