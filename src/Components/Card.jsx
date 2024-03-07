import { IoMdSunny, IoMdRainy, IoMdCloudy, IoMdSnow, IoMdThunderstorm, IoMdSearch } from "react-icons/io"; import {
    BsCloudHaze2Fill,
    BsCloudDrizzleFill,
    BsEye,
    BsWater,
    BsThermometer,
    BsWind,
} from 'react-icons/bs';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { ImSpinner8 } from 'react-icons/im';
import { useEffect, useState } from "react";

function Card({location,setlocation,APIKEY}) {
  const [loading,setloading]=useState(true)
   
    const [error,seterror]=useState(false)
    const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
    const [data,setdata]=useState(null)
   
    const today=new Date()
    const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    let icon;
   if(data!=null){
  switch (data.weather[0].main) {
    case 'Clouds':
      icon = <IoMdCloudy />;
      break;
    case 'Haze':
      icon = <BsCloudHaze2Fill />;
      break;
    case 'Rain':
      icon = <IoMdRainy className="text-[#31cafb]" />;
      break;
    case 'Clear':
      icon = <IoMdSunny className="text-[#ffde33]" />;
      break;
    case 'Drizzle':
      icon = <BsCloudDrizzleFill className="text-[#31cafb]" />;
      break;
    case 'Snow':
      icon = <IoMdSnow className="text-[#31cafb]" />;
      break;
    case 'Thunderstorm':
      icon = <IoMdThunderstorm />;
      break;
  }
   }

    useEffect(()=>{
          setloading(true)
          ;(async ()=>{
            const res=await fetch(url+`&q=${location}`+`&appid=${APIKEY}`)
            if(!res.ok){
              alert("Please enter correct city name")
              setlocation('Ghaziabad')
              throw new Error('Failed to fetch data')
            }
            const data=await res.json()
            setdata(data)
            setloading(false)
           })()

    },[location])
    return (
        <> 
           
            <div className="bg-violet-900 w-2/6 h-5/6 mt-3 rounded-3xl text-white">
                {/* upper part */}
                {loading && <div className="loading-spinner"></div>}
                {!loading && data!=null && (
                  
                  <div>
                <div className="mt-14 ml-7 flex space-x-5">
                    <div className="text-8xl">{icon}</div>
                    <div className="flex flex-col text-lg mt-3">
                        <div>{data.name},{data.sys.country}</div>
                        <div>{formattedDate}</div>
                    </div>
                </div>
                {/* Middle part */}
                <div className="flex flex-col space-y-2 pt-3">
                    <div className="flex justify-center text-6xl">{data.main.temp}°C</div>
                    <div className="flex justify-center text-lg">{data.weather[0].main}</div>
                </div>
                {/* lower part */}
                <div className="flex space-x-7 justify-between">
                    <div className="flex flex-col space-y-4 my-7 ml-9">
                        <div className="flex space-x-3">
                            <BsEye className="text-2xl" />
                            <div className="text-lg">Visibility : {data.visibility}</div>
                        </div>
                        <div className="flex space-x-3">
                            <BsThermometer className="text-2xl" />
                            <div className="text-lg">Feels like :{parseInt(data.main.feels_like)}</div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 my-7 pr-9">
                        <div className="flex space-x-3">
                            <BsWater className="text-2xl" />
                            <div className="text-lg">Humidity : {data.main.humidity}</div>
                        </div>
                        <div className="flex space-x-3">
                            <BsWind className="text-2xl" />
                            <div className="text-lg">Wind : {data.wind.speed}</div>
                        </div>
                    </div>
                </div>
                </div>
                )}
            </div>
        </>
    )
}

export default Card