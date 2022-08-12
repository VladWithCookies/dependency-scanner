import * as ENDPOINTS from '../constants/endpoints';
import httpClient from '../utils/httpClient';

export const uploadDependencyFile = (file, ciUploadId) => {
  const formData = new FormData();

  formData.append('repositoryName', 'unknown');
  formData.append('commitName', 'unknown');
  formData.append('fileData', file);

  if (ciUploadId) {
    formData.append('ciUploadId', ciUploadId);
  }

  return httpClient.post(ENDPOINTS.OPEN_UPLOADS_DEPENDENCIES_FILES, formData);
};

export const scanDependencies = (ciUploadId) => (
  httpClient.post(ENDPOINTS.OPEN_FINISHES_DEPENDENCIES_FILES_UPLOADS, { ciUploadId })
);

export const getCIStatus = (ciUploadId) => (
  httpClient.get(ENDPOINTS.OPEN_CI_UPLOAD_STATUS, { params: { ciUploadId } })
);
