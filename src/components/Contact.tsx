import { Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { CopyEmailLink } from './CopyEmailLink';

// Server component. The CopyEmailLink children remain client islands; the
// surrounding shell is plain HTML so the section does not contribute to the
// hydration tree.
export function Contact() {
  return (
    <section id="contact" className="bg-graphite px-8 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16">
          <div className="bg-gold-leaf mb-6 h-px w-16" />
          <h2 className="font-display text-display-lg text-pearl">
            Vamos conversar
          </h2>
          <p className="text-caption text-chrome tracking-luxury mt-3 font-mono uppercase">
            Falar comigo
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-body-lg text-chrome mb-8 font-sans leading-relaxed">
              Disponível para novas oportunidades em desenvolvimento de
              software.
            </p>
            <CopyEmailLink className="text-caption tracking-luxury border-platinum text-platinum hover:bg-platinum hover:text-obsidian focus-visible:outline-platinum inline-flex items-center gap-3 border px-8 py-3 font-sans uppercase transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
              <Mail size={14} strokeWidth={1} />
              Enviar email
            </CopyEmailLink>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-caption text-racing-green-lit tracking-luxury mb-3 font-mono uppercase">
                Email
              </h3>
              <CopyEmailLink className="text-body text-pearl hover:text-gold-leaf font-sans transition-colors duration-300">
                {siteConfig.email}
              </CopyEmailLink>
            </div>

            <div>
              <h3 className="text-caption text-racing-green-lit tracking-luxury mb-3 font-mono uppercase">
                Telefone
              </h3>
              <a
                href={siteConfig.phoneLink}
                className="text-body text-pearl hover:text-gold-leaf flex items-center gap-2 font-sans transition-colors duration-300"
              >
                <Phone size={14} strokeWidth={1} className="text-mist" />
                {siteConfig.phone}
              </a>
            </div>

            <div>
              <h3 className="text-caption text-racing-green-lit tracking-luxury mb-3 font-mono uppercase">
                Localização
              </h3>
              <p className="text-body text-chrome flex items-center gap-2 font-sans">
                <MapPin size={14} strokeWidth={1} className="text-mist" />
                {siteConfig.location}
              </p>
            </div>

            <div>
              <h3 className="text-caption text-racing-green-lit tracking-luxury mb-3 font-mono uppercase">
                Redes
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-chrome hover:text-pearl font-sans transition-colors duration-300"
                >
                  GitHub ↗
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-chrome hover:text-pearl font-sans transition-colors duration-300"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
