import{f as p,j as e}from"./iframe-bDlOvzCD.js";import{O as i}from"./object-table-Dl2lCGNZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BAmM5hSy.js";import"./index-VT2sHwDI.js";import"./Dialog-BzJJmA8W.js";import"./cross-TUS4Q6Ao.js";import"./svgIconContainer-Bqi1VJi0.js";import"./useBaseUiId-B2slyOHM.js";import"./InternalBackdrop-CRh9Bcm2.js";import"./composite-Dfe6WZ9B.js";import"./index-DP9iJ9Qp.js";import"./index-CGDkVQ7s.js";import"./index-_S-PXd8B.js";import"./useEventCallback-DZd0sCPQ.js";import"./SkeletonBar-DXXr_uD3.js";import"./LoadingCell-DwSKG4eX.js";import"./ColumnConfigDialog-deoJ9G1I.js";import"./DraggableList--_2oR74E.js";import"./search-Dh1zBfzB.js";import"./Input-CNxZ13Ar.js";import"./useControlled-5EwHNZlm.js";import"./Button-LYMOgFpv.js";import"./small-cross-iJKFa-ZD.js";import"./ActionButton-BXC4EPx5.js";import"./Checkbox-ilOHd6bp.js";import"./useValueChanged-DzFKc6r-.js";import"./CollapsiblePanel-ClrnquSS.js";import"./MultiColumnSortDialog-juD7Sd67.js";import"./MenuTrigger-CsbizqWt.js";import"./CompositeItem-I6D1Ck1D.js";import"./ToolbarRootContext-BvOSFjrz.js";import"./getDisabledMountTransitionStyles-CwJ-KzBN.js";import"./getPseudoElementBounds-BUF_kUes.js";import"./chevron-down-G50mjwg6.js";import"./index-DjjoI3KK.js";import"./error-DgyisaaS.js";import"./BaseCbacBanner-DqA6kCfr.js";import"./makeExternalStore-Oc969Yyb.js";import"./Tooltip-Cst3xVOs.js";import"./PopoverPopup-jWpQQnI7.js";import"./debounce-DjjsE8t-.js";import"./useOsdkClient-DqxOv284.js";import"./tick-DLToHhDG.js";import"./DropdownField-CeLtBIVJ.js";import"./isEqual-C7rAeOqh.js";import"./withOsdkMetrics-BflEGh-H.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
