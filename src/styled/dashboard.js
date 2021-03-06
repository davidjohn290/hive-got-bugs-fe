import styled from "styled-components";
import UserCard from "../components/dashboard/UserCard";
import BugChart from "../components/dashboard/BugChart";
import Dashboard from "../components/dashboard/Dashboard";
import EditDashboard from "../components/dashboard/EditDashboard";
import AddProblem from "../components/dashboard/AddProblem";

// <article>
export const StyledUserCard = styled(UserCard)`
  text-align: center;
  padding: 0.3em;

  h2 {
    text-align: center;
  }

  h4 {
    margin: 5px;
    margin-bottom: 5px;
  }

  label {
    text-align: center;
  }

  img {
    margin-top: 1cm;
    max-width: 4cm;
    max-height: 4cm;
    margin-bottom: 0.5cm;
  }

  header {
    background-color: grey;
    margin-bottom: 25px;
    border-radius: 8px;
    margin: 10%;
    margin-top: 5%;
    margin-bottom: 5%;
    text-align: center;
    padding-top: 0.5em;
  }
  button {
    display: flex;
    margin: auto;
  }

  .github {
    font-size: 9pt;
    overflow-wrap: break-word;
  }
`;

// <section>
export const StyledBugChart = styled(BugChart)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .chartLabel {
    text-align: center;
    font-size: 12px;
    margin-bottom: 5%;
    margin-top: 0%;
  }
  #bugPoints {
    font-family: monospace;
    font-size: 10pt;
  }
  #toggleChart {
    font-family: monospace;
    font-size: 10pt;
    margin: 3em;
  }

  #chartList {
    margin: 0;
    width: 100%;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 15%;
    justify-content: space-space-between;
  }

  li {
    list-style: none;
    margin: 0;
    padding: 0.5cm;
  }

  canvas {
    margin: 0;
    max-height: 100%;
    max-width: 100%;
  }
`;

//<main>
export const StyledDashboard = styled(Dashboard)`
  header {
    margin-top: 50px;
  }

  .dashboardButtons {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
  }

  #solvedButton {
    margin: 10%;
    margin-bottom: 1cm;
  }

  #addButton {
    margin: 10%;
    margin-bottom: 2cm;
  }

  #editButton {
    margin: 10%;
    margin-bottom: 1cm;
  }

  h2 {
    text-align: center;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 1cm;
    text-decoration: underline;
  }

  h3 {
    text-align: center;
    margin: auto;
    margin-bottom: 20px;
    text-decoration: underline;
    font-family: monospace;
  }
  p {
    text-align: center;
  }
  ul {
    display: flex;
    padding: 0;
    margin: auto;
    justify-content: center;
    flex-wrap: wrap;
  }
  li {
    margin: auto;
  }
`;
// <form>
export const StyledEditDashboard = styled(EditDashboard)`
  font-size: 0.5cm;
  width: auto;
  height: auto;
  background-color: grey;
  margin-bottom: 25px;
  border-radius: 8px;
  margin: 10%;
  text-align: center;
  padding: 0.7em;

  h2 {
    font-weight: bold;
    text-align: center;
    margin-top: 0px;
  }

  header {
    margin-top: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
  }

  label {
    vertical-align: middle;
  }

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
  }
  select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
  }

  textarea {
    margin-bottom: 16px;
    width: 100%;
  }

  button {
    margin: auto;
    margin-top: 10px;
  }
`;

// <form>
export const StyledAddProblem = styled(AddProblem)`
  font-size: 0.5cm;
  border: black 1px solid;
  width: auto;
  height: auto;
  background-color: grey;
  padding: 30px;
  margin-bottom: 25px;
  border-radius: 8px;
  margin: 5%;
  margin-bottom: 10%;
  text-align: center;

  h2 {
    font-weight: bold;
    text-align: center;
    margin-top: 0;
  }

  header {
    padding-bottom: 1cm;
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  label {
    vertical-align: middle;
  }

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
  }

  select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
  }

  textarea {
    margin-bottom: 16px;
    width: 100%;
  }

  button {
    margin: auto;
    margin-top: 10px;
  }

  .submitted {
    padding-top: 1em;
  }
`;
