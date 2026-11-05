import{f as p,j as e}from"./iframe-5l1aTQWB.js";import{O as i}from"./object-table-DCJbpV5Z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CV54w-MR.js";import"./Table-C0wRTyVx.js";import"./index-CabVKWfS.js";import"./Dialog-CtVtzfGi.js";import"./cross-DVFwGI58.js";import"./svgIconContainer-DUWwpavS.js";import"./useBaseUiId-D2qSGviR.js";import"./InternalBackdrop-DeDePDLT.js";import"./composite-BN-nzUC2.js";import"./index-CWUPxEVH.js";import"./index-U5dtIGUV.js";import"./index-BEY7C58E.js";import"./useEventCallback-j88OK98j.js";import"./SkeletonBar-DiikPYcf.js";import"./LoadingCell-BFYv-WM9.js";import"./ColumnConfigDialog-Ck03PSW2.js";import"./DraggableList-Dkk5QDNO.js";import"./search-ocH4sH9r.js";import"./Input-DVZngs_7.js";import"./useControlled-Dv35mSy4.js";import"./Button-BbI-ZrrT.js";import"./small-cross-BXD20tqW.js";import"./ActionButton-CVgbfgT7.js";import"./Checkbox-DE6eRYi2.js";import"./useValueChanged-BrsMGCOc.js";import"./CollapsiblePanel-DnkZmCML.js";import"./MultiColumnSortDialog-DYr3NZ_x.js";import"./MenuTrigger-C6uan-J9.js";import"./CompositeItem-CiQq9b_9.js";import"./ToolbarRootContext-DpNaqsW8.js";import"./getDisabledMountTransitionStyles-Ci8kZ5Aj.js";import"./getPseudoElementBounds-By38X9zr.js";import"./chevron-down-C-oTZ5aG.js";import"./index-BKm5H3zL.js";import"./error-Cor_ktfQ.js";import"./BaseCbacBanner-pfccwWJ8.js";import"./makeExternalStore-Bp08F5QN.js";import"./Tooltip-CMn9P59Q.js";import"./PopoverPopup-qOi5AuS_.js";import"./debounce-BirimW28.js";import"./useOsdkClient-DcsBDEeF.js";import"./tick-PuqFX_ts.js";import"./DropdownField-B8Mkz462.js";import"./isEqual-BijnOwND.js";import"./withOsdkMetrics-B5w28mdE.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
