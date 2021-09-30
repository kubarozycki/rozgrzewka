import ImageCard from "../../../../controls/imageCard";
import trainingsList from '../../dataStore';

function TrainingsList() {
    return (
        <div style={{ paddingTop: '20px', display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            {Object.values(trainingsList).map(t => {
                return (
                    <ImageCard title={t.title} description={t.description} imageSrc={t.imageSrc} />
                )
            })}
        </div>

    );
}

export default TrainingsList;
