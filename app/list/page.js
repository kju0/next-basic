'use client'

import { useState } from "react"

export default function List() {
    // db에서 데이터 가져왔다고 가정
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
    let array = [2,3,4]
    let [수량, 수량변경] = useState([0, 0, 0]) //변수 말고 state 이용, 수량변경은 함수!
    let copy = [...수량];

    // map함수 실습
    array.map((a, i) => {
        console.log(i + "번째 변수 값은" + a);
    })
    let b = array.map((a,i) => {
        return 10;
    })
    console.log(b);
    
    return (
      <div>
        <h4 className="title">상품목록</h4>
        {상품.map((a, i) => {
            return( //return을 써줌으로써 html을 실제로 생성해주는 것
                <div className="food" key={i}>
                    {/* 버전1 */}
                    <img src={`/food${i}.png`} className='food-img'/>
                    <h4>{상품[i]} $40</h4>
                    <span>{수량[i]}</span>
                    <button onClick={()=>{
                        copy[i]++;
                        수량변경(copy)}}>+</button>
                    <button onClick={()=>{
                        if (copy[i]>0){copy[i]--} 
                        수량변경(copy)}}>-</button>
                </div>
            )
        })}           
      </div>
    )
  }