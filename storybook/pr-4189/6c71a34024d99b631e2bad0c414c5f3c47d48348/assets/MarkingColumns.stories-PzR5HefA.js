import{f as p,j as e}from"./iframe-COeKHpt9.js";import{O as i}from"./object-table-B7sLdCml.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BpPSpj7h.js";import"./Table-CKDpWHE2.js";import"./index--VOZVAr7.js";import"./Dialog-ugSz7x-T.js";import"./cross-D5gXcdmB.js";import"./svgIconContainer-DtZ0wDAF.js";import"./useBaseUiId-AZYk0Vbu.js";import"./InternalBackdrop-QLXBjkD3.js";import"./composite-DvaIADEs.js";import"./index-vOPTDT5X.js";import"./index-Crl2o2c4.js";import"./index-Ds0VFbur.js";import"./useEventCallback-BWCgnPIj.js";import"./SkeletonBar-V0L810li.js";import"./LoadingCell-AkIQZmI8.js";import"./ColumnConfigDialog-OTyAWIPh.js";import"./DraggableList-p7orBze4.js";import"./search-CcRznbWc.js";import"./Input-BgvgMSkQ.js";import"./useControlled-Bj6n9A7a.js";import"./Button-BcUZxYUb.js";import"./small-cross-6sOeNBT7.js";import"./ActionButton-BZHW0fe2.js";import"./Checkbox-oh6Y4Pmu.js";import"./useValueChanged-D7ycyibz.js";import"./CollapsiblePanel-y0qJ1Rd6.js";import"./MultiColumnSortDialog-BpicA9j5.js";import"./MenuTrigger-xJcTAVaC.js";import"./CompositeItem-Dt_9zGFK.js";import"./ToolbarRootContext-DpPmKmnD.js";import"./getDisabledMountTransitionStyles-BWgLfYBf.js";import"./getPseudoElementBounds-CH-q1Mo7.js";import"./chevron-down-BCN0Zf9y.js";import"./index-ImvirjPY.js";import"./error-cky3iDMt.js";import"./BaseCbacBanner-DyCm4eZr.js";import"./makeExternalStore-BnwQyhvv.js";import"./Tooltip-JasgHE7P.js";import"./PopoverPopup-Bmo2uNMt.js";import"./debounce-DGv_zF9U.js";import"./useOsdkClient-0CShZdbB.js";import"./tick-C0ONndDH.js";import"./DropdownField-C5e04fQa.js";import"./isEqual-DF53lAS-.js";import"./withOsdkMetrics-b9tLwYR2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
