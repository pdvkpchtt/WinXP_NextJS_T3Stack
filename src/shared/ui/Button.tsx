interface Props {
  styled?: string;
  text?: string;
  onClick?: () => void;
}

const Button = ({
  styled = "",
  text = "",
  onClick = () => console.log("undef"),
}) => {
  return (
    <button onClick={() => onClick()} className={`${styled} `}>
      {text}
    </button>
  );
};

export default Button;
