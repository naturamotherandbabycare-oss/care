export default function Card({ children, className = '', hover = true, glass = false, ...props }) {
  return (
    <div
      className={`
        rounded-2xl p-6
        ${glass 
          ? 'glass-card' 
          : 'bg-white border border-dark-100 shadow-sm'
        }
        ${hover 
          ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl' 
          : ''
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
