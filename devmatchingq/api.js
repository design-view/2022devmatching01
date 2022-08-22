export const END_FATCH_POINT = 'http://localhost:3006'
const request = async (url) => {
    //url경로로 fetch 전송함
    const res = await fetch(url);
    //응답결과 ok이면
    if (res.ok) {
        //받은 데이터를 json형태로 변환하여 리턴
        const json = await res.json();
        return json;
    }
    throw new Error('문제가 생겼습니다.')
}
//json을 리턴해줌 
export const fetchList = async (keyword) => request(`${END_FATCH_POINT}/languages?keyword=${keyword}`)


