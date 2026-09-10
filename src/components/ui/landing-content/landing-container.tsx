import { experiences } from "@/lib/values/experiences";

export default function LandingContainer() {
  return (
    <section aria-labelledby="page-title">
      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-row" key={experience.title}>
            <p className="experience-date">{experience.period}</p>
            <div className="min-w-0">
              <h3 className="item-title">{experience.title}</h3>
              <p className="company-name">{experience.company}</p>
              <p className="item-description">{experience.description}</p>
            </div>
          </article>
        ))}
      </div>
      <aside className="closing-note">
        <h3>Let&rsquo;s Work Together</h3>
        <p>I&rsquo;m always interested in new opportunities and exciting projects. Whether you&rsquo;re looking for a developer or collaborator, I&rsquo;d love to hear from you.</p>
      </aside>
    </section>
  );
}
