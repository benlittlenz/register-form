type HeadingProps = {
  open: boolean;
  setOpen: (t: boolean) => void;
}

type BackProps = {
  setOpen: (t: boolean) => void;
};

type HamburgerProps = {
  setOpen: (t: boolean) => void;
};

type FormPayload = {
  initialValues: any;
  onSubmit: () => void;
  validations?: any;
}

type InputProps = {
  value: string;
  length: number;
  onChange: any;
  width: string;
  type: string;
  placeholder?: string;
  error?: string;
}
