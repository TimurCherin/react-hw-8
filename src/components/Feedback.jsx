import { List, Wrap } from "./ExpressoFeedback.styled";

export const Feedback = ({ good, neutral, bad }) => {
    const total = good + neutral + bad
    const possitiveFeedback = good / (good + neutral + bad) * 100
    return (
        <Wrap>
            <List>
                <h2>Statistics</h2>
                <li>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    <p>Total: {total}</p>
                    <p>Possitive Feedback: {Math.round(possitiveFeedback) || 0} %</p>
                </li>
            </List>
        </Wrap>
    )
}