import{f as p,j as e}from"./iframe-DmtH0n9a.js";import{O as i}from"./object-table-DSG3kUhS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BVTRjjKw.js";import"./Table-DHAnAkAC.js";import"./index-BdFb3QwW.js";import"./Dialog-CkpOo05g.js";import"./cross-BCEjrsY6.js";import"./svgIconContainer-Pw6aLkay.js";import"./useBaseUiId-BBuvUIea.js";import"./InternalBackdrop-BwkCMvDX.js";import"./composite-BkzMbckt.js";import"./index-D5LxgD1e.js";import"./index-ChyY_H7T.js";import"./index-B1xGkMAT.js";import"./useEventCallback-Mg5l6TND.js";import"./SkeletonBar-DanhEJYD.js";import"./LoadingCell-bfoOoDnL.js";import"./ColumnConfigDialog-GmpwDDNL.js";import"./DraggableList-BsaXdUcd.js";import"./search-Dao56fJg.js";import"./Input-pGfNFQVP.js";import"./useControlled-CywIKAhB.js";import"./Button-B3WaeV_y.js";import"./small-cross-DMJDKcSR.js";import"./ActionButton-iSIRshBZ.js";import"./Checkbox-D38sos2N.js";import"./useValueChanged-BfNlh3cV.js";import"./CollapsiblePanel-Dj3mKq6F.js";import"./MultiColumnSortDialog-CU3kQ5VB.js";import"./MenuTrigger-Dr2dGFQr.js";import"./CompositeItem-BeRdWG_-.js";import"./ToolbarRootContext-BSo8gEvR.js";import"./getDisabledMountTransitionStyles-EmLAn1yb.js";import"./getPseudoElementBounds-BtDyGFcL.js";import"./chevron-down-Chw1fxBZ.js";import"./index-Dbxm_8DG.js";import"./error-CgFhqpwO.js";import"./BaseCbacBanner-CbMFrPLT.js";import"./makeExternalStore-Z-52Zdib.js";import"./Tooltip-CySQEz_z.js";import"./PopoverPopup-COnDHYtw.js";import"./toNumber-B5JyEZZZ.js";import"./useOsdkClient-zwEH2FqK.js";import"./tick-CJTjGk_1.js";import"./DropdownField-fSFBaBCr.js";import"./withOsdkMetrics-CY_Q9bgr.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
