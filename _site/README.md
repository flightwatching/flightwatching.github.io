## Flightwatching

Website for Flightwatching SAS

##setup jekyll on mavericks to develop the website

OSX comes with ruby which is not the rvm one. You have to override it.
* the why: http://stackoverflow.com/questions/22479246/how-to-install-jekyll-on-mac-osx-10-9-with-ruby-2-0-0
* the how: http://dean.io/setting-up-a-ruby-on-rails-development-environment-on-mavericks/

then install jekyll: ```sudo gem install jekyll```
and rdiscount (to compile markdown syntax): ```gem install rdiscount```

go to your website root and run ``` jekyll serve --watch ``` 
