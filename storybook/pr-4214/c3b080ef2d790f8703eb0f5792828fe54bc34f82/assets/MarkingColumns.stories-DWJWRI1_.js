import{f as p,j as e}from"./iframe-5HuVSaDQ.js";import{O as i}from"./object-table-aRFFd-Hf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CfrIZ5Cf.js";import"./Table-CLEmuWD1.js";import"./index-DjoqjxLj.js";import"./Dialog-BLwSe6up.js";import"./cross-Fbd8rPWM.js";import"./svgIconContainer-CilU-cRt.js";import"./useBaseUiId-DUhNtAkB.js";import"./InternalBackdrop-qL7awpYB.js";import"./composite-BgONfLPA.js";import"./index-HPsAfhDB.js";import"./index--ZjbYOmd.js";import"./index-B1NpA2Ke.js";import"./useEventCallback-CcusE86W.js";import"./SkeletonBar-DKI9Ld3o.js";import"./LoadingCell-YFNbRY7v.js";import"./ColumnConfigDialog-CE9zLgfO.js";import"./DraggableList-ByUPeDhx.js";import"./search-Cj2_GDbi.js";import"./Input-LKVNjJW6.js";import"./useControlled-DSyajAtW.js";import"./Button-DOSN-M_K.js";import"./small-cross-Dmab4i0O.js";import"./ActionButton-CeiHGQTe.js";import"./Checkbox-BQqfj-a3.js";import"./useValueChanged-DFA8OMKn.js";import"./CollapsiblePanel-DRekZkpH.js";import"./MultiColumnSortDialog-Bxx_fdi8.js";import"./MenuTrigger-tdiXxLH2.js";import"./CompositeItem-zoxZc06w.js";import"./ToolbarRootContext-BJk-KcZN.js";import"./getDisabledMountTransitionStyles-Dh8ST-vn.js";import"./getPseudoElementBounds-DEmyDmHB.js";import"./chevron-down-DpQjt-J8.js";import"./index-vB4c4Qg2.js";import"./error-CMmWSsIq.js";import"./BaseCbacBanner-wU2zVb6a.js";import"./makeExternalStore-CgO7rqjT.js";import"./Tooltip-ClzZDh1Z.js";import"./PopoverPopup-DIoQ4is4.js";import"./debounce-Cfvf-nRd.js";import"./useOsdkClient-DRBxpjGK.js";import"./tick-CLH4usX-.js";import"./DropdownField-Ck4UJuFu.js";import"./isEqual-DxWPYGAf.js";import"./withOsdkMetrics-CADXJLOh.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
