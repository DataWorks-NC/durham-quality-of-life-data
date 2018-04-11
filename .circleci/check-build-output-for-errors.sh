#!/bin/bash
grep -i error ~/repo/npm-build-output.txt
if [ $? -eq 0 ]
then
    exit 1
else
    exit 0
fi
