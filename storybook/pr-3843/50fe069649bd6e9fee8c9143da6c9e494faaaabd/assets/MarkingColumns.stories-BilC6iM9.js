import{f as p,j as e}from"./iframe-0M63JHCf.js";import{O as i}from"./object-table-2mMzzfs7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-yRY4DJID.js";import"./Table-C4CARdpZ.js";import"./index-DCLstkM0.js";import"./Dialog-DhVwm5-L.js";import"./cross-Dx7TBNdy.js";import"./svgIconContainer-Ba-VjDLq.js";import"./useBaseUiId-C4hkh7ZQ.js";import"./InternalBackdrop-HX2Lu_fI.js";import"./composite-BGTmrBgq.js";import"./index-DfbbdQ9g.js";import"./index-BN_1v8m8.js";import"./index--Mgh_lWx.js";import"./useEventCallback-BFmOLSII.js";import"./SkeletonBar-DmlJks1A.js";import"./LoadingCell-ClHYUGsW.js";import"./ColumnConfigDialog-kgzLiGtM.js";import"./DraggableList-BiAe_XK2.js";import"./search-BHMf8zxq.js";import"./Input-BySgS7sE.js";import"./useControlled-Bfcb3jbt.js";import"./isEqual-CwyeCwkZ.js";import"./isObject-OMMx7eDJ.js";import"./Button-yHWtoMo0.js";import"./ActionButton-YGuniLSR.js";import"./Checkbox-B-PW90Rg.js";import"./useValueChanged-BToEeRdF.js";import"./CollapsiblePanel-BfU0Af3S.js";import"./MultiColumnSortDialog-2YO5ARfD.js";import"./MenuTrigger-BoIum8c4.js";import"./CompositeItem-DykB-jR3.js";import"./ToolbarRootContext-4caIMlji.js";import"./getDisabledMountTransitionStyles-BG8GaNm1.js";import"./getPseudoElementBounds-onK_gGUB.js";import"./chevron-down-CJX5oFSg.js";import"./index-BhO_dAvP.js";import"./error-DtkpoifS.js";import"./BaseCbacBanner-CiuaOWIH.js";import"./makeExternalStore-BOJmpgSR.js";import"./Tooltip-DTY2SBSt.js";import"./PopoverPopup-Bj_qNAcN.js";import"./toNumber-Dzlq76X1.js";import"./useOsdkClient-DV-CPQEw.js";import"./tick-Bibjqq1N.js";import"./DropdownField-BLsGqkq4.js";import"./withOsdkMetrics-DCNaRoie.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
