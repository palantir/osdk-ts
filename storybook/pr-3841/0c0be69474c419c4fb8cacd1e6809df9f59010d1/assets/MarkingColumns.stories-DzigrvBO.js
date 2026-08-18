import{f as p,j as e}from"./iframe-p9M8Eb1o.js";import{O as i}from"./object-table-BVh7yVRM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BmPKtly3.js";import"./Table-C7Hnfk7g.js";import"./index-C7HqDw_m.js";import"./Dialog-DncBo-NF.js";import"./cross-DvJLudhK.js";import"./svgIconContainer-ORV28Ze3.js";import"./useBaseUiId-44IrCziu.js";import"./InternalBackdrop-BvVIg8pG.js";import"./composite-VcTvRuc6.js";import"./index-DErAUfdw.js";import"./index-KTI1yLVe.js";import"./index-_-VNpVA1.js";import"./useEventCallback-C6mJqMK5.js";import"./SkeletonBar-DTlAHnHY.js";import"./LoadingCell-Bxbo88PR.js";import"./ColumnConfigDialog-D_x-ANcD.js";import"./DraggableList-CTNqD4VN.js";import"./search-BgxntRlT.js";import"./Input-C1Qbw3qy.js";import"./useControlled-4rsFBSOI.js";import"./Button-C6WWR2wI.js";import"./small-cross-Bd_YaqEW.js";import"./ActionButton-Chkht-BK.js";import"./Checkbox-BRtk7UqB.js";import"./useValueChanged-CQ0CbEeS.js";import"./CollapsiblePanel-C57d84wj.js";import"./MultiColumnSortDialog-B4MIhkIZ.js";import"./MenuTrigger-Bh8Crdsb.js";import"./CompositeItem-ZctO4SwH.js";import"./ToolbarRootContext-tC1th2e9.js";import"./getDisabledMountTransitionStyles-CdOWit4h.js";import"./getPseudoElementBounds-D0nkbtwp.js";import"./chevron-down-SljOnwRS.js";import"./index-C8zfpOdA.js";import"./error-qZyqYi81.js";import"./BaseCbacBanner-E_n65XpB.js";import"./makeExternalStore-BEpV-olz.js";import"./Tooltip-Dj16PZ2B.js";import"./PopoverPopup-vzbW-VJo.js";import"./debounce-2Qm8GLyy.js";import"./useOsdkClient-D7_YHw9a.js";import"./tick-BWy-f_cg.js";import"./DropdownField-DdBLMtNy.js";import"./isEqual-Crow1MAv.js";import"./withOsdkMetrics-CirbbHCI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
