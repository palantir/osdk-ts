import{f as p,j as e}from"./iframe-C5CLXfWS.js";import{O as i}from"./object-table-B8Yj1udP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CmQDAWyb.js";import"./Table-BRmy04Uy.js";import"./index-DtGlOU-M.js";import"./Dialog-Danu4XaP.js";import"./cross-B3o49gy1.js";import"./svgIconContainer-BIzzh223.js";import"./useBaseUiId-CqeeK3OI.js";import"./InternalBackdrop-KXNey9yS.js";import"./composite-B3s1Z_B-.js";import"./index-BXJypcxy.js";import"./index-DGZrjFba.js";import"./index-Bj1EDllN.js";import"./useEventCallback-CYKoO3bJ.js";import"./SkeletonBar-DJb7Lu6W.js";import"./LoadingCell-C8UIseRW.js";import"./ColumnConfigDialog-Cvjl-BoI.js";import"./DraggableList-CyvyTj6Q.js";import"./search-aAg3Ft0P.js";import"./Input-D-cxIIFp.js";import"./useControlled-CzKtgw0j.js";import"./Button-W3Mp6JlA.js";import"./small-cross-B2iIdYeI.js";import"./ActionButton-DJweMjUH.js";import"./Checkbox-BcjmR6da.js";import"./useValueChanged-CJyGnTsK.js";import"./CollapsiblePanel-SGmn3J0J.js";import"./MultiColumnSortDialog-jnhFZAk_.js";import"./MenuTrigger-BdAsiuB8.js";import"./CompositeItem-Dx1-4fNK.js";import"./ToolbarRootContext-Bvt9zfPy.js";import"./getDisabledMountTransitionStyles-CS5zUVVl.js";import"./getPseudoElementBounds-DjH8mNuQ.js";import"./chevron-down-k0OiGtOZ.js";import"./index-CaADRcIm.js";import"./error-aTWH99uz.js";import"./BaseCbacBanner-DFCES3sy.js";import"./makeExternalStore-BfuCy0xW.js";import"./Tooltip-ClnzFWaz.js";import"./PopoverPopup-Dll2LQIE.js";import"./debounce-CAC4DZOe.js";import"./useOsdkClient-lAi3FL1U.js";import"./tick-BDZpZu1S.js";import"./DropdownField-DaRMR6LA.js";import"./isEqual-ZgcjThM9.js";import"./withOsdkMetrics-BjF1sUNW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
