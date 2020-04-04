import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lastUpdate = new Promise(
    (resolve) => {
      const date = new Date();
      setTimeout(
        ()=> {
          resolve(date)
        }, 2000
      );
    }
  )

  posts = [
    {
    title: 'Getting started with Angular',
    content: 'Welcome to Angular! This tutorial introduces you to the essentials of Angular by walking you through a simple e-commerce site with a catalog, shopping cart, and check-out form. To help you get started right away, this guide uses a simple ready-made application that you can examine and play with interactively.',
    created_at: '2 Feb 2020',
    likes: 0,
    postStatus : 'On'
    },
    {
    title: 'Routing',
    content: 'At the end of Your First App, the online store application has a basic product catalog. The app doesnt have any variable states or navigation. There is one URL, and that URL always displays the My Store page with a list of products and their descriptions.',
    created_at: '3 March 2020',
    likes: 0,
    postStatus : 'Off'
    },
  ]

}
