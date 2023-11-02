import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 50 50" {...props}>
    <Path d="M25 4.07C12.367 4.07 2.07 12.922 2.07 24c0 6.43 3.524 12.027 8.934 15.688-.008.214.008.562-.274 1.609-.351 1.293-1.058 3.117-2.492 5.172l-1.02 1.46H9c6.172 0 9.742-4.023 10.297-4.667 1.836.43 3.726.668 5.703.668 12.633 0 22.93-8.852 22.93-19.93S37.633 4.07 25 4.07Zm0 1.86c11.77 0 21.07 8.148 21.07 18.07S36.77 42.07 25 42.07c-2.04 0-3.96-.195-5.766-.668l-.578-.152-.379.465s-2.886 3.258-7.496 4.043c.836-1.508 1.453-2.914 1.739-3.977.402-1.48.41-2.48.41-2.48v-.512l-.43-.273C7.219 35.156 3.93 29.957 3.93 24c0-9.922 9.3-18.07 21.07-18.07ZM15 22a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm10 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Zm10 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4Z" />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
