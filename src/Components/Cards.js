import React from 'react' 


function Cards() {  
  return (
    <div className="container my-3">
        <div className="row">
            <div className="col-lg 3 col-md-3 col-sm-12 col-xs-12">
                <div className="card text-center">
                    <img src={require('../media/startline.jpg')} className="card-img-top" alt="Starting line"/>   
                    <div className="card-block">
                        <h4 className="card-title">Starting place</h4>
                        <p className="card-text">The race will start on Broadway Street at 10AM.</p>
                    </div>
                </div>
            </div>

            <div className="col-lg 3 col-md-3  col-sm-12 col-xs-12">
                <div className="card card-inverse card-primary text-center">
                    <img src={require('../media/finishline.jpg')} className="card-img-top" alt="Finish line"/>
                    <div className="card-block">
                        <h4 className="card-title">Finishing place</h4>
                        <p className="card-text">The finish line is on Canyon Blvd, it should be around 3PM.</p>
                    </div>
                </div>
            </div>


            <div className="col-lg 3 col-md-3  col-sm-12 col-xs-12">
                <div className="card card-inverse card-success text-center">
                <img src={require('../media/foodstand.jpg')} className="card-img-top" alt="Food stand"/>
                    <div className="card-block">
                        <h4 className="card-title">Food on-site</h4>
                        <p className="card-text">There will be plenty of food stands from all over the world.</p>
                    </div>
                </div>
            </div>

            <div className="col-lg 3 col-md-3  col-sm-12 col-xs-12">
                <div className="card card-inverse card-info text-center">
                    <img src={require('../media/previouswinner.jpg')} className="card-img-top" alt="Winners 2010"/>
                    <div className="card-block">
                        <h4 className="card-title">Previous edition</h4>
                        <p className="card-text">The 2010 edition was won by David Zabriskie.</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
)  
}  
export default Cards