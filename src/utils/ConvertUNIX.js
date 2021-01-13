export function convertUNIXAltFormat(timestamp){
    const date = new Date(timestamp);
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}

export default function convertUNIX(timestamp){
    const date = new Date(timestamp);
    return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
};