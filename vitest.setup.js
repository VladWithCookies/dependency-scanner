import '@testing-library/jest-dom/extend-expect';

import { server } from './src/utils/tests/requestInterceptor';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
