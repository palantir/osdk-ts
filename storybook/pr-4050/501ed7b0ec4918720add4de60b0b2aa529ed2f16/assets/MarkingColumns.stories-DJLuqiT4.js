import{f as p,j as e}from"./iframe-BxIl83OC.js";import{O as i}from"./object-table-BbVWt563.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Yx9ZNNpK.js";import"./Table-CFinUWIP.js";import"./index-yC7dwiLI.js";import"./Dialog-CXcS0V2L.js";import"./cross-CxqX2dHR.js";import"./svgIconContainer-Bt0ZQcKE.js";import"./useBaseUiId-CCOPhUcB.js";import"./InternalBackdrop-9uzl1t8Y.js";import"./composite-DAGYlNi4.js";import"./index-DcRZYv45.js";import"./index-DjiV5TS-.js";import"./index-CC4v1PS_.js";import"./useEventCallback-GFfQEmO_.js";import"./SkeletonBar-DIDfuITi.js";import"./LoadingCell-DbPEkZCE.js";import"./ColumnConfigDialog-CfnlmAZt.js";import"./DraggableList-Bc0SI4Ix.js";import"./search-C6ABKevT.js";import"./Input-But5XUYJ.js";import"./useControlled-CtfWN5zI.js";import"./Button-D5WuY3ON.js";import"./small-cross-DmNl_RSt.js";import"./ActionButton-B8qquhgr.js";import"./Checkbox-CQcqkHRd.js";import"./useValueChanged-hHmzS9UN.js";import"./CollapsiblePanel-BjqCs_Mr.js";import"./MultiColumnSortDialog-CnooqPBj.js";import"./MenuTrigger-C0OPx60H.js";import"./CompositeItem-DIHWAmd-.js";import"./ToolbarRootContext-Cmwitb-c.js";import"./getDisabledMountTransitionStyles-DeadGkYN.js";import"./getPseudoElementBounds-uzaRHZTC.js";import"./chevron-down-DZwG3tYI.js";import"./index-CcNahi7P.js";import"./error-DJcTH0_A.js";import"./BaseCbacBanner-BwH-l-5b.js";import"./makeExternalStore-CLRP1iif.js";import"./Tooltip-D33yWPSy.js";import"./PopoverPopup-CvTyV5ww.js";import"./debounce-OJ34BW8L.js";import"./useOsdkClient-BRW1S7a0.js";import"./tick-gdF-iftD.js";import"./DropdownField-DoBYEUHa.js";import"./isEqual-DGwBlc4_.js";import"./withOsdkMetrics-BzRb66se.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
