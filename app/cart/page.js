import {age, name} from './data.js';

export default function Cart() {
  let cartList = ['Tomatoes', 'Pasta']
  return (
    <div>
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>상품명 {age}</p>
        <p>$40</p>
        <p>1개</p>
      </div>   
      <CartItem cartName={cartList[0]}/>
      <CartItem/>
      <Button color="blue"/>
      <Banner bannerName="현대카드"/>
    </div>
  )
}

//0. component 정의
function CartItem(props){ //1. function 작명
  return ( //2. 축약할 긴 html 넣어주기
    <div className="cart-item">
      <p>{props.cartName}</p>
      <p>$40</p>
      <p>1개</p>
    </div>    
  )
}

function Banner(props){
  return <h5>{props.bannerName} 결제 행사 중</h5>
}

function Button(props){
  return (
    <button style={{background: props.color}}>빨간색 버튼</button>
  )
}