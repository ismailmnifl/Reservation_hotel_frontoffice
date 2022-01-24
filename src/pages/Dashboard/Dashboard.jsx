import './dashboard.css';
import DashSidebar from '../../components/dashSidebar/DashSidebar';
import Content from '../../components/dashboardContent/Content';



export default function Dashboard() {
  return (
      <div className="dashboard">
          <DashSidebar/>
          <Content/>
      </div>
  );
}
