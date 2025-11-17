import React from "react";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router";
import { PROBLEMS } from "../data/problems.js";
import { ChevronRightIcon, Code2Icon, Puzzle } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

const ProblemsPage = () => {
  const problems = Object.values(PROBLEMS);
  const easyProblemsCount = problems.filter(
    (p) => p.difficulty === "Easy"
  ).length;
  const mediumProblemsCount = problems.filter(
    (p) => p.difficulty === "Medium"
  ).length;
  const hardProblemsCount = problems.filter(
    (p) => p.difficulty === "Hard"
  ).length;

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* HEADER */}
        <div className="mb-8">
          {/* We add 'flex', 'items-center', and 'gap-3' */}
          <div className="flex items-center gap-3 text-4xl font-bold mb-2">
            <span>Practice Problems</span>
            <Puzzle className="size-8" /> {/* Optional: Control icon size */}
          </div>

          <p className="text-base-content/70">
            Sharpen your coding skills with these curated problems
          </p>
        </div>

        {/* PROBLEMS LIST */}
        <div className="space-y-4">
          {problems.map((problem) => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              className="card bg-base-100 hover:scale-[1.01] transition-transform  rounded-2xl"
            >
              <div className="card-body">
                <div className="flex items-center justify-between gap-4">
                  {/* LEFT SIDE */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Code2Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-xl font-bold">{problem.title}</h2>
                          <span
                            className={`badge ${getDifficultyBadgeClass(
                              problem.difficulty
                            )}`}
                          >
                            {problem.difficulty}
                          </span>
                        </div>
                        <p className="text-sm text-base-content/60">
                          {" "}
                          {problem.category}
                        </p>
                      </div>
                    </div>
                    <p className="text-base-content/80 mb-3">
                      {problem.description.text}
                    </p>
                  </div>
                  {/* RIGHT SIDE */}

                  <div className="flex items-center text-primary">
                    <span className="font-bold text-xl">Solve</span>
                    <ChevronRightIcon className="size-8" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* STATS FOOTER */}
        <div className="mt-12 card bg-base-100 shadow-lg rounded-2xl h-28">
          <div className="card-body flex items-center justify-center p-0">
            <div className="stats stats-vertical lg:stats-horizontal w-full">

              <div className="stat">
                <div className="stat-title text-xl mx-auto">Total Problems</div>
                <div className="stat-value text-primary mx-auto">
                  {problems.length}
                </div>
              </div>

              <div className="stat">
                <div className="stat-title text-xl mx-auto">Easy</div>
                <div className="stat-value text-success mx-auto">
                  {easyProblemsCount}
                </div>
              </div>

              <div className="stat">
                <div className="stat-title text-xl mx-auto">Medium</div>
                <div className="stat-value text-warning mx-auto">
                  {mediumProblemsCount}
                </div>
              </div>
              
              <div className="stat">
                <div className="stat-title text-xl mx-auto">Hard</div>
                <div className="stat-value text-error mx-auto">
                  {hardProblemsCount}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsPage;
