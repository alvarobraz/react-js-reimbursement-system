import React from "react";
import SearchIcon from "../assets/icons/magnifying-glass.svg?react";
import InputText from "./input-text";
import { debounce } from "../helpers/utils";
import Icon from "./icon";
import useRefunds from "../contexts/refund/hooks/use-refunds";

export default function RefundSearch() {
  const [inputValue, setInputValue] = React.useState("");

  const { filters } = useRefunds();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetValue = React.useCallback(
    debounce((value: string) => filters.setQ(value), 1000),
    [filters.setQ]
  );

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setInputValue(value);
    debouncedSetValue(value);
  }

  return (
    <div className="flex justify-between items-center gap-3">
      <InputText
        placeholder="Pesquise pelo nome"
        className="flex-1"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="bg-green-100 w-14 h-12 flex items-center justify-center rounded-lg p-4">
        <Icon svg={SearchIcon} className="fill-white" />
      </div>
    </div>
  );
}
