"http://localhost:3000/rentals.json"



useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3000/rentals.json")
            const list = await response.json()
            listrent = [...list]
            console.log("listrent" +listrent)
            setListRentals([1,2,3])
            console.log(listRentals)  
            console.log(list) 
            setListRentals(list)
            console.log(listRentals) 
        };
        fetchData().then(function() {
            
        })
        //const rentalInfos = [...listRentals].filter((rental) => rental.id === id);
        
        //setRental(rentalInfos[0]);
    },[])

    //console.log("listRentals : " + listRentals)
# Getting Started with Create React App


<Carousel props={rental.pictures} />
            <div className="rentalInfos">
                <div className="rentalTitle">
                    <h2>{rental.title}</h2>
                    <p>{rental.location}</p>
                    <ul className="tagsList">{rendertagsList(rental.tags)}</ul>
                </div>
                <div className="notation">
                    <div className="userInfos">
                        <p>{rental.host.name}</p>
                        <img src={rental.host.picture} alt="propriétaire" />
                    </div>
                    <StarsNotation starNumber={rental.rating} />
                </div>
            </div>

            <div className="rentalDescriptions">
                <Collapse title="Description" text={rental.description} />
                <Collapse title="Equipement" text={rental.equipments} />
            </div>









This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
