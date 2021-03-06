export default `
.rheostat {
  overflow: visible;
}

.rheostat-background {
  background-color: #e0e0e0;
  position: relative;
  border-radius: 10px 10px 0 0;
}

.rheostat-progress {
  background-color: #00afff;
  position: absolute;
  border-radius: 10px 10px 0 0;
  height: 25px;
}

.rheostat-handle {
  outline: none;
  z-index: 2;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.85);
  border: 2px solid #00afff;
  box-shadow: 0 0 5px 2px rgba(0, 187, 255, 0.12);
}

.rheostat-horizontal {
  height: 24px;
}

.rheostat-horizontal .rheostat-background {
  height: 25px;
  top: 0px;
  width: 100%;
}

.rheostat-horizontal .rheostat-progress {
  top: 0;
  bottom: 0;
}

.rheostat-horizontal .rheostat-handle {
  margin-left: -12px;
  top: -13px;
}

.rheostat-horizontal .rheostat-handle:before,
.rheostat-horizontal .rheostat-handle:after {
  top: 7px;
  height: 10px;
  width: 1px;
}

.rheostat-horizontal .rheostat-handle:before {
  left: 10px;
}

.rheostat-horizontal .rheostat-handle:after {
  left: 13px;
}`;