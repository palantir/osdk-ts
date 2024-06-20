import { PropsWithChildren } from "react";
import css from "./Dialog.module.css";

interface DialogProps {
  isOpen: boolean;
  buttons?: React.ReactElement[];
}

function Dialog({ children, isOpen, buttons }: PropsWithChildren<DialogProps>) {
  return (
    <dialog open={isOpen}>
      {children}
      {buttons != null && buttons.length > 0 && (
        <div className={css.buttons}>{buttons}</div>
      )}
    </dialog>
  );
}
export default Dialog;
