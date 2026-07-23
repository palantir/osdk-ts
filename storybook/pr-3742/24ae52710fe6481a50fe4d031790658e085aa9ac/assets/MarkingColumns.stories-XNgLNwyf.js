import{f as p,j as e}from"./iframe-CkbYc2pP.js";import{O as i}from"./object-table-CUpLjh1V.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DWws0Fe8.js";import"./Table-BRLAersF.js";import"./index-B7qybUT7.js";import"./Dialog-BQ1LsR6o.js";import"./cross-B-KVwLek.js";import"./svgIconContainer-BePuMkB2.js";import"./useBaseUiId-vvHGjGIN.js";import"./InternalBackdrop-Z_-L2gMX.js";import"./composite-BMFfaa_y.js";import"./index-COpZ_srd.js";import"./index-BLluPW5F.js";import"./index-CHz79Cob.js";import"./useEventCallback-CT8_iKH-.js";import"./SkeletonBar-CXWwNKp3.js";import"./LoadingCell-BpT1Vpzy.js";import"./ColumnConfigDialog-gy3MtgbY.js";import"./DraggableList-D3xdxf9T.js";import"./search-4l5VikIh.js";import"./Input-TCA2ZWZm.js";import"./useControlled-BVzdlM3Q.js";import"./isEqual-D6wY5BBD.js";import"./isObject-CLSB1shT.js";import"./Button-BigCnc-F.js";import"./ActionButton-LCy3JXZ7.js";import"./Checkbox-Uuq4GMni.js";import"./useValueChanged-XJKlxe7a.js";import"./CollapsiblePanel-BnsHlHcz.js";import"./MultiColumnSortDialog-B4KTXyeq.js";import"./MenuTrigger-CxEOpvoP.js";import"./CompositeItem-BszmLGHn.js";import"./ToolbarRootContext-CzW8ESD7.js";import"./getDisabledMountTransitionStyles-PF9BIs3h.js";import"./getPseudoElementBounds-BonZGGeJ.js";import"./chevron-down-C4_wMWuh.js";import"./index-Burs7DZR.js";import"./error-dHO47Anr.js";import"./BaseCbacBanner-B6866jBg.js";import"./makeExternalStore-BkbUVh1s.js";import"./Tooltip-BDeVX6Eo.js";import"./PopoverPopup-DCEWnhQ4.js";import"./toNumber-D5eBbvyL.js";import"./useOsdkClient-BpR3WLdC.js";import"./tick-Bl3me1aB.js";import"./DropdownField-7aiTJRSK.js";import"./withOsdkMetrics-DQxmGXeb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
