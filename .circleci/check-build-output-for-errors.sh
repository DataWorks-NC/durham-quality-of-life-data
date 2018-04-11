#!/bin/bash
if [ grep -iq error ~/repo/npm-build-output.txt ]
then
    exit 0
else
    grep -i error ~/repo/npm-build-output.txt
    exit 1
fi
