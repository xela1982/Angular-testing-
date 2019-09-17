import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '@app/_services/messages.service';

@Component({
  selector: 'app-rx-js.messages',
  templateUrl: './rx-js.messages.component.html'

})
export class MessagesComponent {
  messages: any[] = [];
  subscription: Subscription;
  constructor(private messageService: MessageService) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
  }
  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage('Message from Home Component to App Component!');
  }
  clearMessages(): void {
    // clear messages
    this.messageService.clearMessages();
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}





