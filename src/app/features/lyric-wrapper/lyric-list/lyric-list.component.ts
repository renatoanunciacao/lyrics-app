import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lyric-list',
  templateUrl: './lyric-list.component.html',
  styleUrls: ['./lyric-list.component.scss']
})
export class LyricListComponent {

  @Input() songList;
  @Output() lyricSelectedEvent = new EventEmitter();
  
  handleMusicSelect(lyric) {
    this.lyricSelectedEvent.emit(lyric);
  }

}
