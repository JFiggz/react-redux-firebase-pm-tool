import convertUNIX from "./convertUNIX";

export default function setTime(createdOn){
    const currentTime = Date.now();
    const time = createdOn.toDate();
    const timeDiffSeconds = (currentTime - time)/1000;

    if(timeDiffSeconds < 60){
        let seconds = Math.round(timeDiffSeconds);
        return `${seconds} seconds ago`;

    } else if (timeDiffSeconds >= 60 && timeDiffSeconds < 3600){
        let minutes = Math.round(timeDiffSeconds/60);
        return `${minutes} minutes ago`; 

    } else if (timeDiffSeconds >= 3600 && timeDiffSeconds < 86400){
        let hours = Math.round(timeDiffSeconds/3600);
        return `${hours} hours ago`; 

    }else if (timeDiffSeconds >= 86400 && timeDiffSeconds < 864000){
        //Beyond 10 days just show the date
        let days = Math.round(timeDiffSeconds/86400);
        return `${days} days ago`; 
    }else{
        return convertUNIX(time);
    }  
};