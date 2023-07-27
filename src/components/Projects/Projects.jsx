import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import { Slide } from "react-awesome-reveal";
import {useEffect, useState} from 'react';
import { RepoData } from "../../constants/GithubData.tsx";

const Projects = () => {
const [githubUser, setGithubUser] = useState("Logan-Rising")
const [githubDiscordBotData, setGithubDiscordBotData] = useState(undefined);

useEffect(() => {
  fetchData()
}, [])

async function getRepoData(githubRepoUrl, languagesUrl) {
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

    res = await fetch(languagesUrl);

    data = await res.json();
    repos = repos.concat(data);

    console.log('logging repos v2')
    console.log(repos)
}

const fetchData = async () => {
  getRepoData(`https://api.github.com/repos/Logan-Rising/DiscordBot`, `https://api.github.com/repos/Logan-Rising/DiscordBot/languages`);
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
            title={githubDiscordBotData ? githubDiscordBotData.name : ''}
            company={githubDiscordBotData ? githubDiscordBotData.description : ''}
            date={githubDiscordBotData ? githubDiscordBotData.language : ''}
            buttonText="View Project"
            link={githubDiscordBotData ? githubDiscordBotData.url : ''}
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

const devicons = {
  Git: '<i class="devicon-git-plain" style="color: #555"></i>',
  Github: '<i class="devicon-github-plain" style="color: #1688f0"></i>',
  Chrome: '<i class="devicon-chrome-plain" style="color: #1688f0"></i>',
  Assembly: '<i class="devicon-labview-plain colored"></i> Assembly',
  'C#': '<i class="devicon-csharp-plain colored"></i> C#',
  'C++': '<i class="devicon-cplusplus-plain colored"></i> C++',
  C: '<i class="devicon-c-plain colored"></i> C',
  Clojure: '<i class="devicon-clojure-plain colored"></i> C',
  CoffeeScript:
      '<i class="devicon-coffeescript-plain colored"></i> CoffeeScript',
  Crystal: '<i class="devicon-crystal-plain colored"></i> Crystal',
  CSS: '<i class="devicon-css3-plain colored"></i> CSS',
  Dart: '<i class="devicon-dart-plain colored"></i> Dart',
  Dockerfile: '<i class="devicon-docker-plain colored"></i> Docker',
  Elixir: '<i class="devicon-elixir-plain colored"></i> Elixir',
  Elm: '<i class="devicon-elm-plain colored"></i> Elm',
  Erlang: '<i class="devicon-erlang-plain colored"></i> Erlang',
  'F#': '<i class="devicon-fsharp-plain colored"></i> F#',
  Go: '<i class="devicon-go-plain colored"></i> Go',
  Groovy: '<i class="devicon-groovy-plain colored"></i> Groovy',
  HTML: '<i class="devicon-html5-plain colored"></i> HTML',
  Haskell: '<i class="devicon-haskell-plain colored"></i> Haskell',
  Java: '<i class="devicon-java-plain colored" style="color: #ffca2c"></i> Java',
  JavaScript: '<i class="devicon-javascript-plain colored"></i> JavaScript',
  Julia: '<i class="devicon-julia-plain colored"></i> Julia',
  'Jupyter Notebook': '<i class="devicon-jupyter-plain colored"></i> Jupyter',
  Kotlin: '<i class="devicon-kotlin-plain colored" style="color: #796bdc"></i> Kotlin',
  Latex: '<i class="devicon-latex-plain colored"></i> Latex',
  Lua: '<i class="devicon-lua-plain-wordmark colored" style="color: #0000d0"></i> Lua',
  Matlab: '<i class="devicon-matlab-plain colored"></i> Matlab',
  Nim: '<i class="devicon-nixos-plain colored" style="color: #FFC200"></i> Nim',
  Nix: '<i class="devicon-nixos-plain colored"></i> Nix',
  ObjectiveC: '<i class="devicon-objectivec-plain colored"></i> ObjectiveC',
  OCaml: '<i class="devicon-ocaml-plain colored"></i> OCaml',
  Perl: '<i class="devicon-perl-plain colored"></i> Perl',
  PHP: '<i class="devicon-php-plain colored"></i> PHP',
  PLSQL: '<i class="devicon-sqlite-plain colored"></i> PLSQL',
  Processing:
      '<i class="devicon-processing-plain colored" style="color: #0096D8"></i> Processing',
  Python: '<i class="devicon-python-plain colored" style="color: #3472a6"></i> Python',
  R: '<i class="devicon-r-plain colored"></i> R',
  Ruby: '<i class="devicon-ruby-plain colored"></i> Ruby',
  Rust: '<i class="devicon-rust-plain colored" style="color: #DEA584"></i> Rust',
  Sass: '<i class="devicon-sass-original colored"></i> Sass',
  Scala: '<i class="devicon-scala-plain colored"></i> Scala',
  Shell: '<i class="devicon-bash-plain colored" style="color: #89E051"></i> Shell',
  Solidity: '<i class="devicon-solidity-plain colored"></i> Solidity',
  Stylus: '<i class="devicon-stylus-plain colored"></i> Stylus',
  Svelte: '<i class="devicon-svelte-plain colored"></i> Svelte',
  Swift: '<i class="devicon-swift-plain colored"></i> Swift',
  Terraform: '<i class="devicon-terraform-plain colored"></i> Terraform',
  TypeScript: '<i class="devicon-typescript-plain colored"></i> TypeScript',
  'Vim Script': '<i class="devicon-vim-plain colored"></i> Vim Script',
  Vue: '<i class="devicon-vuejs-plain colored"></i> Vue',
};
