import { Button, Divider, List, ListItem, makeStyles, Paper, Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import trainingsList from "../../modules/trainings/dataStore";

const trainingsCalendar = {
    MONDAY: {
        title: 'Poniedziałek',
        trainings: [
            { time: '17:00', training: trainingsList['ZDROWY_KREGOSLUP'] },
            { time: '18:00', training: trainingsList['PRZYBORY'] },
            { time: '19:00', training: trainingsList['POWER_PILATES'] }
        ]
    },
    TUESDAY: {
        title: 'Wtorek',
        trainings: [
            { time: '8:00', training: trainingsList['POWER_PILATES'] },
            { time: '9:00', training: trainingsList['POWER_PILATES'] },
            { time: '18:00', training: trainingsList['PILATES_PODSTAWY'] },
            { time: '19:00', training: trainingsList['ZDROWY_KREGOSLUP'] }
        ]
    },
    WEDNESDAY: {
        title: 'Środa',
        trainings: [
            { time: '17:00', training: trainingsList['ZDROWY_KREGOSLUP'] },
            { time: '18:00', training: trainingsList['PRZYBORY'] },
            { time: '19:00', training: trainingsList['ZDROWY_KREGOSLUP'] },
            { time: '20:00', training: trainingsList['STRETCHING'] }
        ]
    },
    THURSDAY: {
        title: 'Czwartek',
        trainings: [
            { time: '8:00', training: trainingsList['PRZYBORY'] },
            { time: '9:00', training: trainingsList['POWER_PILATES'] },
            { time: '10:00', training: trainingsList['PILATES_DLA_MAM'] },
            { time: '18:00', training: trainingsList['PILATES_PODSTAWY'] },
            { time: '19:00', training: trainingsList['PILATES_PODSTAWY'] },
            { time: '20:00', training: trainingsList['STRETCHING'] }
        ]
    },
    FRIDAY: {
        title: 'Piątek',
        trainings: [
            { time: '8:00', training: trainingsList['PILATES_PODSTAWY'] },
            { time: '9:00', training: trainingsList['POWER_PILATES'] },
            { time: '17:00', training: trainingsList['ZDROWY_KREGOSLUP'] },
            { time: '18:00', training: trainingsList['PRZYBORY'] },
            { time: '19:00', training: trainingsList['ZDROWY_KREGOSLUP'] }
        ]
    }
}


const morningHours = [];

for (let i = 7; i < 11; i++) {
    morningHours.push(i);
}

function CalendarView() {
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const useStyles = makeStyles({
        table: {
            minWidth: 300,
        },
    });

    const classes = useStyles();
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            {Object.values(trainingsCalendar).map(x => {
                return (
                    <Paper elevation={3} style={{ minWidth: '250px', textAlign: 'center', margin: '10px' }}>
                        <h4>{x.title}</h4>
                        <Table className={classes.table} aria-label="simple table">

                            <TableBody>
                                {x.trainings.map(y => {
                                    return <TableRow key={y}>
                                        <TableCell align="left">{y.time}</TableCell>
                                        <TableCell align="center">{y.training.title}
                                            <div>

                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="outlined" size='xs' color="primary" onClick={() => history.push('/kontakt')}>
                                                Zapisy
                                            </Button>
                                        </TableCell>

                                    </TableRow>
                                })}
                            </TableBody>
                        </Table>


                    </Paper>
                )
            })}
        </div >
    );
}

export default CalendarView;
