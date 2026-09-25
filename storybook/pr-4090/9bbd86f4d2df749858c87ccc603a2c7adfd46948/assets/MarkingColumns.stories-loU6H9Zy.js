import{f as p,j as e}from"./iframe-BcZul-5h.js";import{O as i}from"./object-table-Dzwk_2Gi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CmDzzbHA.js";import"./Table-B1bcSvHC.js";import"./index-DzJXuXA1.js";import"./Dialog-Dj7pNKUw.js";import"./cross-C_wTApPn.js";import"./svgIconContainer-RYnvKxQV.js";import"./useBaseUiId-BR4pV0Lr.js";import"./InternalBackdrop-C0gIi10e.js";import"./composite-C_4CRh4u.js";import"./index-CWco2ihj.js";import"./index-pZeQx-_G.js";import"./index-Dfw9WA6q.js";import"./useEventCallback-DFzPAd8H.js";import"./SkeletonBar-DggSgXIE.js";import"./LoadingCell-DCt4Pvwc.js";import"./ColumnConfigDialog-D_snSl5m.js";import"./DraggableList-B4ziAGpQ.js";import"./search-Bzu1qjP_.js";import"./Input--zoqJ2tF.js";import"./useControlled-eXBZEo_R.js";import"./Button-soVXPdsa.js";import"./small-cross-BBM4HGVx.js";import"./ActionButton-Kn6WAFbI.js";import"./Checkbox-CBlNrCa1.js";import"./useValueChanged-DndjiTPh.js";import"./CollapsiblePanel-CpZxtz3Z.js";import"./MultiColumnSortDialog-B01vzk6O.js";import"./MenuTrigger-DTrLq3FS.js";import"./CompositeItem-DOpNxc2s.js";import"./ToolbarRootContext-BozYkP2N.js";import"./getDisabledMountTransitionStyles-DGAUIi0f.js";import"./getPseudoElementBounds-BxdRzYrq.js";import"./chevron-down-BTve9A2e.js";import"./index-C_ypGm3c.js";import"./error-BtC0qV1A.js";import"./BaseCbacBanner-eu0_CWGy.js";import"./makeExternalStore-BaDKsdYc.js";import"./Tooltip-8yNzGMPy.js";import"./PopoverPopup-DLNnlymE.js";import"./debounce-DtvbDRTR.js";import"./useOsdkClient-tWgMlPel.js";import"./tick-D_V44cYu.js";import"./DropdownField-DSLZwGzV.js";import"./isEqual-CAB2zIeK.js";import"./withOsdkMetrics-C8vp2Jz9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
