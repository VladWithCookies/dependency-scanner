import { rest } from 'msw';

import { API_URL } from '../../constants';
import * as ENDPOINTS from '../../constants/endpoints';

export const requestHandlers = [
  rest.post(`${API_URL}${ENDPOINTS.OPEN_UPLOADS_DEPENDENCIES_FILES}`, (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post(`${API_URL}${ENDPOINTS.OPEN_FINISHES_DEPENDENCIES_FILES_UPLOADS}`, (_req, res, ctx) => {
    return res(ctx.json({ ciUploadId: '1' }));
  }),
  rest.get(`${API_URL}${ENDPOINTS.OPEN_CI_UPLOAD_STATUS}`, (_req, res, ctx) => {
    return res(ctx.json({
      progress: 100,
      vulnerabilitiesFound: 0,
    }));
  }),
];
