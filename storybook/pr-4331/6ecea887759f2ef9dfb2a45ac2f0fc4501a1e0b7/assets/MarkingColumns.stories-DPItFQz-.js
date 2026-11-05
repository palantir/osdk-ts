import{f as p,j as e}from"./iframe-B0O6MtlS.js";import{O as i}from"./object-table-DTfiu3fj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D6pURdot.js";import"./Table-DM7Ks83Y.js";import"./index-CWmTKLGK.js";import"./Dialog-CNHkhkGm.js";import"./cross-CWEImtxT.js";import"./svgIconContainer-DXqgtHND.js";import"./useBaseUiId-BznU3LGS.js";import"./InternalBackdrop-BC098Jsb.js";import"./composite-BMg2yNSq.js";import"./index-iJddnt6C.js";import"./index-D_qtusqG.js";import"./index-DXznXhjK.js";import"./useEventCallback-BYZGQENt.js";import"./SkeletonBar-g2uwrnoF.js";import"./LoadingCell-W1Y0oSVI.js";import"./ColumnConfigDialog-AKtgY3IN.js";import"./DraggableList-CogmIw5o.js";import"./search-Ck63SNgv.js";import"./Input-C5r_FU3t.js";import"./useControlled-Bx-6J2ID.js";import"./Button-BoJolYQb.js";import"./small-cross-CvWDOY6F.js";import"./ActionButton-CX9VY3Vm.js";import"./Checkbox-CqyUc6So.js";import"./useValueChanged-C4aiVzbu.js";import"./CollapsiblePanel-CaYS0I-E.js";import"./MultiColumnSortDialog-DMytbJfG.js";import"./MenuTrigger-DVngFBgA.js";import"./CompositeItem-BbV5-QNT.js";import"./ToolbarRootContext-DCOU3uiJ.js";import"./getDisabledMountTransitionStyles-reeodFI6.js";import"./getPseudoElementBounds-9i5ws3FW.js";import"./chevron-down-7CANPOc8.js";import"./index-CIng004C.js";import"./error-CSV7R-eM.js";import"./BaseCbacBanner-C_-uFgBv.js";import"./makeExternalStore-CyQVHXN1.js";import"./Tooltip-BbpaHu5y.js";import"./isObject-4DXF1F0N.js";import"./debounce-6Otf2ylt.js";import"./useOsdkClient-DiYg4DLq.js";import"./tick-BcfAOxfQ.js";import"./DropdownField-CQin5nsR.js";import"./isEqual-0795DvIL.js";import"./_baseIsEqual-DpqgVj1P.js";import"./withOsdkMetrics-CPnPG3g5.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
