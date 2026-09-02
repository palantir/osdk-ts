import{f as p,j as e}from"./iframe-CtxcX-T2.js";import{O as i}from"./object-table-kvkm7oWa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-cYb1s-yj.js";import"./Table-BmEf-WHf.js";import"./index-B-TRiKN3.js";import"./Dialog-BuqAw-Am.js";import"./cross-CSOzfLob.js";import"./svgIconContainer-BdWsevkC.js";import"./useBaseUiId-BKQN5rZA.js";import"./InternalBackdrop-DcUKIKDf.js";import"./composite-Bg1E-ATT.js";import"./index-B31wHl9O.js";import"./index-Bx6oSTgH.js";import"./index-CQTEzx2i.js";import"./useEventCallback-CJSRmKCz.js";import"./SkeletonBar-DtSb_BRI.js";import"./LoadingCell-CEMsrPxC.js";import"./ColumnConfigDialog-BqMCCnNj.js";import"./DraggableList-BzQY0SAw.js";import"./search-CRmL15NB.js";import"./Input-Bv3vf0p7.js";import"./useControlled-KB7Tt3--.js";import"./Button-DtDTCbH_.js";import"./small-cross-Ba9dhW_V.js";import"./ActionButton-BaPZa1OF.js";import"./Checkbox-4p89Vpq6.js";import"./useValueChanged-CJyhwRpH.js";import"./CollapsiblePanel-CmD8octv.js";import"./MultiColumnSortDialog-DpfErL7k.js";import"./MenuTrigger-DFIUIXzr.js";import"./CompositeItem-BOSOz_c1.js";import"./ToolbarRootContext-TRfEDRwF.js";import"./getDisabledMountTransitionStyles-C0Z2RaMf.js";import"./getPseudoElementBounds-D7H1yTKx.js";import"./chevron-down-tzfqMRfe.js";import"./index-WzODq6Cd.js";import"./error-0r8auSif.js";import"./BaseCbacBanner-CeYCNyo5.js";import"./makeExternalStore-ycTRB21p.js";import"./Tooltip-etk01HFg.js";import"./PopoverPopup-C7Q6K1hN.js";import"./debounce-BdaueHY_.js";import"./useOsdkClient-B2tD5ZA9.js";import"./tick-C8bzjg5y.js";import"./DropdownField-51JHrmyh.js";import"./isEqual-BsD_zmUv.js";import"./withOsdkMetrics-CFtxLfFR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
