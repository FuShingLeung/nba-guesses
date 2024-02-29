import React from 'react';
import * as NBAIcons from 'react-nba-logos';

function TeamLogo({ abbreviation }) {
  const LogoComponent = NBAIcons[abbreviation];
  return <LogoComponent />;
}

export default TeamLogo;