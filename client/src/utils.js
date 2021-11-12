export const timeStampToTime = (timeStamp) => {
    const date = new Date(timeStamp);
    const time = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
    return time;
};

export const apiKey = "?api_key=dec9fd5b-8dc0-43b7-9e72-219a359d9728";