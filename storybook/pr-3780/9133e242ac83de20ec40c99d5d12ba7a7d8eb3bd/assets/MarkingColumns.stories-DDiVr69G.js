import{f as p,j as e}from"./iframe-DvvN0iZ4.js";import{O as i}from"./object-table-BvU2mV6M.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-COgx8bff.js";import"./Table-4GQcTise.js";import"./index-CExWqhF3.js";import"./Dialog-CD80pTON.js";import"./cross-DdXxY3zw.js";import"./svgIconContainer-DO7duNWZ.js";import"./useBaseUiId-BMLYN1z9.js";import"./InternalBackdrop-Dt_apqJW.js";import"./composite-C1x5nTDV.js";import"./index-CK5HdBab.js";import"./index-DU7UvfyD.js";import"./index-VCT57lbz.js";import"./useEventCallback-B5FWisA3.js";import"./SkeletonBar-BWjakb0v.js";import"./LoadingCell-B07D6uPe.js";import"./ColumnConfigDialog-BWxh3ulh.js";import"./DraggableList-G0-kePYg.js";import"./search-iASH-OFa.js";import"./Input-RroOyWit.js";import"./useControlled-BJtimK6V.js";import"./Button-BQEhn0-h.js";import"./small-cross-7Qo1ibsU.js";import"./ActionButton-DM7_AKH6.js";import"./Checkbox-BdeHaX97.js";import"./useValueChanged-hq5i52iF.js";import"./CollapsiblePanel-Ds-Y6JsI.js";import"./MultiColumnSortDialog-BFqkymhQ.js";import"./MenuTrigger-C-RbwST-.js";import"./CompositeItem-D7Fao19X.js";import"./ToolbarRootContext-Yypg0Ver.js";import"./getDisabledMountTransitionStyles-CArUbwJ-.js";import"./getPseudoElementBounds-DXBuHm7V.js";import"./chevron-down-6mjfuih6.js";import"./index-DIu0upuI.js";import"./error-C5MrVcfF.js";import"./BaseCbacBanner-Bs_IuhPB.js";import"./makeExternalStore-DCEfrMP4.js";import"./Tooltip-Ir5DQolV.js";import"./PopoverPopup-CIYN-v4k.js";import"./debounce-D86PTLoo.js";import"./useOsdkClient-CT8HOadD.js";import"./tick-DRXPtG6-.js";import"./DropdownField-CvetrftB.js";import"./isEqual-BHdaAHqt.js";import"./withOsdkMetrics-BfnLSscO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
