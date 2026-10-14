import{f as p,j as e}from"./iframe-CIXJ1U8N.js";import{O as i}from"./object-table-DtBNFrGy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CgAbFwMM.js";import"./Table-ujY_3q3Y.js";import"./index-2fupTi2T.js";import"./Dialog-CtKlx1EH.js";import"./cross-C_OpOp6J.js";import"./svgIconContainer-Huhb1Vpv.js";import"./useBaseUiId-CSHKQrix.js";import"./InternalBackdrop-BB_NyzKQ.js";import"./composite-CkH4ezLi.js";import"./index-Cj3EoK94.js";import"./index-BD3Sluvn.js";import"./index-CMU6jwvj.js";import"./useEventCallback-BAb1tGXb.js";import"./SkeletonBar-DWlwxS8c.js";import"./LoadingCell-RhYunsw8.js";import"./ColumnConfigDialog-CA_BQylr.js";import"./DraggableList-QR-30KqF.js";import"./search-C5_KVz48.js";import"./Input-BNqEEzus.js";import"./useControlled-Bxgh_fPL.js";import"./Button-B0yxaPGE.js";import"./small-cross-DqpTtCsd.js";import"./ActionButton-P6WNwUke.js";import"./Checkbox-DdW4Dgwk.js";import"./useValueChanged-9P5wqA7j.js";import"./CollapsiblePanel-BvJiT584.js";import"./MultiColumnSortDialog-njBKOwpR.js";import"./MenuTrigger-DL4uNTPf.js";import"./CompositeItem-lWchzb2t.js";import"./ToolbarRootContext-R5s0J2Ul.js";import"./getDisabledMountTransitionStyles-Bdjcrdfd.js";import"./getPseudoElementBounds-BIDolQ8Z.js";import"./chevron-down-7pDp1Oma.js";import"./index-Cy-OTb6Y.js";import"./error-DmS7Y91z.js";import"./BaseCbacBanner-CdsEDBi4.js";import"./makeExternalStore-Dq-OkEYB.js";import"./Tooltip-IZXR1Hew.js";import"./PopoverPopup-SRPRdtkN.js";import"./debounce--Eb71UVP.js";import"./useOsdkClient-hryzPEYC.js";import"./tick-CbF9d7YO.js";import"./DropdownField-BjlvHhR7.js";import"./isEqual-D-5hfkVh.js";import"./withOsdkMetrics-D0zzaBUz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
