import React from "react";
import styles from "./Drawer.module.css";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
}

/** A minimal right-side overlay drawer. No external UI library dependency. */
export function Drawer(props: DrawerProps): React.JSX.Element | null {
  const { isOpen, onClose, title, children } = props;
  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.overlay}>
      <button
        type="button"
        aria-label="Close drawer"
        className={styles.backdrop}
        onClick={onClose}
      />
      <aside className={styles.panel} role="dialog" aria-modal="true">
        <header className={styles.header}>
          <div className={styles.title}>{title}</div>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </header>
        <div className={styles.body}>{children}</div>
      </aside>
    </div>
  );
}
