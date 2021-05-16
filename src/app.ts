import {PLATFORM} from 'aurelia-pal';
import {AppRouter, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: AppRouter;

  public configureRouter(config: RouterConfiguration, router: AppRouter): Promise<void> | PromiseLike<void> | void {
    config.title = 'Aurelia';
    
    config.map([
      {
        route: ['', 'welcome'],
        name: 'welcome',
        moduleId: PLATFORM.moduleName('./welcome'),
        title: 'Welcome'
      },
      {
        route: 'users',
        name: 'users',
        moduleId: PLATFORM.moduleName('./users'),
        nav: true,
        title: 'Github Users'
      },      
      {
        route: 'child-router',
        name: 'child-router',
        moduleId: PLATFORM.moduleName('./child-router'),
        nav: true,
        title: 'Child Router'
      },
      {
        route: 'task',
        name: 'task',
        moduleId: PLATFORM.moduleName('./task'),
        nav: true,
        title: 'Hahn-Task'
      }
    ]);

    this.router = router;
  }
}
