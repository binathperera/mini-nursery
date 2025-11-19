// • Accepts props: plants, selectedId, and a function onSelect
// • Displays plants inside a Bootstrap list group
// • Shows name, scientific name, difficulty badge, rarity badge
// • Highlights the selected plant (use .active class)
// • Makes the list items clickable (cursor: pointer)
import React from 'react';
import { type Plant } from './types.ts';
import { ListGroup, Badge } from 'react-bootstrap';
interface PlantListProps {
  plants: Plant[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}
const PlantList: React.FC<PlantListProps> = ({ plants, selectedId, onSelect }) => {
  return (
    <ListGroup>
        {plants.map((plant) => (
            <ListGroup.Item
                key={plant.id}
                active={plant.id === selectedId}
                onClick={() => onSelect(plant.id)}
                style={{ cursor: 'pointer' }}
            >
                {plant.name} <em>({plant.scientific})</em>
                <Badge bg="secondary" className="ms-2">{plant.difficulty}</Badge>
                <Badge bg="info" className="ms-2">{plant.rarity}</Badge>
            </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default PlantList;   