import{f as p,j as e}from"./iframe-DcblcpsD.js";import{O as i}from"./object-table-C0n6V8qq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D_wMhyaD.js";import"./Table-B_qOtHsd.js";import"./index-7ach3CvX.js";import"./Dialog-CcR85Lmc.js";import"./cross-BsrNuqdH.js";import"./svgIconContainer-BNnsBEK2.js";import"./useBaseUiId-kDJ62DAx.js";import"./InternalBackdrop-vzMbdI9w.js";import"./composite-C6NGEWFA.js";import"./index-5vhpnJCd.js";import"./index-Dyr0XLHo.js";import"./index-BFsskuZE.js";import"./useEventCallback-BFyPF3KM.js";import"./SkeletonBar-CFgpPqeF.js";import"./LoadingCell-z7if_OnS.js";import"./ColumnConfigDialog-CRirQD-Y.js";import"./DraggableList--ymmfdOD.js";import"./search-DNqBvZq5.js";import"./Input-DFCeqSqF.js";import"./useControlled-i2WyCNOr.js";import"./Button-BDRb-Pkx.js";import"./small-cross-DPxvOvn1.js";import"./ActionButton-DEfTs481.js";import"./Checkbox-CQZoyJBa.js";import"./useValueChanged-DVi_uI5x.js";import"./CollapsiblePanel-Dy-ip83M.js";import"./MultiColumnSortDialog-DVx3zfNu.js";import"./MenuTrigger-CFbx5r7B.js";import"./CompositeItem-BDLcpoAw.js";import"./ToolbarRootContext-DePr5kCC.js";import"./getDisabledMountTransitionStyles-CMYjml29.js";import"./getPseudoElementBounds-DmerV0_o.js";import"./chevron-down-CzYSE9_L.js";import"./index-DjzvDUKT.js";import"./error-CKNR4CvZ.js";import"./BaseCbacBanner-DbcQhu-t.js";import"./makeExternalStore-DRuwFA-0.js";import"./Tooltip-NnVrtTvo.js";import"./PopoverPopup-C62qYoS6.js";import"./debounce-AIHTvjc-.js";import"./useOsdkClient-u3WB6gov.js";import"./tick-CvE3NYGn.js";import"./DropdownField-v-l2qfMk.js";import"./isEqual-BzUgPpSO.js";import"./withOsdkMetrics-CBgzbsXI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
