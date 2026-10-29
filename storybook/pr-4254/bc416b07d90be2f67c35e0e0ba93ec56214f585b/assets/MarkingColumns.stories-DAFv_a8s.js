import{f as p,j as e}from"./iframe-Bd5ScLvv.js";import{O as i}from"./object-table-CTmpFEIb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cto50-3e.js";import"./Table-DEMSgtG8.js";import"./index-BInNCm2S.js";import"./Dialog-BQw-qeYh.js";import"./cross-DFIYwfW7.js";import"./svgIconContainer-CyD9Prgp.js";import"./useBaseUiId-BEsXvvg0.js";import"./InternalBackdrop-8MqvziLZ.js";import"./composite-Dw0b0MIh.js";import"./index-CcgPg9jD.js";import"./index-BTf-4xqO.js";import"./index-2Jb0O7pv.js";import"./useEventCallback-D1VXc7Cg.js";import"./SkeletonBar-DJbcp5BQ.js";import"./LoadingCell-BkYKbRTJ.js";import"./ColumnConfigDialog-DY29Hfrp.js";import"./DraggableList-BUMRMzJO.js";import"./search-DCnhWsbb.js";import"./Input-Dv_3n2Er.js";import"./useControlled-BVqmud31.js";import"./Button-DPVWeAkU.js";import"./small-cross-Dn9mOG55.js";import"./ActionButton-dOB8dnwG.js";import"./Checkbox-CH0uC28l.js";import"./useValueChanged-DA681W-u.js";import"./CollapsiblePanel-CU10Nd-t.js";import"./MultiColumnSortDialog-Bpx-v-03.js";import"./MenuTrigger-BUyayvZQ.js";import"./CompositeItem-xycX-JTq.js";import"./ToolbarRootContext-DGXau_lp.js";import"./getDisabledMountTransitionStyles-3dwnvMdU.js";import"./getPseudoElementBounds-BL_bMsjQ.js";import"./chevron-down-nJ2TmJoq.js";import"./index-ByGszF0R.js";import"./error-Dm9-R7dH.js";import"./BaseCbacBanner-CxlUlsKc.js";import"./makeExternalStore-8KpmsT2I.js";import"./Tooltip-BmX3jL6b.js";import"./PopoverPopup-BKdaJUCJ.js";import"./debounce-CtExuu3_.js";import"./useOsdkClient-Bh2_dokv.js";import"./tick-CxwVcA9i.js";import"./DropdownField-BbncKGJX.js";import"./isEqual-BRKHmyem.js";import"./withOsdkMetrics-CO8xV1gc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
