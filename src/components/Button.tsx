import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
}

export default Button;
