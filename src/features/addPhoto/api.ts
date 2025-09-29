export const addPhotoApi = async (body: unknown) => {
  const res = await fetch("http://localhost:3000/api/photos", {
    method: "POST",
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};
