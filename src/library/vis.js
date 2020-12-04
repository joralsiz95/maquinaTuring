import { Network } from 'vis-network';
import { DataSet } from 'vis-data';

var network = null;

export function crearRed(contenedor){

    //creando el arreglo de nodos
    var nodes = new DataSet([
        { id: 1, label: "    𝙌₁    ",font:{size: 18}, shape: "circle", color: {background: "#1FA5FF", border: "#1FA5FF", highlight: { background: "rgb(255, 161, 192)", border: "rgb(255, 42, 113)" }}, physics:false, x: 20, y:10 /*,fixed: { x:true, y:true}*/, borderWidthSelected: 4 },
        { id: 2, label: "    𝙌₂    ", font:{size: 18}, shape: "circle", color: {background: "#1FA5FF", border: "#1FA5FF", highlight: { background: "rgb(255, 161, 192)", border: "rgb(255, 42, 113)" }}, physics:false, x: 180, y:150, borderWidthSelected: 4 },
        { id: 3, label: "    𝙌₃    ",font:{size: 18}, shape: "circle", /*borderWidth: 5,*/ color: {background: "#1FA5FF", border: "#1FA5FF", highlight: { background: "rgb(255, 111, 111)", border: "red" }}, physics:false, x: 350, y:10, borderWidthSelected: 4 },
        // { id: 4, label: "Node 4", shape: "circle", color: {background: "red", border: "black", highlight: { background: "yellow", border: "red" }, borderWidthSelected: 3}, physics:false, x: 500, y:140 },
        { id: 4, shape: "dot", physics:false, x: 50, y:60, color: {background: "transparent", border: "transparent", highlight: { background: "transparent", border: "transparent" } } }
    ]);


    // creando arreglo de conexiones
    var edges = new DataSet([
        { id:11, from: 1, to: 1, arrows: "to", label: "𝙖 ➤ 𝙖 , 𝙍", color: {color: "#1FA5FF", highlight:"rgb(34, 236, 14)"}, font: { align: "top" }, selfReference:{size: 40}, selectionWidth: 2.3, shadow:{ enabled: true, color: 'rgba(0,0,0,.4)', size:5, x:2, y:2 } },
        { id:112, from: 1, to: 1, arrows: "to", label: "𝙗 ➤ 𝙖 , 𝙍", color: {color: "#1FA5FF", highlight:"rgb(34, 236, 14)"}, font: { align: "top" }, selfReference:{size: 40,angle:180}, selectionWidth: 2.3, shadow:{ enabled: true, color: 'rgba(0,0,0,.4)', size:5, x:2, y:2 } },
        { id:12, from: 1, to: 2, arrows: { to: { enabled: true ,scaleFactor: 1.2, type: "arrow" } }, color: {color: "#1FA5FF", highlight:"rgb(42, 42, 255)"}, label: "#̅  ➤ #̅  , 𝙇", font: { align: "top" }, selectionWidth: 2.3, shadow:{ enabled: true, color: 'rgba(0,0,0,.4)', size:5, x:2, y:2 } },
        { id:22, from: 2, to: 2, arrows: "to", label: "𝙖 ➤ 𝙖 , 𝙇", color: {color: "#1FA5FF", highlight:"rgb(42, 42, 255)"}, font: { align: "top" }, selfReference:{size: 40,angle:200}, selectionWidth: 2.3, shadow:{ enabled: true, color: 'rgba(0,0,0,.4)', size:5, x:2, y:2 } },
        { id:23, from: 2, to: 3, arrows: "to", label: "#̅  ➤ #̅  , 𝙍",dashes: true, color: {color: "#1FA5FF", highlight:"red"}, font: { align: "top" }, selectionWidth: 2.3, shadow:{ enabled: true, color: 'rgba(0,0,0,.4)', size:5, x:2, y:2 } },
        // { id:33, from: 3, to: 3, arrows: "to", label: "con_4", font: { align: "top" }, selfReference:{size: 30}, selectionWidth: 2.3, shadow:{ enabled: true, color: 'rgba(0,0,0,.4)', size:5, x:2, y:2 } },
        
        
        // { id:34, from: 3, to: 4, arrows: "to", dashes: true, color: {color: "black", highlight:"red"}, label: "con_5", font: { align: "top" }, selectionWidth: 2.3, shadow:{ enabled: true, color: 'rgba(0,0,0,.4)', size:5, x:2, y:2 }}
    ]);

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
    
    network = new Network(contenedor,data,options);    

}

export function red(){
    return network;    
}