import { Refund } from "../contexts/refund/models/refund";
import ForkKnife from "../assets/icons/fork-knife.svg?react";
import Icon from "./icon";
import Text from "./text";

interface RefundRowProps {
  Refund: Refund;
  loading?: boolean;
}

export default function RefundRow({ Refund, loading }: RefundRowProps) {
  return (
    <>
      <div className="flex items-center justify-between ">
        <div className="flex items-start justify-start gap-3">
          <div className="w-[34px] h-[34px] rounded-3xl bg-gray-300 p-1.5">
            <Icon svg={ForkKnife} className="fill-green-100 h-5 w-5" />
          </div>
          <div className="flex flex-col justify-center">
            <Text variant="title-bold">Rodrigo</Text>
            <Text variant="sub-title">Alimentação</Text>
          </div>
        </div>
        <div className="flex justify-end items-center gap-2">
          <Text variant="text-sm" className="text-gray-200">
            R$
          </Text>
          <Text variant="title-bold" className="text-gray-100">
            34,78
          </Text>
        </div>
      </div>
    </>
  );
}
