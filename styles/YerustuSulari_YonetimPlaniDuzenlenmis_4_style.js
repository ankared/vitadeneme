var size = 0;
var placement = 'point';
function categories_YerustuSulari_YonetimPlaniDuzenlenmis_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Ana Dere':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,99,251,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Dere':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,99,251,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kanal':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(31,164,236,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(67,40,224,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_YerustuSulari_YonetimPlaniDuzenlenmis_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Tip");
    var labelText = "";
    size = 0;
    var labelFont = "6.5px \'Arial\', sans-serif";
    var labelFill = "#0464ff";
    var bufferColor = "#fafafa";
    var bufferWidth = 0.5;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("IF(  \"Tip\" = 'Ana Dere',  \"OZEL_ISMI\"  ,'')") !== null) {
        labelText = String(feature.get("IF(  \"Tip\" = 'Ana Dere',  \"OZEL_ISMI\"  ,'')"));
    }
    
var style = categories_YerustuSulari_YonetimPlaniDuzenlenmis_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
