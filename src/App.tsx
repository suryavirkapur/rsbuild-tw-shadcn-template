import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import {
  Github,
  GitFork,
  Star,
  Package,
  Boxes,
  Cpu,
  Wrench,
  Palette,
  FileCode2,
  BookOpen,
  Terminal,
  Flame,
  Sun,
  Moon,
} from "lucide-react";

export default function App() {
  const { toast } = useToast();
  const [darkMode, setDarkMode] = React.useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  React.useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const features = [
    {
      icon: <Boxes className="size-5" />,
      title: "Rsbuild",
      description: "Modern build tool optimized for React applications",
    },
    {
      icon: <Palette className="size-5" />,
      title: "Tailwind CSS",
      description: "Utility-first CSS framework with custom configuration",
    },
    {
      icon: <Cpu className="size-5" />,
      title: "shadcn/ui",
      description: "High-quality, accessible React components",
    },
    {
      icon: <Wrench className="size-5" />,
      title: "Biome",
      description: "Fast formatting, linting, and more",
    },
  ];

  const commands = [
    {
      command:
        "git clone https://github.com/suryavirkapur/rsbuild-tw-shadcn-template.git",
      label: "Clone",
    },
    { command: "pnpm install", label: "Install" },
    { command: "pnpm dev", label: "Start Dev" },
    { command: "pnpm build", label: "Build" },
  ];

  return (
    <div className="min-h-screen bg-background p-8 max-w-6xl mx-auto">
      <div className="absolute top-4 right-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full"
        >
          {darkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
        </Button>
      </div>

      <header className="text-center mb-12">
        <h1 className="text-6xl font-bold text-foreground mb-4">
          Rsbuild Tailwind shadcn/ui Template
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Start your next React project with this powerful template
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/suryavirkapur/rsbuild-tw-shadcn-template"
            className="flex gap-2"
          >
            <Button className="gap-2">
              <Github className="size-5" />
              View on GitHub
            </Button>
            <Button variant="outline" className="gap-2">
              <GitFork className="size-5" />
              Fork
            </Button>
            <Button variant="outline" className="gap-2">
              <Star className="size-5" />
              Star
            </Button>
          </a>
        </div>
      </header>

      <main className="space-y-12">
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="size-5" />
                Installation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {commands.map((cmd, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-muted/50 rounded-lg p-4"
                >
                  <Terminal className="size-5 shrink-0" />
                  <code className="flex-1 font-mono text-sm">
                    {cmd.command}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(cmd.command);
                      toast({
                        title: "Copied!",
                        description: `${cmd.label} command copied to clipboard`,
                      });
                    }}
                  >
                    Copy
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Flame className="size-7" />
            Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {feature.icon}
                    {feature.title}
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCode2 className="size-5" />
                Tech Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>⚡ React 18</li>
                <li>🎨 Tailwind CSS</li>
                <li>🔧 TypeScript</li>
                <li>📦 Rsbuild</li>
                <li>🛠 Biome</li>
                <li>🎯 shadcn/ui</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="size-5" />
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Check out these resources to learn more about the tools used in
                this template:
              </p>
              <ul className="space-y-2">
                <li>📘 Rsbuild Docs</li>
                <li>📗 Tailwind CSS Docs</li>
                <li>📙 shadcn/ui Docs</li>
                <li>📕 Biome Docs</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p>MIT License © 2024</p>
      </footer>

      <Toaster />
    </div>
  );
}
