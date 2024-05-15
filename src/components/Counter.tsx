import "./Counter.scss";

interface Counter {
  title: string;
  icon?: string;
  number: string;
}

function Counter({ title, icon, number }: Counter) {
  return (
    <div className="counter">
      <span className="counter__title">{title}</span>
      <div className="counter__number">{number}</div>
    </div>
  );
}

export default Counter;
