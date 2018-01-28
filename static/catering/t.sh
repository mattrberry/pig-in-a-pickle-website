#!/bin/bash

a=1
for i in *.{jpg,JPG}; do
    new=$(printf "%02d.jpg" "$a")
    mv -i -- "$i" "$new"
    let a=a+1
done

