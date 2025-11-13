import Container from "./container";
import Logo from "../assets/images/logo-refund.svg?react";
import { Link, useLocation, useNavigate } from "react-router";
import Button from "./button";
import { Menu } from "lucide-react"; // ícone opcional
import cx from "classnames";

interface MainHeaderProps extends React.ComponentProps<typeof Container> {}

export default function MainHeader({ className, ...props }: MainHeaderProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/refund-request");
  };

  return (
    <header
      className={cx(
        "flex justify-between items-center w-full max-w-[1185px] mx-auto px-4 py-4",
        "sm:px-6 md:px-8 lg:px-0",
        className
      )}
      {...props}
    >
      <Link to="/" className="flex items-center gap-2">
        <Logo className="h-7 w-auto" />
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link
          to="/"
          className={cx(
            "text-gray-600 hover:text-green-100 transition-colors",
            pathname === "/" && "text-green-100 font-medium"
          )}
        >
          Solicitações de reembolso
        </Link>
        <Button variant="primary" size="sm" onClick={handleButtonClick}>
          Nova Solicitação
        </Button>
      </div>

      <button className="md:hidden flex items-center justify-center">
        <Button variant="primary" size="xs" onClick={handleButtonClick}>
          Solicitar
        </Button>
      </button>
    </header>
  );
}
