import React, { Component } from 'react';
import Header from './Header';
import AddPost from './AddPost';
import Footer from './Footer';
import Subscription from './Subscription';



class TechLatest extends Component {
    render() {
        return (
            <div>
                <div>
                   <Header />
                </div>

                <div>
                    <AddPost />
                </div>

                <div>
                    <Subscription />
                </div>


                <div>
                    <Footer />
                </div>

            </div>
        );

    }

}

export default TechLatest;