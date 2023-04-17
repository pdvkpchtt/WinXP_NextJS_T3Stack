interface Props {
  text?: string;
  styled?: string;
}

const TextBody = ({ text = "", styled = "" }: Props) => {
  return <p className={`${styled}`}>{text}</p>;
};

export default TextBody;
