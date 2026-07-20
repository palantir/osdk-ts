import{f as p,j as e}from"./iframe-D7bSx1w3.js";import{O as i}from"./object-table-DqICFLjE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DHr4zl8o.js";import"./Table-KoqKWVdN.js";import"./index-BI7KOdly.js";import"./Dialog-DOXmE4qa.js";import"./cross-CNlF_jOJ.js";import"./svgIconContainer-CAHUqnfQ.js";import"./useBaseUiId-yYF_6EDW.js";import"./InternalBackdrop-C6I4o6gP.js";import"./composite-r3XDsHCK.js";import"./index-DDyehI4Z.js";import"./index-B4GTaVPj.js";import"./index-CHsZxX2p.js";import"./useEventCallback-p2F34cEU.js";import"./SkeletonBar-C0qNPab8.js";import"./LoadingCell-BM5nq3uo.js";import"./ColumnConfigDialog-otbHULTp.js";import"./DraggableList-Cymls1Ir.js";import"./search-_6MuPeFe.js";import"./Input-JNc6RNAw.js";import"./useControlled-6GhvlMfJ.js";import"./isEqual-C0B6gTfY.js";import"./isObject-DIIL_PaG.js";import"./Button-40Z03f6l.js";import"./ActionButton-B_fth2WG.js";import"./Checkbox-DI_FqN4w.js";import"./useValueChanged-CDDjzra1.js";import"./CollapsiblePanel-BDUv_qdU.js";import"./MultiColumnSortDialog-DdJfPqh_.js";import"./MenuTrigger-OxAeKMJE.js";import"./CompositeItem-DzV-M2cS.js";import"./ToolbarRootContext-mjTJrSyq.js";import"./getDisabledMountTransitionStyles-DXY2hqOt.js";import"./getPseudoElementBounds-CB2UGVyl.js";import"./chevron-down-BhX4T9Cq.js";import"./index-45b5ykal.js";import"./error-BZHPiTFs.js";import"./BaseCbacBanner-B-KiyM_w.js";import"./makeExternalStore-CoZYgsR6.js";import"./Tooltip-Bi2WxPQk.js";import"./PopoverPopup-DzxvPmnw.js";import"./toNumber-Bqu8RqRs.js";import"./useOsdkClient-DaMcauA-.js";import"./tick-CtNRaUJm.js";import"./DropdownField-cEcIXYpu.js";import"./withOsdkMetrics-BDmWFpPl.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
