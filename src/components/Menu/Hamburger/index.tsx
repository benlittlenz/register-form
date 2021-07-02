import './index.css'
type HamburgerProps = {
  open: boolean;
  setOpen: (t: boolean) => void;
};

export const Hamburger = ({ open, setOpen }: HamburgerProps) => (
  <button onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </button>
);
