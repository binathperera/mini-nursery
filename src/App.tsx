// • Receive plants as props
// • Display a search input (UI-only)
// • Render PlantList in a left column
// • Render PlantForm + a featured PlantCard in the right column
// • Use Bootstrap grid (row, col-md-4, col-md-8)
import './App.css'
import { useState } from 'react'
import PlantList from './PlantList.tsx'
import { type Plant } from './types.ts'
import PlantForm from './PlantForm.tsx'
import PlantCard from './PlantCard.tsx'
interface AppProps {
  plants: Plant[]; 
}
function App(props: AppProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <>
      <h1>Mini Indoor Plant Nursery</h1>
      <div className="row">
        <div className="col-md-4">
          {/* Search input (UI-only) */}
          <input type="text" className="form-control mb-3" placeholder="Search plants (UI-only)" />
          <PlantList
            plants={props.plants}
            selectedId={selectedId}
            onSelect={(id) => setSelectedId(id)}
          />
          {/* Reset selection  */}
          <button className="btn btn-secondary mt-3" onClick={() => setSelectedId(null)}>Reset Selection (UI-only)</button>
        </div>
        <div className="col-md-8">
          <PlantForm />
          <PlantCard plant={props.plants[(selectedId ?? 1)-1]} />

        </div>
      </div>
    </>
  )
}

export default App
