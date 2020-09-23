import React, { Component } from "react";
import { getUserByUsername, getProblemByUsername } from "../../utils/api";
import { UserContext } from "../../UserContext";
import { StyledLoader } from "../../styled/lib";
import ErrorPage from "../ErrorPage";
import {
  StyledUserCard,
  StyledBugChart,
  StyledEditDashboard,
  StyledAddProblem,
} from "../../styled/dashboard";
import { StyledHexButton } from "../../styled/lib";
import { StyledProblemCard } from "../../styled/home";
import { addProblemByUsername } from "../../utils/api";

class Dashboard extends Component {
  state = {
    isLoading: false,
    err: null,
    user: {},
    username: null,
    problems: [],
    toggleEdit: false,
    filter: false,
    toggleProblem: false,
  };

  static contextType = UserContext;

  componentDidMount() {
    const { username } = this.context;
    const { filter } = this.state;

    this.setState({ username });
    if (username) {
      this.fetchUser(username);
      this.fetchProblems(username, filter);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { username } = this.context;
    const { filter } = this.state;

    if (username !== prevState.username || prevState.filter !== filter) {
      this.setState({ username });
      if (username) {
        this.fetchUser(username);
        this.fetchProblems(username, filter);
      }
    }
  }

  fetchUser = (username) => {
    this.setState({ isLoading: true });
    getUserByUsername(username)
      .then((user) => {
        this.setState({ user, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            type: "fetchUser",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  };

  addProblem = (username, body) => {
    this.setState((currentState) => {
      const newProblem = {
        username: username,
        difficulty: body.difficulty,
        solved: false,
        tech: body.tech,
        title: body.title,
        body: body.body,
        created_at: "a minute ago",
      };
      return { problems: [newProblem, ...currentState.problems] };
    });
    addProblemByUsername(username, body);
  };

  fetchProblems = (username, filter) => {
    this.setState({ isLoading: true });
    getProblemByUsername(username, filter)
      .then((problems) => {
        this.setState({ problems, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            type: "fetchProblems",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  };

  showSolved = () => {
    this.setState((currentState) => {
      return { filter: !currentState.filter };
    });
  };

  toggleShowEdit = () => {
    this.setState((currentState) => {
      return { toggleEdit: !currentState.toggleEdit };
    });
  };

  toggleProblem = () => {
    this.setState((currentState) => {
      return { toggleProblem: !currentState.toggleProblem };
    });
  };

  render() {
    const {
      err,
      isLoading,
      user,
      username,
      problems,
      toggleEdit,
      filter,
      toggleProblem,
    } = this.state;
    const { className } = this.props;

    if (err) return <ErrorPage {...err} />;
    if (isLoading) return <StyledLoader />;

    if (!username) return <p>Please log in first!</p>;
    else
      return (
        <main className={className}>
          <StyledUserCard
            username={user.username}
            memberSince={user.memberSince}
            avatar_url={user.avatar_url}
            bugPoints={user.bugPoints}
            description={user.description}
            skills={user.skills}
            github_url={user.github_url}
            role={user.role}
          />
          <StyledBugChart username={username} />
          <section>
            <h2>Posted problems</h2>
            <header className="dashboardButtons">
              <StyledHexButton
                as="button"
                id="editButton"
                onClick={this.toggleShowEdit}
              >
                {!toggleEdit ? "Edit" : "Close Edit"}
              </StyledHexButton>
              {toggleEdit && <StyledEditDashboard username={username} />}
              <StyledHexButton
                as="button"
                onClick={this.showSolved}
                id="solvedButton"
              >
                {!filter ? "Show Solved" : "Show Unsolved"}
              </StyledHexButton>
              <StyledHexButton as="button" onClick={this.toggleProblem}>
                {toggleProblem ? "Close" : "Add Problem"}
              </StyledHexButton>
              {toggleProblem && (
                <StyledAddProblem updateProblemList={this.addProblem} />
              )}
            </header>
            <ul>
              {problems.map((problem) => {
                return (
                  <StyledProblemCard
                    key={problem.problem_id}
                    problem={problem}
                  />
                );
              })}
            </ul>
          </section>
        </main>
      );
  }
}

export default Dashboard;
