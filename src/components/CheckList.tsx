import { ChangeEvent, ReactNode } from "react";
import CheckItem from "./CheckItem";
import Separator from "./Separator";

export interface CheckListProps {
  baseId: string,
  children: ReactNode,
  allChecked?: boolean,
  setAllChecked?: (checked: boolean) => void,
}

function CheckList ({ baseId, children, allChecked, setAllChecked }: CheckListProps) {
  const handleAllCheckedChange = setAllChecked && function (e: ChangeEvent<HTMLInputElement>) {
    setAllChecked(e.target.checked);
  }

  return (
    <div className="py-2.5 rounded-md shadow-shape ring-1 ring-inset ring-[#EEEEEE] w-[370px]">
      <CheckItem
        id={`${baseId}-check-item-all`}
        checked={allChecked}
        onChange={handleAllCheckedChange}
      >
        All pages
      </CheckItem>

      <Separator />

      <div className="h-[164px] overflow-y-scroll no-scrollbar">
        {children}
      </div>

      <Separator />

      <div className="py-2.5 px-[15px]">
        <button type="button" className="bg-[#FFCE22] active:bg-[#FFCE22] hover:bg-[#FFD84D] w-full rounded px-2.5 py-2.5 font-form text-sm focus:outline-none">
          <span className="relative left-[-0.5px]">
            Done
          </span>
        </button>
      </div>
    </div>
  );
}

export default CheckList;
