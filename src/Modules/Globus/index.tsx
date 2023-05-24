import React from "react";
import MapBaseImg from '../../Assets/img/mapbase.png'
import { Button } from "@blueprintjs/core";

type Props = {};

const Globus: React.FC<Props> = ({ }: Props) => {
    const backgroundImageUrl = MapBaseImg;

    return (
        <div
            className="MapBaseImg"
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
            }}
        >
            <div
                className="BackgroundOverlay"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${backgroundImageUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    opacity: 0.2,
                    zIndex: -1,
                }}
            />
            <div>
                <div className="globe__title" style={{ position: 'absolute', top: '35px' }}>
                    <h1 style={{ fontFamily: 'Noto Looped Thai', fontWeight: '400', fontSize: '45px', color: '#007AC2' }}>Globe</h1>
                    <div style={{display:'flex', alignItems:'center', gap:'270px'}}>
                        <div>
                            <Button style={{ fontFamily: 'Noto Looped Thai', fontSize: '20px',fontWeight:'400', lineHeight: '25px', color: '#424242', background: 'fixed', border: '0px solid' }} outlined>Open</Button>
                            <h2 style={{ fontFamily: 'Noto Looped Thai', fontSize: '18px',fontWeight:'300', lineHeight: '25px', color: '#424242', background: 'fixed', border: '0px solid', padding: '5px 10px' }} >Recent Projects</h2>
                        </div>
                        <div>
                            <Button style={{ fontFamily: 'Noto Looped Thai', fontSize: '20px', lineHeight: '25px',fontWeight:'400', color: '#424242', background: 'fixed', border: '0px solid' }} outlined>New</Button>
                            <h2 style={{ fontFamily: 'Noto Looped Thai', fontSize: '18px', fontWeight:'300', lineHeight: '25px', color: '#424242', background: 'fixed', border: '0px solid', padding: '5px 10px' }} >Blank Templates</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Globus;