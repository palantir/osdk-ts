import{f as p,j as e}from"./iframe-_XWcEwHk.js";import{O as i}from"./object-table-CVzaJWld.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CNNwgNsL.js";import"./Table-L_2QILeW.js";import"./index-DEyLol8C.js";import"./Dialog-ClKZsdx7.js";import"./cross-Cvllyul3.js";import"./svgIconContainer-s76caIVw.js";import"./useBaseUiId-Cp55Lgic.js";import"./InternalBackdrop-DCGEqfhx.js";import"./composite-BYE5Dlef.js";import"./index-BDsQj8Rb.js";import"./index-B_nZUuF2.js";import"./index-BKSgEz3r.js";import"./useEventCallback-BunrxwXX.js";import"./SkeletonBar-DXX-HuIg.js";import"./LoadingCell-CGD-qaQB.js";import"./ColumnConfigDialog-CtlqL0Bv.js";import"./DraggableList-BAWMbUl8.js";import"./search-Dcf_xsL6.js";import"./Input-B7mKteg-.js";import"./useControlled-DwjvLtqF.js";import"./Button-Bc6gggWi.js";import"./small-cross-p6Bd-K6R.js";import"./ActionButton-m7HyQ9l6.js";import"./Checkbox-DR6VLMJK.js";import"./useValueChanged-B98vVKh1.js";import"./CollapsiblePanel-DmOt9kop.js";import"./MultiColumnSortDialog-ZWcUMId3.js";import"./MenuTrigger-D3WH6QS3.js";import"./CompositeItem-B8eozN0-.js";import"./ToolbarRootContext-MmipuJm0.js";import"./getDisabledMountTransitionStyles-2YxdhAX_.js";import"./getPseudoElementBounds-B67hfNdQ.js";import"./chevron-down-aMIB5bAJ.js";import"./index-DQrLQlQ5.js";import"./error-CGLwBB-Q.js";import"./BaseCbacBanner-D7ltILps.js";import"./makeExternalStore-CYii8DZX.js";import"./Tooltip-Dtv4GMM3.js";import"./PopoverPopup-CPoevyOu.js";import"./debounce-BspAFodp.js";import"./useOsdkClient-CIw_1c3a.js";import"./tick-DPIO5Uoy.js";import"./DropdownField-BuDv2_Ap.js";import"./isEqual-CPMubuye.js";import"./withOsdkMetrics-DqQ9hGu9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
