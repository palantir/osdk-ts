import{f as p,j as e}from"./iframe-CO2vUFJD.js";import{O as i}from"./object-table-Ds0u1eY3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DpsnsEBy.js";import"./Table-Xs4hisSQ.js";import"./index-D4apVlTJ.js";import"./Dialog-C0MhshUa.js";import"./cross-CUeY1CjO.js";import"./svgIconContainer-DxakRBie.js";import"./useBaseUiId-DznybjsG.js";import"./InternalBackdrop-KBw-k9Vt.js";import"./composite-B8pYOTPV.js";import"./index-BgWdqboy.js";import"./index-BU4qgIJ_.js";import"./index-DQagJ0rJ.js";import"./useEventCallback-doBSO7ig.js";import"./SkeletonBar-nIsaUVmE.js";import"./LoadingCell-p0B9Wyq9.js";import"./ColumnConfigDialog-B7hiMn7Q.js";import"./DraggableList-xwjQWdpJ.js";import"./search-Drn2Bd1c.js";import"./Input-CuNl26f2.js";import"./useControlled-C1K7tXFP.js";import"./isEqual-BJsDSRo4.js";import"./isObject-Bm6LhXAR.js";import"./Button-DG5H8nKs.js";import"./ActionButton-BxBTvNLP.js";import"./Checkbox-gZ5ioWVR.js";import"./useValueChanged-6dXva1cI.js";import"./CollapsiblePanel-BStJw1to.js";import"./MultiColumnSortDialog-LC_2ec53.js";import"./MenuTrigger-B-BuRJtQ.js";import"./CompositeItem-DbfOLwvO.js";import"./ToolbarRootContext-BkyJSAiT.js";import"./getDisabledMountTransitionStyles-DhOAgz9K.js";import"./getPseudoElementBounds-kHqtrGtd.js";import"./chevron-down-Du10suNj.js";import"./index-CpfOOGos.js";import"./error-Ce2q8rJl.js";import"./BaseCbacBanner-DYdAn-vz.js";import"./makeExternalStore-ChIGs1GC.js";import"./Tooltip-DRIOmPe0.js";import"./PopoverPopup-SZIvrmwM.js";import"./toNumber-C8u6QsaL.js";import"./useOsdkClient-Bl3DVZNi.js";import"./tick-DVK-EIjv.js";import"./DropdownField-GM2MACnt.js";import"./withOsdkMetrics-D4cF1XVz.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
