import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';
 
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { FooterComponent } from './footer/footer.component';
import { TestDetailComponent } from './test-detail/test-detail.component';
import { TestComponent } from './test/test.component';
import { RandomTestComponent } from './random-test/random-test.component';
import { FixTestComponent } from './fix-test/fix-test.component';
import { AddTestComponent } from './add-test/add-test.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionComponent } from './question/question.component';
import { ListTestComponent } from './list-test/list-test.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListQuestionComponent } from './list-question/list-question.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ImgModalComponent } from './img-modal/img-modal.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrafficSignsComponent } from './traffic-signs/traffic-signs.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AllQuestionComponent } from './all-question/all-question.component';
import { AddTrafficSignComponent } from './add-traffic-sign/add-traffic-sign.component';
import { UpdateTrafficSignComponent } from './update-traffic-sign/update-traffic-sign.component';
import { AllTrafficSignComponent } from './all-traffic-sign/all-traffic-sign.component';
import { AllTestModalComponent } from './all-test-modal/all-test-modal.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    FooterComponent,
    TestDetailComponent,
    TestComponent,
    RandomTestComponent,
    FixTestComponent,
    AddTestComponent,
    AddQuestionComponent,
    QuestionComponent,
    ListTestComponent,
    ListQuestionComponent,
    ImgModalComponent,
    UpdateQuestionComponent,
    TrafficSignsComponent,
    SearchBoxComponent,
    SearchResultComponent,
    AllQuestionComponent,
    AddTrafficSignComponent,
    UpdateTrafficSignComponent,
    AllTrafficSignComponent,
    AllTestModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    CountdownModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule
    
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }