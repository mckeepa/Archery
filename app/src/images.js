import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Archer{
  heading = 'Archer';
  images = [];
  // url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';
  url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=archery&tagmode=any&format=json';
  constructor(http){
    this.http = http;
  }

  activate(){
    return this.http.jsonp(this.url).then(response => {
      this.images = response.content.items;
    });
  }

  canDeactivate(){
    //return confirm('Are you sure you want to leave?');
  }
}
