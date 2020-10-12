import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../assets/map-market.svg';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Marcador do mapa"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>
      {/* MAPBOX tambem é uma opção viável para mapas */}
      <Map 
        center={[-15.9186944,-48.0575488]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer 
          url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>

      <Link to="" className="create-ophanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;