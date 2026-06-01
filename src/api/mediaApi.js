import axios from'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY




export async function fetchPhotos(query,page=1,per_page=20){
 const response = await axios.get('https://api.unsplash.com/search/photos',{
    params:{query,page,per_page},
    headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
 })
 return response.data.results

}

export async function fetchVideos(query, per_page = 20) {
  try {
    const response = await axios.get("https://api.pexels.com/videos/search",
      {
        params: { query, per_page },
        headers: {Authorization: PEXELS_KEY,},
        timeout: 30000,
      }
    )
    return response.data;
  } catch (error) {
    console.log("Catch Block Entered");
    console.error(error);
    return null;
  }
}

export async function fetchGif(q,limit=20){
const response = await axios.get('https://api.giphy.com/v1/gifs/search',{
    params:{
         api_key:GIPHY_KEY,
           q,
           limit,
    },
 })
 return response.data

}