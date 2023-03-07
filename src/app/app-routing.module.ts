import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeComponent } from './compose/compose.component';
import { CreateComponent } from './create/create.component';
import { DraftComponent } from './draft/draft.component';
import { InboxComponent } from './inbox/inbox.component';
import { LoginmComponent } from './loginm/loginm.component';
import { SentComponent } from './sent/sent.component';

const routes: Routes = [
  {path:"",component:LoginmComponent},
  {path:'inbox',component:InboxComponent },
  
    {path: 'compose', component:ComposeComponent },
    {path: 'draft', component:DraftComponent },

    {path: 'sent', component:SentComponent },

     {path:'create',component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
