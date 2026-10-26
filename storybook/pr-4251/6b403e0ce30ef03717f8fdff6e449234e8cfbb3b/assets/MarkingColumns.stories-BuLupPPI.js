import{f as p,j as e}from"./iframe-D3lsV3bM.js";import{O as i}from"./object-table-BOmVYPfn.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B0DSvxC2.js";import"./Table-DFux7SeR.js";import"./index-D11sJHPZ.js";import"./Dialog-D7B0p3tF.js";import"./cross-_tMTONVW.js";import"./svgIconContainer-DfM6sw_L.js";import"./useBaseUiId-6o6e03Dj.js";import"./InternalBackdrop-DWpv92EC.js";import"./composite-9R0QeF6F.js";import"./index-BLDv51Tl.js";import"./index-Dxb68UZ2.js";import"./index-DB3xED8F.js";import"./useEventCallback-DosG7uBT.js";import"./SkeletonBar-DfbOeTxN.js";import"./LoadingCell-BVrMoXeR.js";import"./ColumnConfigDialog-B5QpH_8k.js";import"./DraggableList-MiRMJAiS.js";import"./search-O4ijEoIs.js";import"./Input-CiqPSABQ.js";import"./useControlled-bq-ZFaDd.js";import"./Button-DakXe1NE.js";import"./small-cross-DsJLV_gX.js";import"./ActionButton-B7Qk2YJZ.js";import"./Checkbox-DjcmhqAX.js";import"./useValueChanged-DQOtE3bQ.js";import"./CollapsiblePanel-D933QPH8.js";import"./MultiColumnSortDialog-B3y84jTf.js";import"./MenuTrigger-C46HpHgT.js";import"./CompositeItem-DJyMopxi.js";import"./ToolbarRootContext-Bgqyz9vO.js";import"./getDisabledMountTransitionStyles-dC28mhVQ.js";import"./getPseudoElementBounds-B7WJxdIq.js";import"./chevron-down-1CFj8X53.js";import"./index-Cr0VJDXn.js";import"./error-XRO96CTm.js";import"./BaseCbacBanner-BMmEX_7W.js";import"./makeExternalStore-l2x05IWc.js";import"./Tooltip-CdBxAJkp.js";import"./PopoverPopup-HW4fQdCB.js";import"./debounce-DKdoEzLY.js";import"./useOsdkClient-CjCuVbH9.js";import"./tick-DjGBapZW.js";import"./DropdownField-BKtsIZHj.js";import"./isEqual-CRfm0_Mh.js";import"./withOsdkMetrics-CyI1jVrw.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
