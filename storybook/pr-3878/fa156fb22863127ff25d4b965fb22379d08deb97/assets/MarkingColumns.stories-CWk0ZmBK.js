import{f as p,j as e}from"./iframe-5UDGUP80.js";import{O as i}from"./object-table-DT9yW_zW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C4oCDBip.js";import"./Table-Ch_fXbg9.js";import"./index-Bugktx71.js";import"./Dialog-eRa75sWc.js";import"./cross-CxetxkJH.js";import"./svgIconContainer-BQ_U4GID.js";import"./useBaseUiId-BJavFBRa.js";import"./InternalBackdrop-BDP5HkEg.js";import"./composite-BocxrVtD.js";import"./index-B43ppQJK.js";import"./index-CFmBTWdv.js";import"./index-BPg1wn6n.js";import"./useEventCallback-BBIFPkUx.js";import"./SkeletonBar-kb5Emx81.js";import"./LoadingCell-7txcW6zg.js";import"./ColumnConfigDialog-WvaYcGIP.js";import"./DraggableList-DrTVKaZD.js";import"./search-DXPDoI0I.js";import"./Input-Dk-R4cjA.js";import"./useControlled--GaTcUFv.js";import"./Button-_SyP2AI3.js";import"./small-cross-DJ3pxLUM.js";import"./ActionButton-BcauRl8O.js";import"./Checkbox-DZ7T1UOK.js";import"./useValueChanged-CIWK-Rio.js";import"./CollapsiblePanel-C1JLT-WA.js";import"./MultiColumnSortDialog-DSVS7wSF.js";import"./MenuTrigger-BEfXx9km.js";import"./CompositeItem-CF8sbYQc.js";import"./ToolbarRootContext-D-36hmPD.js";import"./getDisabledMountTransitionStyles-Dt1lgd6K.js";import"./getPseudoElementBounds-7jKiSX97.js";import"./chevron-down-D3oAKYgi.js";import"./index-Dok_ldqO.js";import"./error-BTC-cXwr.js";import"./BaseCbacBanner-C29IMPf2.js";import"./makeExternalStore-DwYufUqB.js";import"./Tooltip-BF8B5Q2Y.js";import"./PopoverPopup-uZRZUKrc.js";import"./debounce-BHw5pdhf.js";import"./useOsdkClient-Cry0QHXA.js";import"./tick-DHT-rrDO.js";import"./DropdownField-Do75zApJ.js";import"./isEqual-KV3yJUm_.js";import"./withOsdkMetrics-iD8vruam.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
