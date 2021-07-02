import './index.css'

export const Hamburger = ({ setOpen }: HamburgerProps) => (
  <button onClick={() => setOpen(true)}>
    <div />
    <div />
    <div />
  </button>
);
