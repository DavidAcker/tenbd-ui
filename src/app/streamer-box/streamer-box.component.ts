import { Component, OnInit, Input, AfterViewInit} from '@angular/core';

@Component({
  selector: 'streamer-box',
  templateUrl: './streamer-box.component.html',
  styleUrls: ['./streamer-box.component.css']
})
export class StreamerBoxComponent implements OnInit, AfterViewInit {
  panelOpenState: boolean = false;
  @Input() channel: string;
  videoId: string;
  videoSrcUrl: string;
  videoSrc: string;
  chatId: string;
  chatSrcUrl: string;
  chatSrc: string;
  channelLink: string;

  constructor() { }

  ngOnInit() {
    this.videoId = this.channel + "Video";
    this.chatId = this.channel + "Chat";
    this.videoSrcUrl = "http://player.twitch.tv/?channel=:channel&muted=true&autoplay=true";
    this.chatSrcUrl = "http://www.twitch.tv/embed/:channel/chat";
    this.videoSrc = this.videoSrcUrl.replace(":channel", this.channel);
    this.chatSrc = this.chatSrcUrl.replace(":channel", this.channel);
    this.channelLink = "https://www.twitch.tv/" + this.channel;
  }

  ngAfterViewInit(): void {
    document.getElementById(this.videoId).setAttribute("src", this.videoSrc);
    document.getElementById(this.chatId).setAttribute("src", this.chatSrc);
	}

}
