import React from 'react';
import Nav from './Nav';
import Films from './Films';
import People from './People';
import Species from './Species';
import Starships from './Starships';
import Vehicles from './Vehicles';


function HomePage() {
    return(
        <div className="HomePage">
            <Nav />
            <Films />
            <People />
            <Species />
            <Starships />
            <Vehicles />

        </div>
    )
}
export default HomePage