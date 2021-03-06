import React, { Component } from "react";
import { StyledHexButton, StyledErrorPage } from "../../styled/lib";
import * as api from "../../utils/api";

class EditDashboard extends Component {
  state = {
    username: this.props.username,
    description: "",
    github_url: "",
    skill1: "",
    skill2: "",
    skill3: "",
    tech: [],
    submitted: false,
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    const { username } = this.state;
    api
      .getUserByUsername(username)
      .then(({ description, github_url, skill1, skill2, skill3 }) => {
        this.setState({
          description,
          github_url,
          skill1,
          skill2,
          skill3,
          isLoading: false,
        });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            type: "getUser",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  }

  getAllTech = () => {
    api
      .getTech()
      .then((tech) => this.setState({ tech }))
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            type: "getTech",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  };

  handleSubmit = (e) => {
    const {
      username,
      description,
      github_url,
      skill1,
      skill2,
      skill3,
    } = this.state;
    e.preventDefault();
    api
      .editUserProfileByUsername(username, {
        description,
        github_url,
        skill1,
        skill2,
        skill3,
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            type: "editUser",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
    this.setState({
      submitted: true,
      github_url: "",
      skill1: "",
      skill2: "",
      skill3: "",
      description: "",
    });
  };

  handleInput = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  };

  render() {
    const { className } = this.props;
    const {
      description,
      github_url,
      skill1,
      skill2,
      skill3,
      submitted,
      tech,
      isLoading,
      err,
    } = this.state;

    if (isLoading) return <p>Loading...</p>;
    if (err) return <StyledErrorPage {...err} />;

    return (
      <section>
        <form className={className} onSubmit={this.handleSubmit}>
          <label>
            Skill 1:
            <select
              id="skill1"
              onChange={this.handleInput}
              onClick={this.getAllTech}
            >
              <option value="skill1">{skill1}</option>
              {tech.map((item) => {
                return (
                  <option value={item.slug} key={item.slug}>
                    {item.slug}
                  </option>
                );
              })}
            </select>
          </label>

          <label>
            Skill 2:
            <select
              id="skill2"
              onChange={this.handleInput}
              onClick={this.getAllTech}
            >
              <option value="skill1">{skill2}</option>
              {tech.map((item) => {
                return (
                  <option value={item.slug} key={item.slug}>
                    {item.slug}
                  </option>
                );
              })}
            </select>
          </label>

          <label>
            Skill 3:
            <select
              id="skill3"
              onChange={this.handleInput}
              onClick={this.getAllTech}
            >
              <option value="skill1">{skill3}</option>
              {tech.map((item) => {
                return (
                  <option value={item.slug} key={item.slug}>
                    {item.slug}
                  </option>
                );
              })}
            </select>
          </label>
          <label>
            Github username:
            <input
              type="text"
              id="github_url"
              value={github_url}
              onChange={this.handleInput}
            />
          </label>

          <label>
            Bio:
            <br />
            <textarea
              cols="30"
              rows="8"
              id="description"
              type="text"
              maxLength="280"
              value={description}
              onChange={this.handleInput}
            />
          </label>

          <StyledHexButton as="button" type="submit">
            Submit
          </StyledHexButton>
          <br />
          {submitted && "Your details have been changed"}
        </form>
      </section>
    );
  }
}

export default EditDashboard;
