import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Dharmik App",
    position: "Software Engineer Intern",
    period: "February 2025 - Present",
    location: "Gurugram, Harayana",
    description: [
      "Developed responsive React.js UIs from Figma designs, achieving a 30% improvement in cross-device user experience.",
      "Implemented lazy loading and code splitting, reducing page load time by 40%",
      "Integrated OtpLess, a multi-channel OTP service, configured exclusively for WhatsApp to enable fast and seamless user authentication.",
      "Built a robust checkout page integrated with Razorpay, streamlining the payment process and reducing transaction errors by 20%",
    ],
    skills: ["React", "Firebase", "AWS", "Docker"],
  },
  //  {
  //   company: "Elexis AI",
  //   position: "Frontend Engineer Intern",
  //   period: "November 2024  - January 2025",
  //   location: "Remote",
  //   description: [
  //     "Designed and developed a dynamic and responsive website from scratch using React, Vite, ShadCN, and Tailwind CSS, based on Figma designs",
  //     "Integrated frontend with a Django backend, ensuring seamless data flow and efficient API interactions.",
  //     "Designed flow for Resume submission and tracking system, increasing platform efficiency by 30%.",
  //   ],
  //   skills: ["JavaScript", "Reactjs", "Tailwind CSS", "Python"],
  // },
  {
    company: "Amaxa Tech Solutions",
    position: "Full Stack Developer Intern",
    period: "June 2024 - November 2024",
    location: "Valsad, Gujarat",
    description: [
      "Developed an intuitive UI using React.js and Shadcn UI, improving cross-device user experience by 30%",
      "Configured (CI/CD) pipelines to automate the deployment process using GitHub Actions reducing deployment time by 60%",
      "Implemented Firebase authentication for secure login and infinite scrolling to enhance user experience.",
      "Implemented global state management using Redux, improving load times by 20%.",
    ],
    skills: ["TypeScript", "Reactjs", "AWS", "Nodejs", "Docker"],
  },
];

const Experience = () => {
  return (
    <section className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
        Work Experience
      </h2>
      <div className="relative">
        {/* Vertical Line - Responsive positioning */}
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-border" />

        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-8 sm:mb-12 last:mb-0">
            {/* Timeline Dot - Responsive positioning */}
            <div className="absolute left-4 sm:left-8 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary border-4 border-background" />

            {/* Experience Card - Responsive margins and padding */}
            <Card className="ml-8 sm:ml-16 hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm sm:text-base">
                        {exp.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm sm:text-base">
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-sm sm:text-base text-muted-foreground flex gap-2"
                    >
                      <span className="flex-shrink-0">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs sm:text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Experience;
