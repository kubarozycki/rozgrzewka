import { Paper, Typography } from "@material-ui/core";
import ImageCard from "../../controls/imageCard";
import TrainingsList from '../../modules/trainings/components/trainings-list'

function AboutView() {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <img style={{ maxWidth: '300px' }} src='/logos/rozgrzewka_glowne.png' alt='logo' />
            </div>
            <Paper elevation={4} style={{ padding: '10px' }}>
                <Typography variant="body1" style={{ padding: '1.2rem' }}>
                    Miejsce stworzone z pasji do zdrowego ruchu i ćwiczeń pilates.
                    Przestrzeń aby zadbać zarówno o swoje ciało jak i umysł.
                    W grafiku dostępne są różnorodne zajęcia, sprawdź i dopasuj trening pod swoje potrzeby.
                    Nasze studio cechuję się indywidualnym podejściem do każdego uczestnika, dzięki kameralnym zajęciom, nikt nie zostaje pozostawiony sam sobie. Instruktor, zawsze służy pomocą, dopasowuje ćwiczenia do umiejętności i  stawia wyzwania.
            </Typography>

            </Paper >
            <TrainingsList />
        </div>

    );
}

export default AboutView;
