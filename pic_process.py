import sys
import requests
import re
import os
import time
os.chdir('./bg_pics')

num=5000
ld = os.listdir('./')

for i in range(5000,len(ld)):
  os.remove(f'{i}.jpg')
