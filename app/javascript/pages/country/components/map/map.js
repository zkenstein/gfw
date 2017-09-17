import { createElement } from 'react';
import { connect } from 'react-redux';

import MapComponent from './map-component';
import actions from './map-actions';

export { initialState } from './map-reducers';
export { default as reducers } from './map-reducers';
export { default as actions } from './map-actions';

const mapStateToProps = state => ({
  zoom: state.map.zoom,
  center: state.map.center
});

const MapContainer = (props) => {
  return createElement(MapComponent, {
    ...props,
  });
};

export default connect(mapStateToProps, actions)(MapContainer);