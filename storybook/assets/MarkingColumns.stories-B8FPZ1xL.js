import{f as p,j as e}from"./iframe-DqbKZIsj.js";import{O as i}from"./object-table-CR-UP_kA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BaHtU0D_.js";import"./index-CVHMDurZ.js";import"./Dialog-Cv8zaBKu.js";import"./cross-Z2gUdKwX.js";import"./svgIconContainer-C4ng68oA.js";import"./useBaseUiId-BxNdDlhM.js";import"./InternalBackdrop-BejVrM6e.js";import"./composite-CX6gxRms.js";import"./index-DtlYlCBm.js";import"./index-BUCimpxE.js";import"./index-aYLuQAZl.js";import"./useEventCallback-LvBJYhlK.js";import"./SkeletonBar-DhzNvacg.js";import"./LoadingCell-CDhooj-2.js";import"./ColumnConfigDialog-BKZebYiT.js";import"./DraggableList-BwF4LDSf.js";import"./search-ufs3MxrA.js";import"./Input-DmzqPdUu.js";import"./useControlled-C0WeE-L2.js";import"./Button-BC-fUx3I.js";import"./small-cross-CsjkfVfk.js";import"./ActionButton-DHfZ5rN_.js";import"./Checkbox-30y4v_I4.js";import"./useValueChanged-DHt_F6Hq.js";import"./CollapsiblePanel-7ZJCLX4Q.js";import"./MultiColumnSortDialog-7cpJmSbW.js";import"./MenuTrigger-Cnb-E0TQ.js";import"./CompositeItem-D-1eywNB.js";import"./ToolbarRootContext-oWhh6x6s.js";import"./getDisabledMountTransitionStyles-DvpJWcms.js";import"./getPseudoElementBounds-2xfbxDVQ.js";import"./chevron-down-B6ifOWAI.js";import"./index-BAbFdJDq.js";import"./error-Deq2jp5x.js";import"./BaseCbacBanner-DZtkZFYO.js";import"./makeExternalStore-u9ldSa0C.js";import"./Tooltip-brJy3d_r.js";import"./PopoverPopup-BRb7_hfX.js";import"./toNumber-CyExNU-I.js";import"./useOsdkClient-QdLqV_Hm.js";import"./tick-CwDsMdmM.js";import"./DropdownField-4Su-OStc.js";import"./withOsdkMetrics-BY3qMARX.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
