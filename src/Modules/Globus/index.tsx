import React, { useEffect, useState } from "react";
import MapBaseImg from '../../Assets/img/mapbase.png'
import ProjectName from '../../Assets/img/ProjectName.png'
import Map from '../../Assets/img/Map.png'
import Catalog from '../../Assets/img/Catalog.png'
import GlobalScene from '../../Assets/img/GlobalScene.png'
import { Button } from "@blueprintjs/core";
import Create from "./Create";

type Props = {};

const Globus: React.FC<Props> = ({ }: Props) => {
    const [filePathName, setFilePathName] = useState('')
    const [isOpen, setIsOpen] = useState(false);
    const backgroundImageUrl = MapBaseImg;

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleChange = () => {
        const filePath = new URL(import.meta.url).pathname;
        setFilePathName(filePath)
    }

    return (
        <div
            className="MapBaseImg"
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                paddingLeft: '50px',
                overflow: 'hidden'
            }}
        >
            <div
                className="BackgroundOverlay"
                style={{
                    position: "absolute",
                    top: "90px",
                    left: '0',
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${backgroundImageUrl})`,
                    backgroundSize: '95%',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    marginTop: '10px',
                    opacity: 0.2,
                    zIndex: -1,
                }}
            />
            <div>
                <div className="globe__title" style={{ position: 'absolute', top: '35px', }}>
                    <h1 style={{ fontFamily: 'Noto Looped Thai', fontWeight: '400', fontSize: '45px', color: '#007AC2' }}>Globe</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '270px' }}>
                        <div>
                            <Button style={{ fontFamily: 'Noto Looped Thai', fontSize: '20px', fontWeight: '400', lineHeight: '25px', color: '#424242', background: 'fixed', border: '0px solid', padding: '0' }} outlined>Open</Button>
                            <h2 style={{ fontFamily: 'Noto Looped Thai', fontSize: '18px', fontWeight: '300', lineHeight: '25px', color: '#424242', background: 'fixed', border: '0px solid', padding: '0' }} >Recent Projects</h2>
                        </div>
                        <div>
                            <Button onClick={handleOpen} style={{ fontFamily: 'Noto Looped Thai', fontSize: '20px', lineHeight: '25px', fontWeight: '400', color: '#424242', background: 'fixed', border: '0px solid', }} outlined>New</Button>
                            <Create isOpen={isOpen} setIsOpen={setIsOpen} handleClose={handleClose}/>
                            <h2 style={{ fontFamily: 'Noto Looped Thai', fontSize: '18px', fontWeight: '500', fontStyle: 'normal', lineHeight: '25px', color: '#424242', background: 'fixed', border: '0px solid', padding: '5px 10px' }} >Blank Templates</h2>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '165px' }}>
                        <div style={{ display: "flex", alignItems: "center", gap: '10px' }}>
                            <div>
                                <img src={ProjectName} style={{ width: '30px' }} alt="" />
                            </div>
                            <div>
                                <h5 style={{
                                    fontFamily: 'Noto Looped Thai',
                                    fontStyle: "normal",
                                    fontWeight: "300",
                                    fontSize: "12px",
                                    lineHeight: "19px",
                                }}>Project Name</h5>
                                <span style={{
                                    fontFamily: 'Noto Looped Thai',
                                    fontStyle: "normal",
                                    fontWeight: 300,
                                    fontSize: "12px",
                                    lineHeight: "19px",
                                }}
                                >c:\Users\PC\Documents\Globe\Proje...</span>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: 'center', gap: '30px' }}>
                            <Button outlined style={{ display: "flex", flexDirection: 'column', border: '0 solid' }}>
                                <img src={Map} style={{ width: '30px' }} alt="" />
                                <span>Map</span>
                            </Button>
                            <Button outlined style={{ display: "flex", flexDirection: 'column', border: '0 solid' }}>
                                <img src={Catalog} style={{ width: '30px' }} alt="" />
                                <span>Catalog</span>
                            </Button>
                            <Button outlined style={{ display: "flex", flexDirection: 'column', border: '0 solid' }}>
                                <img src={GlobalScene} style={{ width: '32px' }} alt="" />
                                <span >Global Scene</span>
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Globus;