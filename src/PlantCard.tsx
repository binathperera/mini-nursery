// • Shows the plant name, scientific name, description
// • Displays badges for difficulty and rarity
// • Shows light level using icons (🌞⛅🌙)
// • Shows watering needs using icons (💧, 💧💧, 💧💧💧)
// • Contains two buttons: “View” and “Buy” (UI-only / disabled)
import React from 'react';
import { type Plant } from './types.ts';
import { Card, Badge, Button } from 'react-bootstrap';
interface PlantCardProps {
  plant: Plant;
}
const lightIcons: { [key: string]: string } = {
  'Bright': '🌞',
  'Medium': '⛅',
  'Low': '🌙'
};
const waterIcons: { [key: string]: string } = {
  'Low': '💧',
  'Moderate': '💧💧',
  'Frequent': '💧💧💧'
};
const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  return (
    <Card className="mb-3"> 
        <Card.Body>
            <Card.Title>{plant.name} <em>({plant.scientific})</em></Card.Title>
            <Card.Text>{plant.description}</Card.Text>
            <Badge bg="secondary" className="me-2">{plant.difficulty}</Badge>
            <Badge bg="info" className="me-2">{plant.rarity}</Badge>
            <div className="my-2">
                <span className="me-3">Light: {lightIcons[plant.light]} {plant.light}</span>
                <span>Water: {waterIcons[plant.water]} {plant.water}</span>
            </div>
            <Button variant="primary" className="me-2" disabled>View</Button>
            <Button variant="success" disabled>Buy</Button>
        </Card.Body>
    </Card>
  );
};

export default PlantCard;