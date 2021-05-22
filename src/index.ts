import { Router } from './router';
import { Route } from './types';
import { AboutPage, GamePage, ScorePage } from './pages';

class App {
  // container which contains dynamic content
  private container = document.createElement('main');

  public constructor(private router: Router) {
    this.router.onRouteChange((route) => this.renderCurrentComponent(route));
  }

  public init(): void {
    const app = document.getElementById('app');

    const links = [
      {
        title: 'about',
        href: '#about',
      },
      {
        title: 'game',
        href: '#game',
      },
      {
        title: 'score',
        href: '#score',
      },
    ];
    // creation of html elements should be separated to its own components of course
    const linkElements = links.map((link) => {
      const element = document.createElement('a');

      element.href = link.href;
      element.textContent = link.title;
      element.style.marginLeft = '20px';
      element.style.padding = '20px';

      return element;
    });

    const header = document.createElement('header');
    header.append(...linkElements);

    app?.append(header, this.container);
  }

  private renderCurrentComponent(route: Route): void {
    this.container.innerHTML = '';
    this.container.append(new route.Component().render());
  }
}

const routes: Route[] = [
  {
    path: 'about',
    Component: AboutPage,
  },
  {
    path: 'score',
    Component: ScorePage,
  },
  {
    path: 'game',
    Component: GamePage,
  },
];

new App(new Router(routes)).init();
