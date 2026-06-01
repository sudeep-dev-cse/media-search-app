import React, { useEffect } from 'react'
import  {fetchPhotos,fetchVideos,fetchGif} from '../api/mediaApi'
import {setQuery,setLoading,setError,setResults} from '../redux/features/searchSlice'
import { useDispatch,useSelector } from 'react-redux'
import ResultCard from './ResultCard'



const ResultGrid = () => {
   

    const {query,activeTab,results,loading,error} = useSelector((store)=>store.search)
   
    const dispatch = useDispatch()
   
     useEffect(()=>{

         if (!query) {
         return (
          <div className="text-center text-slate-400 mt-20 text-xl">
                 Search for photos, videos, or GIFs
              </div>
                )
                         }
                         
         const getData = async ()=> {

       try {
        dispatch(setLoading())
         let data=[]
        if(activeTab == 'photos'){
             let response = await fetchPhotos(query)   
          
             data = response.map((item)=>({
                    id:item.id,
                    type:'photo',
                    title:item.alt_description,
                    thumbnail:item.urls.small,
                    src:item.urls.full,
                    url:item.links.html
             }))
          
             
        }
        if(activeTab == 'videos'){
             let response =await fetchVideos(query) 

             data = response.videos.map((item)=>({
                   id:item.id,
                   type:'video',
                   title:item.user?.name || 'video',
                   thumbnail:item.image,
                   src:item.video_files?.[0]?.link ||"",
                   url:item.url,
             }))
        


        }
        if(activeTab == 'gif'){
           let response =await fetchGif(query)
         data = response.data.map((item) => ({
              id: item.id,
             title: item.title || "GIF",
             type: "gif",
             thumbnail: item.images?.fixed_width?.url,
            src: item.images?.original?.url,
            url:item.url
               }))
             
         }

          dispatch(setResults(data))
        
       } catch (err) {
        dispatch(setError(err.message))
       }
       }

        getData()
     },[query,activeTab,dispatch])

      if(error){
       return (
       <h1 className="text-red-500 text-center text-xl mt-10">
        {error}
       </h1>
       )
        }
    if (loading) {
  return (
    <div className="flex justify-center items-center h-[60vh] text-white text-2xl">
      Loading...
    </div>
  )
}

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5'>
      {results.map((item,idx)=>{
       return <div key={idx}>
      <ResultCard item={item} />
        </div>
      })}
    </div>
  )
}

export default ResultGrid
