
import Image from "next/image";

const screenshots = [
  {
    title: "Dev Stack Home Page",
    src: "/projects/dev-stack/Dev%20Stack%20Home%20Page.png",
    description: "The main page of the Dev Stack project.",
  },
  {
    title: "Multiple Selected Technologies",
    src: "/projects/dev-stack/dev-stack-multiple-selected.png",
    description: "A screenshot showing multiple selected technology options.",
  },
  {
    title: "Technology Section",
    src: "/projects/dev-stack/dev-stack-technologies.png",
    description: "The technologies displayed in the application.",
  },
  {
    title: "Technology Section — View 2",
    src: "/projects/dev-stack/dev-stack-technologies2.png",
    description: "An additional view of the technology section.",
  },
  {
    title: "Technology Section — View 3",
    src: "/projects/dev-stack/dev-stack-technologies3.png",
    description: "Another view of the technology section.",
  },
  {
    title: "Technology Section — View 4",
    src: "/projects/dev-stack/dev-stack-technologies4.png",
    description: "A further view of the technology section.",
  },
  {
    title: "React Toast Notification",
    src: "/projects/dev-stack/dev-stack-toast-react.png",
    description: "A screenshot of the React-related toast notification.",
  },
  {
    title: "Remove Selection Toast",
    src: "/projects/dev-stack/dev-stack-remove-toast.png",
    description: "A screenshot of the notification for removing a selection.",
  },
  {
    title: "Footer",
    src: "/projects/dev-stack/dev-stack-footer.png",
    description: "The footer section of the application.",
  },
];

const features = [
  {
    title: "Delayed Page Loading",
    description:
      "The project demonstrates a page that takes some time to load before its content becomes available.",
  },
  {
    title: "Markdown Content",
    description:
      "Markdown content is displayed after loading, making formatted information readable on the page.",
  },
  {
    title: "Technology Selection",
    description:
      "The interface presents technology options for users to explore and select.",
  },
  {
    title: "Multiple Selection",
    description:
      "The project includes a state in which multiple technology options are selected.",
  },
  {
    title: "Remove Selection",
    description:
      "The interface includes a removal interaction for selected technology options.",
  },
  {
    title: "Toast Notifications",
    description:
      "The project includes toast notifications for interactions, as shown in the supplied screenshots.",
  },
];

const learningOutcomes = [
  "Displaying Markdown content",
  "Understanding delayed page loading",
  "Organizing content for readability",
  "Working with technology selection interfaces",
  "Handling multiple selected items",
  "Displaying toast notifications",
  "Presenting project features through a visual interface",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
        {eyebrow}
      </p>

      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-7 text-slate-400">{description}</p>
      )}
    </div>
  );
}

export default function DevStackPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
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
        <div className="absolute inset-0 bg-gradient-to-br from-sky-950/60 via-slate-950 to-indigo-950/40" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Project Details
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Dev Stack
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Dev Stack demonstrates delayed page loading and Markdown content
            display, along with technology selection and toast notifications.
            The project highlights content presentation and user interaction
            through its interface.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="https://lighthearted-scone-30ae24.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400"
            >
              Live Demo ↗
            </a>

            <a
              href="https://github.com/Mita-div1/b14-as-05-div-stack-mou"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-300"
            >
              GitHub Repository ↗
            </a>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Introduction"
          title="Project Overview"
          description="An overview of the Dev Stack application and its main purpose."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h3 className="mb-4 text-xl font-bold text-white">
              About the Project
            </h3>

            <p className="leading-8 text-slate-400">
              Dev Stack is a web project that demonstrates a delayed page
              loading experience followed by the display of Markdown content.
              Its interface also includes technology selection, multiple
              selected items, and toast notification examples.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h3 className="mb-4 text-xl font-bold text-white">
              Project Purpose
            </h3>

            <p className="leading-8 text-slate-400">
              The main purpose of the project is to show how a page can load
              before Markdown content is displayed. It also presents the
              technology-selection interface and notification behavior
              illustrated in the project screenshots.
            </p>
          </article>
        </div>
      </section>

      {/* Main Functionality */}
      <section className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Core Functionality"
            title="Delayed Loading and Markdown"
            description="The main concept highlighted in the project is displaying Markdown content after the page has taken some time to load."
          />

          <div className="rounded-2xl border border-white/10 bg-slate-950 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white">
              Markdown Content Display
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              Markdown is a text-formatting syntax that can organize content
              using headings, paragraphs, lists, links, and other formatting.
              In this project, the loading experience and subsequent Markdown
              content display are the main points of interest.
            </p>

            <div className="mt-6 rounded-xl border border-sky-400/20 bg-sky-400/5 p-5">
              <p className="font-semibold text-sky-300">
                Main Project Concept
              </p>
              <p className="mt-2 leading-7 text-slate-300">
                Page loading → Markdown content display
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Project Highlights"
          title="Key Features"
          description="The main concepts and interface elements represented in the project."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-sky-400/50"
            >
              <span className="mb-5 flex size-11 items-center justify-center rounded-xl bg-sky-400/10 font-bold text-sky-300">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mb-3 text-lg font-bold text-white">
                {feature.title}
              </h3>

              <p className="leading-7 text-slate-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Technology Selection and Notifications */}
      <section className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Interface Behavior"
            title="Technology Selection and Notifications"
            description="The supplied screenshots illustrate technology selection, removal, and toast notification states."
          />

          <div className="space-y-5">
            <article className="rounded-2xl border border-white/10 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white">
                Multiple Technology Selection
              </h3>

              <p className="mt-3 leading-8 text-slate-400">
                The multiple-selection screenshot shows the interface with
                several technology options selected.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white">
                Removing Selected Items
              </h3>

              <p className="mt-3 leading-8 text-slate-400">
                The removal screenshot documents the interface state
                associated with removing a selected item.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white">
                Toast Notifications
              </h3>

              <p className="mt-3 leading-8 text-slate-400">
                The supplied toast screenshots illustrate notification
                feedback associated with interactions in the application.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Visual Showcase"
          title="Project Gallery"
          description="Explore screenshots of the home page, technology section, selections, notifications, and footer."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {screenshots.map((screenshot) => (
            <figure
              key={screenshot.src}
              className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900"
            >
              <div className="relative aspect-video bg-slate-950">
                <Image
                  src={screenshot.src}
                  alt={screenshot.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>

              <figcaption className="p-5">
                <h3 className="font-semibold text-white">
                  {screenshot.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {screenshot.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Experience"
            title="Learning Outcomes"
            description="The development concepts highlighted by the project."
          />

          <ul className="grid gap-4 sm:grid-cols-2">
            {learningOutcomes.map((outcome) => (
              <li
                key={outcome}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-950 p-4"
              >
                <span className="mt-1 text-sky-400">✓</span>
                <span className="leading-7 text-slate-300">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Project Links */}
      <section className="bg-gradient-to-br from-sky-950/40 to-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20">
          <SectionHeading
            eyebrow="Explore the Project"
            title="See Dev Stack in Action"
            description="Visit the deployed application or explore the source repository."
          />

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://lighthearted-scone-30ae24.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400"
            >
              Open Live Demo ↗
            </a>

            <a
              href="https://github.com/Mita-div1/b14-as-05-div-stack-mou"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-300"
            >
              View GitHub Repository ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-500">
        Dev Stack — Project Showcase
      </footer>
    </main>
  );
}
