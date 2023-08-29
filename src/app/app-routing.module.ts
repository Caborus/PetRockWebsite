import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverlayComponent } from './overlay/overlay.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { CareersComponent } from './careers/careers.component';
import { BlogComponent } from './blog/blog.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '', 
    component: OverlayComponent,
    children: [
      { 
        path: '', 
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'careers',
        component: CareersComponent
      },
      {
        path: 'pricing',
        component: PricingComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'payment/:tier',
        component: PaymentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
