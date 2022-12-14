import { memo } from 'react'
//
import Image from 'next/image'
//
import { useRouter } from 'next/router'
//
import moment from 'moment'
//
import { itemsOptionsObject } from '../utils/options'
//
import styles from '../styles/components/QuestionItem.module.css'






const QuestionItem = ({ question }) => {

    const router = useRouter()


    return (
        <div className={styles.question_item}>
            <div className={styles.header}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                        height={33}
                        width={33}
                        onClick={() => router.push(`/profile/${question?.author?.id}`)}
                        className={styles.avatar}
                        src={question?.author?.image}
                        alt="avatar"
                    />
                    <div className={styles.info}>
                        <span className={styles.name}>
                            {itemsOptionsObject[question?.item]}
                        </span>
                        <div className={styles.hours_item}>
                            <span>
                                {moment(String(question.createdAt)).fromNow()}
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    0
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text} onClick={() => router.push(`/question/${question.id}`)}>
                    {question.text}
                </p>
            </div>
            <div className={styles.footer}>
                <div>
                    {question?.answers?.length > 0 && (
                        <span className={styles.footer_count_answers}>
                            Ответов: <b>{question.answers.length}</b>
                        </span>
                    )}
                </div>
                <div>
                    <button className={styles.answer}>
                        Ответить
                    </button>
                </div>
            </div>
        </div>
    )
}


export default memo(QuestionItem)