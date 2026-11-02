import{f as p,j as e}from"./iframe-BOL4lmQu.js";import{O as i}from"./object-table-CMQSXq2e.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CF5y6P51.js";import"./Table-C-Ja_1RN.js";import"./index-BlfYN_kO.js";import"./Dialog-C58LhjQg.js";import"./cross-C9_cN1cS.js";import"./svgIconContainer-FVhL1hCA.js";import"./useBaseUiId-BpGNe3Eg.js";import"./InternalBackdrop-LCz3M4jq.js";import"./composite-BV3ZD4mr.js";import"./index-CmApk3zh.js";import"./index-DP_XR25E.js";import"./index-DBaqiByX.js";import"./useEventCallback-ifDqPOAF.js";import"./SkeletonBar-BNX5gidE.js";import"./LoadingCell-C0eef9LR.js";import"./ColumnConfigDialog-BEJRup2O.js";import"./DraggableList-BHlopOab.js";import"./search-Cv260GLX.js";import"./Input-CujqDLfg.js";import"./useControlled-1K3KKLgI.js";import"./Button-BQpmuek9.js";import"./small-cross-B0XRPY8R.js";import"./ActionButton-BSJylTXK.js";import"./Checkbox-DbzFPQcL.js";import"./useValueChanged-D-6eFv97.js";import"./CollapsiblePanel-ClIQPlSc.js";import"./MultiColumnSortDialog-Cp5dcT-Y.js";import"./MenuTrigger-DECqK-MD.js";import"./CompositeItem-D7t72lc9.js";import"./ToolbarRootContext-DYZSmWFR.js";import"./getDisabledMountTransitionStyles-CMRhZxrC.js";import"./getPseudoElementBounds-Td3ZX14H.js";import"./chevron-down-wPhaZYI3.js";import"./index-DagXr3NH.js";import"./error-DWdKle1J.js";import"./BaseCbacBanner-DZWHxj7c.js";import"./makeExternalStore-BaKwuUE-.js";import"./Tooltip-ipzaDerj.js";import"./PopoverPopup-QDwqPc_0.js";import"./debounce-C7TgZToh.js";import"./useOsdkClient-CMRz05mU.js";import"./tick-C5Qp1iIQ.js";import"./DropdownField-B0yO1meX.js";import"./isEqual-D1nl7lv3.js";import"./withOsdkMetrics-D8Pyw_HQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
