var wms_layers = [];


        var lyr_WorldStreetMap_0 = new ol.layer.Tile({
            'title': 'World Street Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Zoneetude_1 = new ol.format.GeoJSON();
var features_Zoneetude_1 = format_Zoneetude_1.readFeatures(json_Zoneetude_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoneetude_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneetude_1.addFeatures(features_Zoneetude_1);
var lyr_Zoneetude_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoneetude_1, 
                style: style_Zoneetude_1,
                popuplayertitle: 'Zone-etude',
                interactive: true,
                title: '<img src="styles/legend/Zoneetude_1.png" /> Zone-etude'
            });
var format_waterways_2 = new ol.format.GeoJSON();
var features_waterways_2 = format_waterways_2.readFeatures(json_waterways_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterways_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterways_2.addFeatures(features_waterways_2);
var lyr_waterways_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterways_2, 
                style: style_waterways_2,
                popuplayertitle: 'waterways',
                interactive: true,
                title: '<img src="styles/legend/waterways_2.png" /> waterways'
            });

lyr_WorldStreetMap_0.setVisible(true);lyr_Zoneetude_1.setVisible(true);lyr_waterways_2.setVisible(true);
var layersList = [lyr_WorldStreetMap_0,lyr_Zoneetude_1,lyr_waterways_2];
lyr_Zoneetude_1.set('fieldAliases', {'Id': 'Id', });
lyr_waterways_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'width': 'width', });
lyr_Zoneetude_1.set('fieldImages', {'Id': 'Range', });
lyr_waterways_2.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'width': 'Range', });
lyr_Zoneetude_1.set('fieldLabels', {'Id': 'no label', });
lyr_waterways_2.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'width': 'no label', });
lyr_waterways_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});