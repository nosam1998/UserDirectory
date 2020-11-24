import React, {Component} from "react";
import EmpDetails from "./EmployeeDetails";
import Wrapper from "./Wrapper";
import Title from "./Title";
import Table from "react-bootstrap/Table";
import SearchForm from "./SearchForm";
import API from "../utils/API";

class EmployeeContainer extends Component {
    state = {
        search: "",
        employees: [],
        tempEmployees: [],
        employeesSorted: false,
        employeesReversed: false
    };

    componentDidMount() {
        this.searchName(this.state.search);
    }

    searchName(query) {
        console.log(query);
        API.getUsers(query).then((res) => {
            console.log(res.data.results);
            this.setState({
                employees: res.data.results,
                tempEmployees: res.data.results
            });
        });
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        var newArray = this.state.employees.filter((d) => {
            return d.name.first.toLowerCase().includes(value);

        });
        console.log(newArray)
        this.setState({
            tempEmployees: newArray
        })

        this.setState({
            [name]: value,
        });
    };

    render() {
        const sortByFirstName = () => {
            let reversed = this.state.employeesReversed;
            let sorted = this.state.employeesSorted;
            let tempEmployeesArr = this.state.employees;

            if (sorted === true) {
                if (reversed === false) {
                    tempEmployeesArr.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1);
                    reversed = true;
                } else {
                    tempEmployeesArr.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
                    reversed = false;
                }
            } else {
                sorted = true;
                tempEmployeesArr.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
            }


            this.setState({
                tempEmployees: tempEmployeesArr,
                employeesSorted: sorted,
                employeesReversed: reversed
            })
        }
        return (
            <Wrapper>
                <Title>Employee Directory</Title>
                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <Table striped bordered>
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th onClick={sortByFirstName}>Name</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.tempEmployees.map((employee) => (
                        <EmpDetails
                            image={employee.picture.thumbnail}
                            name={`${employee.name.first} ${employee.name.last}`}
                            email={employee.email}
                            dob={employee.dob.date}
                            id={employee.id.value}
                        />
                    ))}
                    </tbody>
                </Table>
            </Wrapper>
        );
    }
}

export default EmployeeContainer;
