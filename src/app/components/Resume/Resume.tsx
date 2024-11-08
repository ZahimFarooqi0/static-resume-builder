'use client'

import React, { useState } from "react";
import Picture from "../ProfilePicture/Picture";
import About from "../About/About";
import Education from "../Education/Education";
import Profession from "../Profession/Profession";

export default function Resume(): any {
  
  const [showSkills, setShowSkills] = useState(true);

  const skills = [
    { name: "CSS", level: 80 },
    { name: "HTML", level: 75 },
    { name: "TypeScript", level: 89.8 },
  ];

  return (
    <div className="bg-gray-100 flex items-center justify-center py-10 min-h-screen">
      <div className="bg-white w-full max-w-6xl rounded-lg p-8 flex shadow-2xl shadow-black flex-col md:flex-row">
        <div className="w-full md:w-1/3 pr-0 md:pr-4 mb-8 md:mb-0">
          <Picture />
          <About />

          <section className="mt-4">
            <button
              className="bg-purple-900 text-white py-2 px-4 rounded-md focus:outline-none w-full shadow-xl shadow-purple-900 hover:scale-110 hover:translate-y-1 transition ease-in-out delay-75 hover:bg-purple-700"
              onClick={() => setShowSkills(!showSkills)}
            >
              {showSkills ? "Hide Skills" : "Show Skills"}
            </button>
          </section>

          {showSkills && (
            <section className="mt-6">
              <h2 className="text-xl font-semibold text-purple-900 mb-4 font-[Antonsc]">Skills</h2>
              {skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <label className="text-gray-700 font-[Antonsc] font-semibold">{skill.name}</label>
                  <label className="text-gray-700 font-[Antonsc] font-extrabold text-right float-right">{skill.level}%</label>
                  <div className="w-full bg-gray-200 rounded-full h-4 mt-1">
                    <div
                      className="bg-purple-900 h-4 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>

      
        <div className="w-full md:w-2/3 pl-0 md:pl-4">
          <Profession />
          <Education />
        </div>
      </div>
    </div>
  );
}
