import {
  ChevronRight,
  Code2,
  Play,
  Star,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { onBoardUser } from "../../modules/auth/actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  await onBoardUser();

  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Hands-On Practice",
      description:
        "Tackle authentic coding scenarios and receive immediate validation on your code.",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Performance Tracking",
      description:
        "Visualize your growth journey with comprehensive stats and badge rewards.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description:
        "Connect with a vast network of programmers to collaborate and exchange ideas.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Validation",
      description:
        "Understand your mistakes with step-by-step solution breakdowns and hints.",
    },
  ];

  const stats = [
    { number: "100K+", label: "Code Submissions" },
    { number: "20K+", label: "Community Members" },
    { number: "35+", label: "Languages Supported" },
    { number: "95%", label: "Completion Rate" },
  ];

  const problemCategories = [
    {
      level: "Foundational",
      title: "Start Here",
      description:
        "Build a strong base with fundamental syntax and logic puzzles.",
      count: "600+ Challenges",
      color: "emerald",
      bgClass: "bg-emerald-50 dark:bg-emerald-900/20",
      textClass: "text-emerald-900 dark:text-emerald-100",
      borderClass: "border-emerald-200 dark:border-emerald-800",
      hoverClass: "hover:bg-emerald-100 dark:hover:bg-emerald-900/40",
      badgeClass:
        "bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200",
    },
    {
      level: "Intermediate",
      title: "Level Up",
      description:
        "Dive deeper into algorithms and optimize your solution efficiency.",
      count: "750+ Challenges",
      color: "indigo",
      bgClass: "bg-indigo-50 dark:bg-indigo-900/20",
      textClass: "text-indigo-900 dark:text-indigo-100",
      borderClass: "border-indigo-200 dark:border-indigo-800",
      hoverClass: "hover:bg-indigo-100 dark:hover:bg-indigo-900/40",
      badgeClass:
        "bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200",
    },
    {
      level: "Expert",
      title: "Master Class",
      description:
        "Solve industry-level cases and prepare for technical interviews.",
      count: "400+ Challenges",
      color: "rose",
      bgClass: "bg-rose-50 dark:bg-rose-900/20",
      textClass: "text-rose-900 dark:text-rose-100",
      borderClass: "border-rose-200 dark:border-rose-800",
      hoverClass: "hover:bg-rose-100 dark:hover:bg-rose-900/40",
      badgeClass:
        "bg-rose-200 dark:bg-rose-800 text-rose-800 dark:text-rose-200",
    },
  ];

  return (
    <div className="min-h-screen transition-colors mt-24">
      <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-12">
        <div className="max-w-6xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="mb-8 bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900"
          >
            <Star className="w-4 h-4 mr-2" />
            <span>Join, 1000+ developers already coding</span>
          </Badge>

          <h1 className="text-2xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-tight mb-8 font-extrabold font-serif">
            Master{" "}
            <span className="relative inline-block">
              <span className="px-6 py-4 bg-amber-500 dark:bg-amber-400 text-white dark:text-gray-900 rounded-2xl transform -rotate-1 inline-block">
                Problem
              </span>
            </span>{" "}
            Solving
            <br />
            With{" "}
            <span className="relative inline-block">
              <span className="px-6 py-4 bg-indigo-500 dark:bg-indigo-400 text-white rounded-2xl transform rotate-1 inline-block">
                Code
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Push your limits with an extensive library of coding challenges,
            engage with a global network of programmers, and fast-track your
            skills using instant insights and detailed solution guides.
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 dark:bg-amber-400 hover:dark:bg-amber-300  transform hover:-translate-y-0.5 transition-all"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Coding Now
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-indigo-300 text-indigo-700 dark:text-indigo-300 dark:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950"
            >
              Browse Problems
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="features"
        className="py-24 bg-gray-50 dark:bg-neutral-900/50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Everything you need to{" "}
              <span className="text-amber-400 dark:text-amber-300">excel</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              our platform provides comprehensive tools and resources to help
              you become a better programmer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-lg ${index % 2 === 0 ? "bg-amber-100 dark:bg-amber-900 text-amber-500 dark:text-amber-400" : "bg-indigo-100 dark:bg-indigo-900 text-indigo-500 dark:text-indigo-300"}`}
                  >
                    {feature.icon}
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="problems" className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Choose your <span className="text-indigo-400">challenge</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
              From beginner friendly puzzles to advance algorithms challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {problemCategories.map((problem, index) => (
              <Card
                key={index}
                className={`border-2 hover:shadow-lg transition-all duration-200 ${problem.bgClass} ${problem.borderClass} ${problem.hoverClass}`}
              >
                <CardHeader>
                  <Badge
                    variant="secondary"
                    className={`w-fit ${problem.badgeClass} font-bold`}
                  >
                    {problem.level}
                  </Badge>
                  <CardTitle>{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{problem.description}</CardDescription>
                  <div
                    className={`font-bold mt-4 text-lg ${problem.textClass}`}
                  >
                    {problem.count}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden rounded-md bg-gradient-to-br from-amber-500 via-amber-400 to-indigo-600 dark:from-amber-700 dark:via-indigo-700 dark:to-indigo-900">
        {/* Decorative Circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl" />

        <div className="relative max-w-4xl mx-auto text-center px-4 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-white/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Ready to level up?
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Ready to start your <br className="hidden md:block" />
            <span className="text-amber-200">coding journey?</span>
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers who are improving their skills every
            day with real-world challenges.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="group px-8 py-4 bg-white text-amber-700 font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Get Started for Free
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 border-2 border-white/50 text-gray-900 dark:text-white hover:bg-white/10 hover:border-white"
            >
              View Problems
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
