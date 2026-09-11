import{f as p,j as e}from"./iframe-Cd0WuP5s.js";import{O as i}from"./object-table-CGzT3aos.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BULq60Sg.js";import"./Table-LvXSiAc8.js";import"./index-Dn3UPUEv.js";import"./Dialog-CJbSm0vl.js";import"./cross-Cht5ZydL.js";import"./svgIconContainer-Zo359bK_.js";import"./useBaseUiId-DrebTsUj.js";import"./InternalBackdrop-dvLmHpE5.js";import"./composite-DOtbOOdR.js";import"./index-C-_orMox.js";import"./index-BgMZ2AWP.js";import"./index-BvG0L2NH.js";import"./useEventCallback-CqLXx_Ru.js";import"./SkeletonBar-I0-eDi0W.js";import"./LoadingCell-BQTecwW2.js";import"./ColumnConfigDialog-B6HbLu6_.js";import"./DraggableList-95n9OLxV.js";import"./search-j5X8koaR.js";import"./Input-Cxx4mnqf.js";import"./useControlled-BoZ7gbt2.js";import"./Button-DQgJQ0ys.js";import"./small-cross-HxFkmVGE.js";import"./ActionButton-F6IFdzY4.js";import"./Checkbox-VXPIk-kC.js";import"./useValueChanged-DCDDQwI0.js";import"./CollapsiblePanel-Bv729W8z.js";import"./MultiColumnSortDialog-UPrpWPay.js";import"./MenuTrigger-CwUzHJZB.js";import"./CompositeItem-CUY6v9CS.js";import"./ToolbarRootContext-zlKF7dlE.js";import"./getDisabledMountTransitionStyles-ClCEPtPS.js";import"./getPseudoElementBounds-DM3ex3Qr.js";import"./chevron-down-Dtgstolr.js";import"./index-8j_gMIpQ.js";import"./error-BXNrYt0u.js";import"./BaseCbacBanner-BNrNHneK.js";import"./makeExternalStore-j6ewfQ1j.js";import"./Tooltip-BpBW07pw.js";import"./PopoverPopup-ChYnmRaP.js";import"./debounce-DsJ8NhL-.js";import"./useOsdkClient-CpQ-3Z13.js";import"./tick-BO6WZzfT.js";import"./DropdownField-DNOcnaLD.js";import"./isEqual-BcXr0yMK.js";import"./withOsdkMetrics-DqISDKn-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
