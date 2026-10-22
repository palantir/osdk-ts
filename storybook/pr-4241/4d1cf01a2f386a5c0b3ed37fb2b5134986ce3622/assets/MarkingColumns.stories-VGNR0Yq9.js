import{f as p,j as e}from"./iframe-DfEkohu4.js";import{O as i}from"./object-table-BN1-u8MV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DFhwYWPX.js";import"./Table-D2cJLHUH.js";import"./index-BScMX4pI.js";import"./Dialog-DcZzoWRJ.js";import"./cross-BPfWpbhR.js";import"./svgIconContainer-52IA31OT.js";import"./useBaseUiId-B77SsLeT.js";import"./InternalBackdrop-DXqBVLJs.js";import"./composite-Bps_FR72.js";import"./index-JsvBI6N5.js";import"./index-DeVDv3z2.js";import"./index-hIEvmrlT.js";import"./useEventCallback-DfD6b3pP.js";import"./SkeletonBar-DVdvzFwN.js";import"./LoadingCell-C83u4qPQ.js";import"./ColumnConfigDialog-BnmliCoh.js";import"./DraggableList-89VWJX01.js";import"./search-B6VKD1Dj.js";import"./Input-BPcgfpFu.js";import"./useControlled-BtbuRmOW.js";import"./Button-hRgK4Dbu.js";import"./small-cross-DDNeE2US.js";import"./ActionButton-BGdEaaKW.js";import"./Checkbox-DBVre3dS.js";import"./useValueChanged-DA_n1_wF.js";import"./CollapsiblePanel-Cfd-QJkm.js";import"./MultiColumnSortDialog-ezrWLSmU.js";import"./MenuTrigger-6H-bl2y6.js";import"./CompositeItem-Efavp-9X.js";import"./ToolbarRootContext-CElxzA4r.js";import"./getDisabledMountTransitionStyles-BYqMdHQa.js";import"./getPseudoElementBounds-ibDNbMG2.js";import"./chevron-down-BPKdn-wb.js";import"./index-CFbhSp4o.js";import"./error-CvHPy682.js";import"./BaseCbacBanner-LKGdtPKp.js";import"./makeExternalStore-D77TIE_F.js";import"./Tooltip-CU1xiDOq.js";import"./PopoverPopup-uQDnUDEP.js";import"./debounce-CtoYG2yf.js";import"./useOsdkClient-CcG1MUqc.js";import"./tick-CjKE3w4f.js";import"./DropdownField-BqAebNxN.js";import"./isEqual-DyTTXjjH.js";import"./withOsdkMetrics-CSBiz8Z-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
