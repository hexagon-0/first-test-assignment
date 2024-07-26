import { ComponentProps, ReactNode } from "react";

interface CheckItemProps extends ComponentProps<'input'> {
  children?: ReactNode,
  nOffset?: boolean,
};

function CheckItem ({ id, children, nOffset = false, ...rest }: CheckItemProps) {
  return (
    <label htmlFor={id} className={`w-full flex justify-between items-center pt-2.5 pb-[9px] px-[22px] cursor-pointer`}>
      <span className={`font-form text-sm leading-[18.2px] ${nOffset ? 'relative top-[-1px] left-[-1px]' : ''}`}>{children}</span>
      <input {...rest} id={id} type="checkbox" className={`w-[23px] h-[23px] relative ${nOffset ? 'top-[-1px]' : 'left-[1px]'} border border-line-tone-faint rounded-md bg-center bg-no-repeat bg-none hover:bg-check hover:border-[#BDBDBD] active:bg-check-dark focus:ring-0 focus:ring-offset-0 ring-offset-0 active:ring active:focus:ring active:ring-faint-blue checked:bg-check-white checked:bg-[#2469F6] checked:focus:bg-[#2469F6] checked:active:bg-[#2469F6] checked:active:ring checked:active:focus:ring checked:bg-auto checked:hover:bg-check-white checked:hover:bg-[#5087F8] checked:hover:focus:bg-[#5087F8] checked:active:bg-check-white cursor-pointer`} />
    </label>
  );
}

export default CheckItem;
