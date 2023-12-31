import { PropTypes } from 'prop-types';
import css from './Statistics.module.css';



export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2>{title}</h2>}

      <ul className={css.statist}>
        {stats.map(item => (
          <li key={item.id} className={css.item}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
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
  ).isRequired,
};


