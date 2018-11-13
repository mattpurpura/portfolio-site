import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
    display: 'flex',
  },
  root: {
    borderColor: 'white',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '600px'
  },
  label:{
    color: 'white'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '600px',
  },
  text:{
    color: 'white'
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class OutlinedTextFields extends React.Component {
  state = {
    name: 'Matt Purpura',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
    <Grid container direction="column" justify="center" alignItems="center">
        <Grid item justify='center'> 
        {/* <form className={classes.container} noValidate autoComplete="off"> */}
            <TextField
            id="outlined-name"
            label="Name"
            // className={classes.textField}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
            InputProps={{
                classes: {
                  input: classes.text
                }}
            }
            InputLabelProps={{
                classes: {
                  root: classes.label
                }}
            }
            classes={{
                root: classes.root,
                label: classes.label
            }}
            />
        </Grid>
        <Grid item>
            <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            InputProps={{
                classes: {
                  input: classes.text
                }}
            }
            InputLabelProps={{
                classes: {
                  root: classes.label
                }}
            }
            />
        </Grid>
        <Grid item>
            <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows="15"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            InputProps={{
                classes: {
                  input: classes.text
                }}
            }
            InputLabelProps={{
                classes: {
                  root: classes.label
                }}
            }
            />
        {/* </form> */}
        </Grid>
    </Grid>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);