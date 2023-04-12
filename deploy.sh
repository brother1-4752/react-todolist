#!/bin/bash

set -e

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:brother1-4752/react-todolist.git master:gh-pages

cd -