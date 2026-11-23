import {
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";

const techs = [
  { icon: <SiPython />, name: "Python" },
  { icon: <SiPytorch />, name: "PyTorch" },
  { icon: <SiTensorflow />, name: "TensorFlow" },
  { icon: <SiScikitlearn />, name: "scikit-learn" },
  { icon: <SiOpencv />, name: "OpenCV" },
  { icon: <SiFastapi />, name: "FastAPI" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiNumpy />, name: "NumPy" },
  { icon: <SiPandas />, name: "Pandas" },
];

export default function TechMarquee() {
  const loop = [...techs, ...techs];

  return (
    <div
      className="relative overflow-hidden py-6"
      style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
    >
      <div className="flex gap-10 w-max animate-marquee">
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-2 shrink-0">
            <span className="text-2xl" style={{ color: "var(--color-accent-2)" }}>
              {t.icon}
            </span>
            <span className="text-sm font-medium text-[var(--color-muted)] whitespace-nowrap">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
