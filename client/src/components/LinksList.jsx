import React from 'react';
import { Link } from 'react-router-dom';

const LinksList = ({ links }) => {
  if (!links.length) {
    return <p className="center">no links yet</p>;
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Original</th>
            <th>Shorten</th>
            <th>Open</th>
          </tr>
        </thead>

        <tbody>
          {links.map((link, i) => (
            <tr key={link._id}>
              <td>{i + 1}</td>
              <td>{link.from}</td>
              <td>{link.to}</td>
              <td>
                <Link to={`/detail/${link._id}`}>Open</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LinksList;
