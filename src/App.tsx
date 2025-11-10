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
import CaretUp from "./assets/icons/caret-up.svg?react";
import CaretDown from "./assets/icons/caret-down.svg?react";
import ButtonIcon from "./components/button-icon";
import Button from "./components/button";
import InputText from "./components/input-text";
import { useId } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./components/select";
import { SelectTrigger } from "@radix-ui/react-select";

export default function App() {
  const selectId = useId();

  return (
    <>
      <div className="mb-10">
        <label
          htmlFor={selectId}
          className="block text-label text-gray-200 font-bold uppercase group-focus-within:text-green-100 transition-colors mb-2"
        >
          Categoria
        </label>

        <Select>
          <SelectTrigger
            id={selectId}
            className="w-88 h-12 border border-solid border-green-100 rounded-lg pl-3 pr-3 flex items-center justify-between pt-1 text-gray-200"
          >
            <SelectValue placeholder="Selecione" />

            <Icon
              svg={CaretDown}
              className="fill-gray-300 size-8 mr-[-8px] pr-3"
            />
          </SelectTrigger>

          <SelectContent
            className="bg-white w-[var(--radix-select-trigger-width)] ![margin-left:-10px] border border-solid border-gray-300 rounded-md"
            align="start"
          >
            <SelectItem value="apple">Maçã</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Laranja</SelectItem>
          </SelectContent>
        </Select>
      </div>

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

      <div className="flex gap-2 mb-2">
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

      <div className="flex gap-2 mb-2">
        <ButtonIcon icon={MagnifyingGlass} disabled />
        <ButtonIcon icon={MagnifyingGlass} variant="primary" />
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <Button disabled>Nova solicitação</Button>
        <Button>Nova solicitação</Button>
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <InputText label="Título" />
        <InputText label="Outro título" />
      </div>
    </>
  );
}
