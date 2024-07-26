import { ChangeEvent, ChangeEventHandler, useState } from "react";
import CheckItem from "./CheckItem";
import Separator from "./Separator";

function CheckList () {
  const pages = [
    'Page 1',
    'Page 2',
    'Page 3',
    'Page 4',
    'Page 5',
    'Page 6',
  ];

  const [items, setItems] = useState(pages.map(text => ({text, checked: false})));

  const allChecked = items.every(({ checked }) => checked);

  function handleCheckItemChange (index: number): ChangeEventHandler<HTMLInputElement> {
    return function (e) {
      setItems(current => current.map((elem, i) => {
        if (i !== index) return elem;

        return {...elem, checked: e.target.checked};
      }));
    }
  }

  function handleAllCheckedChange (e: ChangeEvent<HTMLInputElement>) {
    setItems(current => current.map(elem =>
      ({ ...elem, checked: e.target.checked })
    ));
  }

  return (
    <div className="py-2.5 rounded-md shadow-shape ring-1 ring-inset ring-[#EEEEEE]">
      <CheckItem id="check-item-all" checked={allChecked} onChange={handleAllCheckedChange}>All pages</CheckItem>

      <Separator />

      <div className="h-[164px] overflow-y-scroll no-scrollbar">
        {items.map(({text, checked}, i) => (
          <CheckItem
            id={`check-item-${i}`}
            key={i}
            nOffset={true}
            checked={checked}
            onChange={handleCheckItemChange(i)}
          >
            {text}
          </CheckItem>
        ))}
      </div>

      <Separator />

      <div className="py-2.5 px-[15px]">
        <button type="button" className="bg-[#FFCE22] active:bg-[#FFCE22] hover:bg-[#FFD84D] w-full rounded px-2.5 py-2.5 font-form text-sm focus:outline-none">
          Done
        </button>
      </div>
    </div>
  );
}

export default CheckList;
