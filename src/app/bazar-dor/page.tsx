

const features = [
  {
    title: "পণ্য খোঁজা ও অনুসন্ধান",
    en: "Product Search",
    description:
      "চাল, ডাল, সবজি, মাছ, মাংস, আলু, ডিম, তেল ও মসলার মতো নিত্যপ্রয়োজনীয় পণ্য সার্চ করে খুঁজে পাওয়া যায়।",
  },
  {
    title: "ক্যাটাগরি অনুযায়ী পণ্য দেখা",
    en: "Product Categories",
    description:
      "ডাল, চাল, তেল, সবজি, মাছ, ডিম ও দুগ্ধজাত পণ্য এবং মসলার মতো ক্যাটাগরি থেকে প্রয়োজনীয় পণ্য নির্বাচন করা যায়। পণ্যের তালিকা দাম অনুযায়ী সাজানোর সুবিধাও রয়েছে।",
  },
  {
    title: "১২টি বাজারে দামের তুলনা",
    en: "12-Bazaar Price Comparison",
    description:
      "একটি পণ্যের বিস্তারিত পেজে গিয়ে ১২টি ভিন্ন বাজারে সেই পণ্যের তালিকাভুক্ত দাম তুলনা করা যায়। এতে বাজারভেদে দামের পার্থক্য বোঝা সহজ হয়।",
  },
  {
    title: "সর্বনিম্ন, সর্বোচ্চ ও গড় দাম",
    en: "Minimum, Maximum & Average Price",
    description:
      "পণ্যের বিস্তারিত অংশে প্রদর্শিত সর্বনিম্ন, সর্বোচ্চ ও গড় দামের তথ্য ব্যবহার করে পণ্যের মূল্যসীমা সম্পর্কে ধারণা পাওয়া যায়।",
  },
  {
    title: "দাম বৃদ্ধি ও হ্রাস",
    en: "Price Changes",
    description:
      "যেসব পণ্যের দাম বেড়েছে বা কমেছে, সেগুলো আলাদাভাবে দেখা যায়। আগের দিনের তুলনায় দামের পরিবর্তন এবং উপলব্ধ পূর্ববর্তী দামের তথ্যও পর্যালোচনা করা যায়।",
  },
  {
    title: "সুরক্ষিত পণ্যের বিস্তারিত পেজ",
    en: "Protected Product Details",
    description:
      "পণ্যের বিস্তারিত পেজে প্রবেশের জন্য সাইন-ইন প্রয়োজন। এর মাধ্যমে নির্দিষ্ট পেজে প্রবেশের ক্ষেত্রে ব্যবহারকারীর অনুমোদন যাচাই করা হয়।",
  },
  {
    title: "ব্যবহারকারীর অ্যাকাউন্ট",
    en: "Authentication",
    description:
      "অ্যাপ্লিকেশনে সাইন-ইন ও সাইন-আপের ব্যবস্থা রয়েছে, যার মাধ্যমে ব্যবহারকারীরা নিজেদের অ্যাকাউন্টে প্রবেশ করতে পারেন।",
  },
  {
    title: "প্রোফাইলের নাম পরিবর্তন",
    en: "Profile Name Update",
    description:
      "ব্যবহারকারী নিজের প্রোফাইলের নাম পরিবর্তন করতে পারেন। ফলে প্রোফাইলের তথ্য প্রয়োজন অনুযায়ী হালনাগাদ করা যায়।",
  },
];

const categories = [
  {
    name: "ডাল",
    en: "Lentils",
    description: "ডালের ক্যাটাগরি ও উপলব্ধ ডালজাত পণ্যের তালিকা।",
  },
  {
    name: "চাল",
    en: "Rice",
    description: "বিভিন্ন ধরনের চালের পণ্য এবং সংশ্লিষ্ট দামের তথ্য।",
  },
  {
    name: "তেল",
    en: "Oil",
    description: "তেলের ক্যাটাগরি থেকে পণ্যের তালিকা ও উপলব্ধ দাম দেখা।",
  },
  {
    name: "সবজি",
    en: "Vegetables",
    description: "প্রয়োজনীয় সবজির পণ্য খুঁজে দেখা ও দাম সম্পর্কে জানা।",
  },
  {
    name: "মাছ",
    en: "Fish",
    description: "মাছের ক্যাটাগরি ও উপলব্ধ মাছের পণ্যের তালিকা।",
  },
  {
    name: "ডিম ও দুগ্ধজাত পণ্য",
    en: "Eggs & Dairy",
    description: "ডিম ও দুগ্ধজাত পণ্য এক জায়গায় সাজানো হয়েছে।",
  },
  {
    name: "মসলা",
    en: "Spices",
    description: "বিভিন্ন মসলার ক্যাটাগরি ও পণ্যের তালিকা।",
  },
];

