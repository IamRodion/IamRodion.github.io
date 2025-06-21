import React from "react";
import Image from "react-bootstrap/Image";

const profile = {
  name: "IamRodion",
  avatar: "https://avatars.githubusercontent.com/u/22568039?v=4",
  description: (
    <>
      Hola, soy Rodion y en este sitio web puedes ver mis principales proyectos.
      Conozco y uso principalmente:
      <br />
      Python (Django, Flask, FastAPI, Tkinter, PyQt)
      <br />
      SQL (SQLite3, PostgreSQL, MySQL, Firebase)
      <br />
      Git (Github)
      <br />
      Bash, Go, Rust
      <br />
      HTML, CSS (Bootstrap) y Javascript.
      <br />
      Me encanta Linux y actualmente estoy aprendiendo desarrollo backend.
    </>
  ),
  github: "https://github.com/IamRodion",
};

function ProfileHeader() {
  return (
    <div className="text-center">
      <h1 className="h1">{profile.name}</h1>
      <a href={profile.github} target="_blank" rel="noopener noreferrer">
        <Image
          src={profile.avatar}
          roundedCircle
          className="border border-dark my-3"
          alt="Github's profile pic"
          style={{ height: 200 }}
        />
      </a>
      <figure className="text-center mt-3">
        <blockquote className="blockquote">
          <p>{profile.description}</p>
        </blockquote>
      </figure>
    </div>
  );
}

export default ProfileHeader;
