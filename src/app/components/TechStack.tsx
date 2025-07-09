'use client';

import {
  FaReact,
  FaJava,
  FaJs,
  FaNode,
  FaDocker,
  FaLinux,
  FaSwift,
  FaGithub,
  FaPython,
  FaGoogle,
} from 'react-icons/fa';
import {
  SiFlutter,
  SiKotlin,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiVercel,
  SiSanity,
  SiGooglecloud,
  SiNginx,
  SiMongodb,
  SiDotnet,
  SiElectron,
  SiPostgresql,
  SiOpenai,
  SiTensorflow,
  SiZapier,
  SiMake,
  SiPandas,
  SiSlack,
  SiZendesk,
  SiZoho,
} from 'react-icons/si';
import { MdSupportAgent } from 'react-icons/md'; // For Freshdesk
import ShapeSvg from './ShapeSvg';

type Props = {
  tools?: string[]; // Optional for global component use
};

// 🔧 Icon map for all services (Web, Mobile, Cloud, AI, BPO)
const iconMap: Record<string, React.ReactNode> = {
  // 🌐 Web & App
  Flutter: <SiFlutter className="text-blue-500 text-5xl" />,
  Kotlin: <SiKotlin className="text-purple-600 text-5xl" />,
  Java: <FaJava className="text-red-600 text-5xl" />,
  Swift: <FaSwift className="text-orange-500 text-5xl" />,
  Firebase: <SiFirebase className="text-yellow-500 text-5xl" />,
  'React Native': <FaReact className="text-blue-600 text-5xl" />,
  React: <FaReact className="text-blue-600 text-5xl" />,
  JavaScript: <FaJs className="text-yellow-400 text-5xl" />,
  TypeScript: <SiTypescript className="text-blue-700 text-5xl" />,
  'Next.js': <SiNextdotjs className="text-black text-5xl" />,
  Sanity: <SiSanity className="text-red-500 text-5xl" />,
  Vercel: <SiVercel className="text-black text-5xl" />,

  // ☁️ Cloud & Infra
  GCP: <SiGooglecloud className="text-blue-500 text-5xl" />,
  Docker: <FaDocker className="text-blue-400 text-5xl" />,
  Linux: <FaLinux className="text-gray-800 text-5xl" />,
  Nginx: <SiNginx className="text-green-600 text-5xl" />,
  'Node.js': <FaNode className="text-green-600 text-5xl" />,
  MongoDB: <SiMongodb className="text-green-700 text-5xl" />,
  '.NET': <SiDotnet className="text-purple-800 text-5xl" />,
  Electron: <SiElectron className="text-blue-500 text-5xl" />,
  PostgreSQL: <SiPostgresql className="text-blue-600 text-5xl" />,
  GitHub: <FaGithub className="text-black text-5xl" />,

  // 🤖 AI & Automation
  Python: <FaPython className="text-yellow-500 text-5xl" />,
  OpenAI: <SiOpenai className="text-black text-5xl" />,
  TensorFlow: <SiTensorflow className="text-orange-600 text-5xl" />,
  Pandas: <SiPandas className="text-black text-5xl" />,
  Zapier: <SiZapier className="text-orange-500 text-5xl" />,
  Make: <SiMake className="text-blue-500 text-5xl" />,

  // 🧩 BPO Tools
  Zendesk: <SiZendesk className="text-green-600 text-5xl" />,
  Freshdesk: <MdSupportAgent className="text-teal-600 text-5xl" />,
  'Zoho Desk': <SiZoho className="text-orange-600 text-5xl" />,
  Slack: <SiSlack className="text-purple-500 text-5xl" />,
  'Google Workspace': <FaGoogle className="text-blue-600 text-5xl" />,
};

export default function TechStack({ tools = [] }: Props) {
  const filteredTools = tools.filter((tool) => iconMap[tool]);

  if (!filteredTools.length) return null;

  return (
    <section className="py-10 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-5">
        <span>Tools and </span>
        <span className="relative inline-block">
          <span className="text-gray-900">Technologies</span>
          <div className="absolute left-1/2 -translate-x-1/2 mt-1">
            <ShapeSvg />
          </div>
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {filteredTools.map((tool, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition duration-300"
          >
            {iconMap[tool]}
            <span className="mt-3 font-semibold text-sm text-gray-800">
              {tool.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
