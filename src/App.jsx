import { useState } from "react";
import "./App.css";

export default function App() {
  const [active, setActive] = useState("Profile");

  const items = [
    {
      title: "Profile",
      type: "text",
      lines: ["Shaik Naseera Faiza", "1st year CS Student", "KL University, Vijayawada"],
    },
    {
      title: "Connect", // merged Contact + Links
      type: "links",
      links: [
        { label: "E-mail", href: "mailto:nsfaiza9@gmail.com" },
        { label: "GitHub", href: "https://github.com/ns-faiza9" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/naseera-faiza-shaik-898626385/" },
      ],
    },
  ];

  return (
    <div className="page">
      <h1>Personal Info</h1>
      <p className="sub">A simple Vite + React profile dashboard</p>

      <div className="grid grid2">
        {items.map((it) => (
          <div
            key={it.title}
            className={`card ${active === it.title ? "active" : ""}`}
            onClick={() => setActive(it.title)}
          >
            <h3>{it.title}</h3>

            {it.type === "text" &&
              it.lines.map((t) => <p key={t}>{t}</p>)}

            {it.type === "links" &&
              it.links.map((l) => (
                <p key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener">
                    {l.label}
                  </a>
                </p>
              ))}
          </div>
        ))}
      </div>

      <button className="btn">Edit profile</button>
    </div>
  );
}
