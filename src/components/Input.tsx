import "./Input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, ...props }: InputProps) {
  return (
    <div className="input">
      <input placeholder={label} {...props} />
    </div>
  );
}

export default Input;
