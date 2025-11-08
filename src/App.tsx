import Text from "./components/text";
import Icon from "./components/icon";
import ForkKnife from "./assets/icons/fork-knife.svg?react";
import PoliceCar from "./assets/icons/police-car.svg?react";
import Bed from "./assets/icons/bed.svg?react";
import Wrench from "./assets/icons/wrench.svg?react";
import Receipt from "./assets/icons/receipt.svg?react";
import CloudArrowUp from "./assets/icons/cloud-arrow-up.svg?react";
import MagnifyingGlass from "./assets/icons/magnifying-glass.svg?react";
import CaretLeft from "./assets/icons/caret-left.svg?react";
import CaretRight from "./assets/icons/caret-right.svg?react";

export default function App() {
  return (
    <>
      <div className="flex flex-col gap-2 mb-2">
        <Text variant="heading-lg" className="text-green-200">
          Olá mundo!
        </Text>
        <Text className="heading-lg">Olá mundo!</Text>
        <Text variant="body-md-regular">Olá mundo!</Text>
        <Text variant="text-label">Olá mundo!</Text>
        <Text variant="title-bold">Olá mundo!</Text>
        <Text variant="sub-title">Olá mundo!</Text>
        <Text>Levar o dog pra passear</Text>
      </div>

      <div className="flex gap-2">
        <Icon svg={ForkKnife} />
        <Icon svg={PoliceCar} />
        <Icon svg={Bed} />
        <Icon svg={Wrench} />
        <Icon svg={Receipt} />
        <Icon svg={CloudArrowUp} />
        <Icon svg={MagnifyingGlass} />
        <Icon svg={CaretLeft} />
        <Icon svg={CaretRight} />
      </div>
    </>
  );
}
