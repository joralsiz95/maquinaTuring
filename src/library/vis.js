import { Network } from 'vis-network';
import { DataSet } from 'vis-data';

// alert("Que esta pasando wey");

//creando el arreglo de nodos
var nodes = new DataSet([
    { id: 1, label: "Node 1", shape: "circle", physics:false, x: 50, y:0 /*,fixed: { x:true, y:true}*/, borderWidthSelected: 3 },
    { id: 2, label: "Node 2", shape: "circle", physics:false, x: 200, y:140, borderWidthSelected: 3 },
    { id: 3, label: "Node 3", shape: "circle", physics:false, x: 350, y:0, borderWidthSelected: 3 },
    { id: 4, label: "Node 4", shape: "circle", color: {background: "red", border: "black", highlight: { background: "yellow", border: "red" }, borderWidthSelected: 3}, physics:false, x: 500, y:140 },
    { id: 5, shape: "dot", physics:false, x: 50, y:60, color: {background: "transparent", border: "transparent", highlight: { background: "transparent", border: "transparent" } } }
]);


// creando arreglo de conexiones
var edges = new DataSet([
    { id:12, from: 1, to: 2, arrows: { to: { enabled: true ,scaleFactor: 1.2, type: "arrow" } }, label: "con_2", font: { align: "top" }, selectionWidth: 2.3, shadow:{ enabled: true, color: 'rgba(0,0,0,.4)', size:5, x:2, y:2 } },
    { id:23, from: 2, to: 3, arrows: "to", label: "con_3", font: { align: "top" }, selectionWidth: 2.3, shadow:{ enabled: true, color: 'rgba(0,0,0,.4)', size:5, x:2, y:2 } },
    { id:33, from: 3, to: 3, arrows: "to", label: "con_4", font: { align: "top" }, selfReference:{size: 30}, selectionWidth: 2.3, shadow:{ enabled: true, color: 'rgba(0,0,0,.4)', size:5, x:2, y:2 } },
    { id:11, from: 1, to: 1, arrows: "to", label: "con_1", font: { align: "top" }, selfReference:{size: 30}, selectionWidth: 2.3, shadow:{ enabled: true, color: 'rgba(0,0,0,.4)', size:5, x:2, y:2 } },
    
    { id:112, from: 1, to: 1, arrows: "to", label: "con_x", font: { align: "top" }, selfReference:{size: 30,angle:180}, selectionWidth: 2.3, shadow:{ enabled: true, color: 'rgba(0,0,0,.4)', size:5, x:2, y:2 } },
    
    { id:34, from: 3, to: 4, arrows: "to", dashes: true, color: {color: "black", highlight:"red"}, label: "con_5", font: { align: "top" }, selectionWidth: 2.3, shadow:{ enabled: true, color: 'rgba(0,0,0,.4)', size:5, x:2, y:2 }}
]);

//creando la red
// console.log(container);
const contenedor = document.getElementById("red");
console.log(contenedor);

var data = {
    nodes: nodes,
    edges: edges,
};

var options = {
    interaction: {
        // hover: true
        dragView: true,
        selectConnectedEdges: false
    }
};

var network = new Network(contenedor,data,options);

export default network;