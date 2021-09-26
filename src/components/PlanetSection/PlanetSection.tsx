import React from 'react';
import './PlanetSection.css'
import { sectionConfig, ImageAlignment } from '../../types/sectionConfig';
export function PlanetComponent(props: sectionConfig) {
    const imageDirection = props.imageAlignment === ImageAlignment.right ? 'row-reverse' : 'row'
    return (
        <div style={{ height: props.height, flexDirection: imageDirection }} className="heading-section" >
            <div style={{
                height: props.mainImageHeight + 'px',
                width: props.mainImageWidth + 'px',
                backgroundImage: ' url(' + props.imageSrc + ')'
            }} className="earth-container" ></div>
            <div className="heading" >
                <h1> {props.mainHeading} </h1>
                <p> {props.subHeading} </p>
            </div>
        </div>
    )
}