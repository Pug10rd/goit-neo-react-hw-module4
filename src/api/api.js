import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getPhotos = async (searchQuery, page = 1) => {
  const data = await axios("/search/photos", {
    params: {
      client_id: "75JDvr6mzhylRPNwUXWDxJp1Xi9KRdjKeP-3-5hdCEU",
      query: searchQuery,
      per_page: 12,
      page,
    },
  });
  return data;
};
