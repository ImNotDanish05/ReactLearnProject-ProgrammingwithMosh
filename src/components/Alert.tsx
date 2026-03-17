import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    onClose: () => void;
    show: boolean;
}

const Alert = ({children, color = "primary", onClose, show}: Props) => {
  return (
    <div className={`alert alert-${color} alert-dismissible fade ${show ? "show" : ""}`}>
      {children}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
    </div>
  );
}

export default Alert;
