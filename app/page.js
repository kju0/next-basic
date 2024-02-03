import Link from "next/link"


export default function Home() {
  // 자바스크립트 영역
  let name = "jooyoung";

  return (
    <div>
      <h4 className="title">주영후레시</h4>
      <p className="title-sub">by dev {name}</p>
    </div>
  )
}