interface Props {
  text?: string;
  styled?: string;
}

const TextCaption = ({ text = "", styled = "" }: Props) => {
  return <p className={`${styled} font-semibold`}>{text}</p>;
};

export default TextCaption;
