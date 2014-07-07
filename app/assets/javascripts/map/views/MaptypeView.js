/**
 * The MaptypeView selector view.
 *
 * @return MaptypeView instance (extends Backbone.View).
 */
define([
  'underscore',
  'views/Widget',
  'presenters/MaptypePresenter',
  'handlebars',
  'text!map/templates/maptype.handlebars'
], function(_, Widget, Presenter, Handlebars, tpl) {

  'use strict';

  var MaptypeView = Widget.extend({

    className: 'widget maptype',
    template: Handlebars.compile(tpl),

    events: function(){
      return _.extend({}, MaptypeView.__super__.events, {
        'click .maptype-selected li': 'toggleClosed',
        'click .widget-opened .maptype-list li': '_setMaptype'
      });
    },

    initialize: function() {
      _.bindAll(this, 'selectMaptype');
      this.presenter = new Presenter(this);
      MaptypeView.__super__.initialize.apply(this);
    },

    _setMaptype: function(event) {
      var $currentTarget = $(event.currentTarget);
      var maptype = $currentTarget.data('maptype');

      if (maptype) {
        this.presenter.setMaptype(maptype);
      }
    },

    /**
     * Add selected mapview to .maptype-selected
     * and close the widget.
     *
     * @param  {string} maptype
     */
    selectMaptype: function(maptype) {
      this.$el.find('.maptype-selected').html(
        this.$widgetOpened.find('[data-maptype="' + maptype + '"]').clone());

      this.model.set('closed', true);
    }
  });

  return MaptypeView;

});
