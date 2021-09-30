import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


const useStyles = makeStyles({
    tableContainer: {
        display: 'flex',
        maxWidth:350
    },
    table: {
        maxWidth: 350,
    },
});

export default function PricingView() {
    const classes = useStyles();

    return (
        <div>
            <h4 style={{ textAlign: 'center' }}>Cennik</h4>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            <TableRow >
                                <TableCell>
                                    Pojedyńcze wejście
              </TableCell>
                                <TableCell align="left">30 PLN</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell component="th" scope="row">
                                    Karnet 4 wejścia
              </TableCell>
                                <TableCell align="left">120 PLN</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell component="th" scope="row">
                                    Karnet 8 wejść
              </TableCell>
                                <TableCell align="left">200 PLN</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell component="th" scope="row">
                                    Karnet open
              </TableCell>
                                <TableCell align="left">250 PLN</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
            <Alert style={{ margin: '10px 0' }} severity="info">Każdy karnet zawiera bezpłatne zajęcia indywidualne, wraz z analizą postawy ciała i indywidualnem zestawem ćwiczeń (raz w miesiącu).</Alert>
        </div>
    );
}