import{f as p,j as e}from"./iframe-BFrg0_G6.js";import{O as i}from"./object-table-BQFGNH6O.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DCHyxNf-.js";import"./Table-ClicbuUG.js";import"./index-BbTS_0ql.js";import"./Dialog-S3hdR67Z.js";import"./cross-C40Lh1kR.js";import"./svgIconContainer-C3A4Lnit.js";import"./useBaseUiId-E-s0fCKQ.js";import"./InternalBackdrop-CVpAxoCf.js";import"./composite-Bj_txaLg.js";import"./index-Dgz7cx6a.js";import"./index-Cqvom3Bd.js";import"./index-B3ZK8qnH.js";import"./useEventCallback-Y9RnUuzz.js";import"./SkeletonBar-BaoAoEVg.js";import"./LoadingCell-Cuq1qZhv.js";import"./ColumnConfigDialog-CPlCFIe0.js";import"./DraggableList-COxbKZaT.js";import"./search-PML7rR61.js";import"./Input-BW0b3JTl.js";import"./useControlled-BXk3f0MQ.js";import"./isEqual-CM9VzvJ7.js";import"./isObject-BnbKJ4JJ.js";import"./Button-DEq5-vBs.js";import"./ActionButton-qfhKDPFU.js";import"./Checkbox-CP146FOM.js";import"./useValueChanged-DnUQ4fbh.js";import"./CollapsiblePanel-i50tYBKz.js";import"./MultiColumnSortDialog-DdkoWIgs.js";import"./MenuTrigger-bYYHu19W.js";import"./CompositeItem-Duz7YqvH.js";import"./ToolbarRootContext-y5WYMk6Y.js";import"./getDisabledMountTransitionStyles-BlMi4syj.js";import"./getPseudoElementBounds-DVJQtV8T.js";import"./chevron-down-DdY7c1tH.js";import"./index-D3rKwtfg.js";import"./error-iK44Tvf9.js";import"./BaseCbacBanner-CWwx3Afm.js";import"./makeExternalStore-9ImN4-B2.js";import"./Tooltip-C_Qc6J3-.js";import"./PopoverPopup-Xyx0b8Pc.js";import"./toNumber-BpUY5ylB.js";import"./useOsdkClient-D7WwNihV.js";import"./tick-DqBG9l3K.js";import"./DropdownField-C4PWOhQL.js";import"./withOsdkMetrics-fB2lnNbV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
