export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
          Red Pill Apps
        </h1>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p className="text-lg font-medium text-zinc-800 dark:text-zinc-200">
            A boutique AI and automations app developer.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            We build intelligent solutions that automate and elevate your
            business. From custom AI integrations to end-to-end workflow
            automation, Red Pill Apps LLC delivers technology that works.
          </p>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          &copy; {new Date().getFullYear()} Red Pill Apps LLC. All rights
          reserved.
        </p>
      </main>
    </div>
  );
}
