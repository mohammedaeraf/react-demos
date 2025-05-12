import { useState } from "react";
import onImg from '../assets/on.jpg';
import offImg from '../assets/off.jpg';


const ToggleSwitch = () => {

    const [isOn, setIsOn] = useState<boolean>(false);

    const switchOnOff = () => {
        setIsOn(!isOn);
    }

    return (
        <div>
            <h2>Status: {isOn ? "ON" : "OFF"}</h2>
            <div>
                <img
                    src={isOn ? onImg : offImg}
                    alt=""
                    width="180px"
                    height="300px"
                    onClick={switchOnOff}
                />
            </div>
        </div>
    );
};
export default ToggleSwitch;
