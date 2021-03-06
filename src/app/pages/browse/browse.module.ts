import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AlbumPreviewItemsModule } from '../../components/album-preview-items/album-preview-items.module';
import { SongItemModule } from '../../components/song-item/song-item.module';
import { FormatArtworkUrlModule } from '../../pipes/formatArtworkUrl/format-artwork-url.module';
import { BrowsePage } from './browse.page';
import { DetailModalComponentModule } from '../../components/detail-modal/detail-modal.module';
import { ErrorComponentModule } from 'src/app/components/error/error.module';
import { TemplateModule } from '@rx-angular/template';
import { LazyImgModule } from 'src/app/components/lazy-img/lazy-img.module';

const routes: Routes = [
  {
    path: '',
    component: BrowsePage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongItemModule,
    DetailModalComponentModule,
    AlbumPreviewItemsModule,
    FormatArtworkUrlModule,
    ErrorComponentModule,
    RouterModule.forChild(routes),
    TemplateModule,
    LazyImgModule,
  ],
  declarations: [BrowsePage],
})
export class BrowsePageModule {}
