'use client';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-6 text-sm text-gray-500 dark:border-dark-border dark:bg-dark-card dark:text-gray-400">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <span>Bansari Homeopathy Clinic</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}