import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import { Slide } from "react-awesome-reveal";
import {useEffect, useState} from 'react';

import DiscordBotLogo from "../../assets/DiscordBotLogo.png";
import JavascriptLogo from '../../assets/JavaScript-logo.png';
import TypescriptLogo from '../../assets/typescript-logo.png';

const Projects = () => {
const [githubDiscordBotData, setGithubDiscordBotData] = useState(undefined);

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

    setGithubDiscordBotData(info);
}

const fetchData = async () => {
  await getRepoData(`https://api.github.com/repos/Logan-Rising/DiscordBot`);
  // await getRepoData(``);
}

  return (
    <div id="projects" style={{
      width: '80%',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '3rem 0'}}>
      <Slide direction="down">
        <h1 style={{textDecorationLine: 'underline', color: 'white'}}>
          Projects
        </h1>
      </Slide>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        marginTop: '4rem',
        gap: '1rem',
      }}>
        <Slide direction="left">
          <Card
            image = {DiscordBotLogo}
            background={'#800000'}
            imageWidth={'60%'}
            title={githubDiscordBotData ? githubDiscordBotData.name : ''}
            company={githubDiscordBotData ? githubDiscordBotData.description : ''}
            date={githubDiscordBotData ? githubDiscordBotData.language : ''}
            buttonText="View Project"
            link={githubDiscordBotData ? githubDiscordBotData.url : ''}
            subImage={JavascriptLogo}
          />
        </Slide>
        <Slide direction="right">
          <Card
            
          />
        </Slide>
      </div>
    </div>
  );
};

export default Projects;
