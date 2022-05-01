import PropTypes from "prop-types";
import s from "./Statistics.module.css"

const Statistics = ({ title, stats}) => {
    return (
        <div>
            <section className={s.statistics}>
                {title && <h2 className={s.title}>Upload stats</h2>}
                <ul className={s.statList}>
                    {stats.map(item => (
                        <li className={s.item} key={item.id} style={{ backgroundColor: getRandomHexColor() }}>
                            <span className={s.label}>{item.label}</span>
                            <span className={s.percentage}>{item.percentage}%</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
        })
    )
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default Statistics;