import Link from "next/link";
import { ChefHat, Sparkles, ArrowRight, Check } from "lucide-react";
import styles from "./HomeLanding.module.css";

const categories = [
  {
    icon: ChefHat,
    label: "HOSPITALITY",
    title: "Kitchen Porters",
    slug: "kitchen-porters",
    description:
      "Experienced, reliable kitchen porters for restaurants, hotels, events, and catering operations across Leeds. Fully vetted and ready to work.",
    features: ["Hotels & restaurants", "Event catering", "Emergency cover", "Flexible shifts"],
  },
  {
    icon: Sparkles,
    label: "HOME & COMMERCIAL",
    title: "Cleaning Services",
    slug: "cleaning-services",
    description:
      "Professional cleaning specialists for households and commercial spaces. Insured, background-checked, and committed to a high standard every visit.",
    features: ["Domestic cleaning", "One-off deep cleans", "Regular schedules", "End of tenancy"],
  },
];

export default function LaunchCategories() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeading}>
        <h2><span>Two Services,</span>One Trusted Platform</h2>
        <p>Starting with the roles Leeds needs most. Kitchen Porters and Cleaning Services, launching now.</p>
      </div>
      <div className={styles.launchGrid}>
        {categories.map(({ icon: Icon, label, title, slug, description, features }) => (
          <article className={styles.launchCard} key={slug}>
            <div className={styles.launchVisual}>
              <Icon size={48} />
            </div>
            <small className={styles.launchLabel}>{label}</small>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul className={styles.launchFeatures}>
              {features.map((f) => (
                <li key={f}><span><Check size={10} /></span>{f}</li>
              ))}
            </ul>
            <Link href={`/${slug}`}>Learn more <ArrowRight size={15} /></Link>
          </article>
        ))}
      </div>
    </section>
  );
}
