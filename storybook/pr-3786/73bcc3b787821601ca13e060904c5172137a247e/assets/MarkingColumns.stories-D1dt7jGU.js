import{f as p,j as e}from"./iframe-uyk0mCUp.js";import{O as i}from"./object-table-BTyYwJG6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DUkoerkJ.js";import"./Table-DrTTbu2q.js";import"./index-cNyJXSMp.js";import"./Dialog-DZUm8P7v.js";import"./cross-CFwh4iO6.js";import"./svgIconContainer-B7m6z2vX.js";import"./useBaseUiId-BRAYv9TN.js";import"./InternalBackdrop-BMCnvbv2.js";import"./composite-D9L4RBPJ.js";import"./index-COpefVFT.js";import"./index-ClQrFhrN.js";import"./index-5_B92b-6.js";import"./useEventCallback-DbLpAI-e.js";import"./SkeletonBar-BAagPvkY.js";import"./LoadingCell-BBRk3sl4.js";import"./ColumnConfigDialog-BY47kZd1.js";import"./DraggableList-D3hB1ejD.js";import"./search-C-V8Xqsq.js";import"./Input-OnWCQOx0.js";import"./useControlled-BFcXAkHj.js";import"./isEqual-BHPC-lv4.js";import"./isObject-DBijMYtE.js";import"./Button-COieJLVA.js";import"./ActionButton-Cb7KVMxo.js";import"./Checkbox-nUU4UOCK.js";import"./useValueChanged-DXmh0cT4.js";import"./CollapsiblePanel-C8NvxIBZ.js";import"./MultiColumnSortDialog-Bd1Ffmvt.js";import"./MenuTrigger-c9FhZmLK.js";import"./CompositeItem-pCeGSAYO.js";import"./ToolbarRootContext-DI0UYGrF.js";import"./getDisabledMountTransitionStyles-Dansh3cO.js";import"./getPseudoElementBounds-BhVF9B8d.js";import"./chevron-down-C3FX5T-R.js";import"./index-BY1UeHqx.js";import"./error-Dwadp2yn.js";import"./BaseCbacBanner-B5u1VnT7.js";import"./makeExternalStore-gyq_4DLC.js";import"./Tooltip-CDYEbWwI.js";import"./PopoverPopup-DGuzh4yZ.js";import"./toNumber-D5_GPrTk.js";import"./useOsdkClient-Cn6Hv8Xo.js";import"./tick-DEmqx1VC.js";import"./DropdownField-jQDwsq8u.js";import"./withOsdkMetrics-D2afrcgu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
