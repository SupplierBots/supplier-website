export async function getJSON<T>(url: string): Promise<T> {
  try {
    const data = await fetch(url).then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    });
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
