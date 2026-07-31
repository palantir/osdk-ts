import{f as p,j as e}from"./iframe-BPejH73A.js";import{O as i}from"./object-table-BM1W0EFU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DroWujke.js";import"./Table-BQaqgvCi.js";import"./index-B90tI0ID.js";import"./Dialog-DRUUi3Wp.js";import"./cross-DBEmAhHS.js";import"./svgIconContainer-CEusbL27.js";import"./useBaseUiId-CFfBCCWK.js";import"./InternalBackdrop-DSQpswgn.js";import"./composite-_PR9ooYN.js";import"./index-2yc_vRjp.js";import"./index-CbqreBW3.js";import"./index-DBYivAkQ.js";import"./useEventCallback-1Utq1QRF.js";import"./SkeletonBar-D6Oa3KA0.js";import"./LoadingCell-CBo5MV-z.js";import"./ColumnConfigDialog-CpLlA6jk.js";import"./DraggableList-ClUkgDHl.js";import"./search-Dr4m-uvV.js";import"./Input-BzT6UcMr.js";import"./useControlled-CsZk8XdE.js";import"./isEqual-bb9A_F_C.js";import"./isObject-C7-47GMK.js";import"./Button-Ckubio33.js";import"./ActionButton-D1_EuqHU.js";import"./Checkbox--6IOVxGe.js";import"./useValueChanged-B-XYYeM4.js";import"./CollapsiblePanel-BgkKbEQJ.js";import"./MultiColumnSortDialog-BfNxIUal.js";import"./MenuTrigger-gLOb7BVs.js";import"./CompositeItem-CePwhpAH.js";import"./ToolbarRootContext-BfoWDH0x.js";import"./getDisabledMountTransitionStyles-CbVOYQ3J.js";import"./getPseudoElementBounds-BT3Ejfqn.js";import"./chevron-down-B-cXR2Ke.js";import"./index-CxUM6NOw.js";import"./error-Cd-jBlIi.js";import"./BaseCbacBanner-hFdTFYmC.js";import"./makeExternalStore-BSENvNfl.js";import"./Tooltip-DPw8xUBx.js";import"./PopoverPopup-DPrLdIK8.js";import"./toNumber-YHv5OcAe.js";import"./useOsdkClient-CCc85gpw.js";import"./tick-BeQLtX8e.js";import"./DropdownField-CPQHI8OE.js";import"./withOsdkMetrics-Wb8pNEXr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
