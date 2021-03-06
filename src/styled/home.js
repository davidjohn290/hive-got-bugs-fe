import styled from "styled-components";
import Home from "../components/home/Home";
import SortProblems from "../components/home/SortProblems";
import FilterProblemsTech from "../components/home/FilterProblemsTech";
import FilterProblemsDifficulty from "../components/home/FilterProblemsDifficulty";
import ProblemsList from "../components/home/ProblemsList";
import ProblemCard from "../components/home/ProblemCard";

// <main>
export const StyledHome = styled(Home)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 1.5em;
  }
`;

// <section>
export const StyledSortProblems = styled(SortProblems)`
  margin: 0.6em;
`;

// <section>
export const StyledFilterProblemsTech = styled(FilterProblemsTech)`
  margin: 0.6em;
`;

// <section>
export const StyledFilterProblemsDifficulty = styled(FilterProblemsDifficulty)`
  margin: 0.6em;

  p {
    margin-top: 0px;
    margin-bottom: 0.4em;
    text-align: center;
  }
`;

// <ul>
export const StyledProblemsList = styled(ProblemsList)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px;
`;

// <li>
export const StyledProblemCard = styled(ProblemCard)`
  list-style-type: none;
  padding-left: 1em;
  padding-right: 1em;
  width: 280px;
  height: 280px;
  text-align: center;

  article {
    width: 100%;
    height: 100%;
    h2 {
      margin: 0.1em;
    }
  }

  .header {
    font-size: 8pt;
  }

  .container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: rgb(39, 44, 53);
    margin: 0px;
    padding: 0px;
    font-size: 10pt;
    background-color: ${(props) => {
      const { difficulty } = props;
      if (difficulty === 0) return "#8cc56f";
      if (difficulty === 1) return "#da995c";
      if (difficulty === 2) return "#ed6270";
    }};
  }

  /* Make a hexagonal container using negative space */
  .negative_hexagon:before,
  .negative_hexagon:after {
    content: "";
    background-color: #272c35;
    shape-margin: 0.3em;
  }
  .negative_hexagon:before {
    float: left;
    width: 50%;
    height: 100%;
    shape-outside: polygon(
      51.48% 85.01%,
      2.98% 43%,
      51.48% 0.99%,
      100% 0.99%,
      100% 0%,
      0% 0%,
      0% 100%,
      100% 100%,
      100% 85.01%,
      51.48% 85.01%
    );
    clip-path: polygon(
      51.48% 85.01%,
      2.98% 43%,
      51.48% 1%,
      101% 1%,
      101% -2%,
      -1% -2%,
      -1% 102%,
      101% 102%,
      101% 85.01%,
      51.48% 85.01%
    );
  }
  .negative_hexagon:after {
    float: right;
    width: 50%;
    height: 100%;
    shape-outside: polygon(
      0% 0%,
      0% 0.99%,
      48.52% 0.99%,
      97.02% 43%,
      48.52% 85.01%,
      0% 85.01%,
      0% 100%,
      100% 100%,
      100% 0%,
      0% 0%
    );
    clip-path: polygon(
      0% -2%,
      0% 1%,
      48.52% 1%,
      97.02% 43%,
      48.52% 85.01%,
      0% 85.01%,
      0% 102%,
      101% 102%,
      101% -2%,
      0% -2%
    );
  }

  h2 {
    margin: 0.1em;
  }
`;
