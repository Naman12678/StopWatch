import RealTimeClock from '../components/RealTimeClock';
import Stopwatch from '../components/Stopwatch';

function Clock() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-white text-white">
      <RealTimeClock />
      <Stopwatch />
    </div>
  );
}

export default Clock;
