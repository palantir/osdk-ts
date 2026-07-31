import{f as p,j as e}from"./iframe-7HWn_vJ6.js";import{O as i}from"./object-table-DHE2g8y9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CpsRumFb.js";import"./Table-4OL8Tp08.js";import"./index-5DesS_Rq.js";import"./Dialog-CZ0W4pD7.js";import"./cross-C8-Xg2zC.js";import"./svgIconContainer-BUuMEAEF.js";import"./useBaseUiId-D5qCaBNi.js";import"./InternalBackdrop-B2v5oIKt.js";import"./composite-ChQikCZ2.js";import"./index-DLnS53Ac.js";import"./index-BAmY44lm.js";import"./index-DF7uRqTx.js";import"./useEventCallback-ryzmtcNX.js";import"./SkeletonBar-qrzgh7UB.js";import"./LoadingCell-DGMJaHaJ.js";import"./ColumnConfigDialog-w9j1DtuC.js";import"./DraggableList-yHnqlwe6.js";import"./search-Dz3e9e6H.js";import"./Input-BXvi8BCl.js";import"./useControlled-xbXmF4gL.js";import"./isEqual-CPugSMux.js";import"./isObject-CoiIKRmS.js";import"./Button-C0yxmCxc.js";import"./ActionButton-Pcn-fiWH.js";import"./Checkbox-DcqH3aQ5.js";import"./useValueChanged-D7Wxsqao.js";import"./CollapsiblePanel-yoJjUAZc.js";import"./MultiColumnSortDialog-B13w_HeV.js";import"./MenuTrigger-BnROxh8m.js";import"./CompositeItem-D-vYIAXB.js";import"./ToolbarRootContext-DEobcuEs.js";import"./getDisabledMountTransitionStyles-DPsFnI3a.js";import"./getPseudoElementBounds-CcjlVVRK.js";import"./chevron-down-CjvcWCP0.js";import"./index-DUwSofpg.js";import"./error-OJDEKHve.js";import"./BaseCbacBanner-Cywdd0P9.js";import"./makeExternalStore-D7BGvXpe.js";import"./Tooltip-U_pT3p1z.js";import"./PopoverPopup-DnsrRHq6.js";import"./toNumber-Bri2bLBz.js";import"./useOsdkClient-DeDD2fFX.js";import"./tick-Da2Yv-xR.js";import"./DropdownField-Cz9_2nsx.js";import"./withOsdkMetrics-CygL5eUE.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
