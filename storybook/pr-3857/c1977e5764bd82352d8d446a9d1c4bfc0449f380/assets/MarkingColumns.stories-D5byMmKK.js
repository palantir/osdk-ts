import{f as p,j as e}from"./iframe-HkADxMgA.js";import{O as i}from"./object-table-BPD1qlMS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DTtqGHxT.js";import"./Table-BBDxoEZg.js";import"./index-DUW8wRrQ.js";import"./Dialog-C1cC5oO0.js";import"./cross-BJLKHlwA.js";import"./svgIconContainer-uqcLMh9h.js";import"./useBaseUiId-B28qMeqB.js";import"./InternalBackdrop-KSJdc-Eh.js";import"./composite-Bshgoqdb.js";import"./index-_47i1T5T.js";import"./index-CCQw_l8A.js";import"./index-D4OnPD6V.js";import"./useEventCallback-BT13A2s8.js";import"./SkeletonBar-BR_z_H5s.js";import"./LoadingCell-CXRScZCO.js";import"./ColumnConfigDialog-CIM34A1V.js";import"./DraggableList-BFgNNJKw.js";import"./search-oee3a-xy.js";import"./Input-CdSqdp7n.js";import"./useControlled-0FKUHHKR.js";import"./Button-DXksPsq1.js";import"./small-cross-DtnBRH_a.js";import"./ActionButton-DFp4Eahm.js";import"./Checkbox-CdSHxSSr.js";import"./useValueChanged-CLKZqZ1n.js";import"./CollapsiblePanel-yZRRBOeb.js";import"./MultiColumnSortDialog-DrYKmP3m.js";import"./MenuTrigger-B0q9NtM8.js";import"./CompositeItem-DIBhAm7K.js";import"./ToolbarRootContext-B2D7jBHZ.js";import"./getDisabledMountTransitionStyles-D_z8sWSZ.js";import"./getPseudoElementBounds-CV6q-bAI.js";import"./chevron-down-7aN-gdcZ.js";import"./index-AGvrmZqA.js";import"./error-WFtpCqwH.js";import"./BaseCbacBanner-MiPOlZwj.js";import"./makeExternalStore-XFQAED1_.js";import"./Tooltip-6u6XECjM.js";import"./PopoverPopup-C8dD0wlV.js";import"./toNumber-CFUI-sBy.js";import"./useOsdkClient-BUObA5LC.js";import"./tick-zwZIIcdN.js";import"./DropdownField-DV-Des1S.js";import"./withOsdkMetrics-CS878clc.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
