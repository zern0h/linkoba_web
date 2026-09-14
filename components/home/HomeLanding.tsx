import Link from "next/link";
import {
  ArrowRight, BadgeCheck, BriefcaseBusiness, Building2, CalendarCheck2,
  Check, Clock3, FileCheck2, Globe2, Home, MapPin, Search,
  ShieldCheck, Sparkles, Star, UserCheck, UserRound, UsersRound,
  WandSparkles, Zap,
} from "lucide-react";
import styles from "./HomeLanding.module.css";
import LaunchCategories from "./LaunchCategories";

const steps = [
  { number: "STEP 1", title: "Tell Us What You Need", body: "Share the role, service, location, and timing. It takes only a few minutes to get started.", visual: "orbit" },
  { number: "STEP 2", title: "Get Smart Matches", body: "We connect your request with available, verified professionals who fit your requirements.", visual: "match" },
  { number: "STEP 3", title: "Book With Confidence", body: "Confirm your professional and stay informed from booking through to completed work.", visual: "briefcase" },
];

const individualTools = [
  { icon: ShieldCheck, title: "Book trusted local cleaners", copy: "Every professional is verified before their first booking." },
  { icon: CalendarCheck2, title: "Choose one-off or recurring", copy: "Book a single clean or set up a regular schedule." },
  { icon: Home, title: "Manage bookings in one place", copy: "Track requests, updates and history in one simple view." },
];

const businessTools = [
  { icon: Zap, title: "Fill staffing gaps faster", copy: "A simpler route from urgent need to confirmed cover." },
  { icon: Building2, title: "Manage venues and requests", copy: "Handle multiple sites and bookings from one account." },
  { icon: FileCheck2, title: "Track bookings and invoices", copy: "Clear records of every assignment and payment." },
];

const workerTools = [
  { icon: MapPin, title: "Find local opportunities", copy: "Relevant work close to you in and around Leeds." },
  { icon: UserCheck, title: "Work with trusted customers", copy: "See the details you need before you commit." },
  { icon: Sparkles, title: "Build your professional profile", copy: "Every job strengthens your record and reputation." },
];

function HeroDashboard() {
  return (
    <div className={styles.heroDashboard} aria-label="Linkoba booking and matching preview">
      <div className={`${styles.floatCard} ${styles.matchCard}`}>
        <div className={styles.statusLine}><span /> Available for work</div>
        <div className={styles.personRow}>
          <div className={styles.avatar}><UserRound size={19} /></div>
          <div><strong>Amara Johnson</strong><small>Cleaning professional</small></div>
          <time>7:41 PM</time>
        </div>
        <div className={styles.cardActions}>
          <button type="button"><CalendarCheck2 size={13} /> Book now</button>
          <button type="button"><FileCheck2 size={13} /> View profile</button>
        </div>
        <p className={styles.score}><Sparkles size={12} /> Strong match for your request</p>
      </div>
      <div className={`${styles.floatCard} ${styles.progressCard}`}>
        <strong>Booking Progress</strong>
        <div className={styles.progressItem}><span className={styles.done}><Check size={12} /></span><div><b>Request sent</b><small>Details received</small></div></div>
        <div className={styles.progressItem}><span className={styles.done}><Check size={12} /></span><div><b>Professional matched</b><small>Profile ready to review</small></div></div>
        <div className={styles.progressItem}><span><Clock3 size={12} /></span><div><b>Confirmation</b><small>Waiting for your approval</small></div></div>
      </div>
      <div className={`${styles.floatCard} ${styles.recentCard}`}>
        <div className={styles.avatar}><BriefcaseBusiness size={18} /></div>
        <div><strong>Kitchen porter cover</strong><small>Leeds City Centre</small></div>
        <time>2 hr ago</time>
        <div className={styles.miniStats}><span>Tonight</span><span>6 hours</span><span>Confirmed</span></div>
      </div>
    </div>
  );
}

function StepVisual({ type }: { type: string }) {
  if (type === "orbit") {
    return (
      <div className={`${styles.stepVisual} ${styles.orbitVisual}`}>
        <div className={styles.orbitRing} />
        <span className={styles.orbitCenter}><UsersRound size={25} /></span>
        {[0, 1, 2, 3, 4].map((item) => <span key={item} className={`${styles.orbitPerson} ${styles[`orbit${item}`]}`}><UserRound size={15} /></span>)}
      </div>
    );
  }
  if (type === "match") {
    return <div className={`${styles.stepVisual} ${styles.matchVisual}`}><WandSparkles size={24} /><div className={styles.matchTiles}><span><UserRound /></span><span><Check /></span><span><BriefcaseBusiness /></span></div></div>;
  }
  return <div className={`${styles.stepVisual} ${styles.briefcaseVisual}`}><BriefcaseBusiness size={70} /><span /></div>;
}

