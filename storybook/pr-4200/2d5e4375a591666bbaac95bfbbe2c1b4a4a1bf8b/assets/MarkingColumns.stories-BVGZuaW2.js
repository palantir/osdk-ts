import{f as p,j as e}from"./iframe-BmlnQTDS.js";import{O as i}from"./object-table-DOQYnjEw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DfLDZ4kf.js";import"./Table-Bk4jmEEB.js";import"./index-CLn6IkRR.js";import"./Dialog-DeUvC3i9.js";import"./cross-D2DCGJW3.js";import"./svgIconContainer-D7BtKSB4.js";import"./useBaseUiId-CZoncXMq.js";import"./InternalBackdrop-Doq4lLxV.js";import"./composite-JyXlDwio.js";import"./index-DwxQTWS6.js";import"./index-bRRYzA0v.js";import"./index-Baw0QC21.js";import"./useEventCallback-DkTxWfbI.js";import"./SkeletonBar-q0dTxujL.js";import"./LoadingCell-B8_A9HoA.js";import"./ColumnConfigDialog-BXalWpKy.js";import"./DraggableList-B17zV0u2.js";import"./search-C6RrLSu8.js";import"./Input-DqKEEagj.js";import"./useControlled-YYP5n0_h.js";import"./Button-BG-8NdMv.js";import"./small-cross-Dlof1s20.js";import"./ActionButton-DE9HiBY7.js";import"./Checkbox-0QQWmnRC.js";import"./useValueChanged-Ijn1e6pk.js";import"./CollapsiblePanel-RUeZ1P51.js";import"./MultiColumnSortDialog-JJuRHrKX.js";import"./MenuTrigger-BnI9FDU6.js";import"./CompositeItem-DqcihoEf.js";import"./ToolbarRootContext-BMCSjw-P.js";import"./getDisabledMountTransitionStyles-B5FK3Ah0.js";import"./getPseudoElementBounds-897QWYoT.js";import"./chevron-down-CKSiKvYw.js";import"./index-PbmBNDrH.js";import"./error-C-2VL_3O.js";import"./BaseCbacBanner-Ca5lgifE.js";import"./makeExternalStore-qm8KAWql.js";import"./Tooltip-C2k0lBII.js";import"./PopoverPopup-Ci8t5NrM.js";import"./debounce-BY5vTAlu.js";import"./useOsdkClient-BIu_ph17.js";import"./tick-BV5MVFCS.js";import"./DropdownField-B_Iftwd-.js";import"./isEqual-BB6tEofr.js";import"./withOsdkMetrics-CfdTmR9K.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
