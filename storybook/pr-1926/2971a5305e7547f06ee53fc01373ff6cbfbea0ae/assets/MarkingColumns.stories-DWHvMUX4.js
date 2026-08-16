import{f as p,j as e}from"./iframe-C66sw3ty.js";import{O as i}from"./object-table-Bo9aKKXl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DZbI0FD0.js";import"./Table-C6d_12eT.js";import"./index-BuRhXxal.js";import"./Dialog-DFj3izS1.js";import"./cross-CtqOkK2i.js";import"./svgIconContainer-3jplA0Kn.js";import"./useBaseUiId-DBc-RpeK.js";import"./InternalBackdrop-DsXWEq-Z.js";import"./composite-DJt-rmmG.js";import"./index-DktJo0Qz.js";import"./index-RHZtAXiM.js";import"./index-B1xoON_r.js";import"./useEventCallback-cwcFVblP.js";import"./SkeletonBar-BoZ9OWi7.js";import"./LoadingCell-DpwcDvSb.js";import"./ColumnConfigDialog-DFflbHeg.js";import"./DraggableList-Aaqmor-j.js";import"./search-wv5WYUCG.js";import"./Input-BELQ9o_j.js";import"./useControlled-CCfgbEmE.js";import"./Button-CWXPJ_o4.js";import"./small-cross-Bbh8r9v-.js";import"./ActionButton-DQZCWw5O.js";import"./Checkbox-CWlOLNCz.js";import"./useValueChanged-C8NPc9BR.js";import"./CollapsiblePanel-B4_OSaf8.js";import"./MultiColumnSortDialog-BABDbYoQ.js";import"./MenuTrigger-Cm6MZfrt.js";import"./CompositeItem-DcBovePw.js";import"./ToolbarRootContext-BbxUlGdK.js";import"./getDisabledMountTransitionStyles-O1hZJ6Rw.js";import"./getPseudoElementBounds-YoXHtRnz.js";import"./chevron-down-rq5FhUz6.js";import"./index-Dmy2BarC.js";import"./error-Dxtk7pI5.js";import"./BaseCbacBanner-BaGj0VXE.js";import"./makeExternalStore-CY5Weqo3.js";import"./Tooltip-DtZVn1rC.js";import"./PopoverPopup-CHN0N4y0.js";import"./debounce-BHah8sqq.js";import"./useOsdkClient-BtN-BmFc.js";import"./tick-C7kRszHF.js";import"./DropdownField-CM8S71Dz.js";import"./isEqual-zIn-vV4k.js";import"./withOsdkMetrics-CGetGeS2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
