import { type ReactNode } from "react";

interface Props {
    children: ReactNode;
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    onClick: () => void;
    link: string;
}

const Button = ({children, color = "primary", onClick, link}: Props) => {
    // const [buttonTrigger, setbuttonTrigger] = useState(true);  
  return <a className={`btn btn-${color}`} onClick={onClick} href={link}>
    {children}
    </a>;
};

export default Button;