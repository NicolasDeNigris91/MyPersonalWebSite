import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Projects />
      <Experience />
    </main>
  );
}
