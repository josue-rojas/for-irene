import React from "react";

type IconProps = {
  size?: number;
  rotate: number;
  image: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Icon = ({ size, rotate, image, style, ...restDivProps }: IconProps) => {
  const _size = size || 39;
  const _styles: React.CSSProperties = {
    ...style,
    height: `${_size}px`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${image})`,
    width: `${_size}px`,
    transform: `rotate(${rotate}deg)`,
    transition: `10ms transform ease-in`,
  };

  return <div {...restDivProps} style={_styles}></div>;
};

export default Icon;
