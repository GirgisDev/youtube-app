import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { VideoResultComponent } from './shared/video-result/video-result.component';
import { ChannelResultComponent } from './shared/channel-result/channel-result.component';
import { ListResultComponent } from './shared/list-result/list-result.component';
import { SearchFiltersComponent } from './shared/search-filters/search-filters.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { ChannelDetailsComponent } from './components/channel-details/channel-details.component';
import { PlaylistDetailsComponent } from './components/playlist-details/playlist-details.component';

// service
import { YoutubeService } from './services/youtube.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoadingComponent,
    VideoResultComponent,
    ChannelResultComponent,
    ListResultComponent,
    SearchFiltersComponent,
    VideoDetailsComponent,
    ChannelDetailsComponent,
    PlaylistDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    YoutubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
