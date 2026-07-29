import{f as p,j as e}from"./iframe-CS16Wym9.js";import{O as i}from"./object-table-kqqmXTUk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DC9DeVBh.js";import"./Table-BgfxVV5X.js";import"./index-DhEpXO1A.js";import"./Dialog-CzVSYxmz.js";import"./cross-BWFjaYun.js";import"./svgIconContainer-CfFnFwML.js";import"./useBaseUiId-B-TyoTc3.js";import"./InternalBackdrop-CYoDkOja.js";import"./composite-B3nn8Wmd.js";import"./index-C35-im3I.js";import"./index-BPUQ9eYC.js";import"./index-CsvZoLsW.js";import"./useEventCallback-D-EHtfGa.js";import"./SkeletonBar-CBZRVWy7.js";import"./LoadingCell-YcVaGeUZ.js";import"./ColumnConfigDialog-C0I05drG.js";import"./DraggableList-CKhIAT7H.js";import"./search-DT-wqB-g.js";import"./Input-BpmoD1sO.js";import"./useControlled-aL-XGVGO.js";import"./isEqual-C44uMUsY.js";import"./isObject-VcFuhq9k.js";import"./Button-BhBWCaXR.js";import"./ActionButton-DUnsrqic.js";import"./Checkbox-B_fMFtTW.js";import"./useValueChanged-I988YqbZ.js";import"./CollapsiblePanel-DKc2NjAe.js";import"./MultiColumnSortDialog-9ilQth99.js";import"./MenuTrigger-B9hqQ2Fg.js";import"./CompositeItem-DPrQDkCn.js";import"./ToolbarRootContext-BkTHv0Zm.js";import"./getDisabledMountTransitionStyles-SBIz8E21.js";import"./getPseudoElementBounds-TWu6-xzu.js";import"./chevron-down-DgWoPbKX.js";import"./index-DUlIu8bO.js";import"./error-CvaWQpvx.js";import"./BaseCbacBanner-DrS9jSpa.js";import"./makeExternalStore-BmbO7NbA.js";import"./Tooltip-Ahq-aAPS.js";import"./PopoverPopup-DJ5D-s44.js";import"./toNumber-BHRlnP2P.js";import"./useOsdkClient-B-cAsZXi.js";import"./tick-DB_Qub35.js";import"./DropdownField-D7cICWTM.js";import"./withOsdkMetrics-DMkQ6592.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
