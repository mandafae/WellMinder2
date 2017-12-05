import json
import scipy
from pprint import pprint

data = json.load(open('../src/d3/data.json'))

def crossCorr(json):
    print (json)

def main():
    crossCorr(data)

main()