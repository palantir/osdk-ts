import{f as p,j as e}from"./iframe-aQAIw_3-.js";import{O as i}from"./object-table-DcHtnvGe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ZDTqDVO_.js";import"./Table-Dl5LPL1a.js";import"./index-DaWd5O5v.js";import"./Dialog-Bl4c3FQp.js";import"./cross-BXTno_VG.js";import"./svgIconContainer-CePYB0_T.js";import"./useBaseUiId-CWIhd6Nv.js";import"./InternalBackdrop-LVF9Ssvv.js";import"./composite-DbUcyt93.js";import"./index-DdH8CnPR.js";import"./index-ClZezG6o.js";import"./index-CWai-6aj.js";import"./useEventCallback-DOrtOegb.js";import"./SkeletonBar-D1dEKUj7.js";import"./LoadingCell-Chsjw17C.js";import"./ColumnConfigDialog-CWAECfPd.js";import"./DraggableList-mWEfjWBN.js";import"./search-CdQNNz22.js";import"./Input-DEN1u1P9.js";import"./useControlled-BlKxZEkk.js";import"./isEqual-CnXFHm7Z.js";import"./isObject-BZOswVC5.js";import"./Button-BtxgosDP.js";import"./ActionButton-DhyE-LOc.js";import"./Checkbox-D3pnOmpY.js";import"./useValueChanged-DBm4naRE.js";import"./CollapsiblePanel-DEKQ99su.js";import"./MultiColumnSortDialog-BV6HxBns.js";import"./MenuTrigger-D9kHzECt.js";import"./CompositeItem-Ddo_55VS.js";import"./ToolbarRootContext-Cflj_kFN.js";import"./getDisabledMountTransitionStyles-BJTD6HWT.js";import"./getPseudoElementBounds-6XUoHijT.js";import"./chevron-down-CzxinWJb.js";import"./index-CWJETYPl.js";import"./error-RXslMkWs.js";import"./BaseCbacBanner-D7Eu0qgO.js";import"./makeExternalStore-Behu0ErP.js";import"./Tooltip-_QtNXbR8.js";import"./PopoverPopup-Bcj1bqLs.js";import"./toNumber-BcNXX6T4.js";import"./useOsdkClient-CpmzF59v.js";import"./tick-DjBy5-HU.js";import"./DropdownField-CQsdnz5O.js";import"./withOsdkMetrics-DDGPYtIX.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
