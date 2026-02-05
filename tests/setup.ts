import "@testing-library/jest-dom/vitest";

// Mock IntersectionObserver for Framer Motion's whileInView
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];

  constructor(
    private callback: IntersectionObserverCallback,
    _options?: IntersectionObserverInit // eslint-disable-line @typescript-eslint/no-unused-vars
  ) {
    // Immediately trigger with all entries as intersecting
    setTimeout(() => {
      this.callback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        this
      );
    }, 0);
  }

  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

globalThis.IntersectionObserver = MockIntersectionObserver;
