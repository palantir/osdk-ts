import{f as p,j as e}from"./iframe-dvXPHGEz.js";import{O as i}from"./object-table-Djjbkt0z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BmaGIWKK.js";import"./Table-juMiLnah.js";import"./index-DyjG60lF.js";import"./Dialog-BNw-ASNJ.js";import"./cross-Z5DuI0bi.js";import"./svgIconContainer-Cks84kGC.js";import"./useBaseUiId-B5XDNhHC.js";import"./InternalBackdrop-DAJuntNY.js";import"./composite-CadSmb_E.js";import"./index-DabbcYA7.js";import"./index-D0dNC_Uw.js";import"./index-CaOHsNqN.js";import"./useEventCallback-nNaNdbMZ.js";import"./SkeletonBar-Dv2M62ut.js";import"./LoadingCell-0qyIzLIs.js";import"./ColumnConfigDialog-VemTYLXT.js";import"./DraggableList-DwCzG7mM.js";import"./search-DSXnECBw.js";import"./Input-CQg1dEqW.js";import"./useControlled-C_6t7Yik.js";import"./Button-XhiN3AVX.js";import"./small-cross-DKjM1orR.js";import"./ActionButton-wFnbg4xS.js";import"./Checkbox-BKfRmlys.js";import"./useValueChanged-CnI10VJe.js";import"./CollapsiblePanel-Uln4s1hx.js";import"./MultiColumnSortDialog-DWc2JHmU.js";import"./MenuTrigger-B5gWYMLG.js";import"./CompositeItem-BOkdWJ_P.js";import"./ToolbarRootContext-puVPhTN3.js";import"./getDisabledMountTransitionStyles-AFbWhr8J.js";import"./getPseudoElementBounds-D_O4eXO1.js";import"./chevron-down-EmJ3ovaR.js";import"./index-C6zBVqUK.js";import"./error-CQ-TuYDa.js";import"./BaseCbacBanner-DnWNpQiJ.js";import"./makeExternalStore-CV6_Wrkf.js";import"./Tooltip-Dr5evSCi.js";import"./PopoverPopup-C5XbR0Iv.js";import"./debounce-DQGeitFh.js";import"./useOsdkClient-BaEF3EMY.js";import"./tick-DCw5S-Ab.js";import"./DropdownField-CS7rxwg1.js";import"./isEqual-B0DJkLX3.js";import"./withOsdkMetrics-7z80YqAb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
