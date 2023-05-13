import { cn } from "@/lib/utils";

export interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-cards bg-primary-light shadow-sm drop-shadow-md dark:bg-primary-dark",
        className,
      )}>
      {children}
    </div>
  );
};
export default Card;
