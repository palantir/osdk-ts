import{f as p,j as e}from"./iframe-Cb9yL1OG.js";import{O as i}from"./object-table-B1tG8_yp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DQv3Mqd6.js";import"./Table-CrGDb7KB.js";import"./index-DLq4a5hn.js";import"./Dialog-BOFKEKl_.js";import"./cross-CB3_uWKZ.js";import"./svgIconContainer-DBEZVoeW.js";import"./useBaseUiId-Bzh_EjHo.js";import"./InternalBackdrop-BXMMwu9r.js";import"./composite-lnU5aQzY.js";import"./index-DN_IeP_N.js";import"./index-PfYakjmh.js";import"./index-Cdo59bJY.js";import"./useEventCallback-DuY2B3MU.js";import"./SkeletonBar-CN5sHKoZ.js";import"./LoadingCell-Bqh_nkGt.js";import"./ColumnConfigDialog-8J0qlcfe.js";import"./DraggableList-ByjRnTPm.js";import"./search-DrEW_jBF.js";import"./Input-DLTVeyAC.js";import"./useControlled-z-zi7rAe.js";import"./isEqual-ynxt_WeK.js";import"./isObject-OxzwckJI.js";import"./Button-6NKxmn-i.js";import"./ActionButton-Co4ppcxL.js";import"./Checkbox-BGTCwEV_.js";import"./useValueChanged-DnwN1Bul.js";import"./CollapsiblePanel-BHqgPNbw.js";import"./MultiColumnSortDialog-pqMLADXP.js";import"./MenuTrigger-BU6kinBM.js";import"./CompositeItem-0ISc6yQY.js";import"./ToolbarRootContext-Cabc9txw.js";import"./getDisabledMountTransitionStyles-CFzNSezz.js";import"./getPseudoElementBounds-BXSlo-_7.js";import"./chevron-down-B_N-V52K.js";import"./index-Db9g3KRS.js";import"./error-Cp0EJWJK.js";import"./BaseCbacBanner-CU_Nr3Sm.js";import"./makeExternalStore-DJapPci5.js";import"./Tooltip-CTUZ24SL.js";import"./PopoverPopup-BA69oV2F.js";import"./toNumber-CrjQxl0b.js";import"./useOsdkClient-DJKtbM-N.js";import"./tick-ABmUE7vY.js";import"./DropdownField-CrHS4fOZ.js";import"./withOsdkMetrics-MSnSO192.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
