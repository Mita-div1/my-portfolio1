
import Image from "next/image";

const screenshots = [
  {
    title: "FitLog Home Page",
    bn: "FitLog-এর হোম পেজ",
    src: "/fitlog/FitLog Home Page.png",
    description:
      "The main interface of FitLog provides an organized entry point to the application's exercise and workout-related features.",
  },
  {
    title: "Exercise Details",
    bn: "Exercise Details",
    src: "/fitlog/fitlog-exercise-details.png",
    description:
      "Presents detailed exercise information through a structured and user-friendly interface.",
  },
  {
    title: "Exercise Details — View 2",
    bn: "Exercise Details — Second View",
    src: "/fitlog/fitlog-exercise-details2.png",
    description:
      "Demonstrates another view of the exercise details interface.",
  },
  {
    title: "Exercise Details — View 3",
    bn: "Exercise Details — Third View",
    src: "/fitlog/fitlog-exercise-details3.png",
    description:
      "Showcases additional content from the exercise details section.",
  },
  {
    title: "Exercise Details — View 4",
    bn: "Exercise Details — Fourth View",
    src: "/fitlog/fitlog-exercise-details4.png",
    description:
      "Highlights another part of the exercise information layout.",
  },
  {
    title: "Bicep Curl Exercise",
    bn: "Bicep Curl Exercise Details",
    src: "/fitlog/fitlog-exercise-details-bicep-curl.jpg",
    description:
      "Shows the dedicated details view for the Bicep Curl exercise.",
  },
  {
    title: "Bicep Curl Exercise — View 2",
    bn: "Bicep Curl Exercise — Additional View",
    src: "/fitlog/fitlog-exercise-details-bicep-curl2.png",
    description:
      "Provides another view of the Bicep Curl exercise information.",
  },
  {
    title: "Exercise Library",
    bn: "Exercise Library",
    src: "/fitlog/figlog-library-exercise-cards-list.png",
    description:
      "Displays exercise cards in an organized library layout for convenient browsing.",
  },
  {
    title: "Exercise Library — View 2",
    bn: "Exercise Library — Second View",
    src: "/fitlog/figlog-library-exercise-cards-list2.png",
    description:
      "Shows another portion of the exercise library and its card-based presentation.",
  },
  {
    title: "Exercise Library — View 3",
    bn: "Exercise Library — Third View",
    src: "/fitlog/figlog-library-exercise-cards-list3.png",
    description:
      "Demonstrates additional exercise cards within the library.",
  },
  {
    title: "Exercise Library — View 4",
    bn: "Exercise Library — Fourth View",
    src: "/fitlog/figlog-library-exercise-cards-list4.png",
    description:
      "Presents another view of the exercise library interface.",
  },
  {
    title: "My Plan",
    bn: "My Workout Plan",
    src: "/fitlog/fitlog-my-plan.png",
    description:
      "Introduces the interface for viewing and organizing a workout plan.",
  },
  {
    title: "Active Workout Plan",
    bn: "Active Workout Plan",
    src: "/fitlog/fitlog-my-plan-active.png",
    description:
      "Shows the interface for an active workout plan.",
  },
  {
    title: "Empty Workout Plan",
    bn: "Empty Workout Plan",
    src: "/fitlog/fitlog-my-plan-empty.png",
    description:
      "Demonstrates the empty state when a workout plan has no exercises added.",
  },
  {
    title: "Workout Plan Items",
    bn: "Workout Plan Items",
    src: "/fitlog/fitlog-my-plan-items.png",
    description:
      "Displays the exercises included in a workout plan.",
  },
];

const features = [
  {
    number: "01",
    title: "Exercise Library",
    description:
      "Browse available exercises through an organized, card-based interface that makes exercise discovery straightforward.",
  },
  {
    number: "02",
    title: "Interactive Exercise Details",
    description:
      "Select an exercise to access its detailed information through an interactive interface.",
  },
  {
    number: "03",
    title: "Markdown-Based Exercise Information",
    description:
      "View exercise-specific information in a Markdown section. Users can open or close the section as needed, keeping the interface organized while making details accessible.",
  },
  {
    number: "04",
    title: "Bicep Curl Details",
    description:
      "Explore a dedicated detail view for the Bicep Curl exercise and its associated information.",
  },
  {
    number: "05",
    title: "Workout Planning",
    description:
      "Access the My Plan section to review workout plans and their associated exercises.",
  },
  {
    number: "06",
    title: "Active Workout Plan",
    description:
      "View a dedicated interface representing an active workout plan.",
  },
  {
    number: "07",
    title: "Empty Plan State",
    description:
      "Present a clear empty state when no exercises have been added to a workout plan.",
  },
  {
    number: "08",
    title: "Organized Plan Items",
    description:
      "Review exercises associated with a workout plan through an organized presentation.",
  },
];

const technologies = [
  "Markdown-Based Content",
  "Interactive UI Components",
  "Responsive Interface Design",
];

const learningOutcomes = [
  "Organizing application content into reusable interface sections.",
  "Presenting exercise information through card-based layouts.",
  "Creating interactive exercise detail views.",
  "Displaying Markdown-based content in an accessible format.",
  "Implementing expandable and collapsible content sections.",
  "Designing different views for workout plans and their states.",
  "Improving usability and navigation through structured layouts.",
];

