import {
    StatisticsSection,
    StatisticsTitle,
    StatisticsList,
    StatisticsItem,
    StatisticsLabel
} from "./Statistics.styled";
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => { 
    return <StatisticsSection>
        {title && <StatisticsTitle>{title}</StatisticsTitle>}
                <StatisticsList>
                    {stats.map((stat) => ( 
                        <StatisticsItem key={stat.id} style={{backgroundColor: getRandomHexColor()}}>
                            <StatisticsLabel>{ stat.label}</StatisticsLabel>
                            <span>{ stat.percentage}%</span>
                        </StatisticsItem>
                    ))}
                </StatisticsList>
            </StatisticsSection>
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}