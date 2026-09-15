import{f as p,j as e}from"./iframe-BTZXjcS6.js";import{O as i}from"./object-table-D_sLcuJX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C9NzPdgc.js";import"./Table-DPotH737.js";import"./index-CeqBwR3m.js";import"./Dialog-CKsDrnqD.js";import"./cross-B7KIcqou.js";import"./svgIconContainer-B_6Ye4VC.js";import"./useBaseUiId-BYa5JSvm.js";import"./InternalBackdrop-D9v-IY9L.js";import"./composite-Bir0R2T2.js";import"./index-Bc5CyDlw.js";import"./index-PyK1kYPr.js";import"./index-D4TIv0Oq.js";import"./useEventCallback-C8TjJx_C.js";import"./SkeletonBar-Cl9ArMG3.js";import"./LoadingCell-BQH4NmwW.js";import"./ColumnConfigDialog-DrgaikaZ.js";import"./DraggableList-DwILAAnX.js";import"./search-B_jja5k9.js";import"./Input-CufnAxBU.js";import"./useControlled-D3czSe4k.js";import"./Button-tBNbm5Ca.js";import"./small-cross-C8iYyEOq.js";import"./ActionButton-DtvrG6sU.js";import"./Checkbox-D1G0cO7j.js";import"./useValueChanged-dea3ckth.js";import"./CollapsiblePanel-CiJsgmp5.js";import"./MultiColumnSortDialog-C9vv9d7M.js";import"./MenuTrigger-QWlI38EG.js";import"./CompositeItem-BbZyoEpe.js";import"./ToolbarRootContext-CSsWfPwj.js";import"./getDisabledMountTransitionStyles-CE8RpoIN.js";import"./getPseudoElementBounds-CEAZG3b7.js";import"./chevron-down-BnB-eP8_.js";import"./index-BwVZwZx_.js";import"./error-CNEXn0eH.js";import"./BaseCbacBanner-6VvjFDu5.js";import"./makeExternalStore-CzWUEmmK.js";import"./Tooltip-4a177B8O.js";import"./PopoverPopup-C-rIrhf-.js";import"./debounce-BkHDw0VY.js";import"./useOsdkClient-Cw0tNi-2.js";import"./tick-CZ2olpkR.js";import"./DropdownField-BGDFHIhQ.js";import"./isEqual-BOZ0NKP1.js";import"./withOsdkMetrics-Ca4dglEg.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
