import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }



testimonials = [
  {
    name: "إيميلي جونسون",
    job: "أم عاملة",
    avatar: "assets/avatars/user1.jpg",
    text:
      "خدمة ReClean ساعدتني جدًا في إدارة البيت. العاملة وصلت في الميعاد، وفهمت احتياجاتي من أول مرة، وسيبت البيت كله نظيف ومرتب. بجد بقيت أرجع من الشغل وأرتاح بدل ما أقلق من التنظيف."
  },
  {
    name: "إيثان ميلر",
    job: "مصمم منتجات",
    avatar: "assets/avatars/user2.jpg",
    text:
      "عجبني جدًا تنظيم الخدمة. حجز العاملة، تأكيد الزيارة، والمتابعة بعدها—كلها خطوات احترافية. العاملة كانت محترمة جدًا، وبتتعامل بحرص مع الأثاث، وشغلها نظيف ومُتقن في كل مكان."
  },
  {
    name: "أوليفيا كارتر",
    job: "قائدة فريق تصميم",
    avatar: "assets/avatars/user3.jpg",
    text:
      "فريق خدمة العملاء في ReClean ممتاز. ساعدوني أظبط مواعيد الزيارة مع جدول شغلي، وكمان اتصلوا بيا بعد الزيارة علشان يتأكدوا إني راضية. تجربتي معاهم كانت آمنة، سهلة، ومريحة جدًا."
  }
];



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
