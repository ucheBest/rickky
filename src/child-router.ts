import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';

export class ChildRouter {
  public heading = 'Child Router';
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router): Promise<void> | PromiseLike<void> | void {
    config.map([
      {
        route: ['', 'welcome'],
        name: 'welcome',
        moduleId: PLATFORM.moduleName('./welcome'),
        nav: true,
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
