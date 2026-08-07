import{f as p,j as e}from"./iframe-C4-lP8MT.js";import{O as i}from"./object-table-q7iifnDS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CLU8VynA.js";import"./Table-Bh3nxQAR.js";import"./index-BPrqSg8L.js";import"./Dialog-HuTkQ0Yv.js";import"./cross-C5IhJG8w.js";import"./svgIconContainer-C35V9iJM.js";import"./useBaseUiId-BA37nhWP.js";import"./InternalBackdrop-Czrv2a3X.js";import"./composite-C3w6zzv8.js";import"./index-Durq-W9B.js";import"./index-0ek5BBKP.js";import"./index-DnBDnb42.js";import"./useEventCallback-B-ZzyaSM.js";import"./SkeletonBar-BzAjKV_r.js";import"./LoadingCell-CAckMhZq.js";import"./ColumnConfigDialog-DlcSbtq3.js";import"./DraggableList-CKn1w3jR.js";import"./search-DXJOhDBp.js";import"./Input-Cq_NK47B.js";import"./useControlled-BXZQNRVM.js";import"./isEqual-CyH4xiTJ.js";import"./isObject-OdYax4RL.js";import"./Button-HQnEKdTM.js";import"./ActionButton-DPjyIH8b.js";import"./Checkbox-CIlmLHbe.js";import"./useValueChanged-BqdWWPTB.js";import"./CollapsiblePanel-Bn6kNsx8.js";import"./MultiColumnSortDialog-DYkl2iU7.js";import"./MenuTrigger-CY__s7GI.js";import"./CompositeItem-jotECSdG.js";import"./ToolbarRootContext-D7LXR6yD.js";import"./getDisabledMountTransitionStyles-BVfGpSsZ.js";import"./getPseudoElementBounds-BOMJwAxf.js";import"./chevron-down-DN58DXsa.js";import"./index-C2Jw7BZY.js";import"./error-sldn-yGv.js";import"./BaseCbacBanner-ifqN0fs5.js";import"./makeExternalStore-MEf7s0X9.js";import"./Tooltip-DUNzpEu4.js";import"./PopoverPopup-CeDc1J2y.js";import"./toNumber-BPSz6AWD.js";import"./useOsdkClient-BHP9oIf7.js";import"./tick-DuzzvOOG.js";import"./DropdownField-BcvP-9_S.js";import"./withOsdkMetrics-DpO8t0Tu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
