import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { ChannelDetailsComponent } from './components/channel-details/channel-details.component';
import { PlaylistDetailsComponent } from './components/playlist-details/playlist-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'video/:id', component: VideoDetailsComponent },
  { path: 'channel/:id', component: ChannelDetailsComponent },
  { path: 'playlist/:id', component: PlaylistDetailsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
