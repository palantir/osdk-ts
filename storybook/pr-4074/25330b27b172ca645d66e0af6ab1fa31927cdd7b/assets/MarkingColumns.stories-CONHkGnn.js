import{f as p,j as e}from"./iframe-C1tZXogj.js";import{O as i}from"./object-table-ChvpnUD9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CPtBFz2Y.js";import"./Table-Dso_zjpC.js";import"./index-DxPI7-w_.js";import"./Dialog-AB3LDpOc.js";import"./cross-D5lRpI2u.js";import"./svgIconContainer-CIq0Uduk.js";import"./useBaseUiId-BME5ZjIK.js";import"./InternalBackdrop-DbtxnMvT.js";import"./composite-cuBDJi1p.js";import"./index-BYD_xDue.js";import"./index-iBT1_a_C.js";import"./index-CLOhAn7T.js";import"./useEventCallback-BZxywBdB.js";import"./SkeletonBar-BBB5XDDC.js";import"./LoadingCell-DXc1oTv7.js";import"./ColumnConfigDialog-LtfvneX9.js";import"./DraggableList-Bo7idBvp.js";import"./search-mQyGpkqY.js";import"./Input-BFJGoRS_.js";import"./useControlled-mPEThvmW.js";import"./Button-IJ98NdC3.js";import"./small-cross-cDNVRd_G.js";import"./ActionButton-DCQj1wHm.js";import"./Checkbox-BnGWGkz1.js";import"./useValueChanged-CQrg9p61.js";import"./CollapsiblePanel-CLo4sI8H.js";import"./MultiColumnSortDialog-DKSvF_Or.js";import"./MenuTrigger-ChXdZfYr.js";import"./CompositeItem-BBNw29UQ.js";import"./ToolbarRootContext-DgDYgZp9.js";import"./getDisabledMountTransitionStyles-yGOiSHQ6.js";import"./getPseudoElementBounds-C_0gJLWO.js";import"./chevron-down-CRmIr1SJ.js";import"./index-D4pImD7i.js";import"./error-Ccxy7sxh.js";import"./BaseCbacBanner-6ZjPD1Pi.js";import"./makeExternalStore-y_SH3e4c.js";import"./Tooltip-DHorPnG5.js";import"./PopoverPopup-CSYBmUnF.js";import"./debounce-DQdrsuD1.js";import"./useOsdkClient-CKo6kWe-.js";import"./tick-ptBe7eW4.js";import"./DropdownField-CEVJg6GB.js";import"./isEqual-Dn91gH-p.js";import"./withOsdkMetrics-DODMu06P.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
