export default function Container({ color, children }) {
  return (
    <div className="pill-container">
      <p className={`pill ${color}`}>{children}</p>
    </div>
  );
}
