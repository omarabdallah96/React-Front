import axios from "axios";
import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';


const StyledTableCell = withStyles((theme) => ({
  head: {
    background: "#2c3e50",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    maxWidth: 1500,
  },
  tr: { color: "red" },
});
function List_admin(props) {
  const [open, setOpen] = React.useState(false);
  const [id, setid] = React.useState("");


  const handleClickOpen = (id) => {
    
    setid(id);

    setOpen(true);
    console.log(id);
  };

  const handleClose = () => {
    setOpen(false);
    setid("");

  };

  const classes = useStyles();
  const [admin, setadmin] = useState([]);
  const [search, setSearch] = useState("");

  const delete_admin = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/admin/${id}`);
      let filter = [...admin].filter((admin) => admin.id !== id);
      setadmin(filter);
      handleClose();

      console.log(id);
    } catch (e) {
      console.log(e);
    }
  };

  const get_all_admin = async () => {
    try {
      const data = await axios.get("http://localhost:8000/api/admin");
      console.log(data.data);
      setadmin(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    get_all_admin();
  }, []);
  return (
    <div className="App">
    


     
      <center style={{display:"flex"}} >
      <Link to="/admin/create">

<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0000d"  class="bi bi-person-plus-fill" viewBox="0 0 16 16">
<path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
<path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg>

</Link>
        <TextField
          id="standard-basic"
          label="Search admin"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </center>

      <br />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
            <StyledTableCell>id</StyledTableCell>

              <StyledTableCell>First name</StyledTableCell>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {admin
              .filter((admin) => {
                if (search === "") {
                  return admin;
                } else if (
                  admin.fname.toLowerCase().includes(search.toLowerCase())
                ) {
                  return admin;
                }
              })
              .map((admin) => {
                return (
                  <StyledTableRow key={admin.id}>
                    <StyledTableCell>
                      {admin.id}
                    </StyledTableCell>
                    <StyledTableCell>
                     
                      {admin.fname}
                    </StyledTableCell>
                    <StyledTableCell>{admin.username}</StyledTableCell>
                    <StyledTableCell>
                      <Link to={`/admin/edit/${admin.id}`}>
                        <EditIcon />
                      </Link>

                      <DeleteIcon
                        style={{ fill: "red", cursor: "pointer" }}
                        //  onClick={() => delete_admin(admin.id)}
                        onClick={() =>handleClickOpen(admin.id)}
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete admin !"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete?{" "}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() =>delete_admin(id)} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default List_admin;
