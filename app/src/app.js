import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

@inject(Router)
export class App {
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Archery Shotting';
      config.map([
        { route: ['','welcome'],  moduleId: './welcome',      nav: true, title:'Welcome' },
        { route: ['shottingEnd'],  moduleId: './shottingEnd',      nav: true, title:'Shotting End' },
        { route: 'images',        moduleId: './images',       nav: true }
      ]);
    });
  }
}


$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
