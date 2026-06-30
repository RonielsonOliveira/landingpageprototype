import {
  FaWhatsapp,
  FaClipboardCheck,
  FaFire,
  FaDumbbell,
  FaBullseye,
  FaChartLine,
  FaVideo,
  FaCalendarCheck,
  FaMedal,
  FaPersonRunning,
  FaHeartPulse,
} from 'react-icons/fa6';
import { GiBrazil } from 'react-icons/gi';

export function IconCase(iconName: string) {
  switch (iconName) {
    case 'Workout':
      return <FaDumbbell size={60} />;

    case 'Clipboard':
      return <FaClipboardCheck size={60} />;

    case 'Target':
      return <FaBullseye size={60} />;

    case 'Progress':
      return <FaChartLine size={60} />;

    case 'Fire':
      return <FaFire size={60} />;

    case 'Whatsapp':
      return <FaWhatsapp size={60} />;

    case 'World':
      return <GiBrazil size={60} />;

    case 'Video':
      return <FaVideo size={60} />;

    case 'Calendar':
      return <FaCalendarCheck size={60} />;

    case 'Medal':
      return <FaMedal size={60} />;

    case 'Running':
      return <FaPersonRunning size={60} />;

    case 'Health':
      return <FaHeartPulse size={60} />;

    default:
      return <FaDumbbell size={60} />;
  }
}
