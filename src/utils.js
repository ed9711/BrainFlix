export const timeStampToTime = (timeStamp) => {
    const date = new Date(timeStamp);
    const time = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
    return time;
};