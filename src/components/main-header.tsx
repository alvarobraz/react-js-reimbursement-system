import Container from "./container";
import Logo from "../assets/images/logo-refund.svg?react";
import { Link, useLocation, useNavigate } from "react-router";
import cx from "classnames";
import Button from "./button";
import Text from "./text";

interface MainHeaderProps extends React.ComponentProps<typeof Container> {}

export default function MainHeader({ className, ...props }: MainHeaderProps) {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/refund-request");
  };

  return (
    <div className="flex justify-between items-center w-296.25 gap-10 mx-auto px-0 mt-10">
      <Link to="/">
        <Logo className="h-7" />
      </Link>

      <div className="flex items-center gap-8">
        <Link
          to="/"
          className={pathname === "/" ? "text-green-100 gap-4" : "gap-4"}
        >
          Solicitações de reembolso
        </Link>
        <Button variant="primary" size="sm" onClick={handleButtonClick}>
          Nova Solicitação
        </Button>
      </div>
    </div>
  );
}
