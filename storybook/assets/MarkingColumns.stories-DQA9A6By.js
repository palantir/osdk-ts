import{f as p,j as e}from"./iframe-sCC61k92.js";import{O as i}from"./object-table-Mdjlx4Ke.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DcSmCGEJ.js";import"./index-COwL7OJ8.js";import"./Dialog-MQVy5lzB.js";import"./cross-DRK3VtDX.js";import"./svgIconContainer-hqfoTYTd.js";import"./useBaseUiId-BliaD1O6.js";import"./InternalBackdrop-B3dfpWNK.js";import"./composite-CISHKC9x.js";import"./index-BO4p12nE.js";import"./index-BPgVurxA.js";import"./index-BPupFXYK.js";import"./useEventCallback-Ce-cRsvG.js";import"./SkeletonBar-CwQdqdMR.js";import"./LoadingCell-tO7EVVGR.js";import"./ColumnConfigDialog-D0_f0eWX.js";import"./DraggableList-C7RmjcDp.js";import"./search-BCt11QUz.js";import"./Input-oPnlo5ZK.js";import"./useControlled-QNZ0QZkj.js";import"./Button-CuqFP7rB.js";import"./small-cross-DuGAeEln.js";import"./ActionButton-KMvLy2U-.js";import"./Checkbox-CZTc9Hct.js";import"./useValueChanged-ClT-kz_1.js";import"./CollapsiblePanel-nEea4UtK.js";import"./MultiColumnSortDialog-WfN_XSl-.js";import"./MenuTrigger-DwEmv81m.js";import"./CompositeItem-DoarEqny.js";import"./ToolbarRootContext-C2ojXHeq.js";import"./getDisabledMountTransitionStyles-a-o7jZ9k.js";import"./getPseudoElementBounds-DMHhNAb7.js";import"./chevron-down-5SB1wRqG.js";import"./index-B-SSDTy4.js";import"./error-DG5J3I3H.js";import"./BaseCbacBanner-CFeBxzk8.js";import"./makeExternalStore-BHhNjBOZ.js";import"./Tooltip-tKWANxvR.js";import"./PopoverPopup-DWR0jCHo.js";import"./debounce-DfOnU9UJ.js";import"./useOsdkClient-C8WGuLkk.js";import"./tick-DkGxN_Ch.js";import"./DropdownField-BAeW6QRw.js";import"./isEqual-DfRx8L9e.js";import"./withOsdkMetrics-B8lVQvrV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
