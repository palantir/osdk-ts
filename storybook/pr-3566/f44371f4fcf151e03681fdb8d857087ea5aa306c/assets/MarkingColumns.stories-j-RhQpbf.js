import{f as p,j as e}from"./iframe-L0ai1cqu.js";import{O as i}from"./object-table-ne0UGzkD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CJV0phFD.js";import"./Table-Yi2Dw3-e.js";import"./index-5z3NwvK-.js";import"./Dialog-ZeTSBHHm.js";import"./cross-BldMnKGZ.js";import"./svgIconContainer-BXNeDKfE.js";import"./useBaseUiId-uRdy00NM.js";import"./InternalBackdrop-DCsjh2P3.js";import"./composite-CFzFTXZM.js";import"./index-goLx_Fcw.js";import"./index-DEaRVqB1.js";import"./index-CFEdM6FV.js";import"./useEventCallback-CWg2rvFg.js";import"./SkeletonBar-CYSccD39.js";import"./LoadingCell-DgiT6hv3.js";import"./ColumnConfigDialog-Cai_HsOF.js";import"./DraggableList-BiXBMObZ.js";import"./search-BKS6fiop.js";import"./Input-BM22UCCJ.js";import"./useControlled-DoS-DO0S.js";import"./isEqual-CY9rucrh.js";import"./isObject-BrRMXq4S.js";import"./Button-BSW9_-C2.js";import"./ActionButton-CnjBUHSn.js";import"./Checkbox-CyTJ8Zgl.js";import"./useValueChanged-Bm3Y-hkB.js";import"./CollapsiblePanel-CSA2s4Se.js";import"./MultiColumnSortDialog-Qvy_y3lD.js";import"./MenuTrigger-D2M0hnBx.js";import"./CompositeItem-BzKbnmXa.js";import"./ToolbarRootContext-UBtY_0iz.js";import"./getDisabledMountTransitionStyles-CifMVr-Z.js";import"./getPseudoElementBounds-DWZifzSe.js";import"./chevron-down-DVT4pCH4.js";import"./index-D9UbhpdK.js";import"./error-DF7L9Uny.js";import"./BaseCbacBanner-CuDa_C4M.js";import"./makeExternalStore-DSYTVPLR.js";import"./Tooltip-b9RLl_F3.js";import"./PopoverPopup-BujxcEP7.js";import"./toNumber-CIAbFPgG.js";import"./useOsdkClient-C3iUXV7q.js";import"./tick-CtivK5GP.js";import"./DropdownField-Bebf4HlQ.js";import"./withOsdkMetrics-BNutyxS8.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
