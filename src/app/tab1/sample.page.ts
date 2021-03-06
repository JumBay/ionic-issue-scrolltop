import { Component } from '@angular/core';

@Component({
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>
          Sample page
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-card>
      <ion-card-header>
        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        <ion-card-title>Card Title</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit
        clean.
      </ion-card-content>
    </ion-card>

    <ion-card>
      <ion-item>
        <ion-icon name="pin" slot="start"></ion-icon>
        <ion-label>ion-item in a card, icon left, button right</ion-label>
        <ion-button fill="outline" slot="end">View</ion-button>
      </ion-item>

      <ion-card-content>
        This is content, without any paragraph or header tags, within an
        ion-card-content element.
      </ion-card-content>
    </ion-card>
  `
})
export class SamplePage {}
