import{f as p,j as e}from"./iframe-Bet7ZyCm.js";import{O as i}from"./object-table-BHp0fNyR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BUkBrZyY.js";import"./Table-B00XKz94.js";import"./index-DjVLxSFI.js";import"./Dialog-DTj3vbjE.js";import"./cross-BeELKFUT.js";import"./svgIconContainer-Barh-7SS.js";import"./useBaseUiId-CsxMin3O.js";import"./InternalBackdrop-CFlTUOfK.js";import"./composite-CRapEzeJ.js";import"./index-Dbf65m0z.js";import"./index-BTuCJIed.js";import"./index-Bfbp3vAN.js";import"./useEventCallback-CpGQqYvl.js";import"./SkeletonBar-lHRA8dS5.js";import"./LoadingCell-DWpMPAwG.js";import"./ColumnConfigDialog-nwuPe0vP.js";import"./DraggableList-B0h0wQfI.js";import"./search-DarFPo_N.js";import"./Input-C3dR_yK9.js";import"./useControlled-COCV5_w3.js";import"./Button-DA30xwtA.js";import"./small-cross-B5QztEfo.js";import"./ActionButton-BM2eOm48.js";import"./Checkbox-DN_g8-MN.js";import"./useValueChanged-BjBXj4B6.js";import"./CollapsiblePanel-E1_rckeS.js";import"./MultiColumnSortDialog-klGrbSD-.js";import"./MenuTrigger-CBMq_vc-.js";import"./CompositeItem-DTquphkU.js";import"./ToolbarRootContext-DNj0Wk9x.js";import"./getDisabledMountTransitionStyles-BLmiHtZa.js";import"./getPseudoElementBounds-D1bAAr1-.js";import"./chevron-down-5KX1Vgx1.js";import"./index-BcSOkjj6.js";import"./error-Y0ypiKIG.js";import"./BaseCbacBanner-CJzsHRT4.js";import"./makeExternalStore-BZZ89cDU.js";import"./Tooltip-BioUBHfR.js";import"./PopoverPopup-B0mVV_R3.js";import"./debounce-BHN0rKBM.js";import"./useOsdkClient-DFdeM1ww.js";import"./tick-DK1jZqTe.js";import"./DropdownField-DZGUXtRJ.js";import"./isEqual-o-GlHQCT.js";import"./withOsdkMetrics-8BIUQCxd.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