const screenshots = [
  {
    title: "Bazar Dor-এর হোম পেজ",
    en: "Bazar Dor Home Page",
    src: "/projects/bazar-dor/Bazar Dor-এর হোম পেজ.png",
  },
  {
    title: "বিভিন্ন বাজারের দামের তুলনা",
    en: "Market Price Comparison",
    src: "/projects/bazar-dor/বিভিন্ন বাজারের দামের তুলনা.png",
  },
  {
    title: "বিভিন্ন বাজারের দামের তুলনা — পরবর্তী অংশ.png",
    en: "Market Price Comparison — Continued",
    src: "/projects/bazar-dor/বিভিন্ন বাজারের দামের তুলনা — পরবর্তী অংশ.png",
  },
  {
    title: "সাইন-ইন ও সাইন-আপ পেজ.png",
    en: "Sign In and Sign Up Page",
    src: "/projects/bazar-dor/সাইন-ইন ও সাইন-আপ পেজ.png",
  },
  {
    title: "চালের পণ্যের তালিকা — প্রথম অংশ",
    en: "Rice Products — First Section",
    src: "/projects/bazar-dor/চালের পণ্যের তালিকা — প্রথম অংশ.png",
  },
  {
    title: "চালের প্রোফাইল পেজ",
    en: "Rice Profile Page",
    src: "/projects/bazar-dor/চালের প্রোফাইল পেজ.png",
  },
  {
    title: "ডাল ক্যাটাগরির পেজ",
    en: "Lentil Category Page",
    src: "/projects/bazar-dor/ডাল ক্যাটাগরির পেজ.png",
  },
  {
    title: "ডালের পণ্যের তালিকা",
    en: "Lentil Products",
    src: "/projects/bazar-dor/ডালের পণ্যের তালিকা.png",
  },
  {
    title: "তেল ক্যাটাগরির পেজ",
    en: "Oil Category Page",
    src: "/projects/bazar-dor/তেল ক্যাটাগরির পেজ.png",
  },
  {
    title: "তেলের পণ্যের তালিকা",
    en: "Oil Products",
    src: "/projects/bazar-dor/তেলের পণ্যের তালিকা.png",
  },
  {
    title: "সবজি ক্যাটাগরির পেজ",
    en: "Vegetable Category Page",
    src: "/projects/bazar-dor/সবজি ক্যাটাগরির পেজ.png",
  },
  {
    title: "সবজির পণ্যের তালিকা",
    en: "Vegetable Products",
    src: "/projects/bazar-dor/সবজির পণ্যের তালিকা.png",
  },
  {
    title: "মাছ ক্যাটাগরির পেজ",
    en: "Fish Category Page",
    src: "/projects/bazar-dor/মাছ ক্যাটাগরির পেজ.png",
  },
  {
    title: "মাছের পণ্যের তালিকা",
    en: "Fish Products",
    src: "/projects/bazar-dor/মাছের পণ্যের তালিকা.png",
  },
  {
    title: "মাংস ক্যাটাগরির পেজ",
    en: "Meat Category Page",
    src: "/projects/bazar-dor/মাংস ক্যাটাগরির পেজ.png",
  },
  {
    title: "মাংস পণ্যের তালিকা",
    en: "Meat Products",
    src: "/projects/bazar-dor/মাংস পণ্যের তালিকা.png",
  },
  {
    title: "ডিম ও দুগ্ধজাত পণ্যের ক্যাটাগরি",
    en: "Eggs and Dairy Category",
    src: "/projects/bazar-dor/ডিম ও দুগ্ধজাত পণ্যের ক্যাটাগরি.png",
  },
  {
    title: "ডিম ও দুগ্ধজাত পণ্যের তালিকা",
    en: "Eggs and Dairy Products",
    src: "/projects/bazar-dor/ডিম ও দুগ্ধজাত পণ্যের তালিকা.png",
  },
  {
    title: "মসলা ক্যাটাগরির পেজ",
    en: "Spice Category Page",
    src: "/projects/bazar-dor/মসলা ক্যাটাগরির পেজ.png",
  },
  {
    title: "মসলার পণ্যের তালিকা",
    en: "Spice Products",
    src: "/projects/bazar-dor/মসলার পণ্যের তালিকা.png",
  },
  {
    title: "যেসব পণ্যের দাম কমেছে",
    en: "Products with Price Drops",
    src: "/projects/bazar-dor/যেসব পণ্যের দাম কমেছে.png",
  },
  {
    title: "যেসব পণ্যের দাম কমেছে — দ্বিতীয় ভিউ",
    en: "Products with Price Drops — View 2",
    src: "/projects/bazar-dor/যেসব পণ্যের দাম কমেছে2.png",
  },
  {
    title: "যেসব পণ্যের দাম কমেছে — তৃতীয় ভিউ",
    en: "Products with Price Drops — View 3",
    src: "/projects/bazar-dor/যেসব পণ্যের দাম কমেছে3.png",
  },
  {
    title: "যেসব পণ্যের দাম কমেছে — চতুর্থ ভিউ",
    en: "Products with Price Drops — View 4",
    src: "/projects/bazar-dor/যেসব পণ্যের দাম কমেছে4.png",
  },
  {
    title: "যেসব পণ্যের দাম বেড়েছে",
    en: "Products with Price Increases",
    src: "/projects/bazar-dor/যেসব পণ্যের দাম বেড়েছে.png",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "DaisyUI",
  "MongoDB",
  "Better Auth",
];

export default function BazarDorDetails() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
        <a
          href="/#projects"
          className="text-sm text-blue-400 hover:text-blue-300"
        >
          ← Back to Portfolio
        </a>

        <header className="py-12 md:py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Project 01 · Grocery Price Comparison
          </p>
          <h1 className="mb-5 text-4xl font-bold md:text-6xl">
            Bazar Dor
          </h1>
          <p className="mb-6 text-xl text-slate-300 md:text-2xl">
            নিত্যপ্রয়োজনীয় পণ্যের দাম এক নজরে
          </p>

          <div className="max-w-4xl space-y-5 text-base leading-8 text-slate-300">
            <p>
              Bazar Dor একটি ওয়েবভিত্তিক গ্রোসারি প্রাইস কম্প্যারিজন
              অ্যাপ্লিকেশন। এর মাধ্যমে ব্যবহারকারীরা নিত্যপ্রয়োজনীয়
              পণ্যের দাম খুঁজে দেখতে এবং ১২টি ভিন্ন বাজারে একই পণ্যের
              দামের পার্থক্য তুলনা করতে পারেন।
            </p>
            <p>
              পণ্যগুলো বিভিন্ন ক্যাটাগরিতে সাজানো হয়েছে, যাতে চাল,
              ডাল, তেল, সবজি, মাছ, ডিম ও দুগ্ধজাত পণ্য এবং মসলা সহজে
              খুঁজে পাওয়া যায়। পাশাপাশি দাম বৃদ্ধি, দাম হ্রাস এবং
              পণ্যের বিস্তারিত দামের তথ্য দেখার সুবিধাও রয়েছে।
            </p>
            <p>
              অ্যাপ্লিকেশনটিতে ব্যবহারকারীর অ্যাকাউন্ট, সুরক্ষিত
              পেজ এবং প্রোফাইলের নাম পরিবর্তনের সুবিধাও রাখা হয়েছে।
              এর লক্ষ্য হলো বাজারদরের তথ্যকে আরও সহজে দেখা ও বোঝার
              উপযোগী করে উপস্থাপন করা।
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://b14-a07-bazar-dor-sigma.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
            >
              Live Demo ↗
            </a>
            <a
              href="https://github.com/Mita-div1/B14-A07-Bazar-Dor"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold hover:bg-slate-800"
            >
              GitHub Repository ↗
            </a>
          </div>
        </header>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Project Overview
          </p>
          <h2 className="mb-5 text-2xl font-bold md:text-3xl">
            প্রজেক্টের উদ্দেশ্য ও কার্যপ্রণালি
          </h2>
          <div className="max-w-4xl space-y-5 leading-8 text-slate-300">
            <p>
              এই প্রজেক্টে পণ্যের তথ্য ক্যাটাগরিভিত্তিক সাজানো হয়েছে।
              ব্যবহারকারীরা সার্চের মাধ্যমে প্রয়োজনীয় পণ্য খুঁজতে,
              ক্যাটাগরির তালিকা দেখতে এবং নির্দিষ্ট পণ্যের বিস্তারিত
              পেজে প্রবেশ করতে পারেন।
            </p>
            <p>
              পণ্যের বিস্তারিত পেজে বিভিন্ন বাজারের দামের তুলনা
              উপস্থাপন করা হয়। সর্বনিম্ন, সর্বোচ্চ ও গড় দামের তথ্য
              উপলব্ধ থাকলে সেগুলোর মাধ্যমেও পণ্যের দামের পরিসর
              সম্পর্কে ধারণা পাওয়া যায়।
            </p>
            <p>
              দাম বেড়েছে বা কমেছে এমন পণ্যের তালিকা এবং পূর্ববর্তী
              দামের তুলনা ব্যবহারকারীদের বাজারদরের পরিবর্তন বুঝতে
              সাহায্য করে।
            </p>
          </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Main Features
          </p>
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">
            Bazar Dor-এর প্রধান ফিচারসমূহ
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <span className="mb-4 block text-sm font-semibold text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="mb-3 text-sm text-blue-300">
                  {feature.en}
                </p>
                <p className="leading-7 text-slate-300">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Product Categories
          </p>
          <h2 className="mb-5 text-2xl font-bold md:text-3xl">
            পণ্যের ক্যাটাগরিসমূহ
          </h2>
          <p className="mb-8 max-w-4xl leading-8 text-slate-300">
            প্রয়োজনীয় পণ্য সহজে খুঁজে পাওয়ার জন্য অ্যাপ্লিকেশনে
            আলাদা ক্যাটাগরি রাখা হয়েছে। প্রতিটি ক্যাটাগরিতে প্রবেশ
            করে সংশ্লিষ্ট পণ্যের তালিকা দেখা যায়।
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <article
                key={category.en}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <h3 className="mb-2 font-semibold">
                  {category.name}
                </h3>
                <p className="mb-3 text-sm text-blue-300">
                  {category.en}
                </p>
                <p className="text-sm leading-7 text-slate-300">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-9">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Price Analysis
          </p>
          <h2 className="mb-5 text-2xl font-bold md:text-3xl">
            বাজারদর ও মূল্য বিশ্লেষণ
          </h2>
          <p className="max-w-4xl leading-8 text-slate-300">
            Bazar Dor-এর অন্যতম গুরুত্বপূর্ণ সুবিধা হলো বিভিন্ন
            বাজারের দামের তুলনা। একটি পণ্যের দাম বাজারভেদে কতটা
            আলাদা, কোন পণ্যের দাম বেড়েছে বা কমেছে এবং উপলব্ধ
            সর্বনিম্ন, সর্বোচ্চ ও গড় দাম কত—এসব তথ্য পণ্যের
            বিস্তারিত অংশে উপস্থাপন করা হয়।
          </p>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Project Gallery
          </p>
          <h2 className="mb-5 text-2xl font-bold md:text-3xl">
            প্রজেক্টের বিভিন্ন পেজ
          </h2>
          <p className="mb-8 max-w-4xl leading-8 text-slate-300">
            নিচের গ্যালারিতে হোমপেজ, পণ্যের ক্যাটাগরি, পণ্যের তালিকা,
            বাজারের দামের তুলনা এবং অ্যাকাউন্ট ব্যবস্থাপনার
            স্ক্রিনশটগুলো দেখানো হবে।
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {screenshots.map((shot) => (
              <figure
                key={shot.src}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
              >
                <img
                  src={shot.src}
                  alt={shot.en}
                  loading="lazy"
                  className="h-auto w-full"
                />
                <figcaption className="p-4">
                  <h3 className="font-semibold">{shot.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {shot.en}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Technology Stack
          </p>
          <h2 className="mb-5 text-2xl font-bold md:text-3xl">
            ব্যবহৃত প্রযুক্তি
          </h2>
          <p className="mb-6 max-w-4xl leading-8 text-slate-300">
            প্রজেক্টটির ইন্টারফেস, অ্যাপ্লিকেশন কাঠামো, ডেটা
            ব্যবস্থাপনা এবং ব্যবহারকারীর অ্যাকাউন্টের সুবিধা
            তৈরিতে নিচের প্রযুক্তিগুলো ব্যবহার করা হয়েছে।
          </p>
          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-2xl border border-slate-800 p-6 md:p-9">
          <h2 className="mb-5 text-2xl font-bold md:text-3xl">
            প্রজেক্টটি দেখুন
          </h2>
          <p className="mb-6 max-w-4xl leading-8 text-slate-300">
            সরাসরি ওয়েব অ্যাপ্লিকেশন ব্যবহার করে এর পেজ ও উপলব্ধ
            ফিচারগুলো দেখতে পারেন। GitHub রিপোজিটরিতে প্রজেক্টের
            সোর্স কোডও পর্যালোচনা করতে পারবেন।
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://b14-a07-bazar-dor-sigma.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
            >
              Live Demo ↗
            </a>
            <a
              href="https://github.com/Mita-div1/B14-A07-Bazar-Dor"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold hover:bg-slate-800"
            >
              GitHub Repository ↗
            </a>
          </div>
        </section>

        <footer className="border-t border-slate-800 pt-8">
          <a
            href="/#projects"
            className="text-blue-400 hover:text-blue-300"
          >
            ← Back to Portfolio
          </a>
        </footer>
      </div>
    </main>
  );
}
