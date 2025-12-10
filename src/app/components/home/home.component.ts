import { Component, OnInit } from '@angular/core';
import {
  ContentService,
  HeroContent,
  FeatureCard,
  AboutContent,
  CommitmentContent,
  ServiceItem,
  StatItem,
  Testimonial,
  TipCard,
  CtaContent,
  StepItem,
  FooterContent,
} from '../../Services/content.service'; // عدّلي المسار حسب مشروعك
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hero?: HeroContent;
  features: FeatureCard[] = [];
  about?: AboutContent;
  commitment?: CommitmentContent;
  services: ServiceItem[] = [];
  stats: StatItem[] = [];
  testimonials: Testimonial[] = [];
  tips: TipCard[] = [];
  cta?: CtaContent;
  steps: StepItem[] = [];
  footer?: FooterContent;

  menuOpen = false;

  constructor(private content: ContentService) {}

  ngOnInit(): void {
    this.content.getHero().subscribe((d) => (this.hero = d || this.hero));
    this.content.getFeatures().subscribe((items) => (this.features = items));
    this.content.getAbout().subscribe((d) => (this.about = d || this.about));
    this.content
      .getCommitment()
      .subscribe((d) => (this.commitment = d || this.commitment));
    this.content.getServices().subscribe((items) => (this.services = items));
    this.content.getStats().subscribe((items) => (this.stats = items));
    this.content
      .getTestimonials()
      .subscribe((items) => (this.testimonials = items));
    this.content.getTips().subscribe((items) => (this.tips = items));
    this.content.getCta().subscribe((d) => (this.cta = d || this.cta));
    this.content.getSteps().subscribe((items) => (this.steps = items));
    this.content.getFooter().subscribe((d) => (this.footer = d || this.footer));
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }



    customOptions: OwlOptions = {
    loop: true,
    dots: true,
    nav: false,
    rtl: true,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1200: { items: 3 }
    }
  };
}
