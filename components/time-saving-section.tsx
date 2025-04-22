import { Check } from "lucide-react"

export default function TimeSavingSection() {
  return (
    <section className="w-full py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-5xl">
        {/* Heading and intro text */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">The time you&apos;ll be saving</h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            The launchpad is built by engineers, for engineers. We&apos;ve spent two years in the trenches, building AI
            systems for clients across industries. We&apos;ve made all the mistakes, solved all the problems, and
            packaged everything we learned into the GenAI Launchpad.
          </p>
        </div>

        {/* Time saving card */}
        <div className="bg-gray-900 text-white rounded-lg overflow-hidden mb-16">
          <div className="p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-1">
              Save 90+ hours <span className="text-base font-normal text-gray-400">per project</span>
            </h3>

            <div className="border-t border-gray-700 my-6"></div>

            <p className="mb-8 text-gray-300">
              We&apos;ve done the heavy lifting, made all the mistakes, and fixed them, so you don&apos;t have to.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    <span className="font-medium">16 hrs</span> saved on Docker configuration
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    <span className="font-medium">4 hrs</span> saved on FastAPI setup
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    <span className="font-medium">4 hrs</span> saved on PostgreSQL integration
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    <span className="font-medium">8 hrs</span> saved on Redis & Celery setup
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    <span className="font-medium">40 hrs</span> saved on AI pipeline configuration
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    <span className="font-medium">2 hrs</span> saved on prompt management
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    <span className="font-medium">2 hrs</span> saved on env variable setup
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    <span className="font-medium">16 hrs</span> saved on deployment troubleshooting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Target audience cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h4 className="font-medium text-lg">For AI Engineers</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Who've muttered "Not this again" while setting up yet another project environment and running into
              deployment issues.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 9V5c0-1.1.9-2 2-2h4" />
                  <path d="M2 13v4c0 1.1.9 2 2 2h4" />
                  <path d="M22 9V5c0-1.1-.9-2-2-2h-4" />
                  <path d="M22 13v4c0 1.1-.9 2-2 2h-4" />
                  <path d="M12 22v-4" />
                  <path d="M12 6V2" />
                </svg>
              </div>
              <h4 className="font-medium text-lg">For AI Startups</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Constantly racing against the clock, watching their runway shrink and competition grow with each passing
              day.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4 className="font-medium text-lg">For Enterprise Teams</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Yearning to infuse AI into their operations, but are stuck in the mud with legacy systems and processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
