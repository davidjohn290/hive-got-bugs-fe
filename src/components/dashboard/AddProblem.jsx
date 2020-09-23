import React, { Component } from "react";
import Loader from "../Loader";
import { UserContext } from "../../UserContext";
import { getTech } from "../../utils/api";
import { StyledHexButton } from "../../styled/lib";
class AddProblem extends Component {
  static contextType = UserContext;

  state = {
    username: this.context.username,
    isLoading: true,
    techList: [],
    tech: "",
    difficulty: 0,
    title: "",
    body: "",
    submitted: false,
  };

  componentDidMount() {
    getTech().then((tech) =>
      this.setState({ techList: tech, isLoading: false })
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { updateProblemList } = this.props;
    const { username, tech, difficulty, title, body } = this.state;
    this.setState({ submitted: true });
    updateProblemList(username, { tech, difficulty, title, body });
  };

  handleInput = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  };

  render() {
    const { isLoading, title, body, submitted, techList } = this.state;
    const { className } = this.props;
    if (isLoading) return <Loader />;
    return (
      <div>
        <form className={className} onSubmit={this.handleSubmit}>
          <label>
            Tech used:
            <select id="tech" onChange={this.handleInput} required>
              <option value=""></option>
              {techList.map((tech) => {
                return (
                  <option value={tech.slug} key={tech.slug}>
                    {tech.slug}
                  </option>
                );
              })}
            </select>
          </label>

          <label>
            Difficulty:
            <select id="difficulty" onChange={this.handleInput} required>
              <option value="">e.g. 1 is the easiest</option>
              <option value="0">1</option>
              <option value="1">2</option>
              <option value="2">3</option>
            </select>
          </label>

          <label>
            Title:
            <input
              type="text"
              id="title"
              value={title}
              onChange={this.handleInput}
              required
            />
          </label>

          <label>
            Problem:
            <textarea
              cols="30"
              rows="8"
              id="body"
              type="text"
              maxLength="280"
              value={body}
              onChange={this.handleInput}
              required
            />
          </label>

          <StyledHexButton as="button" type="submit">
            Submit
          </StyledHexButton>

          {submitted && "Your Problem has been posted!"}
        </form>
      </div>
    );
  }
}

export default AddProblem;