// app/not-found.tsx
'use client'
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  )
}
