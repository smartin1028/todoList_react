import styles from "../Todo.module.css";
import {TodoConsumer} from "../context/todo";
//
//
// interface Props{
//     readonly onClearAll: () => void;
// }
//
// const TodoFooter = ({onClearAll}:Props) => {
//     return (
//         <div className={styles.footer}>
//             <button onClick={()=>onClearAll()}>모두 삭제</button>
//         </div>
//     );
//
// };

const TodoFooter = () => {
    return (
        <TodoConsumer>

            {
                (value) => (
                    <div className={styles.footer}>
                        <button onClick={()=>value.actions.handleClearAll()}>모두 삭제</button>
                    </div>
                )
            }

        </TodoConsumer>
    );

};
export default TodoFooter;