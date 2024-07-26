import { Injectable, Inject } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  constructor(private meta: Meta, private title: Title, @Inject(DOCUMENT) private doc: any) {
  }

  createMetaPage(title: string, description: string){
    this.setPageTitle(title);
    this.createLinkForCanonicalURL();
    this.createMetaAuthor(title);
    this.createMetaDescription(description);
  }

  setPageTitle(title: string) {
    this.title.setTitle("Bee Api'C - " + title);
  }

  createLinkForCanonicalURL() {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    link.setAttribute('href', this.doc.URL);
  }

  createMetaAuthor(title: string){
    this.meta.updateTag({
      name: 'author',
      content: "Bee Api'C | " + title
    });
  }

  createMetaDescription(description: string){
    this.meta.updateTag({
      name: 'description',
      content: description
    });
  }
}
