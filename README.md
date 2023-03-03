# Calculate
Write a javascript program that calculates the total cost per day across different communication channels
You are given 2 input files

[cost.json]

[channel-cost.json]

`cost.json` tells you the cost per unit per channel in rupees

`channel-cost.json` gives you the number of times a channel is used at a given date and time

Output is expected to be a **json file**. It should contain what is the cost per day across different channels. 

The expected data format:

json:
[
	{"sms": 100.02, "whatsapp": 10, "email": 25, "ivr": 24, "date": "2021-10-10"},
	{"sms": 102, "whatsapp": 9, "email": 12, "ivr": 24, "date": "2021-10-11"}
]



1. The amount should be in rupees, rounded to 2 decimal places
2. Data should be sorted by date


To run the code :

1. clone the url using git bash

 2.open vs code terminal of the folder

 3.type "npm install "

 4. run the code by "node calculate.js"
