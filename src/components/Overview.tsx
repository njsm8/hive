import useData from "../hooks/useData";
import WorkspaceCard from "./WorkspaceCard";
import './workspace.style.css';

const BASE_IMG_URL = 'https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/refs/heads/main/';
const FALLBACK_IMG_URL = 'https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/refs/heads/main/static_assets/0a74575ca6004b4bb20dcd131afc5849.jpg';

const Overview = () => {
    const { data, error, status} = useData();

    if(status === 'loading') {
        return <div>Loading...</div>
    }

    if(status === 'failed') {
        return <div>{error}</div>
    }

    
    return (
        <div className="overview-container">
        <h1>Our Space Overview</h1>
        <div className="workspace-list-container">
            {
                data.map((workspace) => (
                    <WorkspaceCard key={workspace.id} tag={workspace?.amenities?.[0] || 'Workspace' } image={workspace.images[0] ? BASE_IMG_URL+workspace.images[0] : FALLBACK_IMG_URL} />
                ))
            }
        </div>
        </div>
    );
    };

export default Overview;