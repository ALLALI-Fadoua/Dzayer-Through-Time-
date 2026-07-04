const variants = {
  primary: "bg-primary text-cream hover:bg-primary-700 border border-primary",
  gold: "bg-gold text-primary-700 hover:bg-gold-dark hover:text-cream border border-gold",
  outline: "bg-transparent text-primary border border-primary hover:bg-primary hover:text-cream",
  ghost: "bg-transparent text-primary hover:bg-primary-50",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  icon = null,
  as = "button",
  ...props
}) {
  const Comp = as;
  return (
    <Comp
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="text-base">{icon}</span>}
      {children}
    </Comp>
  );
}
