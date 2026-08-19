import{f as p,j as e}from"./iframe-Cib7M-Xy.js";import{O as i}from"./object-table-XSqCSPBV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CRDWPiYa.js";import"./Table-CO4Oj3mc.js";import"./index-CBv-FCGp.js";import"./Dialog-Ci-SyB0e.js";import"./cross-C2V_DgUT.js";import"./svgIconContainer-D1xpzhCr.js";import"./useBaseUiId-M5BZcaZy.js";import"./InternalBackdrop-CkBFRqEF.js";import"./composite-kqFH7m6U.js";import"./index-BuKksupP.js";import"./index-BCtR_sML.js";import"./index-Cu_DMDN1.js";import"./useEventCallback-CEygIpmo.js";import"./SkeletonBar-CU1Q8u7m.js";import"./LoadingCell-Cz-TT2Ke.js";import"./ColumnConfigDialog-B_Y_oS9Z.js";import"./DraggableList-BAP1XhTX.js";import"./search-DCZZXW6e.js";import"./Input-DoKdALsn.js";import"./useControlled-C0WjWXAL.js";import"./Button-D17R42M5.js";import"./small-cross-Bn1T9AEL.js";import"./ActionButton-DUlbhD91.js";import"./Checkbox-YNwcH3UC.js";import"./useValueChanged-Dexwdau7.js";import"./CollapsiblePanel-Ye8-BhZS.js";import"./MultiColumnSortDialog-BJv_YNOo.js";import"./MenuTrigger-DF5spK6e.js";import"./CompositeItem-BwGgrVOO.js";import"./ToolbarRootContext-BNUf7EA-.js";import"./getDisabledMountTransitionStyles-CZ8a_1s5.js";import"./getPseudoElementBounds-DdA2WBP8.js";import"./chevron-down-CDgi7Jby.js";import"./index-Dg5LeqIW.js";import"./error-CzUPZAgK.js";import"./BaseCbacBanner-BLmPuVm9.js";import"./makeExternalStore-C8s6weLu.js";import"./Tooltip-svlpOFoz.js";import"./PopoverPopup-BzGKBTcL.js";import"./debounce-Cc5fWdjK.js";import"./useOsdkClient-C2kX0mp7.js";import"./tick-fYEum7o-.js";import"./DropdownField-Cl95NLNY.js";import"./isEqual-CZvHmsOE.js";import"./withOsdkMetrics-B-KTU3vQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
