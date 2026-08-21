import React from "react";
import css from "./ErrorBoundary.module.css";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}

class ErrorBoundary
  extends React.Component<ErrorBoundaryProps, ErrorBoundaryState>
{
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  render(): React.ReactNode {
    if (this.state.error) {
      return (
        <div className={css.container}>
          <h2>Something went wrong</h2>
          <p className={css.message}>{this.state.error.message}</p>
          <button
            className={css.retryButton}
            onClick={() => this.setState({ error: null })}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
