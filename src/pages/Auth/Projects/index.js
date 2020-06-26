import React from "react";
import {
  Form,
  Card,
  Jumbotron,
  Container,
  CardTitle,
  CardText,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div className="auth-page-wrapper" id="projects">
      <Form className="container">
        <div className="form-title">
          <h1>
            <FontAwesomeIcon icon={faFolderOpen} /> &nbsp; My Projects
          </h1>
        </div>
        <hr />

        <Jumbotron fluid className="brpro">
          <Container fluid>
            <Card body outline color="danger" className="animate">
              <CardTitle>Telehealth ( ReactJS )</CardTitle>
              <CardText>
                Telehealth is the use of digital information and communication
                technologies, such as computers and mobile devices, to access
                health care services remotely and manage your health care. These
                may be technologies you use from home or that your doctor uses
                to improve or support health care services.Telehealth is the
                distribution of health-related services and information via
                electronic information and telecommunication technologies. It
                allows long-distance patient and clinician contact, care,
                advice, reminders, education, intervention, monitoring, and
                remote admissions.
              </CardText>
            </Card>
            <br />
            <Card body outline color="info" className="animate">
              <CardTitle>Staple ( MERN Stack )</CardTitle>
              <CardText>
                The Staple makes your shopping easier, quicker, and more
                convenient than ever. Order your Groceries - food and drinks,
                online from your mobile while you are on the go for home
                delivery on chosen date and time or maybe take away. You can
                search and shop from all associated neighborhood market stores
                with a full range of products. Take advantage of all the
                excellent value deals on offer, use your vouchers, and then
                either place an order for home delivery or take away from a
                store location. For every busy lifestyle, Staple would like to
                order daily convenience effortlessly.
              </CardText>
            </Card>
            <br />
            <Card body outline color="danger " className="animate">
              <CardTitle>Ballyhoo Today ( MEAN Stack )</CardTitle>
              <CardText>
                Ballyhoo Today is to help you discover curated premium Urban
                Experiences in your city. We understand that you like to explore
                best of the best hence, we have sorted only the popular ones to
                choose from - Travel & Leisure, Events, Activities, Restaurants,
                Gastropub, Breweries, Nightlife Club Parties, Spa and much more.
                Explore only the best happening places with reviews,
                popularities, photos, prices and more all at once. Find some
                thing new everyday, be it - Club Parties (Karaoke Night, Ladies
                Night, DJ Nights, Bollywood Night, Bhangra Night, Comedy Nights
                or something else), Fine Dinning or Gastropub. Discover
                adventure activities, Urban escapes or hidden jewels in your
                city for exclusive eventful experiences. We provide the top most
                options for you explore before you decide to step out for
                leisure. We also provide a convenience of customisation (Escape
                package), send your query, online reservation & purchase to keep
                things sorted for you. Enjoy exclusive cashbacks and offers for
                all advance payments purchases for Ballyhoo Exclusive Packages.
                We also offer an option to pay at venue with a single click of a
                fingertip.
              </CardText>
            </Card>
            <br />

            <Card body outline color="info" className="animate">
              <CardTitle>Portfolio ( MERN Stack )</CardTitle>
              <CardText>
                Portfolio sites are vital for freelancers working in the digital
                age. While all freelancers can hand out business cards and
                certain freelancers, such as photographers, can distribute
                physical portfolios to potential clients, a portfolio website
                provides a way for any freelancer in any industry to reach more
                clients on a global scale. It also provides a way for you to get
                creative with the information and intricate details you share
                about yourself and your work. A portfolio site is an extension
                of a freelancer's (or company's) résumé. It provides a
                convenient way for potential clients to view your work while
                also allowing you to expand on your skills and services. This,
                however, isn't the ultimate purpose of a portfolio website
              </CardText>
            </Card>
            <br />
            <Card body outline color="danger" className="animate">
              <CardTitle>ZeroFolder ( AngularJS)</CardTitle>
              <CardText>
                ZeroFolder is the Statistical Analysis Software Model for
                Platform in which Any IT Company Can manage their Customer -
                Contract, Equipment, Network, and Service Request with Single
                CRM Software and it Can manage Server Request and Dispatch Field
                Service Engineer also from Software and also it Can Monitor
                their Network Equipment and Network Connectivity also from
                Software.
              </CardText>
            </Card>
            {/* <br />
            <Card body outline color="info" className="animate">
              <CardTitle>Career Path System ( Asp.Net with C# )</CardTitle>
              <CardText>
                Career Path System is designed to help the candidates to find
                their jobs online and likewise to help recruiters to find
                appropriate candidates.
              </CardText>
            </Card>
            <br />
            <Card body outline color="danger" className="animate">
              <CardTitle>Sangath Foundation ( .Net with C# )</CardTitle>
              <CardText>
                Sangath Foundation private organizations (NGO) that pursue
                activities to relieve suffering, promote the interests of the
                poor, protect the environment, provide basic social services, or
                undertake community development
              </CardText>
            </Card> */}
          </Container>
        </Jumbotron>
      </Form>
    </div>
  );
};

export default Projects;
