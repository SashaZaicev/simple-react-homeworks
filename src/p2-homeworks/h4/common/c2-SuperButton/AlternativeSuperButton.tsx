import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const AlternativeSuperButton: React.FC<DefaultButtonPropsType> = ({...restProps}) => {
    return (
        <button
            style={{
                background: 'black',
                border: 'none',
                color: "goldenrod",
            }} {...restProps}/>
    );
}

export default AlternativeSuperButton;