export default function FitLogDetails() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Back to Portfolio Button */}
      <div className="mx-auto w-full max-w-6xl px-6 pt-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-sky-400 hover:text-sky-400"
        >
          ← Back to Portfolio
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-slate-950" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Project Details
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            FitLog
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            An interactive fitness and exercise management application
            designed to help users explore exercises, access detailed
            information, and organize workout plans through a structured
            interface.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://b14-a06-fit-log.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
            >
              Live Demo ↗
            </a>

            <a
              href="https://github.com/Mita-div1/B14-A06-Fit-log"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              GitHub Repository ↗
            </a>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeading eyebrow="Introduction" title="Project Overview" />

        <div className="mt-8 max-w-4xl space-y-5 text-base leading-8 text-slate-300">
          <p>
            FitLog is a fitness-focused web application that brings
            exercise discovery, detailed exercise information, and workout
            planning together in one place.
          </p>

          <p>
            The application provides an organized exercise library,
            interactive detail views, and dedicated workout plan
            interfaces. Its goal is to make exercise-related information
            easier to browse and understand.
          </p>

          <p>
            The project emphasizes clear information presentation,
            interactive components, and a user-friendly browsing
            experience.
          </p>
        </div>
      </section>

      {/* Project Purpose */}
      <section className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHeading eyebrow="Project Goals" title="Project Purpose" />

          <p className="mt-8 max-w-4xl leading-8 text-slate-300">
            The purpose of FitLog is to make exercise information easier
            to explore and workout planning more convenient. By combining
            an exercise library, interactive exercise details, and workout
            plan views, the application offers a structured way to discover
            exercises and review workout activities.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeading eyebrow="What It Offers" title="Key Features" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-blue-500/50"
            >
              <span className="text-sm font-bold text-blue-400">
                {feature.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Exercise Library */}
      <section className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHeading
            eyebrow="Explore Exercises"
            title="Exercise Library"
          />

          <p className="mt-8 max-w-4xl leading-8 text-slate-300">
            The exercise library presents available exercises through an
            organized card-based layout. Users can browse the available
            options, select an exercise, and access its associated
            information through the exercise detail interface.
          </p>
        </div>
      </section>

      {/* Interactive Markdown Details */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeading
          eyebrow="Interactive Experience"
          title="Exercise Details & Markdown Support"
        />

        <div className="mt-8 max-w-4xl space-y-5 leading-8 text-slate-300">
          <p>
            FitLog provides an interactive way to explore exercise
            information. When users click on an exercise, they can access
            its detailed information through a Markdown section.
          </p>

          <p>
            The Markdown section can be opened when details are needed
            and closed when they are no longer required. This expandable
            and collapsible behavior keeps the interface organized while
            allowing users to access relevant information conveniently.
          </p>

          <p>
            This feature demonstrates how interactive UI components can
            make content easier to access without unnecessarily
            overwhelming the page.
          </p>
        </div>
      </section>

      {/* Workout Planning */}
      <section className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHeading
            eyebrow="Workout Organization"
            title="My Plan & Workout Management"
          />

          <div className="mt-8 max-w-4xl space-y-5 leading-8 text-slate-300">
            <p>
              The My Plan section presents workout plans and their
              associated exercises in an organized interface. Different
              views represent the main plan, active plans, empty states,
              and workout plan items.
            </p>

            <p>
              The active plan view helps identify an active workout plan,
              while the empty state communicates when no exercises have
              been added. The plan items view presents the exercises
              associated with a workout plan.
            </p>

            <p>
              Together, these views demonstrate structured presentation
              of different workout planning states.
            </p>
          </div>
        </div>
      </section>

      {/* UI / UX */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeading
          eyebrow="Design Approach"
          title="User Interface & Experience"
        />

        <p className="mt-8 max-w-4xl leading-8 text-slate-300">
          FitLog focuses on clear content organization and straightforward
          navigation. The exercise library supports browsing, the
          interactive detail section provides access to exercise
          information, and the workout planning views separate different
          plan states. These elements help create a consistent and
          understandable user experience.
        </p>
      </section>

      {/* Technology Stack */}
      <section className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHeading
            eyebrow="Tools & Implementation"
            title="Technologies & Concepts"
          />

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200"
              >
                {technology}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-400">
            Add the exact frameworks, programming languages, styling
            tools, and other libraries used in your project before
            publishing this section.
          </p>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeading
          eyebrow="Development Experience"
          title="Key Learning Outcomes"
        />

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {learningOutcomes.map((outcome) => (
            <li
              key={outcome}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-900 p-4"
            >
              <span className="mt-1 text-blue-400">✓</span>
              <span className="text-sm leading-7 text-slate-300">
                {outcome}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Screenshot Gallery */}
      <section
        id="screenshots"
        className="border-t border-white/10 bg-slate-900/50"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHeading
            eyebrow="Visual Showcase"
            title="FitLog Project Gallery"
          />

          <p className="mt-6 max-w-3xl leading-8 text-slate-400">
            Explore the application's main interface, exercise library,
            interactive exercise details, and workout planning views.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {screenshots.map((shot) => (
              <article
                key={shot.src}
                className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950 transition hover:border-blue-500/40"
              >
                <div className="relative aspect-video bg-slate-900">
                  <Image
                    src={shot.src}
                    alt={shot.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">
                    {shot.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-blue-300">
                    {shot.bn}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {shot.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Links */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950 to-slate-900 p-8 md:p-12">
          <SectionHeading eyebrow="Explore the Project" title="Project Links" />

          <p className="mt-5 max-w-2xl leading-8 text-slate-300">
            Explore the live application or visit the GitHub repository
            to review the project's source code.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://b14-a06-fit-log.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
            >
              View Live Project ↗
            </a>

            <a
              href="https://github.com/Mita-div1/B14-A06-Fit-log"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              View Source Code ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        FitLog — Fitness & Exercise Management Project
      </footer>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
