// import * as React from 'react';
// import {memo} from 'react';

// import Svg, {SvgProps, Path} from 'react-native-svg';
// const SvgComponent = (props: SvgProps) => (
//   <Svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={20}
//     height={14}
//     fill="none"
//     {...props}>
//     <Path
//       fill="#F89300"
//       fillRule="evenodd"
//       d="M19.13 9.147a3.085 3.085 0 0 0 0-4.294C17.174 2.795 13.816 0 10 0 6.184 0 2.825 2.795.87 4.853a3.085 3.085 0 0 0 0 4.294C2.825 11.205 6.184 14 10 14c3.816 0 7.174-2.795 9.13-4.853ZM10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
//       clipRule="evenodd"
//     />
//   </Svg>
// );
// const Memo = memo(SvgComponent);
// export default Memo;
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg
  //@ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <Path
      fill="#F89300"
      fillRule="evenodd"
      d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
      clipRule="evenodd"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export {Memo as ReactComponent};
export default Memo;
