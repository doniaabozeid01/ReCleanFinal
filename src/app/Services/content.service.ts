import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// ====== TYPES (نفس اللي في الداشبورد) ======

export interface HeroContent {
  title: string;
  paragraph: string;
  buttonText: string;
  buttonTarget: string;
  heroImageUrl: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  text: string;
}

export interface AboutContent {
  title: string;
  paragraph: string;
  bullets: string[];
  imageUrl: string;
}

export interface CommitmentContent {
  title: string;
  paragraph: string;
  buttonText: string;
  buttonTarget: string;
  images: { url: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  active: boolean;
  order?: number;
}

export interface StatItem {
  id: string;
  text: string;
}

export interface Testimonial {
  id: string;
  name: string;
  job: string;
  rating: number;
  text: string;
  avatarUrl: string;
}

export interface TipCard {
  id: string;
  title: string;
  imageUrl: string;
}

export interface CtaContent {
  title: string;
  paragraph: string;
  buttonText: string;
  buttonTarget: string;
}

export interface StepItem {
  id: string;
  iconClass: string;
  title: string;
  text: string;
}

export interface FooterContent {
  aboutText: string;
  quickLinks: { label: string; target: string }[];
  whatsapp: string;
  phone: string;
  address: string;
  social: {
    facebook?: string;
    instagram?: string;
    whatsapp?: string;
    tiktok?: string;
  };
  copyright: string;
}

// ====== SERVICE ======

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private afs: AngularFirestore) {}

  // HERO
  getHero(): Observable<HeroContent | undefined> {
    return this.afs
      .collection('sections')
      .doc<HeroContent>('hero')
      .valueChanges();
  }

  // FEATURES
  getFeatures(): Observable<FeatureCard[]> {
    return this.afs
      .collection('sections')
      .doc<{ items: FeatureCard[] }>('features')
      .valueChanges()
      .pipe(map((doc) => doc?.items || []));
  }

  // ABOUT
  getAbout(): Observable<AboutContent | undefined> {
    return this.afs
      .collection('sections')
      .doc<AboutContent>('about')
      .valueChanges();
  }

  // COMMITMENT
  getCommitment(): Observable<CommitmentContent | undefined> {
    return this.afs
      .collection('sections')
      .doc<CommitmentContent>('commitment')
      .valueChanges();
  }

  // SERVICES
  getServices(): Observable<ServiceItem[]> {
    return this.afs
      .collection('sections')
      .doc<{ items: ServiceItem[] }>('services')
      .valueChanges()
      .pipe(map((doc) => doc?.items || []));
  }

  // STATS
  getStats(): Observable<StatItem[]> {
    return this.afs
      .collection('sections')
      .doc<{ items: StatItem[] }>('stats')
      .valueChanges()
      .pipe(map((doc) => doc?.items || []));
  }

  // TESTIMONIALS
  getTestimonials(): Observable<Testimonial[]> {
    return this.afs
      .collection('sections')
      .doc<{ items: Testimonial[] }>('testimonials')
      .valueChanges()
      .pipe(map((doc) => doc?.items || []));
  }

  // TIPS
  getTips(): Observable<TipCard[]> {
    return this.afs
      .collection('sections')
      .doc<{ items: TipCard[] }>('tips')
      .valueChanges()
      .pipe(map((doc) => doc?.items || []));
  }

  // CTA
  getCta(): Observable<CtaContent | undefined> {
    return this.afs
      .collection('sections')
      .doc<CtaContent>('cta')
      .valueChanges();
  }

  // STEPS
  getSteps(): Observable<StepItem[]> {
    return this.afs
      .collection('sections')
      .doc<{ items: StepItem[] }>('steps')
      .valueChanges()
      .pipe(map((doc) => doc?.items || []));
  }

  // FOOTER
  getFooter(): Observable<FooterContent | undefined> {
    return this.afs
      .collection('sections')
      .doc<FooterContent>('footer')
      .valueChanges();
  }
}
