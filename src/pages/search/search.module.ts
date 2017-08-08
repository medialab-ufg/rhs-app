import { PostsCardComponentModule } from './../../components/post-card/post-card.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';

@NgModule({
  declarations: [SearchPage],
  imports: [IonicPageModule.forChild(SearchPage), PostsCardComponentModule],
})
export class SearchPageModule { }