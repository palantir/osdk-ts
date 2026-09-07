import{f as p,j as e}from"./iframe-CCkfybyg.js";import{O as i}from"./object-table-DMTp0K-l.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DsTZDItY.js";import"./Table-Z-R_C2hG.js";import"./index-CRuKazN2.js";import"./Dialog-MmA162M3.js";import"./cross-DztAW50z.js";import"./svgIconContainer-D9rYUMKl.js";import"./useBaseUiId-D3c2AYue.js";import"./InternalBackdrop-CH7ryVyq.js";import"./composite-CvsgNL3g.js";import"./index-BjdCoA9s.js";import"./index-DK7vLZsC.js";import"./index-Do3A9MVL.js";import"./useEventCallback-BgAFC_QA.js";import"./SkeletonBar-BMsuO8JO.js";import"./LoadingCell-DtiPHZpw.js";import"./ColumnConfigDialog-BsOa_CPW.js";import"./DraggableList-CNVAwS51.js";import"./search-DY10Czwo.js";import"./Input-fn0miJxb.js";import"./useControlled-B0KHjJp9.js";import"./Button-Dk9snPZU.js";import"./small-cross-u-20rzxu.js";import"./ActionButton-D9UWUs4Y.js";import"./Checkbox-D7wfngpt.js";import"./useValueChanged-CkOiuysc.js";import"./CollapsiblePanel-CznC1jF2.js";import"./MultiColumnSortDialog-DT6kojV0.js";import"./MenuTrigger-DKZy1Z77.js";import"./CompositeItem-C3VXcNTq.js";import"./ToolbarRootContext-BENsoGE2.js";import"./getDisabledMountTransitionStyles-YVJprRnT.js";import"./getPseudoElementBounds-DalpdOin.js";import"./chevron-down-BUd5pETS.js";import"./index-BSEK-fsb.js";import"./error-aAb7DCQN.js";import"./BaseCbacBanner-CyRxcSDR.js";import"./makeExternalStore-CGDWyW6x.js";import"./Tooltip-CNLJ0cIh.js";import"./PopoverPopup-TyAfAF2x.js";import"./debounce-tod5D_FM.js";import"./useOsdkClient-CkBZw2Yo.js";import"./tick-CwY60cin.js";import"./DropdownField-DvWOBtdg.js";import"./isEqual-Byamabbu.js";import"./withOsdkMetrics-CC5JIT8j.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
