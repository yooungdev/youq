//
import { useRouter } from 'next/router'
//
import { itemsOptionsObject, classesOptionsObject } from '../utils/options'
//
import styles from '../styles/components/QuestionsNew.module.css'




const QuestionNew = ({ question }) => {

    const router = useRouter()

    const createdAt = question.createdAt.toISOString()

    return (
        <div className={styles.question_new}>
            <div>
                <span>
                    {itemsOptionsObject[question.item]}
                </span>
                <span style={{ marginLeft: '15px' }} className={styles.created_date}>
                    {classesOptionsObject[question.class]}
                </span>
            </div>
            <p onClick={() => router.push(`/question/${question.id}`)} className={styles.text}>
                {question.text}
            </p>
            <span className={styles.created_date}>
                {String(new Date(createdAt))}
            </span>
        </div>
    )
}

export default QuestionNew