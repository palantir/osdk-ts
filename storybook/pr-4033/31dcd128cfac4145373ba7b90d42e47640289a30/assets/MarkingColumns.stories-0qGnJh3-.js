import{f as p,j as e}from"./iframe-B-owY9Z7.js";import{O as i}from"./object-table-CefKw-8F.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-9dohNchO.js";import"./Table-D7Chhi4i.js";import"./index-B6FNdyul.js";import"./Dialog-DucCbSyW.js";import"./cross-DAeYv9DV.js";import"./svgIconContainer-SVfmpuZH.js";import"./useBaseUiId-BuygkMJa.js";import"./InternalBackdrop-Qs9WBPXA.js";import"./composite-CruT5ftQ.js";import"./index-D6Mlo6-X.js";import"./index-BLL9qzqo.js";import"./index-Bd9R8qyi.js";import"./useEventCallback-DEuppmtE.js";import"./SkeletonBar-Dt6LDg3E.js";import"./LoadingCell-D77Tuzfg.js";import"./ColumnConfigDialog-XbxNc6BS.js";import"./DraggableList-h04GfC5d.js";import"./search-CeJ8ph1L.js";import"./Input-DO0-uKR0.js";import"./useControlled-DU5wctnz.js";import"./Button-CdoyG0J5.js";import"./small-cross-6e-BgKCt.js";import"./ActionButton-BILzU60N.js";import"./Checkbox-DmR4JKqW.js";import"./useValueChanged-CKB_GaD4.js";import"./CollapsiblePanel-C-QRWB1j.js";import"./MultiColumnSortDialog-CmYfhF5I.js";import"./MenuTrigger-Q8tox6sB.js";import"./CompositeItem-Czc0ACb3.js";import"./ToolbarRootContext-PF-H9oB3.js";import"./getDisabledMountTransitionStyles-B2Uy8nCz.js";import"./getPseudoElementBounds-xcUg61qv.js";import"./chevron-down-KtY7GIs6.js";import"./index-CHVvDRh4.js";import"./error-BnApDvy6.js";import"./BaseCbacBanner-CN-44h_1.js";import"./makeExternalStore-DCMzogXn.js";import"./Tooltip-CSFV9ySu.js";import"./PopoverPopup-BP7HKGIF.js";import"./debounce-8Cu2Gz8K.js";import"./useOsdkClient-BO3W3UoD.js";import"./tick-DndUclkL.js";import"./DropdownField-Br6lY0cs.js";import"./isEqual-C7NIFCJ6.js";import"./withOsdkMetrics-D7Kd4RWC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
