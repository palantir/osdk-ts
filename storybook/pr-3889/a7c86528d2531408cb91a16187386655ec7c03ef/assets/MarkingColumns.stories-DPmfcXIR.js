import{f as p,j as e}from"./iframe-Cpw76Sdc.js";import{O as i}from"./object-table-BRLY5aCa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-8AbM0gOB.js";import"./Table-2dgTr2pA.js";import"./index-zPQhZCVL.js";import"./Dialog-BSbzRySi.js";import"./cross-CHILGXBp.js";import"./svgIconContainer-BD5xY0XD.js";import"./useBaseUiId-iIyXPd8a.js";import"./InternalBackdrop-CrzPvv-e.js";import"./composite-BiHZiM_o.js";import"./index-DyQIyZ_o.js";import"./index-CCh0UBc-.js";import"./index-mvHbpu9m.js";import"./useEventCallback-DwTyub1b.js";import"./SkeletonBar-BN28IWus.js";import"./LoadingCell-BAqjE1Zt.js";import"./ColumnConfigDialog-d5-jecqO.js";import"./DraggableList-xj-JSUxt.js";import"./search-C6EHfnm3.js";import"./Input-CtOgxGdW.js";import"./useControlled-JdKni9kg.js";import"./Button-CKa97gQA.js";import"./small-cross-CvcLh5v8.js";import"./ActionButton-DSv4OBq1.js";import"./Checkbox-B0Igi9Ut.js";import"./useValueChanged-CYl-xbrr.js";import"./CollapsiblePanel-kMyKToA5.js";import"./MultiColumnSortDialog-BfsEwFQ5.js";import"./MenuTrigger-B1YYjSiM.js";import"./CompositeItem-CvHmtrv6.js";import"./ToolbarRootContext-BkMaLa5M.js";import"./getDisabledMountTransitionStyles-mn_22XPf.js";import"./getPseudoElementBounds-C6mykXXF.js";import"./chevron-down-CZx_QJYn.js";import"./index-CDcUaHOJ.js";import"./error-Cf9QFWnN.js";import"./BaseCbacBanner-5_yWfNz5.js";import"./makeExternalStore-BBzTQwwa.js";import"./Tooltip-BpKwVBux.js";import"./PopoverPopup-CexomEcT.js";import"./debounce-B--H28BV.js";import"./useOsdkClient-CPHnoq0t.js";import"./tick-DGRCvyHI.js";import"./DropdownField-cOQ5lTMI.js";import"./isEqual-DDjWjXdA.js";import"./withOsdkMetrics-DWbYyS_O.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
