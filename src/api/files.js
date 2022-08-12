import * as ENDPOINTS from '../constants/endpoints';
import httpClient from '../utils/httpClient';

export const uploadDependencyFiles = (files) => {
  const formData = new FormData();

  formData.append('repositoryName', 'unknown');
  formData.append('commitName', 'unknown');

  files.forEach((file) => {
    formData.append('fileData', file);
  });

  return httpClient.post(ENDPOINTS.OPEN_UPLOADS_DEPENDENCIES_FILES, formData);
}
