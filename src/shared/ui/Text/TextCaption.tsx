interface Props {
  text?: string;
  styled?: string;
}

const TextCaption = ({ text = "", styled = "" }: Props) => {
  return <p className={`${styled} text-[#aeadae]`}>{text}</p>;
};

export default TextCaption;
