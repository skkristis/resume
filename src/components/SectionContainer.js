export default function SectionContainer({ title, children, className = "" }) {
  return (
    <section className={className}>
      <h2>{title}</h2>
      <div className="divider">
        <div className="sleeve"></div>
        <div className="hr"></div>
      </div>
      {children && children}
    </section>
  );
}
