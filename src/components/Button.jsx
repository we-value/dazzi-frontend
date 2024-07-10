import "./Button.css";

const Button = ({ text, type, onClick }) => {
  return (
    <button onClick={onClick} className={`button button_${type}`}>
      {text}
    </button>
  );
};

export default Button;
