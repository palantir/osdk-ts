import{f as p,j as e}from"./iframe-DjJ9fG9k.js";import{O as i}from"./object-table-Cfor9qHW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CzF3ego9.js";import"./Table-C2Q21WHf.js";import"./index-BUkKlB3h.js";import"./Dialog-BwG9Uxhw.js";import"./cross-BLMtHmrz.js";import"./svgIconContainer-DVza0T8P.js";import"./useBaseUiId-Ci5r9TJ6.js";import"./InternalBackdrop-B6FMbuzr.js";import"./composite-3IcR8GbN.js";import"./index-DP_nFxdX.js";import"./index-Dnw16Cjy.js";import"./index-DH_I6Sh1.js";import"./useEventCallback-DhQ6FHXC.js";import"./SkeletonBar-Dn-neHME.js";import"./LoadingCell-EcwUFimr.js";import"./ColumnConfigDialog-ByUebeXI.js";import"./DraggableList-DRdKmKVv.js";import"./search-DYgrI8Q7.js";import"./Input-DC7dCpbq.js";import"./useControlled-Bn3rrr6o.js";import"./Button-TYrwdaKn.js";import"./small-cross-DmY0DbuA.js";import"./ActionButton-BHRGOFx-.js";import"./Checkbox-B6_BGHzz.js";import"./useValueChanged-DtUwstRA.js";import"./CollapsiblePanel-DhIaKbXK.js";import"./MultiColumnSortDialog-BuIFBbzX.js";import"./MenuTrigger-D5A7Fsrp.js";import"./CompositeItem-D6E8WDBw.js";import"./ToolbarRootContext-ShM1dPIH.js";import"./getDisabledMountTransitionStyles-gtEh6_8E.js";import"./getPseudoElementBounds-DPprMDPL.js";import"./chevron-down-BX7mmNXU.js";import"./index-CKkTwCGI.js";import"./error-CPN3xdYh.js";import"./BaseCbacBanner-C4dugiGj.js";import"./makeExternalStore-2E9_090X.js";import"./Tooltip-DgIUvPfl.js";import"./PopoverPopup-DxS_7QJb.js";import"./debounce-DJBLSrpe.js";import"./useOsdkClient-UDTFk1UZ.js";import"./tick-BmDskloz.js";import"./DropdownField-BaCTFfCL.js";import"./isEqual-AixP6eIf.js";import"./withOsdkMetrics-DtrDT4Gg.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
