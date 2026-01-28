import React, { useState, useEffect } from 'react';
import { Ghost, Eye } from 'lucide-react';
import BackroomsView from './components/BackroomsView';
import StoryCard from './components/StoryCard';
import StoryReader from './components/StoryReader';
import AdSlot from './components/AdSlot';
import { STORIES_DATA } from './data/stories';

// --- Main App Component ---
export default function App() {
  const [activeId, setActiveId] = useState(null);
  const [sanityState, setSanityState] = useState(100);

  const activeStory = STORIES_DATA.find(s => s.id === activeId);

  useEffect(() => {
    const timer = setInterval(() => {
      setSanityState(s => Math.max(80, s - 0.01));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 3D View (Backrooms)
  if (activeStory?.is3D) {
    return <BackroomsView onExit={() => setActiveId(null)} />;
  }

  // Story Reader View
  if (activeStory && !activeStory.is3D) {
    return <StoryReader story={activeStory} onBack={() => setActiveId(null)} />;
  }

  // Gallery View (Home)
  return (
    <div className={`min-h-screen bg-[#050505] text-gray-300 font-serif selection:bg-red-900 selection:text-white transition-all duration-1000 ${sanityState < 90 ? 'animate-vibrate' : ''}`}>

      <nav className="fixed top-0 left-0 w-full bg-black/90 border-b border-red-900/30 backdrop-blur-md z-40 p-4 flex justify-between items-center px-8">
        <div className="flex items-center gap-3">
          <Ghost className="text-red-600 w-8 h-8 animate-pulse" />
          <h1 className="text-2xl font-black uppercase tracking-tighter text-red-600 font-header">The Void Archive</h1>
        </div>
        <div className="flex gap-6 text-sm uppercase tracking-widest text-gray-500 font-sans items-center">
          <a href="https://elo2026x.github.io/The_Victoria_Texas_Franchise/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 cursor-pointer transition-colors border-b border-transparent hover:border-red-600">FORENSICS</a>
          <a href="https://www.amazon.com/shop/elo2025x" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 cursor-pointer transition-colors border-b border-transparent hover:border-red-600">MARKETING</a>
          <a href="https://elo2026.gumroad.com/l/eircyr" target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold border border-red-900/50 px-3 py-1 hover:bg-red-900/20 hover:text-red-400 transition-all animate-pulse">
            Subscribe
          </a>
        </div>
      </nav>

      <main className="pt-24 pb-20 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-full mb-8">
            <h3 className="text-red-700 font-sans uppercase tracking-[0.4em] text-xs font-bold mb-4">Latest Classified Data</h3>
            <p className="text-gray-500 italic max-w-xl">"Reality is a thin layer of ice over a very deep, dark ocean. These stories are the cracks."</p>
          </div>

          {STORIES_DATA.map(story => (
            <StoryCard key={story.id} story={story} onClick={() => setActiveId(story.id)} />
          ))}

          <AdSlot className="col-span-full mt-12 mb-8" />
        </div>
      </main>

      <div className="fixed bottom-6 right-6 flex items-center gap-4 bg-black/80 border border-gray-800 p-3 backdrop-blur-sm">
        <div className="text-right">
          <p className="text-[10px] text-gray-600 font-sans uppercase font-bold">Local Reality Level</p>
          <p className="font-mono text-red-600 text-sm">{(sanityState).toFixed(4)}%</p>
        </div>
        <div className="w-12 h-12 rounded-full border-2 border-red-900 flex items-center justify-center relative">
          <div className="absolute inset-1 rounded-full border border-red-600 animate-ping opacity-20" />
          <Eye className="w-5 h-5 text-red-600" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes vibrate {
          0% { transform: translate(0,0); }
          25% { transform: translate(1px, -1px); }
          50% { transform: translate(-1px, 1px); }
          75% { transform: translate(1px, 1px); }
          100% { transform: translate(0,0); }
        }
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
            52% { opacity: 0.2; }
            54% { opacity: 0.9; }
        }
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
         @keyframes scale-in {
             from { transform: scale(0) translate(24px, -24px); opacity: 0; }
             to { transform: scale(1) translate(48px, -48px); opacity: 1; }
         }
        .animate-vibrate { animation: vibrate 0.1s infinite; }
        .animate-scan { animation: scan 3s linear infinite; }
        .animate-flicker { animation: flicker 4s infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}} />
    </div>
  );
}
