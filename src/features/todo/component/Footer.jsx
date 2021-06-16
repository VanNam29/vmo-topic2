import { useDispatch } from "react-redux";
import { changeFilter } from './../filterSlice';

Footer.propTypes = {}

function Footer(props) {

    const dispatch = useDispatch();

    const onClickHandleActive = () => {
        const action = changeFilter('ACTIVE');
        dispatch(action);
    }

    const onClickHandleCompleted = () => {
        const action = changeFilter('COMPLETE');
        dispatch(action);
    }

    const onClickHandleGetAll = () => {
        const action = changeFilter('ALL');
        dispatch(action);
    }

    const onClickHandleClearComplete = () => {
        props.handleClearComplete();
    }

    let elmItem = <span>items </span>
    if (props.countActiveTodo === 1) {
        elmItem = <span>item </span>
    }

    let elmClearComplete = null;
    if (props.countIsComplete > 0) {
        elmClearComplete = <button onClick={onClickHandleClearComplete}
            className="text-sm opacity-60 ml-28 hover:underline opacity-60">Clear completed</button>
    }

    return (
        <div className="h-12">
            <section className="flex h-10">
                <span className="text-sm b-1 ml-3 opacity-60 mt-3 w-20 opacity-60">{props.countActiveTodo} {elmItem}left</span>
                <button
                    onClick={onClickHandleGetAll}
                    className="text-sm opacity-60 ml-24 w-8 focus:ring-2 opacity-60 focus:ring-red-500"
                >All</button>
                <button onClick={onClickHandleActive} className="text-sm opacity-60 ml-4">Active</button>
                <button onClick={onClickHandleCompleted} className="text-sm opacity-60 ml-4">Completed</button>
                {elmClearComplete}
            </section>
        </div>


    )
}

export default Footer;