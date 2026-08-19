import{f as p,j as e}from"./iframe-Deq8U_R6.js";import{O as i}from"./object-table-Cpug1ggs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-gHh2KtG1.js";import"./Table-DWbM6UyP.js";import"./index-DrQOBAHk.js";import"./Dialog-DeFeQfo-.js";import"./cross-CR8D9GYw.js";import"./svgIconContainer-Mlvk9_It.js";import"./useBaseUiId-BUXl0t0L.js";import"./InternalBackdrop-DBOPTR44.js";import"./composite-BNSug7gR.js";import"./index-BqwGDeu0.js";import"./index-DihHNdBD.js";import"./index-z73v20nY.js";import"./useEventCallback-Cg9CTnOy.js";import"./SkeletonBar-DEtf_a9V.js";import"./LoadingCell-poQ-JK4_.js";import"./ColumnConfigDialog-TFTfgcZL.js";import"./DraggableList-DF8fyUSQ.js";import"./search-YieMSLSV.js";import"./Input-BTtCqGCw.js";import"./useControlled-B13sGWuv.js";import"./Button-BwL9fd7Z.js";import"./small-cross-C_PTrjiz.js";import"./ActionButton-C0yk3VrH.js";import"./Checkbox-FT15qBLN.js";import"./useValueChanged-CP8dyd6H.js";import"./CollapsiblePanel-BPfxK78F.js";import"./MultiColumnSortDialog-DblIw7El.js";import"./MenuTrigger-C5F8Udzs.js";import"./CompositeItem-9mNZQz-k.js";import"./ToolbarRootContext-ujlL6MZj.js";import"./getDisabledMountTransitionStyles-BwqPeStH.js";import"./getPseudoElementBounds-ClknCJRS.js";import"./chevron-down-BX8QITO3.js";import"./index-B5E1rin5.js";import"./error-BGW1gWTs.js";import"./BaseCbacBanner-dwjT3eiM.js";import"./makeExternalStore-Da72kyzN.js";import"./Tooltip-CJe0q8p4.js";import"./PopoverPopup-7HBCutnS.js";import"./debounce-gp4V-tlI.js";import"./useOsdkClient-DilVQuXF.js";import"./tick-DGNSJeUo.js";import"./DropdownField-H5OdYZ1y.js";import"./isEqual-CbCFbLcE.js";import"./withOsdkMetrics-CHdYjQDf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
