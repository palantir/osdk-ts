import{f as p,j as e}from"./iframe-CA9r65OT.js";import{O as i}from"./object-table-B8U5n0B0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-tCbzRVEA.js";import"./Table-DAotaee0.js";import"./index-3l5n5zjF.js";import"./Dialog-dxbEVI1S.js";import"./cross-BIMMbybY.js";import"./svgIconContainer-CoGSYZNF.js";import"./useBaseUiId-BMe3a5v7.js";import"./InternalBackdrop-B4C5I1Ho.js";import"./composite-DIPm2o_P.js";import"./index-DHaBnaKt.js";import"./index-CllE9Qij.js";import"./index-D3FVanjb.js";import"./useEventCallback-DPVdHCWX.js";import"./SkeletonBar-D7_R5qne.js";import"./LoadingCell-C7J2dC-w.js";import"./ColumnConfigDialog-CDDpuOLV.js";import"./DraggableList-zXzt7i12.js";import"./search-eEATc8rI.js";import"./Input-Bb9nnqm9.js";import"./useControlled-sJGz_czO.js";import"./isEqual-DGMepfsm.js";import"./isObject-oVKSF72a.js";import"./Button-sRGu_cmJ.js";import"./ActionButton-DE8ds1n2.js";import"./Checkbox-C84oN_DZ.js";import"./useValueChanged-x5vBhK6F.js";import"./CollapsiblePanel-BChWOjny.js";import"./MultiColumnSortDialog-CjR0tA4p.js";import"./MenuTrigger-aTtvxf_3.js";import"./CompositeItem-TexNzlTU.js";import"./ToolbarRootContext-g-i8chAa.js";import"./getDisabledMountTransitionStyles-CBaC_3nC.js";import"./getPseudoElementBounds--2ZRF7Zv.js";import"./chevron-down-DgvdmvON.js";import"./index-CDue3-ep.js";import"./error-DnvhBUUT.js";import"./BaseCbacBanner-DK_I6jXP.js";import"./makeExternalStore-DVNiFfiz.js";import"./Tooltip-BYu8SX18.js";import"./PopoverPopup-1bgkwxU4.js";import"./toNumber-DuxtyrCo.js";import"./useOsdkClient-BD7qovSJ.js";import"./tick-Ckzjqq_z.js";import"./DropdownField-B_MVsZV9.js";import"./withOsdkMetrics-MvKispNs.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
