# SunMoonWeather

This is a fork of [TheWayToZion's iOSWeather widget](https://github.com/thewaytozion/widgets), with some bugs related to mistranslations by MSFT's Cognitive Services patched out.

## Setup

To setup, clone the repository, then copy the `iOSWeather` directory to `iCloud Drive/Shortcuts`. This is case sensitive.

1. Run the [Setup SunMoonWeather](https://www.icloud.com/shortcuts/b0215991c5f84d99985b2b1c0a5a7311) shortcut three times, once to setup the lockscreen, once to setup the Day version of your homescreen and once to setup the Night version. You can provide screenshots for the script to alternate between, as long as the dimensions are sufficient to set as a background. The Setup shortcut will arrange the lockscreen for you depending on the type of device you have.
2. Run the [SunMoonWeather](https://www.icloud.com/shortcuts/b09ca81f5a9a41c2b8f7a8b5072d173f) shortcut to set your lockscreen and/or homescreen. Edit the shortcut if you want to customize your greeting/include the city name, etc.
3. Setup automations in your Shortcuts app to run this shortcut as often as you like. Sadly, Apple does not give you the option to run this on cron, so if you want to run it hourly, you will have to setup a separate entry for each hour, 24 in total. Turn off "Ask before running" so the shortcut is automatically triggered.
4. Disable shortcut notifications via Screen Time in your iPhone's settings to prevent spam.

## Not working in your language?

This shortcut uses MSFT Cognative services to translate the output from the weather app from your native lang to English. If you have weather conditions that are not in the following list, you'll have to add the translation along with the correct base image to the dict located 3/4th the way down in the shortcut. Add the dict entry in UPPERCASE.

* HOT
* CLEAR
* SUNNY
* MOSTLY CLEAR
* PARTLY CLOUDY
* MOSTLY CLOUDY
* CLOUDY
* RAIN
* SHOWERS
* SCATTERED SHOWERS
* HEAVY SHOWERS
* FREEZING RAIN
* DRIZZLE
* THUNDERSTORMS
* ISOLATED THUNDERSTORMS
* SCATTERED THUNDERSTORMS
* WINDY
* SNOW
* LIGHT SNOW
* HAIL
* SCATTERED SNOW
* SCATTERED SNOW AND SHOWERS
* MIXED RAIN AND SLEET
* HAIL/MIXED RAIN
* SLEET
* HEAVY SNOW
* HEAVY SNOW/SLEET
* BLOWING SNOW
* FOG
* DUST
* HAZE
* SMOKE
* HURRICANE
* TORNADO
* FRIGID TEMPS
* CLOUDINESS
* OCCASIONAL SHOWERS
* LIGHT SNOW SHOWERS
* MOSTLY CLOUDINESS
* MOST OF THEM ARE CLEAR
* PREDOMINANT CLOUDS
* MOSTLY BRIGHT

Code for this widget is extremely hacky due to the limitated nature of iOS Shortcuts, akin to how a Super Mario Kaizo level is constructed in Super Mario Maker. Please Apple give us a proper way to customize our lockscreen.

The code behind the image generation is in src. This obviously will not run on its own, scroll through the shortcut to see how variables are set.

Questions? [Raise an issue](https://github.com/VeryLongDelay/SunMoonWeather/issues/new/choose).

### License
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
