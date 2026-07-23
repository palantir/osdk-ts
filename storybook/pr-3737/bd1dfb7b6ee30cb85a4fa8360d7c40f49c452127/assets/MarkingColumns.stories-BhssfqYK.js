import{f as p,j as e}from"./iframe-iqQU8bOf.js";import{O as i}from"./object-table-CLGuzBvK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BsUPb6pd.js";import"./Table-BvjcAQ1n.js";import"./index-CqiIIsfb.js";import"./Dialog-D8UQASn9.js";import"./cross-BerI_bTK.js";import"./svgIconContainer-BNsXYGV2.js";import"./useBaseUiId-CpmA_-bG.js";import"./InternalBackdrop-CVRFuPTa.js";import"./composite-DdOT0bda.js";import"./index-CGAj3FTo.js";import"./index-BTBXmSST.js";import"./index-CQuthkbU.js";import"./useEventCallback-2CRWEol-.js";import"./SkeletonBar-CW-zZ-1l.js";import"./LoadingCell-D9s6QbDP.js";import"./ColumnConfigDialog-D9auHLbs.js";import"./DraggableList-B--3EQEp.js";import"./search-CaykVUN2.js";import"./Input-BRlYFZYm.js";import"./useControlled-DJ8i4enG.js";import"./isEqual-M1ueKsIc.js";import"./isObject-m-8uk5lt.js";import"./Button-DJTByFtP.js";import"./ActionButton-BcPc25rY.js";import"./Checkbox-L58W5cer.js";import"./useValueChanged-DKI8DEgp.js";import"./CollapsiblePanel-CBqaiLbh.js";import"./MultiColumnSortDialog-BIxsHsWK.js";import"./MenuTrigger-CutPpTa2.js";import"./CompositeItem-cDtNESeM.js";import"./ToolbarRootContext-BBwxdbAq.js";import"./getDisabledMountTransitionStyles-BLE9Dl1n.js";import"./getPseudoElementBounds-mTQudAgY.js";import"./chevron-down-Clf6HxH4.js";import"./index-CqkT5pyQ.js";import"./error-BwFxT3aH.js";import"./BaseCbacBanner-j46F3evV.js";import"./makeExternalStore-CKVk4GKk.js";import"./Tooltip-8UlSd3jK.js";import"./PopoverPopup-BIpN2UoJ.js";import"./toNumber-D00XgMT3.js";import"./useOsdkClient-DDjfUp_X.js";import"./tick-H9zxDrWg.js";import"./DropdownField-BnJB5e9x.js";import"./withOsdkMetrics-b_xHbubF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
