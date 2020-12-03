import React from 'react';

const LinkCard = ({ link }) => {
  return (
    <>
      <p>Link</p>

      <p>
        Your link:{' '}
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>

      <p>
        From:{' '}
        <a href={link.from} target="_blank" rel="noopener noreferrer">
          {link.from}
        </a>
      </p>

      <p>
        Count click on link: <strong>{link.clicks}</strong>
      </p>

      <p>
        Date created: <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  );
};

export default LinkCard;
