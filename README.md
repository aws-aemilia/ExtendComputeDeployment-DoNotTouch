# React ToDo App with Compute

## What is this repo?

- Comprehensive React Todo SPA using React 18.x found in `./src`, deployed to S3 and served from the `/todo` URL path
- Express server in `./compute`, deployed as compute app and served from the root `/` URL path
- Deploy manifest found in `./deploy-manifest.json`
- There's a `postbuild` script that copies all built assets to the `.amplify-hosting` folder and conforms the output to the deployment specification.
- React app forked from [maciekt07/TodoApp](https://github.com/maciekt07/TodoApp)