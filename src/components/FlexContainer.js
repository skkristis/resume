export default function FlexContainer({
  children,
  className = "flex-container",
}) {
  return <div className={className}>{children}</div>;
}
