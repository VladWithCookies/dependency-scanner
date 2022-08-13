import { beforeEach, vi } from 'vitest';
import * as api from '..';
import * as ENDPOINTS from '../../constants/endpoints';
import httpClient from '../../utils/api/httpClient';

describe('API', () => {
  const ciUploadId = '1';
  const file = new File([''], 'package-lock.json', { type: 'text/plain' });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('uploadDependencyFile()', () => {
    vi.spyOn(httpClient, 'get');
    vi.spyOn(httpClient, 'post');

    describe('with ciUploadId', () => {
      it('creates correct request', () => {
        const formData = new FormData();

        formData.append('repositoryName', 'unknown');
        formData.append('commitName', 'unknown');
        formData.append('fileData', file);
        formData.append('ciUploadId', ciUploadId);

        api.uploadDependencyFile(file, ciUploadId);

        expect(httpClient.post).toBeCalledTimes(1);
        expect(httpClient.post).toBeCalledWith(ENDPOINTS.OPEN_UPLOADS_DEPENDENCIES_FILES, formData);
      });
    });

    describe('without ciUploadId', () => {
      it('creates correct request', () => {
        const formData = new FormData();

        formData.append('repositoryName', 'unknown');
        formData.append('commitName', 'unknown');
        formData.append('fileData', file);

        api.uploadDependencyFile(file);

        expect(httpClient.post).toBeCalledTimes(1);
        expect(httpClient.post).toBeCalledWith(ENDPOINTS.OPEN_UPLOADS_DEPENDENCIES_FILES, formData);
      });
    });
  });

  describe('scanDependencies()', () => {
    it('creates correct request', () => {
      api.scanDependencies(ciUploadId);

      expect(httpClient.post).toBeCalledTimes(1);
      expect(httpClient.post).toBeCalledWith(ENDPOINTS.OPEN_FINISHES_DEPENDENCIES_FILES_UPLOADS, { ciUploadId });
    });
  });

  describe('getCIStatus()', () => {
    it('creates correct request', () => {
      api.getCIStatus(ciUploadId);

      expect(httpClient.get).toBeCalledTimes(1);
      expect(httpClient.get).toBeCalledWith(ENDPOINTS.OPEN_CI_UPLOAD_STATUS, { params: { ciUploadId } });
    });
  });
});
