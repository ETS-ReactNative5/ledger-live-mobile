import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  size?: number,
  color?: string,
};

const GlobeIcon = ({ size, color }: Props) => (
  <Svg
    width={size ?? 16}
    height={size ?? 16}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M10 .64A9.202 9.202 0 00.797 9.843 9.202 9.202 0 0010 19.046a9.201 9.201 0 009.203-9.203A9.202 9.202 0 0010 .64zm6.643 5.937h-2.487c-.26-1.336-.668-2.523-1.187-3.488a7.465 7.465 0 013.674 3.488zM10 2.421c.668 0 1.781 1.559 2.338 4.156H7.625C8.182 3.98 9.295 2.421 10 2.421zM2.578 9.843c0-.483.037-1.002.149-1.484h2.857c-.037.519-.037 1.001-.037 1.484 0 .52 0 1.002.037 1.484H2.727c-.112-.445-.149-.965-.149-1.484zm.742 3.265h2.487c.26 1.374.668 2.561 1.187 3.526a7.538 7.538 0 01-3.674-3.526zm2.487-6.53H3.32a7.465 7.465 0 013.674-3.489c-.52.965-.928 2.152-1.187 3.488zM10 17.264c-.705 0-1.818-1.522-2.375-4.157h4.713c-.557 2.635-1.67 4.157-2.338 4.157zm2.598-5.938H7.365c-.037-.445-.037-.965-.037-1.484 0-.52 0-1.002.037-1.484h5.233c.037.482.074.964.074 1.484s-.037 1.039-.074 1.484zm.37 5.307c.52-.965.928-2.152 1.188-3.526h2.487a7.538 7.538 0 01-3.674 3.526zm1.41-5.307c.038-.482.075-.965.075-1.484 0-.483-.037-.965-.074-1.484h2.894c.075.482.149 1.001.149 1.484 0 .52-.074 1.039-.149 1.484H14.38z"
      fill={color || "#bdb3ff"}
    />
  </Svg>
);

export default memo(GlobeIcon);
