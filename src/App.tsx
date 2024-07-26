import { ChangeEvent, ChangeEventHandler, ComponentProps, ReactNode, useState } from "react";

function App() {
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
    <div className="h-screen flex justify-center items-center">
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
    </div>
  );
}

interface CheckItemProps extends ComponentProps<'input'> {
  children?: ReactNode,
  nOffset?: boolean,
};

function CheckItem ({ id, children, nOffset = false, ...rest }: CheckItemProps) {
  return (
    <label htmlFor={id} className={`w-[370px] ${nOffset ? 'relative top-[-1px] left-[-1px]' : ''} flex justify-between items-center pt-2.5 pb-[9px] px-[22px] cursor-pointer`}>
      <span className="font-form text-sm">{children}</span>
      <input {...rest} id={id} type="checkbox" className="w-[23px] h-[23px] relative left-[1px] border border-line-tone-faint rounded-md bg-center bg-no-repeat bg-none hover:bg-check hover:border-[#BDBDBD] active:bg-check-dark focus:ring-0 focus:ring-offset-0 ring-offset-0 active:ring active:focus:ring active:ring-faint-blue checked:bg-check-white checked:bg-[#2469F6] checked:focus:bg-[#2469F6] checked:active:bg-[#2469F6] checked:active:ring checked:active:focus:ring checked:bg-auto checked:hover:bg-check-white checked:hover:bg-[#5087F8] checked:hover:focus:bg-[#5087F8] checked:active:bg-check-white cursor-pointer" />
    </label>
  );
}

function Separator () {
  return (
    <div className="py-2.5 px-[15px]">
      <div className="relative w-full h-0">
        <hr className="absolute w-full h-px top-[-1px] border-t-[0.7px] border-line-tone" />
      </div>
    </div>
  );
}

export default App
