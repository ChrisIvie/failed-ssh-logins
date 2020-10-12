import requests
import sys
import time
import json

counter = 1
# grep all failed logins from auth.log: egrep 'Failed password for invalid' /var/log/auth.log | awk '{print $13}' | uniq > failedips.txt
f = open("failedips.txt", "r")

#Read each line in failedips.txt
for l in f:
    l = l.rstrip()
    #API URL
    url = 'https://www.virustotal.com/vtapi/v2/ip-address/report'
    #API key and grab each IP from failedips.txt
    params = {'apikey':'accd7029900feab997c24eb49cec0fbf72972a51d18c7f791fce132f27d5510e','ip':'%s' % l }
    response = requests.get(url, params=params)
    #Print response, usually 200
    print(response)
    #Print current IP for scanning
    print(l)
    #Virus total API rate limits 4 requests per minute
    time.sleep(16)
    data = response.json()
    for k,v in data.items():
        #print(*data.items(), sep='\n')
    #Save each response as IP.json
            
        

        
        
        a_file = open("/var/www/html/failed-ssh/json/" + str(counter) + ".json", "w")
        json.dump(data, a_file, indent=4)
        a_file.close()
        counter += 1
        break
    
            
