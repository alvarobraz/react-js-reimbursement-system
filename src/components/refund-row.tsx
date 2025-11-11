import { Refund } from "../contexts/refund/models/refund";
import ForkKnife from "../assets/icons/fork-knife.svg?react";
import Bed from "../assets/icons/bed.svg?react";
import PoliceCar from "../assets/icons/police-car.svg?react";
import Wrench from "../assets/icons/wrench.svg?react";
import Receipt from "../assets/icons/receipt.svg?react";
import Icon from "./icon";
import Text from "./text";
import Skeleton from "./skeleton";
import {
  getRefundCategoryData,
  formatRefundValue,
} from "../helpers/refund-utils";

interface RefundRowProps {
  refund: Refund;
  loading?: boolean;
}

export default function RefundRow({ refund, loading }: RefundRowProps) {
  const { icon, label } = getRefundCategoryData(refund.category);

  return (
    <>
      <div className="flex items-center justify-between">
        {!loading ? (
          <>
            <div className="flex items-start justify-start gap-3">
              <div className="w-[34px] h-[34px] rounded-3xl bg-gray-400 p-1.5">
                <Icon svg={icon} className="fill-green-100 h-5 w-5" />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <Text variant="title-bold">{refund.title}</Text>
                <Text variant="sub-title">{label}</Text>
              </div>
            </div>
            <div className="flex justify-end items-center gap-2">
              <Text variant="text-sm" className="text-gray-200">
                R$
              </Text>
              <Text variant="title-bold" className="text-gray-100">
                {formatRefundValue(refund.value)}
              </Text>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-start justify-start gap-3">
              <div className="w-[34px] h-[34px] rounded-3xl bg-gray-300">
                <Skeleton className="bg-gray-300 w-[34px] h-[34px] rounded-3xl" />
              </div>
              <div className="flex flex-col justify-center">
                <Skeleton className="bg-gray-300 w-[34px] h-[34px]" />
              </div>
            </div>
            <div className="flex justify-end items-center gap-2">
              <Text variant="text-sm" className="text-gray-200">
                <Skeleton className="bg-gray-300 w-[34px] h-[34px]" />
              </Text>
              <Skeleton className="bg-gray-300 w-[34px] h-[34px]" />
            </div>
          </>
        )}
      </div>
    </>
  );
}
