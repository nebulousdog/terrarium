# [Terrarium Notebook](https://github.com/nebulousdog/terrarium)
My collection of carnivorous plants. Plus sensors and cool things.

I've been mostly focusing on the web app portion lately, so please check that out before digging into the hardware setup. It is a bit stale.

![sensor stream example](https://i.imgur.com/g2Lftvs.png)

## Example

See the example site and docs at [nebulousdog.com/terrarium](http://nebulousdog.com/terrarium).

## Plants

I used to list my individual plants here, but I'm even more organized now! you can just visit the [site](http://nebulousdog.com/terrarium), or less consumably, the [taxonomy](https://github.com/nebulousdog/terrarium/blob/master/javascripts/taxonomy.js) and [plant](https://github.com/nebulousdog/terrarium/blob/master/javascripts/plants.json) files to see all the info. There you'll hopefully find some cool data on drosera, nepenthes, cephalotus, utricularia, pinguicula, and sarracenia. Particularly check out the environmental parameters.

## Taxonomic Info
The individual plant ids first use the [USDA](http://plants.usda.gov/adv_search.html) plant symbol if available, then the [ITIS](http://www.itis.gov/advanced_search.html) Taxonomic Serial Number (TSN). I still haven't figured out what I want to do for hybrids or plants that are not in these databases. For now I'm going to use the genus' symbol.

```
<tn>_<y>_<n>
```

where `tn` is the taxonomic plant symbol or TSN as available. `y` is year that the plant was obtained or propagated. `n` is the assigned number for each plant. `n` is reset for each `tn` and `y` combination. since I don't have enough of the same plant yet, this is likely to be `0-9` for a bit.

### Taxonomic Links
Taxonomic Links are lazily created. They have a one-to-one relationship with each taxon name once they've been paired to aide the lookup for taxon info for each individual plant. This atm implies that these IDs can change on initial creation, because they are automatically generated and will vary based on the algorithm to look plants up and place them in a taxonomic hierarchy. These taxonomic links shouldnt be confused with individual plant IDs. The individual plant IDs are simply to keep inventory of my physical plants. Maybe in the future though it would be nice that the generated taxonomic links make sense enough to be used as IDs going forward for my actual plants, but we'll have to see.

# The App
You can see a live version of this at [nebulousdog.com/terrarium](http://nebulousdog.com/terrarium).

The humidity and temperature parameters are used to calculate the lower and upper bounds that would make it so that all the plants can live in harmony. There is one dummy plant for general parameters that may not belong to a single species.

Currently it only plots temperature, humidity and luminosity, but it will be extended to plot ir, full, visible, lux, and heatindex as well. It already serially logs this data.

Feel free to report any bugs in the [issue tracker](https://github.com/nebulousdog/terrarium/issues).

## Development and running the server
Run `yarn start` to run a local server. If you're a developer run `yarn run watch` to watch for changes and compile JS. Run `yarn run scss` to watch for changes in the `.scss`. See `package.json` for other commands.

## Dependencies
You can install the app dependencies with `npm install`.

## [Docs](https://nebulousdog.github.io/terrarium/)

Docs can be found here: https://nebulousdog.github.io/terrarium/.

Manuall generate docs with `npm run prepublish` or `./node_modules/.bin/jsdoc src -d docs`.

### Notebook related
`pip3 install jupyter` to install Jupyter, but see Jupyter [docs on installation](https://jupyter.readthedocs.org/en/latest/install.html) for notebook-related dependencies, because you'll probably have to run stuff like `apt-get install build-essential python3-dev`. And Python 3+ I think is good, but as an FYI, I am running Python 3.5.2.

# Hardware Setup
See [sunduino.fzz](https://github.com/nebulousdog/terrarium/blob/master/sunduino.fzz) (made in [Fritzing](http://fritzing.org), `sudo apt-get install fritzing`)

![breadboard](https://github.com/nebulousdog/terrarium/blob/master/images/sunduino_breadboard.png "Sunduino connections")

Be sure to use a level converter or the above voltage divider between the Arduino and the Raspberry Pi.

## Arduino
Flash [sunduino.ino](https://github.com/nebulousdog/terrarium/blob/master/sunduino/sunduino.ino) to your Arduino. Unplug from the rPi while doing so.

Serial output.

```
luminosity,ir,full,visible,lux,humidity,temperature,heatindex
917.00,275,882,607.00,468.00,54.20,23.70,74.66,77.41
917.00,275,883,608.00,469.00,53.90,23.80,74.84,77.50
917.00,276,885,609.00,470.00,53.80,23.80,74.84,77.50
918.00,276,885,609.00,470.00,53.70,23.80,74.84,77.50
917.00,276,886,610.00,471.00,53.60,23.80,74.84,77.51
912.00,94,266,172.00,124.00,53.50,23.80,74.84,77.51
912.00,92,260,168.00,121.00,53.50,23.90,75.02,77.59
912.00,93,263,170.00,122.00,53.50,23.90,75.02,77.59
911.00,109,307,198.00,142.00,53.50,23.90,75.02,77.59
910.00,128,377,249.00,184.00,53.60,23.90,75.02,77.59
910.00,153,457,304.00,226.00,53.70,23.90,75.02,77.58
910.00,161,483,322.00,240.00,53.60,24.00,75.20,77.67
918.00,275,882,607.00,468.00,53.50,24.00,75.20,77.67
917.00,272,873,601.00,464.00,53.40,24.00,75.20,77.67
917.00,271,870,599.00,462.00,53.30,24.00,75.20,77.67
```

## Sensors
* [DHT22](http://www.adafruit.com/products/385) ([datasheet](https://www.adafruit.com/datasheets/DHT22.pdf)) - temperature and humidity, humidity 0-100%RH, temperature -40 - 125°C, **NOTE: avoid dew warning**
* [TSL2561](https://www.adafruit.com/products/439) ([datasheet](https://www.adafruit.com/datasheets/TSL256x.pdf)) - luminosity, 0.1 to 40,000 Lux
* [CdS photoresistor](https://www.adafruit.com/products/161) ([datasheet 1](https://learn.adafruit.com/system/assets/assets/000/010/127/original/PDV-P8001.pdf), [datasheet 2](https://learn.adafruit.com/system/assets/assets/000/010/128/original/DTS_A9950_A7060_B9060.pdf)) - ~5-200KΩ
* [Infragram Webcam](https://www.adafruit.com/products/1722) - visible and infrared

# Etc
* [W5200 Ethernet Shield](http://www.seeedstudio.com/depot/W5200-Ethernet-Shield-p-1577.html) ([library](https://github.com/Seeed-Studio/Ethernet_Shield_W5200), [wiki](http://www.seeedstudio.com/wiki/Ethernet_Shield_V2.4)) - v2.2 02/28/2014 10A14 by Seeed Studio
* [YSD-439AB4B-35 7-Segment](https://www.sparkfun.com/products/9481) ([datasheet](http://www.sparkfun.com/datasheets/Components/LED/7-Segment/YSD-439AB4B-35.pdf))

## Download and contribute
Please fork, contribute and comment!

If you want the Arduino libraries I use in this project, be sure to add the `--recursive` flag to recursively clone these submodules.

1. `git clone --recursive git@github.com:nebulousdog/terrarium.git`
2. `cd terrarium`
3. `npm install`
4. See [package.json](https://github.com/nebulousdog/terrarium/blob/master/package.json#L16-L24) for commands. Because this project is still in the alpha phase, it is assumed you are a savvy hacker and know what all this means.
5. For terrarium notebooks, `cd notebook` and then `jupyter notebook`.

# License
All images in `images` folder are [Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/). The license for everything else is [Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/).
