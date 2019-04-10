var capacity;

capacity = {
  Wp: {
    name: {
      singular: 'Watt Power'
    , plural: 'Watts Power'
    }
  , to_anchor: 1
  }
, mWp: {
    name: {
      singular: 'Milliwatt Power'
      , plural: 'Milliwatts Power'
    }
    , to_anchor: .001
  }
, kWp: {
    name: {
      singular: 'Kilowatt Power'
    , plural: 'Kilowatts Power'
    }
  , to_anchor: 1000
  }
, MWp: {
    name: {
      singular: 'Megawatt Power'
    , plural: 'Megawatts Power'
    }
  , to_anchor: 1000000
  }
, GWp: {
    name: {
      singular: 'Gigawatt Power'
    , plural: 'Gigawatts Power'
    }
  , to_anchor: 1000000000
  }
};

module.exports = {
  metric: power
, _anchors: {
    metric: {
      unit: 'Wp'
    , ratio: 1
    }
  }
};
