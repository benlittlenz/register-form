import './index.css'

type HamburgerProps = {
  setOpen: (t: boolean) => void;
};

export const Hamburger = ({ setOpen }: HamburgerProps) => (
  <button onClick={() => setOpen(true)}>
    <div />
    <div />
    <div />
  </button>
);
