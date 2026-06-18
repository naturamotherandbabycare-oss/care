export default function LoadingSpinner({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'h-5 w-5',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizes[size]} relative`}>
        <div className={`${sizes[size]} rounded-full border-2 border-dark-200 absolute`} />
        <div className={`${sizes[size]} rounded-full border-2 border-transparent border-t-primary-600 animate-spin absolute`} />
      </div>
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-50">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-dark-500 text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}
