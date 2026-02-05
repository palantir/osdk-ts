interface LoadingIndicatorProps {
  isLoading?: boolean;
  size?: "sm" | "md";
}

export function LoadingIndicator(
  { isLoading = true, size = "sm" }: LoadingIndicatorProps,
) {
  if (!isLoading) return null;

  const sizeClasses = size === "sm" ? "size-3" : "size-4";

  return (
    <span
      className={`inline-block ${sizeClasses} rounded-full animate-spin border-2 border-[var(--officenetwork-accent-cyan)] border-t-transparent`}
    />
  );
}

interface StatusBadgeProps {
  isLoading: boolean;
  isOptimistic?: boolean;
  error?: Error;
}

export function StatusBadge(
  { isLoading, isOptimistic, error }: StatusBadgeProps,
) {
  if (error) {
    return (
      <span className="officenetwork-badge officenetwork-badge-error">
        Error
      </span>
    );
  }

  if (isOptimistic) {
    return (
      <span className="officenetwork-badge officenetwork-badge-warning">
        Optimistic
      </span>
    );
  }

  if (isLoading) {
    return (
      <span className="officenetwork-badge officenetwork-badge-info flex items-center gap-1.5">
        <LoadingIndicator isLoading size="sm" />
        Loading
      </span>
    );
  }

  return null;
}
