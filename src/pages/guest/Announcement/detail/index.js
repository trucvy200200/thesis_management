import { useState } from "react"
import img4 from "../../../../assets/images/annouce-4.jpg"
const data = [
    {
        id: 1,
        title: "Kế hoạch đăng ký",
        detail: "ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem. ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem. Lipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem.ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem.ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem.orem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem.",
        createdAt: "2022-11-22",
        author: "Nguyen Van A",
        img: img4
    },
]
const Detail = () => {
    const [detail, setDetail] = useState(null)

    return (
        <>
            <div id="announcement-detail" className="detail">
                <div className="blog-container">
                    <div className="blog-item">
                        <h3>{data[0]?.title}</h3>
                        <img src={data[0]?.img} />
                        <p>{data[0]?.detail}</p>
                        <h4 style={{ textAlign: "right" }}>Author: {data[0]?.author} ({data[0]?.createdAt})</h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;
