import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import { Slide } from "react-awesome-reveal";
import {useEffect, useState} from 'react';

import DiscordBotLogo from "../../assets/DiscordBotLogo.png";
import JavascriptLogo from '../../assets/JavaScript-logo.png';
import TypescriptLogo from '../../assets/typescript-logo.png';
import DiscordBotDashboardLogo from '../../assets/DiscordBotDashbordLogo.png';
import WebsiteLogo from '../../assets/website-logo.png';

const Projects = () => {
const [githubDiscordBotData, setGithubDiscordBotData] = useState(undefined);
const [githubDiscordBotDashboardData, setGithubDiscordBotDashboardData] = useState(undefined);
const [githubWebsiteData, setGithubWebsiteData] = useState(undefined);

useEffect(() => {
  fetchData()
}, [])

async function getRepoData(githubRepoUrl) {
  let repos = [];
    let res;
  res = await fetch(githubRepoUrl)
  console.log('logging res')
  console.log(res)

    let data = await res.json();
    repos = repos.concat(data);

    console.log('logging repos')
    console.log(repos)
    const name = repos[0].name;
    const description = repos[0].description;
    const language = repos[0].language;
    const url = repos[0].html_url;
    console.log(repos[0].name);
    console.log(repos[0].description);
    console.log(repos[0].language);
    console.log(repos[0].html_url);

    const info = {
      name,
      description,
      language,
      url,
    }

    return info;
}

const fetchData = async () => {
  setGithubDiscordBotData(await getRepoData(`https://api.github.com/repos/Logan-Rising/DiscordBot`));
  setGithubDiscordBotDashboardData(await getRepoData(`https://api.github.com/repos/Logan-Rising/DiscordBotDashboard`));
  setGithubWebsiteData(await getRepoData(`https://api.github.com/repos/Logan-Rising/website`));
}

  return (
    <div id="projects" className="card-container" >
      <Slide direction="down">
        <h1 style={{textDecorationLine: 'underline', color: 'white'}}>
          Projects
        </h1>
      </Slide>
      <div className="cards">
        <Slide direction="left">
          <Card
            imageUrl={DiscordBotLogo}
            backgroundColor={'#800000'}
            imageWidth={'60%'}
            title={githubDiscordBotData ? githubDiscordBotData.name : ''}
            description={githubDiscordBotData ? githubDiscordBotData.description : ''}
            // date={githubDiscordBotData ? githubDiscordBotData.language : ''}
            buttonText="View Project"
            onClick={() => {
              window.open("https://github.com/Logan-Rising/DiscordBot", "_blank", "noreferrer");
            }}
          />
        </Slide>
        <Slide direction="up">
          <Card
            imageUrl = {DiscordBotDashboardLogo}
            backgroundColor={'#800000'}
            title={githubDiscordBotDashboardData ? githubDiscordBotDashboardData.name : ''}
            description={githubDiscordBotDashboardData ? githubDiscordBotDashboardData.description : ''}
            buttonText="View Project"
            onClick={() => {
              window.open("https://github.com/Logan-Rising/DiscordBotDashboard", "_blank", "noreferrer");
            }}
          />
        </Slide>
        <Slide direction="right">
          <Card
            imageUrl = {WebsiteLogo}
            backgroundColor={'#800000'}
            title={githubWebsiteData ? githubWebsiteData.name : ''}
            description={githubWebsiteData ? githubWebsiteData.description : ''}
            buttonText="View Project"
            onClick={() => {
              window.open("https://github.com/Logan-Rising/website", "_blank", "noreferrer");
            }}
          />
        </Slide>
      </div>
    </div>
  );
};

export default Projects;
