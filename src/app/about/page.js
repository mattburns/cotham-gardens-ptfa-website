'use client';

import Head from 'next/head';
import { Component } from 'react';
import { attributes, react as AboutContent } from '../../content/about.md';

export default class About extends Component {
  render () {
    const { title, people } = attributes;
    return (
      <>
        <Head>
          <script src='https://identity.netlify.com/v1/netlify-identity-widget.js' />
        </Head>
        <article>
          <h1>{title}</h1>
          <AboutContent />
          <ul>
            {people.map((person, k) => (
              <li key={k}>
                <h2>{person.name}</h2>
                <p>{person.bio}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    );
  }
}
