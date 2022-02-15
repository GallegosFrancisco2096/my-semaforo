import React, { useState } from 'react';
import '../App.css'






function Semaforo() {
    const [selectedColor, setSelectedColor] = useState("green")
    return (
        <body>
            <div className="contenedor">
                <div className="Exterior">
                    <div onClick={() => setSelectedColor("red")}
                        className={"red light" + (selectedColor === "red" ? " glow" : "")}>

                    </div>
                    <div onClick={() => setSelectedColor("yellow")}
                        className={"yellow light" + (selectedColor === "yellow" ? " glow" : "")}>
                    </div>
                    <div onClick={() => setSelectedColor("green")}
                        className={"green light" + (selectedColor === "green" ? " glow" : "")}>

                    </div>
                </div>
            </div>
        </body>





    )




}

export default Semaforo;
