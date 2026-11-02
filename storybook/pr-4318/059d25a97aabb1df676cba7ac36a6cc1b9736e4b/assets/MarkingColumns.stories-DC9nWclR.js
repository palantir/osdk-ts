import{f as p,j as e}from"./iframe-gwjWh6aP.js";import{O as i}from"./object-table-DG0XU0Qa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-bIyT3R7b.js";import"./Table-CqQWX-38.js";import"./index-B2e6YLgb.js";import"./Dialog-B752LhdZ.js";import"./cross-CxSJV-iM.js";import"./svgIconContainer-uf6Xe766.js";import"./useBaseUiId-MuGd9EbB.js";import"./InternalBackdrop-Be_icURP.js";import"./composite-XNngWcyG.js";import"./index-C2Xm0Ig8.js";import"./index-CctUI8eo.js";import"./index-DqPPge5H.js";import"./useEventCallback-g73YrOE1.js";import"./SkeletonBar-MPFiyDqC.js";import"./LoadingCell-CSktdyFh.js";import"./ColumnConfigDialog-BiRQ2H7x.js";import"./DraggableList-BSD24ZFv.js";import"./search-77UZhWyC.js";import"./Input-B14JiyW9.js";import"./useControlled-BRAT0rWw.js";import"./Button-DYsrDr-V.js";import"./small-cross-DFJo2BXV.js";import"./ActionButton-DUFTPwmt.js";import"./Checkbox-BGGgt2SZ.js";import"./useValueChanged-Cq6kIfvu.js";import"./CollapsiblePanel-zc_GBnu-.js";import"./MultiColumnSortDialog-DB-NI1_-.js";import"./MenuTrigger-J5s3L2h9.js";import"./CompositeItem-B632hz3W.js";import"./ToolbarRootContext-eiDeLXye.js";import"./getDisabledMountTransitionStyles-CdwEI3h2.js";import"./getPseudoElementBounds-Cors6fEL.js";import"./chevron-down-Bpsf2br_.js";import"./index-BjKGneLm.js";import"./error-CG0c4OaM.js";import"./BaseCbacBanner-BwibHyrW.js";import"./makeExternalStore-DOMUefpT.js";import"./Tooltip-a4Yw_fKw.js";import"./PopoverPopup-gtrR7YRy.js";import"./debounce-nVQqP8JB.js";import"./useOsdkClient-DKJIj3oZ.js";import"./tick-mEiPhkv2.js";import"./DropdownField-Du154yBU.js";import"./isEqual-B4RlLHXD.js";import"./withOsdkMetrics-CT1e8NKK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
