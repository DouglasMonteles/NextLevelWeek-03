import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../assets/map-market.svg';

import '../styles/pages/orphanages-map.css';
import mapIcon from '../utils/mapIcon';

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
        center={[-15.9161931,-48.0619748]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer 
          url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker 
          icon={mapIcon}
          position={[-15.9161931,-48.0619748]}
        >
          <Popup 
            closeButton={false} 
            minWidth={240} 
            maxWidth={240}
            className="map-popup"
          >
            Lar das meninas
            <Link to="/orphanages/7">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create" className="create-ophanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;