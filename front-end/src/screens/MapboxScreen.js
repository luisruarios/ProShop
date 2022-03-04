import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoibHVpc3J1YXJpb3MiLCJhIjoiY2wwYmVrcjZuMG05MTNtcGt1NHhtaTZ2bSJ9.fpvmQUOZDbpBkqJOOcS3Vg'


const MapboxScreen = () => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);



    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/luisruarios/cl0bes8mf003z14pf60wnrzra',
            center: [lng, lat],
            zoom: zoom

            
        });
    });


    return (
        <div>
            <Row>
                <Col md={10}>
                    Testing
                    <div>
                        <div ref={mapContainer} className="map-container" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MapboxScreen
