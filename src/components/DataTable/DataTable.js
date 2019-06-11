import React, {Component} from 'react';
import Data from '../../Data/MOCK_DATA';
import './DataTable.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';


class DataTable extends Component {

    state = {
        selected: '',
        hasError: false
    };

    setData = () => {
        this.setState({data:Data});
    };

    componentWillMount() {
        this.setData();
    }

    handleChange(value) {
        this.setState({ selected: value });
    }

    useStyles = () => {
        const useStyles = makeStyles(theme => ({
            selectRoot: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            formControl: {
                margin: theme.spacing(1),
                minWidth: 120,
            },
            selectEmpty: {
                marginTop: theme.spacing(2),
            },
        }));
        return useStyles;
    };

    render() {
        const  classes  = this.useStyles();
        const { selected } = this.state;
        return (
            <div className="table-options1">
                <div className="selects">
                    <form className={classes.selectRoot} autoComplete="off">
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="sort-table">Sort</InputLabel>
                            <Select
                                name="name"
                                value={selected}
                                onChange={event => this.handleChange(event.target.value)}
                                input={<Input id="name" />}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </div>
                <Paper className="Root">
                    <Table className="table">
                        <TableHead>
                            <TableRow>
                                <TableCell>First name</TableCell>
                                <TableCell>Last name</TableCell>
                                <TableCell>Rating</TableCell>
                                <TableCell>Links</TableCell>
                                <TableCell>Employed</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.data.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th">{row.first_name}</TableCell>
                                    <TableCell component="th">{row.last_name}</TableCell>
                                    <TableCell component="th">{row.Rating}</TableCell>
                                    <TableCell component="th" className="link-column">{row.Links}</TableCell>
                                    <TableCell component="th">{`${row.Employed}`}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );

    }
}

export default DataTable;