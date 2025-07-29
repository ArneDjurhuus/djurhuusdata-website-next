import { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function SupabaseErrorBoundary({ children }: ErrorBoundaryProps) {
  // For now, this is a simple wrapper. In a full implementation, 
  // you'd use React Error Boundary class component or error boundary library
  return <>{children}</>;
}

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
}

export function ErrorMessage({ message, retry }: { message: string; retry?: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-8">
      <div className="text-red-600 text-center mb-4">
        <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.962-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <h3 className="text-lg font-semibold mb-2">Der opstod en fejl</h3>
        <p className="text-gray-600">{message}</p>
      </div>
      {retry && (
        <button
          onClick={retry}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Prøv igen
        </button>
      )}
    </div>
  );
}
