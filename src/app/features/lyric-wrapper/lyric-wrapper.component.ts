import { Component, Input, OnChanges } from "@angular/core";
import LyricsOvh from "lyricsovh-lib";
@Component({
selector: "app-lyric-wrapper",
templateUrl: "./lyric-wrapper.component.html",
styleUrls: ["./lyric-wrapper.component.scss"]
})
export class LyricWrapperComponent implements OnChanges {
@Input() searchWord;
@Input() lyricSelectedEvent;
@Input() goBackEvent;
lyricsapi = new LyricsOvh();
songList = [];
songLetter = "";
ngOnChanges(changes) {
const searchWord = changes.searchWord;
if (
searchWord.previousValue !== searchWord.currentValue &&
searchWord.currentValue != ""
) {
// aqui faremos a requisição para a API do Lyrics.ovh
this.lyricsapi
.getSuggest(searchWord.currentValue)
.then(res => (this.songList = res.data));
} else if (searchWord.currentValue === "") {
this.songList = [];
this.songLetter = "";
}
}
handleLyricSelectedEvent(lyric) {
// usuario selecionou uma musica na lista
console.log("musica selecionada", lyric);
this.lyricsapi.getLyric(lyric.artist.name, lyric.title).then(res => {
//this.songList = [];
this.songLetter = res.error ? "Música não encontrada" : res.lyrics;
});
}
handleBackButton() {
console.log("handle");
this.songLetter = "";
}
}