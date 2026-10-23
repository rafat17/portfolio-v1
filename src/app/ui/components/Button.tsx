import { IButton } from "@/app/utilities/interfaces";
import Link from "next/link";

const Button = ({ id, className, onClick, children, href, rel, prefetch = true }: IButton) => {
  if (href) {
    return (
      <Link
        id={id}
        href={href}
        className={className}
        rel={rel}
        prefetch={prefetch}
        target="_blank"
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button id={id} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
