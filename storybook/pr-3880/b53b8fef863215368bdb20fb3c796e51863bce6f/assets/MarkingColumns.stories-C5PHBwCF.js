import{f as p,j as e}from"./iframe-C9HB86if.js";import{O as i}from"./object-table-B_EnMZcp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-rFANKmdh.js";import"./Table-OMFRcBcg.js";import"./index-CVyRPfKn.js";import"./Dialog-CQDZ3eii.js";import"./cross-D03jwveB.js";import"./svgIconContainer-DWuV-Vpk.js";import"./useBaseUiId-ClGI3kD_.js";import"./InternalBackdrop-B2dPExX-.js";import"./composite-C64kubUR.js";import"./index-C_aN6gDN.js";import"./index-BZ_jxMnq.js";import"./index-CqBAKLWt.js";import"./useEventCallback-CkepUuPK.js";import"./SkeletonBar-CqZT9-l8.js";import"./LoadingCell-B4lZKo_2.js";import"./ColumnConfigDialog-BYmyLXkG.js";import"./DraggableList-BEXEnYy_.js";import"./search-DZMUxcm3.js";import"./Input-AYOPk6Tg.js";import"./useControlled-EwxAbnnM.js";import"./Button-Dy6rgqj6.js";import"./small-cross-CZzvuKLa.js";import"./ActionButton-C7Xr1Qbw.js";import"./Checkbox-CSFKbNXt.js";import"./useValueChanged-DaTrWp7s.js";import"./CollapsiblePanel-DhCOByhw.js";import"./MultiColumnSortDialog-9sr6IMbJ.js";import"./MenuTrigger-NlbBKfKD.js";import"./CompositeItem-CsJuLa-c.js";import"./ToolbarRootContext-DXQuQHMp.js";import"./getDisabledMountTransitionStyles-BvcOX-OE.js";import"./getPseudoElementBounds-DBEOMWTp.js";import"./chevron-down-DIEjexWB.js";import"./index-CuMVRYrp.js";import"./error-44gbpeNf.js";import"./BaseCbacBanner-DJQheQBW.js";import"./makeExternalStore-eol4uEvM.js";import"./Tooltip-Do-q59d8.js";import"./PopoverPopup-Dqa-NJJk.js";import"./debounce-BhNEbBP_.js";import"./useOsdkClient-CsEpS7UN.js";import"./tick-DJz5yCf-.js";import"./DropdownField-rFDf7Nf9.js";import"./isEqual-CuL2lqiL.js";import"./withOsdkMetrics-BhEmmhw8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
