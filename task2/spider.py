#!/usr/bin/python
#coding=utf-8
from __future__ import unicode_literals
import urllib2,re,json,codecs
from urlparse import urljoin
from selenium import webdriver
soup = webdriver.Chrome()


vues = [{'el':"#header",'data':{'left_lis':[],'right_lis':[]}},
        {'el':"#main",'data':{'top_lis':[],'input_lis':[],'left_lis':[],'bottom_lis':[]}},
        {'el':"#sections",'data':{'sections':[]}}]
fout = codecs.open("xiaomi_backup.js","w+","utf-8")
root_url = "https://www.mi.com/"

soup.get(root_url)

#1. #header:
header_as = soup.find_elements_by_css_selector(".site-topbar .topbar-nav a")
for a in header_as:
        c = {'text':a.text,'href':urljoin(root_url,a.get_attribute('href'))}
        vues[0]['data']['left_lis'].append(c)
header_as = soup.find_elements_by_css_selector(".site-topbar .topbar-info a")
for a in header_as:
        c = {'text':a.text,'href':urljoin(root_url,a.get_attribute('href'))}
        vues[0]['data']['right_lis'].append(c)

#2. #main top
main_top_lis = soup.find_elements_by_css_selector(".header-nav ul .nav-item")
for li in main_top_lis:
        c = {'text':li.find_elements_by_css_selector(".text")[0].text,'href':"javascript:void(0)"}
        vues[1]['data']['top_lis'].append(c)
#2.2 #main top search
main_top_search_as = soup.find_elements_by_css_selector(".header-search .search-hot-words a")
for a in main_top_search_as:
        c = {'text':a.text,'href':a.get_attribute('href')}
        vues[1]['data']['input_lis'].append(c)
#2.3 #main left lis
main_left_lis = soup.find_elements_by_css_selector(".site-category .category-item")
for lli in main_left_lis:
    la = lli.find_elements_by_css_selector(".title")[0]
    c = {'text':la.text[:-2],'href':la.get_attribute('href'),'children_list':[]}
    uls = lli.find_elements_by_css_selector(".children-list")
    for ul in uls:
        c_lis = ul.find_elements_by_css_selector("li")
        one_col = [];
        for li in c_lis:
            c_href = urljoin(root_url,li.find_elements_by_css_selector(".link")[0].get_attribute('href'))
            c_img = urljoin(root_url,li.find_elements_by_css_selector("img")[0].get_attribute('data-src'))
            c_text = li.find_elements_by_css_selector(".text")[0].get_attribute('innerText')
            one_col.append({'href':c_href,'img':c_img,'text':c_text})
        c['children_list'].append(one_col)
    vues[1]['data']['left_lis'].append(c)

#print_out
for vue in vues:
    fout.write("var app_%s = new Vue("%vue['el'][1:] +json.dumps(vue,ensure_ascii=False)+");\n" )

fout.close()
soup.close()
