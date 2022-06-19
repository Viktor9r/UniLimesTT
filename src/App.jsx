import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

class App extends Component {
  state = {
    selectedFigure: '',
    // eslint-disable-next-line react/no-unused-state
    figureSize: '',
    // eslint-disable-next-line react/no-unused-state
    isFigureCreated: false,
    correctInput: true,
    // eslint-disable-next-line react/no-unused-state
    figuresArray: [],
  };

  createFigure = () => {
    let scene;
    let camera;
    let renderer;
    let box;
    let controls;

    function init() {
      scene = new THREE.Scene();
      camera = new
      THREE.PerspectiveCamera(75, window.innerWidth
        / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true });
      // eslint-disable-next-line no-unused-vars
      /* const figureType = this.state.selectedFigure;
      // eslint-disable-next-line no-unused-vars
      const figures = this.state.figuresArray; */

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.position.setZ(30);
      document.body.appendChild(renderer.domElement);
      const geometry = new THREE.BoxGeometry(1, 1, 1, 11);
      const material
      = new THREE.MeshBasicMaterial({
        color: 0xFF6347,
      });

      box = new THREE.Mesh(geometry, material);

      /* const geometryS = new THREE.SphereGeometry(2, 3, 1);
      const materialS = new THREE.MeshBasicMaterial({ color: 0x00eeee });
      const sphere = new THREE.Mesh(geometryS, materialS); */

      const light = new THREE.PointLight(0xffffff);
      const ambientLight = new THREE.AmbientLight(0xffffff);
      const [x, y, z]
        = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(10));

      box.position.set(x, y, z);

      light.position.set(20, 20, 20);
      const gridHelper = new THREE.GridHelper(200, 50);

      scene.add(light, ambientLight, gridHelper);

      scene.add(box);
      /* box.position
        .set(Math.random()
        * 2 + 1, Math.random() * 2 + 1, Math.random() * 2 + 1); */
      /*  sphere.position
        .set(Math.random()
        * 4 + 1, Math.random() * 4 + 1, Math.random() * 4 + 1); */
      camera.position.z = 5;

      controls = new OrbitControls(camera, renderer.domElement);
    }

    function animate() {
      requestAnimationFrame(animate);
      box.rotation.x += 0.01;
      box.rotation.y += 0.01;
      controls.update();
      renderer.render(scene, camera);
    }

    function windowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', windowResize, false);

    init();
    animate();
    // === THREE.JS EXAMPLE CODE END ===
  }

  handleFigureChange = (event) => {
    this.setState({
      selectedFigure: event.target.value,
    });
    this.state.figuresArray.push(event.target.value.toLowerCase());
    // eslint-disable-next-line no-console
    console.log(this.state.figuresArray);
  }

  handleInputChange = (event) => {
    const correctValues = '1234567890';

    if (correctValues.includes(event.target.value)) {
      this.setState({
        figureSize: event.target.value[1],
        correctInput: true,
      });
    } else {
      this.setState({
        correctInput: false,
      });
    }
  }

  clearState = () => {
    this.setState({
      selectedFigure: '',
      figureSize: '',
      correctInput: true,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.correctInput) {
      this.createFigure();
      this.clearState();
    }

    // eslint-disable-next-line no-console
    console.log('inc');
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <select
            value={this.state.selectedFigure}
            name="Figure"
            className="figure-selector"
            onChange={this.handleFigureChange}
            required
          >
            <option value="">Choose a figure</option>
            <option value="Box">Box</option>
            <option value="Sphere">Sphere</option>
            <option value="Piramyde">Piramyde</option>
          </select>
          <input
            name="Scale"
            className="figure-size"
            required
            onChange={this.handleInputChange}
          />
          <button
            type="submit"
            className="submitForm"
          >
            Create
          </button>
          <div>{this.state.selectedFigure}</div>
          <div>{this.state.figureSize}</div>
        </form>
      </>
    );
  }
}

export default App;
