import PropTypes from 'prop-types';
import { Stats, Statlist, Label, Percentage } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <div>
      <Stats>
        {title && <h2>Upload stats</h2>}
        <Statlist>
          {stats.map(({ id, label, percentage }) => (
            <li key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </li>
          ))}
        </Statlist>
      </Stats>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default Statistics;
