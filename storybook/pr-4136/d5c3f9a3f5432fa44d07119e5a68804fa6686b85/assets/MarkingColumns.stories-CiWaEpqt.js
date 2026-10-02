import{f as p,j as e}from"./iframe-DO7dF-ar.js";import{O as i}from"./object-table-CBri6z-y.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BW5WH-mc.js";import"./Table-CPm1d6ia.js";import"./index-kenPv2GE.js";import"./Dialog-BNgsKcmK.js";import"./cross-C1UL2-2h.js";import"./svgIconContainer-DjMCTipa.js";import"./useBaseUiId-Bt-nl6bS.js";import"./InternalBackdrop-BOw_21MB.js";import"./composite-DP63OVsA.js";import"./index-ChtT1bsq.js";import"./index-DTtqbecA.js";import"./index-V_wqwxtw.js";import"./useEventCallback-C0Kp26Ia.js";import"./SkeletonBar-BKAHRTQk.js";import"./LoadingCell-CkHXNABS.js";import"./ColumnConfigDialog-BgMx8cqd.js";import"./DraggableList-C3ZFIjxr.js";import"./search-BLUkB-J4.js";import"./Input-CK_329wL.js";import"./useControlled-6UP7zcXc.js";import"./Button-CizE_ePi.js";import"./small-cross-J_4yazEf.js";import"./ActionButton-BAj8Q7M-.js";import"./Checkbox-DqkoI7lc.js";import"./useValueChanged-BuoGHQuA.js";import"./CollapsiblePanel-B9T_imQv.js";import"./MultiColumnSortDialog-CyNSB3ae.js";import"./MenuTrigger-CiYAlrY8.js";import"./CompositeItem-BwVsaSQK.js";import"./ToolbarRootContext-CZAMPnmu.js";import"./getDisabledMountTransitionStyles-Br24ubGK.js";import"./getPseudoElementBounds-CJowpxqF.js";import"./chevron-down-C1ai5XRC.js";import"./index-CoQO0q6S.js";import"./error-D0RjPgCd.js";import"./BaseCbacBanner-BcR5Y1EU.js";import"./makeExternalStore-Am-Ru7Ep.js";import"./Tooltip-D0Q-VN51.js";import"./PopoverPopup-joRMvQbq.js";import"./debounce-DmQhFwOT.js";import"./useOsdkClient-CyRh6KvI.js";import"./tick-B49pnBc3.js";import"./DropdownField-DysS70c1.js";import"./isEqual-kyliCkp6.js";import"./withOsdkMetrics-Btt-8vLh.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
