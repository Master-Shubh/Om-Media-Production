import Reveal from "@/components/Reveal";
import { approachSteps } from "@/lib/data";

export default function OmApproach() {
  return (
    <section className="approach-section" aria-labelledby="approach-heading">
      <Reveal>
        <p className="eyebrow">THE OM APPROACH</p>
        <h2 className="section-title" id="approach-heading" style={{ maxWidth: 600 }}>
          How we <i>craft</i> your story
        </h2>
      </Reveal>

      <div className="approach-grid" role="list">
        {approachSteps.map((step) => (
          <Reveal key={step.num}>
            <div className="approach-step" role="listitem">
              <span className="approach-num" aria-hidden="true">{step.num}</span>
              <h3 className="approach-title">{step.title}</h3>
              <p className="approach-desc">{step.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
