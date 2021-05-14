import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration, RouteConfig, NavigationInstruction} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router): Promise<void> | PromiseLike<void> | void {
    config.title = 'Aurelia';

    const handleUnknownRoutes = (instruction: NavigationInstruction): RouteConfig => {
      return { route: 'users', moduleId: 'users' };
    }

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
      },
    ]);

    config.mapUnknownRoutes(handleUnknownRoutes);

    this.router = router;
  }
}
