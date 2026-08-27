import{f as p,j as e}from"./iframe-Cg0_L8_P.js";import{O as i}from"./object-table-B-9OZqwa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-33U0KAdV.js";import"./Table-DJplo8Y0.js";import"./index-DVyjubzR.js";import"./Dialog-C1SmuhvF.js";import"./cross-DAELvuCc.js";import"./svgIconContainer-Dm8ems_M.js";import"./useBaseUiId-DdUu1ljw.js";import"./InternalBackdrop-BypdOSoa.js";import"./composite-BAsr8Kap.js";import"./index-D5kIdvoW.js";import"./index-F9588Jdm.js";import"./index-CtQbOQUW.js";import"./useEventCallback-Dl8nzHTR.js";import"./SkeletonBar-CBLydHyO.js";import"./LoadingCell-BnGpV3tZ.js";import"./ColumnConfigDialog-BHP2AHg_.js";import"./DraggableList-BjEn8ROr.js";import"./search-CTHwA6lI.js";import"./Input-9fPQvd0v.js";import"./useControlled-mwHcpce3.js";import"./Button-8z5S-ilA.js";import"./small-cross-omF_0Y8F.js";import"./ActionButton-CY3H8CFl.js";import"./Checkbox-DHymW5dK.js";import"./useValueChanged-Di6pRa7v.js";import"./CollapsiblePanel-Cfw-oLP0.js";import"./MultiColumnSortDialog-WcO-MkJm.js";import"./MenuTrigger-CqGEFSvm.js";import"./CompositeItem-BnttgNWt.js";import"./ToolbarRootContext-B_XnRMpQ.js";import"./getDisabledMountTransitionStyles-BGMI7KAB.js";import"./getPseudoElementBounds-BEkVLoht.js";import"./chevron-down-CVB5EJv3.js";import"./index-CgP5jim8.js";import"./error-DwBuGVBZ.js";import"./BaseCbacBanner-ChMnFPZB.js";import"./makeExternalStore-El_-ZWlA.js";import"./Tooltip-kBlpZsgK.js";import"./PopoverPopup-C_LJ3T_c.js";import"./debounce-mldfpFwY.js";import"./useOsdkClient-B4CwtZLv.js";import"./tick-DRrKLY-r.js";import"./DropdownField-BqNokkFu.js";import"./isEqual-C-oocag7.js";import"./withOsdkMetrics-CULSkWk0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
