interface Props {
  src: string;
  alt: string;
}

export const SvgImg = ({ src, alt }: Props) => {
  const svgPath = src;
  return <img src={svgPath} alt={alt} />;
};
