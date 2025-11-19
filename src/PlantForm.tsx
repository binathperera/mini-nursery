// • Input for plant name (disabled)
// • Input for scientific name (disabled)
// • Select dropdown for difficulty, light, water (disabled)
// • Textarea for description (disabled)
// • “Add Plant” and “Clear” buttons (disabled)
import React from 'react';
import './PlantForm.css';
import { Row,Col } from 'react-bootstrap';
import './PlantForm.css'
const PlantForm: React.FC = () => {
    return (
        <div>
            
            <form>
                <p>Add New Plant (UI-only)</p>
                <Row>
                    <Col xs={12} md={6}>
                    <input type="text" className="form-control" id="plantName" placeholder='Plant name' disabled/>
                    </Col>
                    <Col xs={12} md={6}>
                    <input type="text" className="form-control" id="scientificName" placeholder='Scientific name' disabled/>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={12} md={4}>
                        <div className="mb-3">
                            <select className="form-select" id="difficulty" disabled>
                                <option selected disabled>Difficulty</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="mb-3">
                            <div className="mb-3">
                                <select className="form-select" id="light" disabled>
                                    <option selected disabled>Light</option>
                                    <option>Bright</option>
                                    <option>Medium</option>
                                    <option>Low</option>
                                </select>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="mb-3">
                            <select className="form-select" id="water" disabled>
                                <option selected disabled>Water</option>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>
                    </Col>  
                </Row>
                <textarea className="form-control mb-3" id="description" placeholder="Short description" rows={3} disabled></textarea>
                <button type="submit" className="btn btn-primary me-2" disabled>Add Plant</button>
                <button type="reset" className="btn btn-secondary" disabled>Clear</button>
            </form>
        </div>
    );
};

export default PlantForm;