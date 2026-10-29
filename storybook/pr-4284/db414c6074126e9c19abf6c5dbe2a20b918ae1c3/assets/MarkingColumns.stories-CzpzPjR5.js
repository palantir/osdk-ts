import{f as p,j as e}from"./iframe-D3RqEcTg.js";import{O as i}from"./object-table-CjXauAQL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DEJIs2kk.js";import"./Table-D7FfGSt7.js";import"./index-Cbcna1KE.js";import"./Dialog-BUBSwhuB.js";import"./cross-CX1s17MX.js";import"./svgIconContainer-BFc_5UUB.js";import"./useBaseUiId-DzPouJ0p.js";import"./InternalBackdrop-Pm2S-c0l.js";import"./composite-LUqhuSI5.js";import"./index-C44NzcrV.js";import"./index-C2bdh9HG.js";import"./index-M7M1iWSs.js";import"./useEventCallback-gPsZT7qj.js";import"./SkeletonBar-CfBbo7kP.js";import"./LoadingCell-Bowo7-Vs.js";import"./ColumnConfigDialog-B0leskOm.js";import"./DraggableList-CLZMZbcA.js";import"./search-CqjQ6sEq.js";import"./Input-D6dyl9HO.js";import"./useControlled-CImu19gq.js";import"./Button-BcgwRa4F.js";import"./small-cross-CQsBQ66b.js";import"./ActionButton-DZXFI6ev.js";import"./Checkbox-W7WDR_Ca.js";import"./useValueChanged-CnBcuDv8.js";import"./CollapsiblePanel-DATqTs4G.js";import"./MultiColumnSortDialog-CmIRUWaB.js";import"./MenuTrigger-QvRoMfa4.js";import"./CompositeItem-DtKWkFxx.js";import"./ToolbarRootContext-DAdYN5ZS.js";import"./getDisabledMountTransitionStyles-3vJ9NXW6.js";import"./getPseudoElementBounds-2PfQFQkg.js";import"./chevron-down-CejxcKWv.js";import"./index-B6gngHYt.js";import"./error-CTTKBYvP.js";import"./BaseCbacBanner-CL1MugFe.js";import"./makeExternalStore-DTiablUL.js";import"./Tooltip-DsSzQZ3B.js";import"./PopoverPopup-RBpjqEC9.js";import"./debounce-1JchkNCt.js";import"./useOsdkClient-CYgwmGPG.js";import"./tick-BwpcUkSk.js";import"./DropdownField-BItMWDAM.js";import"./isEqual-BI5ezawU.js";import"./withOsdkMetrics-CVWMc52B.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
