export default function GuidesPage() {
  return (
    <div className="flex min-h-screen bg-white text-black">
      <main className="mx-auto max-w-6xl flex-1 px-4 py-8 sm:px-6 md:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">MonoUI Guides</h1>
          <p className="text-base text-gray-600 sm:text-lg">Explore practical usage patterns and UI styling best practices for building modern interfaces.</p>
        </div>

        <div className="space-y-12">
          <section className="space-y-8 rounded-2xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
              <form className="flex w-full max-w-lg flex-col gap-6 rounded-md border border-neutral-300 bg-neutral-100 p-6 shadow dark:border-neutral-700 dark:bg-neutral-900">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Sign In</h2>
                </div>

                <div className="w-full">
                  <label htmlFor="signin-email" className="block text-sm text-black/50 dark:text-white/50">
                    Email
                  </label>
                  <input
                    type="email"
                    id="signin-email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className="mt-1 block w-full rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm placeholder-black/50 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-white/50"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="signin-password" className="block text-sm text-black/50 dark:text-white/50">
                    Password
                  </label>
                  <input
                    type="password"
                    id="signin-password"
                    name="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    required
                    className="mt-1 block w-full rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm placeholder-black/50 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-white/50"
                  />
                </div>

                <div className="flex items-center justify-between gap-8">
                  <label htmlFor="remember-me" className="inline-flex items-center gap-2">
                    <input type="checkbox" id="remember-me" name="remember" className="size-4 rounded-lg border border-neutral-300 accent-black shadow-sm dark:border-neutral-700 dark:accent-white" />
                    <span className="text-sm text-black dark:text-white">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-black/50 dark:text-white/50">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-black transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
                >
                  Submit
                </button>
              </form>

              <form className="flex w-full max-w-xl flex-col gap-6 rounded-md border border-neutral-300 bg-neutral-100 p-6 shadow dark:border-neutral-700 dark:bg-neutral-900">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Register</h2>
                </div>

                <div className="w-full">
                  <label htmlFor="email" className="block text-sm text-black/50 dark:text-white/50">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className="mt-1 block w-full rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm placeholder-black/50 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-white/50"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="password" className="block text-sm text-black/50 dark:text-white/50">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="new-password"
                    placeholder="Password"
                    required
                    className="mt-1 block w-full rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm placeholder-black/50 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-white/50"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-black transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
                >
                  Register
                </button>

                <div className="border-t border-neutral-300 dark:border-neutral-700"></div>

                <p className="text-center text-sm text-black/50 dark:text-white/50">Or sign in with</p>

                <div className="flex flex-col gap-2">
                  {/* GitHub Button */}
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-black transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
                  >
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      />
                    </svg>
                    GitHub
                  </button>

                  {/* Google Button */}
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-black transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
                  >
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                      />
                    </svg>
                    Google
                  </button>

                  {/* Apple Button */}
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-black transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
                  >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                    Apple
                  </button>
                </div>
              </form>

              <div className="col-span-full rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA] p-5 text-[#111] sm:p-6">
                <h2 className="mb-2 text-lg font-semibold sm:text-xl">⚡ Light Mode</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-[#E5E5E5]">
                    <thead>
                      <tr className="*:font-medium *:text-[#111]">
                        <th className="px-3 py-2 whitespace-nowrap">Usage</th>
                        <th className="px-3 py-2 whitespace-nowrap">Classname</th>
                        <th className="px-3 py-2 whitespace-nowrap">Reference</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E5E5]">
                      <tr className="*:text-[#111] *:first:font-medium">
                        <td className="px-3 py-2 whitespace-nowrap">Background</td>
                        <td className="px-3 py-2 whitespace-nowrap">bg-neutral-100</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <div className="h-8 w-8 rounded-lg border border-[#E5E5E5] bg-[#FAFAFA]" />
                        </td>
                      </tr>
                      <tr className="*:text-[#111] *:first:font-medium">
                        <td className="px-3 py-2 whitespace-nowrap">Text</td>
                        <td className="px-3 py-2 whitespace-nowrap">text-black</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <div className="h-8 w-8 rounded-lg border border-[#444] bg-[#111111]" />
                        </td>
                      </tr>
                      <tr className="*:text-[#111] *:first:font-medium">
                        <td className="px-3 py-2 whitespace-nowrap">Subtext</td>
                        <td className="px-3 py-2 whitespace-nowrap">text-black/50</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <div className="h-8 w-8 rounded-lg border border-[#CCC] bg-[#888888]" />
                        </td>
                      </tr>
                      <tr className="*:text-[#111] *:first:font-medium">
                        <td className="px-3 py-2 whitespace-nowrap">Border</td>
                        <td className="px-3 py-2 whitespace-nowrap">border-neutral-300</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <div className="h-8 w-8 rounded-lg border border-[#D5D5D5] bg-[#E5E5E5]" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-span-full rounded-2xl border border-[#333] bg-[#0A0A0A] p-5 text-[#F5F5F5] sm:p-6">
                <h2 className="mb-2 text-lg font-semibold sm:text-xl">⚡ Dark Mode</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-[#333]">
                    <thead>
                      <tr className="*:font-medium *:text-[#F5F5F5]">
                        <th className="px-3 py-2 whitespace-nowrap">Usage</th>
                        <th className="px-3 py-2 whitespace-nowrap">Classname</th>
                        <th className="px-3 py-2 whitespace-nowrap">Reference</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#333]">
                      <tr className="*:text-[#F5F5F5] *:first:font-medium">
                        <td className="px-3 py-2 whitespace-nowrap">Background</td>
                        <td className="px-3 py-2 whitespace-nowrap">bg-neutral-900</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <div className="h-8 w-8 rounded-lg border border-[#333] bg-[#0A0A0A]" />
                        </td>
                      </tr>
                      <tr className="*:text-[#F5F5F5] *:first:font-medium">
                        <td className="px-3 py-2 whitespace-nowrap">Text</td>
                        <td className="px-3 py-2 whitespace-nowrap">text-white</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <div className="h-8 w-8 rounded-lg border border-[#999] bg-[#F5F5F5]" />
                        </td>
                      </tr>
                      <tr className="*:text-[#F5F5F5] *:first:font-medium">
                        <td className="px-3 py-2 whitespace-nowrap">Subtext</td>
                        <td className="px-3 py-2 whitespace-nowrap">text-white/50</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <div className="h-8 w-8 rounded-lg border border-[#777] bg-[#B0B0B0]" />
                        </td>
                      </tr>
                      <tr className="*:text-[#F5F5F5] *:first:font-medium">
                        <td className="px-3 py-2 whitespace-nowrap">Border</td>
                        <td className="px-3 py-2 whitespace-nowrap">border-neutral-700</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <div className="h-8 w-8 rounded-lg border border-[#444] bg-[#333333]" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-span-full rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA] p-5 text-[#111] sm:p-6">
                <h2 className="mb-2 text-lg font-semibold sm:text-xl">👻 Ghost Button</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-[#E5E5E5]">
                    <thead>
                      <tr className="*:font-medium *:text-[#111]">
                        <th className="px-3 py-2 whitespace-nowrap">Usage</th>
                        <th className="px-3 py-2 whitespace-nowrap">Classname</th>
                        <th className="px-3 py-2 whitespace-nowrap">Reference</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E5E5]">
                      <tr className="*:text-[#111] *:first:font-medium">
                        <td className="px-3 py-2 whitespace-nowrap">Text</td>
                        <td className="px-3 py-2 whitespace-nowrap">text-black dark:text-white</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <div className="h-8 w-8 rounded-lg border border-transparent bg-[#FAFAFA] dark:bg-[#0A0A0A]" />
                        </td>
                      </tr>
                      <tr className="*:text-[#111] *:first:font-medium">
                        <td className="px-3 py-2 whitespace-nowrap">Border</td>
                        <td className="px-3 py-2 whitespace-nowrap">border-neutral-300 dark:border-neutral-700</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <div className="h-8 w-8 rounded-lg border border-neutral-300 bg-[#FAFAFA] dark:border-neutral-700 dark:bg-[#0A0A0A]" />
                        </td>
                      </tr>
                      <tr className="*:text-[#111] *:first:font-medium">
                        <td className="px-3 py-2 whitespace-nowrap">Hover Background</td>
                        <td className="px-3 py-2 whitespace-nowrap">hover:bg-neutral-200 dark:hover:bg-neutral-800</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <div className="h-8 w-8 rounded-lg border border-neutral-300 bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
