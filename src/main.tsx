import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.tsx'
import { type Plant } from './types.ts'

// 1. Create an array containing at least 3 plant objects using the Plant type.
// 2. Pass this array to the <App /> component via props.
// 3. Apply the bootstrap CSS import correctly
const plants: Plant[] = [
  {
    id: 1,
    name: 'Snake Plant',
    scientific: 'Sansevieria trifasciata',
    difficulty: 'Easy',
    light: 'Low',
    water: 'Low',
    rarity: 'Common',
    description: 'A hardy plant that can tolerate low light and infrequent watering.',
  },
  {
    id: 2,
    name: 'Fiddle Leaf Fig',
    scientific: 'Ficus lyrata',
    difficulty: 'Medium',
    light: 'Bright',
    water: 'Moderate',
    rarity: 'Uncommon',
    description: 'A popular indoor plant known for its large, violin-shaped leaves.',
  },
  {
    id: 3,
    name: 'Orchid',
    scientific: 'Orchidaceae',
    difficulty: 'Hard',
    light: 'Medium',
    water: 'Frequent',
    rarity: 'Rare',
    description: 'A delicate plant that requires specific care and conditions to thrive.',
  },
];


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App plants={plants} />
  </StrictMode>,
)
