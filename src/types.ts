// type of your base component
export interface WithRender {
  render(): HTMLElement;
}

export interface Route {
  path: string;
  Component: new () => WithRender;
}
