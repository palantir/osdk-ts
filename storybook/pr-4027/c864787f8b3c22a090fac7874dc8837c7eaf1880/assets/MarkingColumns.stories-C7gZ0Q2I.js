import{f as p,j as e}from"./iframe-Cmp4Wz_P.js";import{O as i}from"./object-table-BPdeyYsH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Da0vPE9s.js";import"./Table-DNUmj-uA.js";import"./index-xjnGmoVb.js";import"./Dialog-DuVE7T5Z.js";import"./cross-Cpc_V52N.js";import"./svgIconContainer-Clw7VTOr.js";import"./useBaseUiId-BcNPDCTs.js";import"./InternalBackdrop-eb4yl9Hp.js";import"./composite-hwQ1nQqf.js";import"./index-DCv1fgBH.js";import"./index-C0uAgYnw.js";import"./index-CoENTDGw.js";import"./useEventCallback-DuquQoKZ.js";import"./SkeletonBar-DFEJB6KG.js";import"./LoadingCell-DRsdLwys.js";import"./ColumnConfigDialog-BnFADnlc.js";import"./DraggableList-YiYJFEtj.js";import"./search-DwQ9m9I4.js";import"./Input-Dxt6Zigl.js";import"./useControlled-CRN5n83g.js";import"./Button-CjafA2QB.js";import"./small-cross-DEp431Nj.js";import"./ActionButton-BC90jPtT.js";import"./Checkbox-CgFZ_Aad.js";import"./useValueChanged-DQAltEsb.js";import"./CollapsiblePanel-DSx0PiCY.js";import"./MultiColumnSortDialog-CJP6cm7P.js";import"./MenuTrigger--u72VZFy.js";import"./CompositeItem-CC2Ai5yy.js";import"./ToolbarRootContext-_b46dMtv.js";import"./getDisabledMountTransitionStyles-CSh_Lmpf.js";import"./getPseudoElementBounds-BZ5_UdIs.js";import"./chevron-down-DQjw3lMC.js";import"./index-DLqh48ip.js";import"./error-BUufFz3W.js";import"./BaseCbacBanner-BhaFZekH.js";import"./makeExternalStore-C1wNmiU_.js";import"./Tooltip-DCubWUo4.js";import"./PopoverPopup-qOkFvw8W.js";import"./debounce-eMFzGMlT.js";import"./useOsdkClient-fBoD-PC4.js";import"./tick-CevBPgG7.js";import"./DropdownField-dSwdlAau.js";import"./isEqual-Cb-GYmP-.js";import"./withOsdkMetrics-t52t2MsY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
