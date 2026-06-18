export default function Input({ 
  label, 
  error, 
  icon, 
  className = '', 
  type = 'text',
  id,
  ...props 
}) {
  const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-dark-600 mb-1.5 tracking-wide"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400 text-lg">
            {icon}
          </span>
        )}
        {type === 'textarea' ? (
          <textarea
            id={inputId}
            className={`
              w-full px-4 py-3 ${icon ? 'pl-10' : ''}
              bg-dark-50 border border-dark-200 rounded-xl
              text-dark-900 placeholder:text-dark-400
              focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500
              transition-all duration-200
              resize-vertical min-h-[100px]
              ${error ? 'border-red-400 focus:ring-red-500/30 focus:border-red-500' : ''}
            `}
            {...props}
          />
        ) : (
          <input
            id={inputId}
            type={type}
            className={`
              w-full px-4 py-3 ${icon ? 'pl-10' : ''}
              bg-dark-50 border border-dark-200 rounded-xl
              text-dark-900 placeholder:text-dark-400
              focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500
              transition-all duration-200
              ${error ? 'border-red-400 focus:ring-red-500/30 focus:border-red-500' : ''}
            `}
            {...props}
          />
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
