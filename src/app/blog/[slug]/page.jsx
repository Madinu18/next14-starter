import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/about.png" alt="" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar} src="/about.png" alt="" width={50} height={50}/>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptates voluptatem, esse nesciunt hic fugit quisquam aut aperiam. Quod nihil quis corporis eius perferendis porro? Quos facere omnis tenetur ut.
                </div>
            </div>
        </div>
    )
};

export default SinglePostPage;