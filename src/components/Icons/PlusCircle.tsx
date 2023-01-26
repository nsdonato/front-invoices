interface Props {
  size: number;
  color: string;
}

const PlusCircle = ({ size, color }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r={size / 2} fill={color} />
      <path
        d="M17.3131 21.0229V17.3131H21.0229V14.7328H17.3131V11.0229H14.7328V14.7328H11.0229V17.3131H14.7328V21.0229H17.3131Z"
        fill="#7C5DFA"
      />
    </svg>
  );
};

export default PlusCircle;
