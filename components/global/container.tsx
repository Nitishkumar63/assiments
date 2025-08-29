import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export default function Container({
  children,
  className,
  id,
  style = {},
}: ContainerProps) {
  return (
    <section
      className={cn("container mx-auto p-4", className)}
      id={id}
      style={style}
    >
      {children}
    </section>
  );
}
