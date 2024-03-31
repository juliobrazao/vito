import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      {children}
    </div>
  );
}
