import{f as p,j as e}from"./iframe-MDo3IV8i.js";import{O as i}from"./object-table-BHDCh1lU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DePZz3Cx.js";import"./Table-CcLxBPN5.js";import"./index-Bd9muxHi.js";import"./Dialog-D091J6Iw.js";import"./cross-DnJsfvPF.js";import"./svgIconContainer-Di1UT1Hh.js";import"./useBaseUiId-DZYLQUMX.js";import"./InternalBackdrop-B_Z49Hjp.js";import"./composite-BLxakyPe.js";import"./index-C0Z9YQ4r.js";import"./index-DtzdNaWl.js";import"./index-DC6-gGNF.js";import"./useEventCallback-BiWUFDKH.js";import"./SkeletonBar-DAJEovb9.js";import"./LoadingCell-Bp3cenes.js";import"./ColumnConfigDialog-BufpKbPA.js";import"./DraggableList-7tcDxeGj.js";import"./search-DZiAT2nK.js";import"./Input-DM_kQkOg.js";import"./useControlled-OtMCa810.js";import"./Button-Bqg_-6Me.js";import"./small-cross-C2UBLUxY.js";import"./ActionButton-BfC02Ahv.js";import"./Checkbox-DSzw2ZOb.js";import"./useValueChanged-C_9hR8MX.js";import"./CollapsiblePanel-DuDuGP7y.js";import"./MultiColumnSortDialog-RUGd38DP.js";import"./MenuTrigger-BF7OivmV.js";import"./CompositeItem-DLH43jaW.js";import"./ToolbarRootContext-gbgv7X5-.js";import"./getDisabledMountTransitionStyles-B5B6Fr9m.js";import"./getPseudoElementBounds-CLPZWJOu.js";import"./chevron-down-WrjnBnPA.js";import"./index-B_iT01JM.js";import"./error-x3VOvdeC.js";import"./BaseCbacBanner-BycYWD4l.js";import"./makeExternalStore-0rzwJ2ZN.js";import"./Tooltip-BL4BcNe2.js";import"./PopoverPopup-vZaQfjxA.js";import"./debounce-C7UDLVsq.js";import"./useOsdkClient-BLznHT_k.js";import"./tick-BIWm1VGl.js";import"./DropdownField-CmBVvZuj.js";import"./isEqual-4V1lhL4v.js";import"./withOsdkMetrics-Bd9ZRtnK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
