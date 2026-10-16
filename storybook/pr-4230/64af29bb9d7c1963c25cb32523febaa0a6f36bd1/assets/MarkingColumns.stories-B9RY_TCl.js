import{f as p,j as e}from"./iframe-DMhUx0Fg.js";import{O as i}from"./object-table-DE8fBGhj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cihlk8Ge.js";import"./Table-Da6cs4mT.js";import"./index-Cml4Y89r.js";import"./Dialog-BOq_zoJk.js";import"./cross-B04SzZ9a.js";import"./svgIconContainer-BbR8LDbO.js";import"./useBaseUiId-Cn1m1c-i.js";import"./InternalBackdrop-TfWeUkH5.js";import"./composite-ElTKsJn6.js";import"./index-BdVR8K9f.js";import"./index-DHMpAz6_.js";import"./index-DH75cEIM.js";import"./useEventCallback-D5w6D-ry.js";import"./SkeletonBar--G3RXL9q.js";import"./LoadingCell-BuMUQbHb.js";import"./ColumnConfigDialog-POJBQ206.js";import"./DraggableList-SAyA75P1.js";import"./search-BhCWHTId.js";import"./Input-CMBfU9Th.js";import"./useControlled-BnYANE82.js";import"./Button-BVqDK7_w.js";import"./small-cross-BYryOWLr.js";import"./ActionButton-BPaPgLh0.js";import"./Checkbox-DfpRBuKr.js";import"./useValueChanged-BVb2ZiR8.js";import"./CollapsiblePanel-soHfpF_t.js";import"./MultiColumnSortDialog-DW8NqDbb.js";import"./MenuTrigger-BtVXNuEq.js";import"./CompositeItem-CruspLcZ.js";import"./ToolbarRootContext-D6p48e5t.js";import"./getDisabledMountTransitionStyles-CtQRwei1.js";import"./getPseudoElementBounds-BUMieu6k.js";import"./chevron-down-DfsmE1o_.js";import"./index-Cg1qZyT8.js";import"./error-BGNhUAbf.js";import"./BaseCbacBanner-CwsDyiqo.js";import"./makeExternalStore-CWOCJrTj.js";import"./Tooltip-Bker_XsQ.js";import"./PopoverPopup-ve8SdMle.js";import"./debounce-BwonvSik.js";import"./useOsdkClient-DJ0k-ije.js";import"./tick-J71CIBzU.js";import"./DropdownField-ClZOcdQf.js";import"./isEqual-BqNMkLkS.js";import"./withOsdkMetrics-DGk-RlXg.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