function ToolPanel({ audience, title, body, items, cta, href }: { audience: string; title: string; body: string; items: typeof businessTools; cta: string; href: string }) {
  return (
    <article className={styles.toolPanel}>
      <div className={styles.toolRows}>
        {items.map(({ icon: Icon, title: itemTitle, copy }) => (
          <div className={styles.toolRow} key={itemTitle}><span><Icon size={22} /></span><div><strong>{itemTitle}</strong><small>{copy}</small></div></div>
        ))}
      </div>
      <p className={styles.audience}>{audience}</p>
      <h3>{title}</h3>
      <p>{body}</p>
      <Link href={href}>{cta} <ArrowRight size={15} /></Link>
    </article>
  );
}

export default function HomeLanding() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1>Trusted People, <em>Flexible Work.</em> <span><Search size={42} /></span></h1>
          <p>Linkoba connects Leeds businesses and households with vetted professionals, and gives local workers the flexibility they need.</p>
          <div className={styles.heroActions}>
            <Link href="/contact">Find a Professional <Search size={17} /></Link>
            <Link href="/workers">Find Work <FileCheck2 size={17} /></Link>
          </div>
        </div>
        <HeroDashboard />
        <div className={styles.trusted}>
          <div><h2>Trusted in Leeds. Built for Everyone.</h2><p>One dependable place for businesses, households, and local professionals.</p></div>
          <div className={styles.trustMarks}>
            <span><ShieldCheck /> Verified</span><span><Home /> Households</span><span><Building2 /> Businesses</span><span><UsersRound /> Professionals</span><span><MapPin /> Leeds</span>
          </div>
        </div>
      </section>

      <LaunchCategories />

      <section className={styles.section}>
        <div className={styles.sectionHeading}><h2><span>Your Journey</span>In Three Simple Steps</h2><p>We remove the friction so trusted local connections feel clear, quick, and dependable.</p></div>
        <div className={styles.stepsGrid}>
          {steps.map((step) => <article className={styles.stepCard} key={step.number}><StepVisual type={step.visual} /><small>{step.number}</small><h3>{step.title}</h3><p>{step.body}</p></article>)}
        </div>
      </section>

      <section className={styles.section} id="services">
        <div className={styles.sectionHeading}><h2><span>Built for Every Side</span>Of Local Work</h2><p>Whether you need help at home, reliable staff for your business, or flexible work that fits your life, Linkoba keeps the process straightforward.</p></div>
        <div className={styles.toolsGrid}>
          <ToolPanel audience="FOR INDIVIDUALS" title="Trusted help for everyday needs" body="Book vetted cleaning professionals for your home, manage appointments and stay informed from request to completion." items={individualTools} cta="Explore services" href="/households" />
          <ToolPanel audience="FOR BUSINESSES" title="Reliable support when you need it" body="Request verified professionals for urgent cover, recurring staffing and commercial cleaning." items={businessTools} cta="Explore business solutions" href="/businesses" />
          <ToolPanel audience="FOR PROFESSIONALS" title="Better access to flexible work" body="Find opportunities matched to your skills, location and availability, with clear details before you commit." items={workerTools} cta="Find work" href="/workers" />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}><h2><span>A Platform Designed</span>For Confidence</h2><p>From verification to ongoing support, each part of Linkoba is designed to make local work safer and simpler.</p></div>
        <div className={styles.featureGrid}>
          <article className={styles.featureCard}><div className={`${styles.featureVisual} ${styles.certifiedVisual}`}><UserCheck size={104} /><BadgeCheck size={50} /></div><h3>Verified Professionals</h3><p>Work only with people whose key details and documents have been checked.</p></article>
          <article className={`${styles.featureCard} ${styles.featureWide}`}><div className={`${styles.featureVisual} ${styles.globeVisual}`}><Globe2 size={150} /><span /><span /><span /><span /></div><h3>Smarter Local Matching</h3><p>Connect with the right opportunities or professionals based on service, timing, and location.</p></article>
          <article className={`${styles.featureCard} ${styles.featureWide}`}>
            <div className={`${styles.featureVisual} ${styles.dashboardVisual}`}><div className={styles.mockSidebar} /><div className={styles.mockHeader} /><div className={styles.mockChart}><i /><i /><i /><i /><i /></div><div className={styles.mockBooking}><span>Booking confirmed</span><strong>Kitchen porter, Leeds</strong></div></div>
            <h3>Everything in One Place</h3><p>Keep requests, bookings, updates, and progress organised in one simple view.</p>
          </article>
          <article className={styles.featureCard}><div className={`${styles.featureVisual} ${styles.shieldVisual}`}><ShieldCheck size={128} /></div><h3>Support You Can Rely On</h3><p>Clear processes and responsive help give every side more confidence.</p></article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.testimonial}`}>
        <div className={styles.sectionHeading}><h2><span>From Everyday Needs to</span>Work That Fits</h2><p>Linkoba is being built around real people, local needs, and lasting trust.</p></div>
        <div className={styles.stars} aria-label="Five stars">{[0, 1, 2, 3, 4].map((star) => <Star key={star} size={22} fill="currentColor" />)}</div>
        <blockquote>“Finding reliable support should not feel like a gamble. Linkoba makes every step clearer, from the first search to a job well done.”</blockquote>
        <div className={styles.quoteAuthor}><span><UserRound size={22} /></span><div><strong>Built for Leeds</strong><small>Businesses, households, and professionals</small></div></div>
      </section>
    </div>
  );
}
