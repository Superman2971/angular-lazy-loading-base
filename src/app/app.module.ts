import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
// Services
import { BroadcasterService } from './services/broadcaster.service';

const appRoutes: Routes = [{
  path: '',
  component: WelcomeComponent
}, {
  path: 'home',
  loadChildren: 'app/home/home.module#HomeModule'
}, {
  path: 'lazy',
  loadChildren: 'app/lazy/lazy.module#LazyModule'
}];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BroadcasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
