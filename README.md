# Our team

We are team  

**_Project manager:_**  


**_Members:_**   

**Developers:** 

**Design:** 

**Github admin:**   



## Idea of Creating Vr online game
​


## Prototype
​


## "Screenshot"


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
