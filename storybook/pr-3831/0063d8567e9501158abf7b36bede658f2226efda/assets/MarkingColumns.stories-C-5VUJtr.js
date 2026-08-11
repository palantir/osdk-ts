import{f as p,j as e}from"./iframe-Ba2LHmmw.js";import{O as i}from"./object-table-Dy6R_1mS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B7XB0fR8.js";import"./Table-g-0N3kvQ.js";import"./index-Di_rEjs8.js";import"./Dialog-CWlAWs2b.js";import"./cross-D_tW4Z6z.js";import"./svgIconContainer-T_6Rhm5F.js";import"./useBaseUiId-kAp3UjRK.js";import"./InternalBackdrop-EUHVbYsy.js";import"./composite-B5aXaGsd.js";import"./index-C__15Ssw.js";import"./index-DNbaFRaz.js";import"./index-Dfaz-I-s.js";import"./useEventCallback-lTWmfAeE.js";import"./SkeletonBar-EjekG6ih.js";import"./LoadingCell-Cs3S_WvF.js";import"./ColumnConfigDialog-CpjwB5oT.js";import"./DraggableList-Csd8qfYC.js";import"./search-DOVEiH9F.js";import"./Input-DYB11wZY.js";import"./useControlled-b4VWKtNW.js";import"./isEqual-Y296ziUA.js";import"./isObject-Bj8AkAg1.js";import"./Button-dXiY3Oih.js";import"./ActionButton-DBptDCp_.js";import"./Checkbox-DtB6bbQd.js";import"./useValueChanged-Bn3N2blk.js";import"./CollapsiblePanel-BZobfyJI.js";import"./MultiColumnSortDialog-Dhayd-uQ.js";import"./MenuTrigger-Dg0FM3v0.js";import"./CompositeItem-BkDvpDV-.js";import"./ToolbarRootContext-DksAfQmT.js";import"./getDisabledMountTransitionStyles-CdNG9aue.js";import"./getPseudoElementBounds-C3XJtjLS.js";import"./chevron-down-rpKQMPMV.js";import"./index--EllkZMo.js";import"./error-CAnhijT4.js";import"./BaseCbacBanner-CAmnOXyH.js";import"./makeExternalStore-vStluxin.js";import"./Tooltip-BW4XIqzG.js";import"./PopoverPopup-RHQG_Rg9.js";import"./toNumber-BRENFX6q.js";import"./useOsdkClient-ETIs1sC4.js";import"./tick-jGM_0Tj2.js";import"./DropdownField-G9ReHW4y.js";import"./withOsdkMetrics-DqTbcU1C.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
