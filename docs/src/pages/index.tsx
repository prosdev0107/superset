/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
  Button, Col, Row, Carousel,
} from 'antd';
import styled from '@emotion/styled';
import { supersetTheme } from '@superset-ui/style';
import {
  DeploymentUnitOutlined,
  FireOutlined,
  DotChartOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';
import GitHubButton from 'react-github-btn';
import 'antd/dist/antd.css';
import { mq } from '../utils';
import { Databases } from '../resources/data';

const { colors } = supersetTheme;

const StyledMain = styled('main')`
  text-align: center;
  .alert-color {
    color: ${colors.alert.base};
  }
  .error-color {
    color: ${colors.error.base};
  }
  .warning-color {
    color: ${colors.warning.base};
  }
  .info-color {
    color: ${colors.info.base};
  }
  .success-color {
    color: ${colors.success.base};
  }
  .secondary-color {
    color: ${colors.secondary.base};
  }
  .info-text {
    font-size: 32px;
    font-weight: normal;
    max-width: 600px;
    margin: auto;
  }
  .info-text-smaller {
    font-size: 24px;
    max-width: 800px;
  }
`;

const StyledTitleContainer = styled('div')`
  position: relative;
  padding-top: 60px;
  padding-bottom: 80px;
  padding-left: 20px;
  padding-right: 20px;
  background-image: url('img/data-point.jpg');
  background-size: cover;
  background-position-x: right;
  .github-section {
    margin-bottom: 40px;
    margin-top: 40px;
    .github-button {
      margin: 5px;
    }
  }
  .logo-horiz {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 600px;
    max-width: 100%;
    ${[mq[3]]} {
      width: 550px;
    }
    ${[mq[2]]} {
      width: 450px;
    }
    ${[mq[1]]} {
      width: 425px;
    }
    ${[mq[0]]} {
      width: 400px;
    }
  }
  .alert {
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
    max-width: 600px;
    margin: 0 auto;
    padding: 0.75rem 1.25rem;
    margin-top: 83px;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }
`;

const StyledHeading = styled('h2')`
  font-size: 55px;
  text-align: center;
`;

const StyledFeatures = styled('div')`
  background: #fff;
  padding: 5vw 0;
  margin-top: 0px;
  margin-bottom: 30px;
  .featureList {
    padding: 40px;
    width: 100%;
    list-style-type: none;
    margin: 0 auto;
    max-width: 1000px;
    .feature {
      padding: 20px;
      text-align: center;
      margin-bottom: 40px;
      .imagePlaceHolder {
        svg {
          width: 70px;
          height: 70px;
        }
        margin-bottom: 15px;
      }
      .featureText {
        color: ${colors.grayscale.dark2};
        font-size: 16px;
        strong {
          font-size: 22px;
        }
      }
    }
  }
  .heading {
    font-size: 22px;
    margin: 0 auto;
    text-align: center;
  }
`;

const StyledIntegrations = styled('div')`
  background: white;
  margin-bottom: 64px;
  .databaseSub {
    text-align: center;
    display: block;
    margin-bottom: 40px;
    font-size: 18px;
  }

  .database-list {
    margin-top: 100px;
    list-style-type: none;
    padding: 0px;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 50px;
    li {
      padding: 15px;
    }
  }
`;

const CarouselSection = styled('div')`
  .toggleContainer {
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    position: relative;
    .toggleBtns {
      display: flex;
      flex-direction: row;
      /* ${[mq[0]]} {
        flex-direction: column;
      } */
      justify-content: center;
      .toggle {
        margin: 10px;
        color: #666;
        border: 1px solid #888;
        background-color: #20a7c911;
        border-radius: 3px;
        padding: 16px;
        transition: all 0.25s;
        overflow: visible;
        ${[mq[0]]} {
          > span {
            display: none;
            position: absolute;
            bottom: 0px;
            left: 50%;
            width: 100%;
            transform: translate(-50%, 100%);
          }
          h2 {
            font-size: 14px;
            margin: 0;
          }
        }
        &:hover {
          cursor: pointer;
          color: ${colors.primary.base};
          border: 1px solid ${colors.primary.base};
        }
        &.active {
          background: red;
          background: #20a7c933;
          ${[mq[0]]} {
            > span {
              display: block;
            }
          }
        }
      }
    }
    .imageContainer {
      img {
        margin: 0 auto;
        width: 80%;
        box-shadow: 0 0 3px #aaa;
        margin-top: 5px;
        margin-bottom: 5px;
      }
    }
  }
`;
interface featureProps {
  icon: React.ReactNode,
  title: string,
  descr: string,
}
const Feature = ({ icon, title, descr }: featureProps) => (
  <li className="feature">
    <div className="imagePlaceHolder">
      {icon}
    </div>
    <div className="featureText">
      <h3>{title}</h3>
      {descr}
    </div>
  </li>
);

export default function Home(): JSX.Element {
  const slider = useRef(null);

  const [slideIndex, setSlideIndex] = useState(0);

  const onChange = (index) => {
    setSlideIndex(index);
  };

  return (
    <Layout
      title="Welcome"
      description="Community website for Apache Superset, a data visualization and data exploration platform"
    >
      <StyledMain>
        <StyledTitleContainer>
            <img className="logo-horiz" src="img/superset-logo-horiz-apache.svg" alt="logo-horiz" />
            <div className="info-text">
              Apache Superset is a modern data exploration and visualization
              platform
            </div>
            <div className="github-section">
              <span className="github-button">
                <GitHubButton
                  href="https://github.com/apache/superset"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star apache/superset on GitHub"
                >
                  Star
                </GitHubButton>
              </span>
              <span className="github-button">
                <GitHubButton
                  href="https://github.com/apache/superset/subscription"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Watch apache/superset on GitHub"
                >
                  Watch
                </GitHubButton>
              </span>
              <span className="github-button">
                <GitHubButton
                  href="https://github.com/apache/superset/fork"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Fork apache/superset on GitHub"
                >
                  Fork
                </GitHubButton>
              </span>
            </div>
            <div>
              <Link to="/docs/intro">
                <Button type="primary">
                  Get Started
                </Button>
              </Link>
            </div>
        </StyledTitleContainer>

        <StyledFeatures>
            <StyledHeading>Overview</StyledHeading>
            <div className="info-text info-text-smaller">
              Superset is fast, lightweight, intuitive, and loaded with options
              that make it easy for users of all skill sets to explore and
              visualize their data, from simple line charts to highly detailed
              geospatial charts.
            </div>
            <ul className="featureList ant-row">
              <Row>
                <Col sm={24} md={12}>
                  <Feature
                    icon={<FireOutlined className="warning-color" />}
                    title="Powerful yet easy to use"
                    descr={`
                    Quickly and easily integrate and explore your data, using
                    either our simple no-code viz builder or state of the art SQL
                    IDE.
                  `}
                  />
                </Col>

                <Col sm={24} md={12}>
                  <Feature
                    icon={<DatabaseOutlined className="info-color" />}
                    title="Integrates with modern databases"
                    descr={`
                    Superset can connect to any SQL based datasource
                    through SQLAlchemy, including modern cloud native databases
                    and engines at petabyte scale.
                  `}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={24} md={12}>
                  <Feature
                    icon={<DeploymentUnitOutlined className="success-color" />}
                    title="Modern architecture"
                    descr={`
                    Superset is lightweight and highly scalable, leveraging the
                    power of your existing data infrastructure without requiring
                    yet another ingestion layer.
                  `}
                  />
                </Col>
                <Col sm={24} md={12}>
                  <Feature
                    icon={<DotChartOutlined className="alert-color" />}
                    title="Rich visualizations and dashboards"
                    descr={`
                    Superset ships with a wide array of beautiful visualizations.
                    Our visualization plug-in architecture makes it easy to build
                    custom visualizations that drop directly into Superset.
                  `}
                  />
                </Col>
              </Row>
            </ul>
        </StyledFeatures>

        <CarouselSection>
            <StyledHeading>Explore</StyledHeading>
            <div className="toggleContainer">
              <div className="toggleBtns">
                <div
                  className={`toggle ${slideIndex === 0 ? 'active' : null}`}
                  onClick={() => slider.current.goTo(0)}
                  role="button"
                >
                  <h2>Explore</h2>
                  <span>
                    Explore your data using the array of data visualizations.
                  </span>
                </div>

                <div
                  className={`toggle ${slideIndex === 1 ? 'active' : null}`}
                  onClick={() => slider.current.goTo(1)}
                  role="button"
                >
                  <h2>View</h2>
                  <span>View your data through interactive dashboards</span>
                </div>
                <div
                  className={`toggle ${slideIndex === 2 ? 'active' : null}`}
                  onClick={() => slider.current.goTo(2)}
                  role="button"
                >
                  <h2>Investigate</h2>
                  <span>Use SQL Lab to write queries to explore your data</span>
                </div>
              </div>
              <Carousel ref={slider} effect="scrollx" afterChange={onChange}>
                <div className="imageContainer">
                  <img src="img/explorer5.jpg" alt="" />
                </div>
                <div className="imageContainer">
                  <img src="img/dashboard3.png" alt="" />
                </div>
                <div className="imageContainer">
                  <img src="img/sqllab5.jpg" alt="" />
                </div>
              </Carousel>
            </div>
            <StyledIntegrations>
              <StyledHeading>Supported Databases</StyledHeading>

              <ul className="database-list">
                {Databases.map(
                  ({
                    title, imgName: imageName, width, height,
                  }) => (
                    <li>
                      <img src={`img/databases/${imageName}`} width={width} height={height || 50} title={title} />
                    </li>
                  ),
                )}
              </ul>
              <span className="databaseSub">
                ... and many other
                <a href="docs/databases/installing-database-drivers">
                  {' '}
                  compatible databases
                  {' '}
                </a>
              </span>
            </StyledIntegrations>
        </CarouselSection>

      </StyledMain>
    </Layout>
  );
}
