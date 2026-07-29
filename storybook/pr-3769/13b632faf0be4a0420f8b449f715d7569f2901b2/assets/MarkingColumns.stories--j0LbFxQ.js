import{f as p,j as e}from"./iframe-CSumVy5B.js";import{O as i}from"./object-table-Bl8NxYhb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CBombYiI.js";import"./Table-BLnnkm8J.js";import"./index-DQ45Rr9-.js";import"./Dialog-DkZ_yJmU.js";import"./cross-Db0Tmz8n.js";import"./svgIconContainer-CtPAyXoD.js";import"./useBaseUiId-DRFCB_IR.js";import"./InternalBackdrop-B7eXhqDx.js";import"./composite-Dw2E63KR.js";import"./index-ClUgQiOR.js";import"./index-Cqhmw3j4.js";import"./index-qO8uI0qZ.js";import"./useEventCallback-D_ATAylI.js";import"./SkeletonBar-BkpJk7mB.js";import"./LoadingCell-Ccz12-DM.js";import"./ColumnConfigDialog-BMtFrbjb.js";import"./DraggableList-D8qLNXOP.js";import"./search-CdDv8eEf.js";import"./Input-BDuVWvkz.js";import"./useControlled-CG83hz7Q.js";import"./isEqual-NDxDjbhg.js";import"./isObject-CeUm-6WI.js";import"./Button-bqCpVfIv.js";import"./ActionButton-B27y8uaN.js";import"./Checkbox-hIJ2dKTg.js";import"./useValueChanged-CoFQDzs-.js";import"./CollapsiblePanel-BtD1yVpg.js";import"./MultiColumnSortDialog-BSR7QXpa.js";import"./MenuTrigger-BJV1-YTX.js";import"./CompositeItem-Dn5e_dwj.js";import"./ToolbarRootContext-ByQ5hSPJ.js";import"./getDisabledMountTransitionStyles-Cc1k6J-a.js";import"./getPseudoElementBounds-Yza0u5Gv.js";import"./chevron-down-DgqRz-6y.js";import"./index-DKCFta18.js";import"./error-YEXOSncq.js";import"./BaseCbacBanner-CCmKu2-W.js";import"./makeExternalStore-CSPbLBzs.js";import"./Tooltip-fesy7LJ_.js";import"./PopoverPopup-4ar7d7vN.js";import"./toNumber-BS1D0Nfz.js";import"./useOsdkClient-7V-ddhhv.js";import"./tick-C-DdUab-.js";import"./DropdownField-CclbFd0n.js";import"./withOsdkMetrics-D03-ZDAS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
