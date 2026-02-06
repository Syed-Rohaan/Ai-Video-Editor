const BASE_URL = "http://localhost:8000";

export async function fetchTemplates() {
  const res = await fetch(`${BASE_URL}/templates`);
  return res.json();
}

export async function processVideo(formData) {
  const res = await fetch(`${BASE_URL}/process`, {
    method: "POST",
    body: formData
  });
  return res.json();
}

export const getVideoURL = (filename) => `${BASE_URL}/outputs/${filename}`;
