import React from "react"
import flagIcon from "../../../../assets/icons/ic_flag.svg"
import chevronRightIcon from "../../../../assets/icons/ic-chevronRight.svg"
import img1 from "../../../../assets/images/annouce-1.png"
import img2 from "../../../../assets/images/annouce-2.png"
import img3 from "../../../../assets/images/annouce-3.png"
// const Pagination = loadable(() => import("@/components/Common/Pagination"))
const data = [
    {
        id: 1,
        title: "Kế hoạch đăng ký",
        detail: "ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem. ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem. Lipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem.ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem.ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem.orem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem.",
        createdAt: "2022-11-22",
        author: "Nguyen Van A",
        img: img1
    },
    {
        id: 2,
        title: "Kế hoạch đăng ký",
        detail: "ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem.",
        createdAt: "2022-11-22",
        author: "Nguyen Van A",
        img: img2
    },
    {
        id: 3,
        title: "Kế hoạch đăng ký",
        detail: "ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem.",
        createdAt: "2022-11-22",
        author: "Nguyen Van A",
        img: img3
    },
    {
        id: 4,
        title: "Kế hoạch đăng ký",
        detail: "ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem.",
        createdAt: "2022-11-22",
        author: "Nguyen Van A",
        img: img1
    },
    {
        id: 5,
        title: "Kế hoạch đăng ký",
        detail: "ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem.",
        createdAt: "2022-11-22",
        author: "Nguyen Van A",
        img: img2
    }
]
const Announcement = () => {

    const handleFlexDirection = (index) => {
        if (index % 2 === 0) {
            return ""
        }
        else if (index % 2 !== 0) {
            return "flex-row-reverse"
        }
    }

    // const handleNewDetail = (slug) => {
    //     router.push(`${/type}/slug}`).then()
    // }

    return (
        <div id="Announcement">
            <div className="w-100 containerWrapper">
                <div className="container">
                    <div className="infoContainer w-100">
                        <h3>Announcement</h3>
                        <div className={`w-100 infoContainerLeft`}>
                            <div className="infoCard">
                                {data?.map((item, index) => {
                                    return (
                                        <div key={index} className="w-100">
                                            <div className={`infoCardItem d-flex ${handleFlexDirection(index)}`}>
                                                <div className={`infoCardItemImage`}>
                                                    <img src={item?.img} alt="notifyImg" />
                                                </div>
                                                <div className={`infoCardItemContent`}>
                                                    <div className={`w-100 infoCardItemContentHeader d-flex`}>
                                                        <div className={`infoCardItemContentHeaderHosting d-flex`}>
                                                            <img src={flagIcon} alt="icon" />
                                                            {item?.createdAt}
                                                        </div>
                                                    </div>
                                                    <div className={`infoCardItemContentTitle`}>
                                                        {item?.title}
                                                    </div>
                                                    <div className={`infoCardItemContentDetail`}>
                                                        {item?.detail}
                                                    </div>
                                                    <a className={`infoCardItemContentFooter mb-0`} href={`/announcement/${item.id}`}>
                                                        Read more
                                                        <img className="mx-1" src={chevronRightIcon} alt={"icon"} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                )}
                                {/* <div className={pagination}>
                                {(pagination?.total > pagination?.pageSize) && (
                                    <Pagination
                                        page={pagination?.page - 1}
                                        total={pagination?.total || 0}
                                        perPage={pagination?.pageSize}
                                        setPage={handleChangePage}
                                        isDark={isDark}
                                    />
                                )}
                            </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Announcement