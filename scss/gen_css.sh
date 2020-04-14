#!/bin/bash

for file in *.scss; do
    themename=$(echo ${file} | cut -d'.' -f 1)
    sass --update ${file}:../base16-${themename}/style/variables.css
done
