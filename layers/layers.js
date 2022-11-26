var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Drenaj_Alani_Clipped_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Drenaj_Alani_Clipped",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Drenaj_Alani_Clipped_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3061696.151533, 4444382.978605, 3096073.302962, 4471857.721881]
                            })
                        });
var format_MikroHavza_YonetimPlaniDuzenlenmiscopy_3 = new ol.format.GeoJSON();
var features_MikroHavza_YonetimPlaniDuzenlenmiscopy_3 = format_MikroHavza_YonetimPlaniDuzenlenmiscopy_3.readFeatures(json_MikroHavza_YonetimPlaniDuzenlenmiscopy_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MikroHavza_YonetimPlaniDuzenlenmiscopy_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MikroHavza_YonetimPlaniDuzenlenmiscopy_3.addFeatures(features_MikroHavza_YonetimPlaniDuzenlenmiscopy_3);
var lyr_MikroHavza_YonetimPlaniDuzenlenmiscopy_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MikroHavza_YonetimPlaniDuzenlenmiscopy_3, 
                style: style_MikroHavza_YonetimPlaniDuzenlenmiscopy_3,
                interactive: true,
                title: '<img src="styles/legend/MikroHavza_YonetimPlaniDuzenlenmiscopy_3.png" /> MikroHavza_YonetimPlaniDuzenlenmis copy'
            });
var format_YerustuSulari_YonetimPlaniDuzenlenmis_4 = new ol.format.GeoJSON();
var features_YerustuSulari_YonetimPlaniDuzenlenmis_4 = format_YerustuSulari_YonetimPlaniDuzenlenmis_4.readFeatures(json_YerustuSulari_YonetimPlaniDuzenlenmis_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YerustuSulari_YonetimPlaniDuzenlenmis_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YerustuSulari_YonetimPlaniDuzenlenmis_4.addFeatures(features_YerustuSulari_YonetimPlaniDuzenlenmis_4);
var lyr_YerustuSulari_YonetimPlaniDuzenlenmis_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YerustuSulari_YonetimPlaniDuzenlenmis_4, 
                style: style_YerustuSulari_YonetimPlaniDuzenlenmis_4,
                interactive: true,
    title: 'YerustuSulari_YonetimPlaniDuzenlenmis<br />\
    <img src="styles/legend/YerustuSulari_YonetimPlaniDuzenlenmis_4_0.png" /> Ana Dere<br />\
    <img src="styles/legend/YerustuSulari_YonetimPlaniDuzenlenmis_4_1.png" /> Dere<br />\
    <img src="styles/legend/YerustuSulari_YonetimPlaniDuzenlenmis_4_2.png" /> Kanal<br />\
    <img src="styles/legend/YerustuSulari_YonetimPlaniDuzenlenmis_4_3.png" /> <br />'
        });
var format_EDAlan_5 = new ol.format.GeoJSON();
var features_EDAlan_5 = format_EDAlan_5.readFeatures(json_EDAlan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EDAlan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDAlan_5.addFeatures(features_EDAlan_5);
var lyr_EDAlan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EDAlan_5, 
                style: style_EDAlan_5,
                interactive: true,
                title: '<img src="styles/legend/EDAlan_5.png" /> ÇED Alanı'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Drenaj_Alani_Clipped_2.setVisible(true);lyr_MikroHavza_YonetimPlaniDuzenlenmiscopy_3.setVisible(true);lyr_YerustuSulari_YonetimPlaniDuzenlenmis_4.setVisible(true);lyr_EDAlan_5.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_GoogleSatellite_1,lyr_Drenaj_Alani_Clipped_2,lyr_MikroHavza_YonetimPlaniDuzenlenmiscopy_3,lyr_YerustuSulari_YonetimPlaniDuzenlenmis_4,lyr_EDAlan_5];
lyr_MikroHavza_YonetimPlaniDuzenlenmiscopy_3.set('fieldAliases', {'Id': 'Id', 'No': 'No', 'Havza_Ad': 'Havza_Ad', 'Havza_Ad1': 'Havza_Ad1', 'Alan_km2': 'Alan_km2', 'KOD': 'KOD', 'CEDAd': 'CEDAd', });
lyr_YerustuSulari_YonetimPlaniDuzenlenmis_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DETAY_KODU': 'DETAY_KODU', 'DETAY_ADI': 'DETAY_ADI', 'SEMBOL': 'SEMBOL', 'OZEL_ISMI': 'OZEL_ISMI', 'DEGER': 'DEGER', 'Shape_Leng': 'Shape_Leng', 'Tip': 'Tip', });
lyr_EDAlan_5.set('fieldAliases', {'Name': 'Name', });
lyr_MikroHavza_YonetimPlaniDuzenlenmiscopy_3.set('fieldImages', {'Id': 'Range', 'No': 'Range', 'Havza_Ad': 'TextEdit', 'Havza_Ad1': 'TextEdit', 'Alan_km2': 'TextEdit', 'KOD': 'TextEdit', 'CEDAd': 'TextEdit', });
lyr_YerustuSulari_YonetimPlaniDuzenlenmis_4.set('fieldImages', {'OBJECTID': 'Range', 'DETAY_KODU': 'TextEdit', 'DETAY_ADI': 'TextEdit', 'SEMBOL': 'Range', 'OZEL_ISMI': 'TextEdit', 'DEGER': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Tip': 'TextEdit', });
lyr_EDAlan_5.set('fieldImages', {'Name': 'TextEdit', });
lyr_MikroHavza_YonetimPlaniDuzenlenmiscopy_3.set('fieldLabels', {'Id': 'no label', 'No': 'no label', 'Havza_Ad': 'no label', 'Havza_Ad1': 'no label', 'Alan_km2': 'no label', 'KOD': 'no label', 'CEDAd': 'no label', });
lyr_YerustuSulari_YonetimPlaniDuzenlenmis_4.set('fieldLabels', {'OBJECTID': 'no label', 'DETAY_KODU': 'no label', 'DETAY_ADI': 'no label', 'SEMBOL': 'no label', 'OZEL_ISMI': 'no label', 'DEGER': 'no label', 'Shape_Leng': 'no label', 'Tip': 'no label', });
lyr_EDAlan_5.set('fieldLabels', {'Name': 'no label', });
lyr_EDAlan_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});