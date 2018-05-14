#!/usr/bin/python
#coding=utf-8
from __future__ import unicode_literals
import urllib2,re,json,codecs
from bs4 import BeautifulSoup
from urlparse import urljoin

vues = [{'el':"#header",'data':{'left_lis':[],'right_lis':[]}},
        {'el':"#main",'data':{'top_lis':[],'input_lis':[],'left_lis':[],'bottom_lis':[]}},
        {'el':"#sections",'data':{'sections':[]}}]
fout = codecs.open("xiaomi_backup.js","w+","utf-8")
root_url = "https://www.mi.com/"

html = urllib2.urlopen(root_url)
soup = BeautifulSoup(html,'html.parser')

#1. #header:
header_as = soup.select(".site-topbar .topbar-nav a")
for a in header_as:
        c = {'text':a.get_text(),'href':urljoin(root_url,a["href"])}
        vues[0]['data']['left_lis'].append(c)
header_as = soup.select(".site-topbar .topbar-info a")
for a in header_as:
        c = {'text':a.get_text(),'href':urljoin(root_url,a["href"])}
        vues[0]['data']['right_lis'].append(c)

#2. #main top
main_top_lis = soup.select(".header-nav ul .nav-item")
for li in main_top_lis:
        c = {'text':li.select(".text")[0].get_text(),'href':"javascript:void(0)"}
        vues[1]['data']['top_lis'].append(c)
#2.2 #main top search
main_top_search_as = soup.select(".header-search .search-hot-words a")
for a in main_top_search_as:
        c = {'text':a.get_text(),'href':a['href']}
        vues[1]['data']['input_lis'].append(c)



#print_out
for vue in vues:
    fout.write("var app_%s = new Vue("%vue['el'][1:] +json.dumps(vue,ensure_ascii=False)+");\n" )

fout.close()
