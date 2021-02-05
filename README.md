
# Table of contents
* [Technologies](#Technologies)
* [Our Team](#Our-Team)
* [Idea of Creating Vr online game](#Idea-of-Creating-Vr-online-game)
* [Prototype](#Prototype)
* [Screenshot](#Screenshot)
* [Code snaps](#Code-snaps)

#Technologies
Node JS / JS / npm
- Express (Node JS framework)
- Socket.io
- Redis
- Html
-Javascript
-A-frame

#Our Team

Project manager:

*Members: Karl Gregor Rauniste, Robin Kukk, Tiiu Tuhkanen, Joonas Hendrik, Kadri Maripuu, Johanna, Rainis Tiirik,

#Idea of Creating Vr online game


#Prototype

https://ta19rauniste.itmajakas.ee/

#Screenshot

#Code snaps

Theme
```
    <a-scene fog="type: linear; color: #111; near:10; far:15">
    ```
Lights
```
        <a-light type="directional" castShadow="true" intensity="0.5" color="#FFF" position="2 5 0"></a-light>
        <a-light intensity="0.1" type="ambient" position="1 1 1" color="#FFF"></a-light>
```
Camera
```
        <a-entity id="rig" position="0 3 0">
            <a-camera wasd-controls look-controls>
                <a-entity cursor="fuse: true; fuseTimeout: 250" position="0 0 -1" geometry="primitive: ring; radiusInner: 0.03; radiusOuter: 0.04" material="color: white; shader: flat; opacity: 0.5" scale="0.5 0.5 0.5" raycaster="far: 20; interval: 1000; objects: .clickable">
                    <a-circle radius="0.01" color="#FFF" opacity="0.5" material="shader: flat"></a-circle>
                    <a-animation begin="fusing" easing="ease-in" attribute="scale" fill="backwards" from="1 1 1" to="0.2 0.2 0.2" dur="250"></a-animation>
                </a-entity>
            </a-camera>
        </a-entity>
```
