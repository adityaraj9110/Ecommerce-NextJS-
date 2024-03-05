import { CSSProperties } from "react";

type PropType = {
    caption:string
    styles: CSSProperties
    callBack:() => void;
}

const Button = ({caption,styles,callBack}:PropType) => {

  return (
    <button style={styles} onClick={callBack}>
      {caption}
    </button>
  );
  
};

export default Button;
