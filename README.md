# durham-quality-of-life-data

Durham County data for the Quality of Life Dashboard. Fork of Tobin Bradley's Mekclenburg QoL data repo. If you're customizing this for your own purposes, start with his base code at https://github.com/tobinbradley/mecklenburg-quality-of-life-data.

## Related Projects

*   [quality-of-life-dashboard](https://github.com/DataWorks-NC/quality-of-life-dashboard)
*   [quality-of-life-report](https://github.com/DataWorks-NC/quality-of-life-report)
*   [quality-of-life-embed](https://github.com/DataWorks-NC/quality-of-life-embed)

## Get Started

Follow the instructions at https://github.com/DataWorks-NC/quality-of-life-dashboard/blob/develop/README.md to install the main
Quality of Life Dashboard repository. This project is not meant to stand alone.

Further documentation available in the DataWorks NC Technical Manual.

## Customizing your Data

![data design](http://i.imgur.com/pRdRkFG.png)

There are several parts to configuring this repo:

*   Creating your geography (GeoJSON)
*   Creating your data files (CSV)
*   Creating your metadata (Markdown)
*   Updating configuration files
*   Creating private configuration file

The existing files are a good guidepost for creating your own, so dig in before you get started.

### Creating your geography

The first thing you'll need is your geography, in GeoJSON. Your geography:

*   Must be named `geography.geojson.json` and placed in the root folder.
*   Must be WGS84 (EPSG:4326).
*   Must contain an `id` property that's a string and a unique identifier for each polygon that you'll use for your data files.
*   `id` must be in the `properties` object on each feature, not a standalone attribute of the feature.

For serving and rendering GeoJSON, smaller is better, but watch out for topologically unaware simplification tools, as they'll leave ugly slivers in your data. You could use `v.generalize` in [QGIS](http://qgis.org/en/site/) (or [GRASS](http://grass.osgeo.org/) directly), or you could go the shapefile->[topojson](http://grass.osgeo.org/)->geojson route.

### Creating your data files

The Compass supports 2 types of data files, "classic" and "new". Some metrics are better suited to the classic format,
some are better suited to the new format.

#### Classic format
In the "classic" format, data files are simple CSV's in the format:

``` csv
id,y_2000,y_2010
jim,23,432
suzy,,100
```

The file header is `id` and each year of data is expressed as `y_<year>`. No data values are empty, like `suzy,,100`. CSV files are processed into JSON by the consuming applications. Each metric file will be named with a metric number found in `/config/data.json`.

#### New format
New-style metric files have only three columns: `year,fips,value`. Each row contains the metric value for a single combination of data year + fips code.

#### Filenames
The type of data will decide the files required:

*   `sum`: The data is summed when polygons are selected. This will require a `r<metric>.csv` (old-style) or `<metric>_numerator.csv` (new-style) file.
*   `mean`: The data is averaged when polygons are selected. This will require a `m<metric>.csv` (classic) or `<metric>_value.csv` (new-style) file.
*   `weighted`: A weighted average is calculated when polygons are selected. This requires the raw data in `r<metric>.csv` / `<metric>_numerator.csv` and a denominator for weighting/calculations in `d<metric>.csv` (classic) or `<metric>_denominator.csv` (new-style). r/d is each individual polygon value.

After creating your data files, run the test suite to make sure the basics check out.

**Note** Tests have not been updated to work with the Durham data.

``` bash
npm run test --silent
```

### Creating your metadata

Metadata files in markdown format are located in `/meta/en` and `/meta/es`, depending on language. Each metadata file is named in format `m<metric number>.md` with heading tags *exactly* like this:

``` markdown
## Title of Metric
Median age of poodles

### Whis is this important?
Because we like poodles.

### About the Data
I hang out at dog parks and type stuff in my phone. Circa 1986.

### Additional Resources
Dog pound yo.
```

The markdown is processed to HTML by the consuming projects, and as there's a lot of ugly text processing going on, messing with the layout will involve tinkering with code.

### Updating configuration files

There are four configuration files in `/config`:

*   `data.json`: Configuration information for your metrics.
*   `map.js`: Configuration information for your maps.
*   `selectgroups.js`: Groups of your geography units that you want to make selectable as a group.
*   `site.js`: Configuration for the site, like titles etc.

Each file contains definitions and instructions. For features that you don't want, like selectable groups, set the value to null.

The `/config/legacy` folder is for an earlier version of the project.

In particular, you will also want to change the Mapbox GL JS `/gl-style/style.json` pointer in `map.js` to your own tiles, Mapbox tiles, OSM2VectorTiles tiles, or what have you. The tiles we use don't cover much of the planet beyond our needs. The excellent [OSM-Liberty](https://github.com/lukasmartinelli/osm-liberty) is provided as a drop-in replacement.

### Tips and Gotchas

#### CSV column case sensitivity

Spreadsheet software often likes to capitalize the first letter in the `y_XXXX` field. That will turn your life into a furious ball of nothing. On a 'nix machine you can fix your files automatically via `npm run clean-csv`.

#### Sort on the ID

Your CSV files should be sorted on the metric ID. On a 'nix machine you can sort them automatically via `npm run clean-csv`.

#### Beware the hanging zero

Some identifiers like Census tracts can have a hanging zero, like 541.10. If you are manipulating your data files in spreadsheet software, make sure your ID column is being treated as a string and not a number or it will get dropped and your life will be destroyed.

#### Don't add H2 (##) or H3 (###) tags to the metadata

Because we're using those as choppers for layout, adding more of those will screw up your formatting.

#### Beware weird, non-web safe characters characters in Markdown

Don't edit Markdown in Word. You're welcome.

## Translations

### Where are translations stored

TODO

