
import './App.css'
import ChromaGrid from './component/ChromaGrid'

const items = [
  {
    image: '/Cat.jpg',
    title: 'Cute Paws',
    subtitle: 'Little paws, endless cuteness',
    accent: '#ffd23f'
  },
  {
    image: '/beach.jpg',
    title: 'Ocean Bliss',
    subtitle: 'Where the waves meet the shore and peace fills the soul',
    accent: '#3fb8ff',
    
  },
  {
    image: '/Beautiful.jpg',
    title: 'Nature Magic',
    subtitle: 'A little sunshine,sparkling raindrops, and endless natural beauty',
    accent: '#73BDEB',
    
  },
  {
    image: '/fashion.jpg',
    title: 'Style diary',
    subtitle: 'Fashion & Lifestyle',
    accent: '#E6A6B9',
    
  },
  {
    image: '/bird.jpg',
    title: 'Wings of Freedom',
    subtitle: 'Let your dreams take flight and your spirit soar beyond the sky',
    accent: '#8BC6A5',
    
  },
  {
    image: '/sunset.jpg',
    title: 'Sunset Serenity',
    subtitle: 'Painting the sky with golden dreams and beautiful ending',
    accent: '#3fb8ff',
    
  }
];

function App() {
  

  return (
    <>
<ChromaGrid items={items} columns={3} radius={260}
    reveal="spotlight"
    
    minCardWidth={180}
    gap={12}
    
    aspectRatio="3 / 2"
    cardRadius={22}
    showInfo
    frame={false}
    softness={0.6}
    damping={0.45}
    fadeOut={0.6}
    grayscale={1}
    dim={0.12}
    glow={0.5}
    borderGlow={1}
/>
      
    </>
  )
}

export default App
