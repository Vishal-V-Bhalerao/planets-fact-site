import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PlanetComponent } from './components/PlanetSection/PlanetSection';
import { ImageAlignment } from './types/sectionConfig';
import { text } from './res/text'
import { url } from './res/urls';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav-bar" >
          <div>
            <ul>
              <li>Universe</li>
              <li>Galaxies</li>
              <li>Solar system</li>
              <li>Earth</li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="starry-background">
        <PlanetComponent
          height='500'
          imageAlignment={ImageAlignment.left}
          mainImageHeight='300'
          mainImageWidth='400'
          mainHeading={text.MERCURY_HEADING}
          subHeading={text.MERCURY_SUBHEADING}
          imageSrc={url.MERCURY_URL}
        ></PlanetComponent>
        <PlanetComponent
          height='500'
          imageAlignment={ImageAlignment.right}
          mainImageHeight='450'
          mainImageWidth='550'
          mainHeading={text.VENUS_HEADING}
          subHeading={text.VENUS_SUBHEADING}
          imageSrc={url.VENUS_URL}
        ></PlanetComponent>
        <PlanetComponent
          height='500'
          imageAlignment={ImageAlignment.left}
          mainImageHeight='500'
          mainImageWidth='600'
          mainHeading={text.EARTH_HEADING}
          subHeading={text.EARTH_SUBHEADING}
          imageSrc={url.EARTH_URL}
        ></PlanetComponent>
        <PlanetComponent
          height='500'
          imageAlignment={ImageAlignment.right}
          mainImageHeight='450'
          mainImageWidth='550'
          mainHeading={text.MARS_HEADING}
          subHeading={text.MARS_SUBHEADING}
          imageSrc={url.MARS_URL}
        ></PlanetComponent>
        <PlanetComponent
          height='500'
          imageAlignment={ImageAlignment.left}
          mainImageHeight='850'
          mainImageWidth='1000'
          mainHeading={text.JUPITER_HEADING}
          subHeading={text.JUPITER_SUBHEADING}
          imageSrc={url.JUPITER_URL}
        ></PlanetComponent>
        <PlanetComponent
          height='500'
          imageAlignment={ImageAlignment.right}
          mainImageHeight='850'
          mainImageWidth='1000'
          mainHeading={text.SATURN_HEADING}
          subHeading={text.SATURN_SUBHEADING}
          imageSrc={url.SATURN_URL}
        ></PlanetComponent>
        <PlanetComponent
          height='500'
          imageAlignment={ImageAlignment.left}
          mainImageHeight='650'
          mainImageWidth='800'
          mainHeading={text.URANUS_HEADING}
          subHeading={text.URANUS_SUBHEADING}
          imageSrc={url.URANUS_URL}
        ></PlanetComponent>
        <PlanetComponent
          height='500'
          imageAlignment={ImageAlignment.right}
          mainImageHeight='650'
          mainImageWidth='800'
          mainHeading={text.NEPTUNE_HEADING}
          subHeading={text.NEPTUNE_SUBHEADING}
          imageSrc={url.NEPTUNE_URL}
        ></PlanetComponent>
        <div className="twinkling" ></div>
      </div>
    </div >
  );
}

export default App;
