import{f as p,j as e}from"./iframe-Y1CUkKP1.js";import{O as i}from"./object-table-DQBuNMdk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-8Wffe73s.js";import"./Table-De-sUE09.js";import"./index-BgIb3D7l.js";import"./Dialog-zJinfTJn.js";import"./cross-C6CQ-Bph.js";import"./svgIconContainer-zBluTTvF.js";import"./useBaseUiId-AScn4b_2.js";import"./InternalBackdrop-BL3OC3Mi.js";import"./composite-BF49Bsji.js";import"./index-iBVyzjTo.js";import"./index-Bp2ZqYOt.js";import"./index-5n049uw8.js";import"./useEventCallback-563WN3on.js";import"./SkeletonBar-DGyBVuc7.js";import"./LoadingCell-C7zfzXwS.js";import"./ColumnConfigDialog-Dir9H2W4.js";import"./DraggableList-DOUwftOK.js";import"./search-kvTlC8VP.js";import"./Input-Db9jSpBp.js";import"./useControlled-21Syoeuq.js";import"./Button-DxN7lWSP.js";import"./small-cross-CpXS7-E7.js";import"./ActionButton-C9oPSSlN.js";import"./Checkbox-C7L-VnPz.js";import"./useValueChanged-tlFrKVn1.js";import"./CollapsiblePanel-Bb6ZrGRp.js";import"./MultiColumnSortDialog-D9dYaX6J.js";import"./MenuTrigger-DcnlfWyX.js";import"./CompositeItem-Dj9wX2bL.js";import"./ToolbarRootContext-MbtwPZ1o.js";import"./getDisabledMountTransitionStyles-DoO-DKYl.js";import"./getPseudoElementBounds-BBCNTbus.js";import"./chevron-down-AzVM-11H.js";import"./index-DGNKT7_4.js";import"./error-CxOGSZqi.js";import"./BaseCbacBanner-CD-E-bUb.js";import"./makeExternalStore-BeEve9Lc.js";import"./Tooltip-DFQq_M9K.js";import"./PopoverPopup-C3sIFE_l.js";import"./debounce-DaCmMChm.js";import"./useOsdkClient-D-yv75yo.js";import"./tick-1VZvyctz.js";import"./DropdownField-CeKz5eyy.js";import"./isEqual-Dt2RGhpW.js";import"./withOsdkMetrics-B3ENf8sD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
