import PropTypes from "prop-types";
import BodyRecordChart from './BodyRecordChart'
import ExerciseLog from './ExerciseLog'

const MyRecordGraph = ({ className = "" }) => {
  return (
    <>
      <BodyRecordChart/>
      <ExerciseLog/>
    </>
  );
};

MyRecordGraph.propTypes = {
  className: PropTypes.string,
};

export default MyRecordGraph;
