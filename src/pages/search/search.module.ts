import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PostsCardComponentModule } from './../../components/post-card/post-card.module';
import { InformationComponentModule } from './../../components/information/information.module';
import { SearchPage } from './search';

@NgModule({
  declarations: [SearchPage],
  imports: [IonicPageModule.forChild(SearchPage), PostsCardComponentModule, InformationComponentModule],
})
export class SearchPageModule { }