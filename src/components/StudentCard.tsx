import React from "react";
import { Student } from "../data/students";

interface StudentCardProps {
  student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <div className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#0a1628]/10 transition-all duration-500 hover:-translate-y-1">
      {/* Photo Area */}
      <div className="relative h-48 bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] overflow-hidden">
        {student.photo ? (
          <img
            src={student.photo}
            alt={student.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            {/* Subtle decorative initials */}
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
              <span
                className="text-white/60 text-xl font-light select-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {student.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </span>
            </div>
          </div>
        )}

        {/* Student number badge */}
        <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <span className="text-white/70 text-xs font-mono">
            {String(student.id).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Info Area */}
      <div className="p-4 space-y-1.5">
        <p className="text-[#0a1628] font-semibold text-sm tracking-wide leading-snug">
          {student.name}
        </p>
        <div className="flex items-center gap-1.5">
          <svg
            className="w-3 h-3 text-[#0a1628]/40 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-[#0a1628]/45 text-xs font-light tracking-widest uppercase">
            {student.origin}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
