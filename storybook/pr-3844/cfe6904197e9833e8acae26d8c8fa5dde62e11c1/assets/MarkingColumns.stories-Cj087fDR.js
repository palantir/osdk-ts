import{f as p,j as e}from"./iframe-BmIumiFy.js";import{O as i}from"./object-table-CvOpDczA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DOudssxF.js";import"./Table-BhjAHP64.js";import"./index-COtMTDwh.js";import"./Dialog-uE21v_ZQ.js";import"./cross-DwaGakXk.js";import"./svgIconContainer-zzO9ThP2.js";import"./useBaseUiId-u6D5SNaO.js";import"./InternalBackdrop-B9dKZpjj.js";import"./composite-xXwZ5piC.js";import"./index-C3Iv1KGN.js";import"./index-sxuF88AO.js";import"./index-DUFG2h40.js";import"./useEventCallback-B8NSSpYv.js";import"./SkeletonBar-BovQdxso.js";import"./LoadingCell-D0i64q0P.js";import"./ColumnConfigDialog-CtNE-3Ou.js";import"./DraggableList-BUJMmWzV.js";import"./search-B4tx0NX2.js";import"./Input-DMQEWRf3.js";import"./useControlled-BF-5Gu-Y.js";import"./isEqual-DuTTYvzw.js";import"./isObject-DrqpD2n2.js";import"./Button-BMFo_q3G.js";import"./ActionButton-DrJ6EZ8a.js";import"./Checkbox-aRpirLZ3.js";import"./useValueChanged-Dc-3HeWJ.js";import"./CollapsiblePanel-DJE96aKA.js";import"./MultiColumnSortDialog-Bgfe-LZL.js";import"./MenuTrigger-7DDfuo0C.js";import"./CompositeItem-CEPi8VM6.js";import"./ToolbarRootContext-ujFBXNzR.js";import"./getDisabledMountTransitionStyles-BfNZz4o-.js";import"./getPseudoElementBounds-DYdOL6QI.js";import"./chevron-down-SL5FndRp.js";import"./index-0qJVcbl0.js";import"./error-BsBgpzWK.js";import"./BaseCbacBanner-we2_u0B0.js";import"./makeExternalStore-B__ysOOH.js";import"./Tooltip-CZ7OA9Hx.js";import"./PopoverPopup-CItoAxrH.js";import"./toNumber-B5ytWKky.js";import"./useOsdkClient-DpUIXbJs.js";import"./tick-DZ-GdA6q.js";import"./DropdownField-BkYVcv5s.js";import"./withOsdkMetrics-aOoiWXTE.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
