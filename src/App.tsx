import { ChangeEventHandler, useState } from "react";
import CheckList from "./components/CheckList";
import CheckItem from "./components/CheckItem";

function App() {
  const pages = [
    'Page 1',
    'Page 2',
    'Page 3',
    'Page 4',
    'Page 5',
    'Page 6',
  ];

  return (
    <main className="max-w-screen-lg mx-auto my-12 px-4 space-y-12">
      <p className="text-justify">
        Here are two versions of the component: uncontrolled and controlled.
        The controlled version has state and the "All pages" checkbox
        controls the simultaneous de/selection of all "Page #" checkboxes. The
        uncontrolled version has no interaction other than the defaults for
        HTML input elements. Please read the observations at the end of the
        page.
      </p>

      <p className="text-justify">Uncontrolled component:</p>

      <div className="w-fit mx-auto">
        <UncontrolledCheckList baseId="controlled" initialItems={pages} />
      </div>

      <p className="text-justify">Controlled component:</p>

      <div className="w-fit mx-auto">
        <ControlledCheckList baseId="uncontrolled" initialItems={pages} />
      </div>

      <p className="text-justify">
        I've encountered issues running the Figma simulations. It displayed odd
        behaviour even across different browsers. I implemented the
        interactions to the best of my interpretation.
      </p>

      <p className="text-justify">
        The design did not specify any styling for keyboard focus of form
        inputs, so I have removed any that would exist by default to prevent
        interference with the styling of other states.
      </p>

      <p className="text-justify">
        I noticed a drag-scroll behaviour in the simulation, but I was unsure
        whether that is an application requirement or just Figma emulating a
        touch device. Since that behaviour would require code that could break
        the checkboxes, I've decided to not implement it. In touch devices, the
        component is drag-scrollable as normal.
      </p>

      <p className="text-justify">
        Checkboxes can be toggled by clicking anywhere inside their container,
        however there appears to be a bug in Chrome-based browsers that causes
        them not to be marked as being pressed when they have focus. This means
        they will not be styled correctly (outline will be missing) after the
        first click. Causing the element to lose focus (e.g. by clicking
        outside it) will reset this. Clicking the checkbox directly will always
        produce the correct styling. This bug is not present in Firefox.
      </p>
    </main>
  );
}

interface ControlledCheckListProps  {
  baseId: string,
  initialItems: string[],
}

function ControlledCheckList ({initialItems, baseId, ...props}: ControlledCheckListProps) {
  const [items, setItems] = useState(initialItems.map(text => ({text, checked: false})));

  const allChecked = items.every(({ checked }) => checked);

  function handleCheckItemChange (index: number): ChangeEventHandler<HTMLInputElement> {
    return function (e) {
      setItems(current => current.map((elem, i) => {
        if (i !== index) return elem;

        return {...elem, checked: e.target.checked};
      }));
    }
  }

  function handleAllCheckedChange (checked: boolean) {
    setItems(current => current.map(elem =>
      ({ ...elem, checked: checked })
    ));
  }

  return (
    <CheckList
      {...props}
      baseId={baseId}
      allChecked={allChecked}
      setAllChecked={handleAllCheckedChange}
    >
      {items.map(({text, checked}, i) => (
        <CheckItem
          id={`${baseId}-check-item-${i}`}
          key={i}
          nOffset={true}
          checked={checked}
          onChange={handleCheckItemChange(i)}
        >
          {text}
        </CheckItem>
      ))}
    </CheckList>
  );
}

interface UncontrolledCheckListProps {
  baseId: string,
  initialItems: string[],
}

function UncontrolledCheckList ({ baseId, initialItems }: UncontrolledCheckListProps) {
  return (
    <CheckList baseId={baseId}>
      {initialItems.map((text, i) => (
        <CheckItem
          id={`${baseId}-check-item-${i}`}
          key={i}
          nOffset={true}
        >
          {text}
        </CheckItem>
      ))}
    </CheckList>
  );
}

export default App
