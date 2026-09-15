import{f as p,j as e}from"./iframe-BlKCTUed.js";import{O as i}from"./object-table-HBz2VJ24.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BUGYiWCP.js";import"./Table-oOnbFPnT.js";import"./index-CI0skb4B.js";import"./Dialog-CLEff_39.js";import"./cross-CqaO5DBE.js";import"./svgIconContainer-1UB6FZGc.js";import"./useBaseUiId-DkP_imTM.js";import"./InternalBackdrop-h-3naHFk.js";import"./composite-DiiB6odo.js";import"./index-DxXrW0wp.js";import"./index-DDp_OGDu.js";import"./index-Devgl1Vj.js";import"./useEventCallback-meJSs_jZ.js";import"./SkeletonBar-A5cBM3D2.js";import"./LoadingCell-7DK6249Y.js";import"./ColumnConfigDialog-B3hfZtKF.js";import"./DraggableList-DwGx15ty.js";import"./search-CVcVTR0T.js";import"./Input-B33yNZZn.js";import"./useControlled-7Fk4n3DI.js";import"./Button-3Efar3GG.js";import"./small-cross-Ds6jcFq4.js";import"./ActionButton-BV0JGXeO.js";import"./Checkbox-BO_ahlRd.js";import"./useValueChanged-ChY0oQrW.js";import"./CollapsiblePanel-DhQw-8XY.js";import"./MultiColumnSortDialog-n294j2hI.js";import"./MenuTrigger-CwUg0jkL.js";import"./CompositeItem-CV5UwX2b.js";import"./ToolbarRootContext-BHdJXOoh.js";import"./getDisabledMountTransitionStyles-Bk1M6moe.js";import"./getPseudoElementBounds-CEIumeIp.js";import"./chevron-down-FWs3P9jd.js";import"./index-Cg0fRxTo.js";import"./error-D-1ezCIE.js";import"./BaseCbacBanner-BFebLDX9.js";import"./makeExternalStore-D5c3nlfz.js";import"./Tooltip-CiH_3FgC.js";import"./PopoverPopup-CTOgqJnQ.js";import"./debounce-BdvSF5Dr.js";import"./useOsdkClient-imyPShfg.js";import"./tick-CJ-rmnk9.js";import"./DropdownField-B9RkrUKl.js";import"./isEqual-BsAgjwIk.js";import"./withOsdkMetrics-ClE-4wO4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
