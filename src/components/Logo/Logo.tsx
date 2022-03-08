import { useCurrentFrame, Img } from "remotion";
import { FC } from 'react';
import logo from "./../../assets/logo.svg"

export interface LogoProps {
}

const Logo: FC = () => {
    const frame = useCurrentFrame();
    const opacity = frame >= 20 ? 1 : frame / 20;
    return (
        <Img style={{
            width: "100px",
            height: "100px",
            margin: "20px",
            bottom: "20px",
            opacity: opacity,
            right: "0px",
            position: "absolute"
        }} src={logo} />
    );
};

export default Logo;