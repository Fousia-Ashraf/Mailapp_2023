import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginmComponent } from './loginm/loginm.component';
import { InboxComponent } from './inbox/inbox.component';
import { CreateComponent } from './create/create.component';
import { ComposeComponent } from './compose/compose.component';
import { DraftComponent } from './draft/draft.component';
import { SentComponent } from './sent/sent.component';
// import { ComposeComponent } from './inbox/compose/compose.component';
// import { DraftComponent } from './inbox/draft/draft.component';
// import { SentComponent } from './inbox/sent/sent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginmComponent,
    InboxComponent,
    CreateComponent,
    ComposeComponent,
    DraftComponent,
    SentComponent 

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
