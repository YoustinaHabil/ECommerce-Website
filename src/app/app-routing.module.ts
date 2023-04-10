import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ShowProductComponent } from './show-product/show-product.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'login',component:LoginComponent},
  {path:'details',component:DetailsComponent},
  {path:'register',component:RegistrationComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'product',component:ShowProductComponent},
  {path:'cart',component:CartComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
