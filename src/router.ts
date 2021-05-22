import { Route } from './types';

export class Router {
  public constructor(private routes: Route[]) {}

  public onRouteChange(callback: (route: Route) => void): void {
    window.addEventListener('popstate', () => {
      callback(this.getCurrentRoute());
    });
  }

  private getCurrentRoute(): Route {
    const currentRoute = this.routes.find(
      (route) => route.path === this.getCurrentPath()
    );

    if (currentRoute) {
      return currentRoute;
    }

    throw new Error('No route found'); // here we can return 404 page, but I omitted it for simplicity
  }

  private getCurrentPath(): string {
    return window.location.hash.substr(1).replace(/\//gi, '/');
  }
}
