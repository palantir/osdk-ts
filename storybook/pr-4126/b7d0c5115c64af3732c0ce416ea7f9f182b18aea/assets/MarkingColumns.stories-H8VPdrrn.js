import{f as p,j as e}from"./iframe-ByGhu7Rs.js";import{O as i}from"./object-table-UWXH19Rt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CovqUMwC.js";import"./Table-DPgHb55A.js";import"./index-D9CH1iu6.js";import"./Dialog-BozD2bDZ.js";import"./cross--Vb8zQ9y.js";import"./svgIconContainer-BM73F7-1.js";import"./useBaseUiId-BtV3BRGt.js";import"./InternalBackdrop-BZh54V-b.js";import"./composite-5pEQHoFG.js";import"./index-CSR_OQNU.js";import"./index-Sa0Sgq1C.js";import"./index-w0bHng9i.js";import"./useEventCallback-D3_oYaV2.js";import"./SkeletonBar-C48VFTJF.js";import"./LoadingCell-B7k1mu8o.js";import"./ColumnConfigDialog-Y5i0ZI6b.js";import"./DraggableList-C0OfMYfq.js";import"./search-CqZJJM3l.js";import"./Input-CPzfsq5Q.js";import"./useControlled-BMq25ryS.js";import"./Button-FdiR0YBj.js";import"./small-cross-DnaBmHYJ.js";import"./ActionButton-DeQetOWP.js";import"./Checkbox-CEre0Gw9.js";import"./useValueChanged-B31lb46w.js";import"./CollapsiblePanel-DKKHH52r.js";import"./MultiColumnSortDialog-UHh_3k7d.js";import"./MenuTrigger-BumYsrfX.js";import"./CompositeItem-DOTYC0vy.js";import"./ToolbarRootContext--ybsc-5r.js";import"./getDisabledMountTransitionStyles-NHd85YGu.js";import"./getPseudoElementBounds-wyGE4tZv.js";import"./chevron-down-CVFp5ZF3.js";import"./index-BhXiEem_.js";import"./error-BtdAILjI.js";import"./BaseCbacBanner-DaEullF4.js";import"./makeExternalStore-Bi9EmxuC.js";import"./Tooltip-C99_Q-RE.js";import"./PopoverPopup-CJYpnk7I.js";import"./debounce-DsqtKIvY.js";import"./useOsdkClient-WMaGmtpN.js";import"./tick-COxZ6M1z.js";import"./DropdownField-uya8Zzk7.js";import"./isEqual-SU-dZrhT.js";import"./withOsdkMetrics-Y0bjdApQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
