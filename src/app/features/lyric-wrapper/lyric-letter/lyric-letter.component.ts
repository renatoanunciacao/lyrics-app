import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lyric-letter',
  templateUrl: './lyric-letter.component.html',
  styleUrls: ['./lyric-letter.component.scss']
})
export class LyricLetterComponent {

  @Input() lyric = "";
  @Output() goBackEvent = new EventEmitter();
  handleBackButton() {
    this.goBackEvent.emit("");
  }

}
