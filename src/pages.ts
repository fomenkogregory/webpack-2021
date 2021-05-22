import { WithRender } from './types';

export class AboutPage implements WithRender {
  public render(): HTMLElement {
    const htmlElement = document.createElement('section');

    htmlElement.textContent = 'AboutPage';

    return htmlElement;
  }
}

export class ScorePage implements WithRender {
  public render(): HTMLElement {
    const htmlElement = document.createElement('section');

    htmlElement.textContent = 'ScorePage';

    return htmlElement;
  }
}

export class GamePage implements WithRender {
  public render(): HTMLElement {
    const htmlElement = document.createElement('section');

    htmlElement.textContent = 'GamePage';

    return htmlElement;
  }
}
