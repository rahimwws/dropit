import * as React from "react";
import Svg, { Path } from "react-native-svg";

type Props={
  color:string
}
const Add = (props:Props) => (
  <Svg
    viewBox="0 0 512 512"
    width={13}
    height={13}
    {...props}
  >
    <Path d="M480 224H288V32c0-17.673-14.327-32-32-32s-32 14.327-32 32v192H32c-17.673 0-32 14.327-32 32s14.327 32 32 32h192v192c0 17.673 14.327 32 32 32s32-14.327 32-32V288h192c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill={props.color} />
  </Svg>
);

export default Add;
