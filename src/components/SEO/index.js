import React from 'react';
import Helmet from 'react-helmet';

export const SEO = ({ title = 'SASICC' }) => {
  return (
    <Helmet>
        <meta charset="UTF-8" />
        <title>{title}</title>
        <link rel="shortcut icon" type="image/x-icon" href="../images/cloud01.png" />
	      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="description" content="" />
	      <meta name="keywords" content="" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />
    </Helmet>
  );
};