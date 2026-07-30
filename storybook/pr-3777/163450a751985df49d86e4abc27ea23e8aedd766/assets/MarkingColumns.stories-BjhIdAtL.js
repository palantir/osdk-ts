import{f as p,j as e}from"./iframe-rq8NuSfP.js";import{O as i}from"./object-table-Tswkdilm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CvJz_IUe.js";import"./Table-CGezPmZd.js";import"./index-ysoUH_JH.js";import"./Dialog-CJZ__yxs.js";import"./cross-BBqhm1p8.js";import"./svgIconContainer-DztQZTqt.js";import"./useBaseUiId-Bf-Z0IHd.js";import"./InternalBackdrop-CQ13XFOG.js";import"./composite-sl7bgooi.js";import"./index-B7xRuMiw.js";import"./index-CsgLYqAh.js";import"./index-CeRKYrT8.js";import"./useEventCallback-0iTg9u-J.js";import"./SkeletonBar-DY0bKr4Y.js";import"./LoadingCell-oWeSLE88.js";import"./ColumnConfigDialog-DE7lnRmq.js";import"./DraggableList-DDYXjOD7.js";import"./search-DWeYn3Qn.js";import"./Input-BIVs6kpr.js";import"./useControlled-CkaqNWIl.js";import"./isEqual-D6w6eBfH.js";import"./isObject-LqGLpNGT.js";import"./Button-DuL44OIq.js";import"./ActionButton-DfS5j_S1.js";import"./Checkbox-DIVGPwHV.js";import"./useValueChanged-t2VQXlNB.js";import"./CollapsiblePanel-BlfkVDoM.js";import"./MultiColumnSortDialog-2nBkzcbh.js";import"./MenuTrigger-Cg4wjv4b.js";import"./CompositeItem-Qabrm8X6.js";import"./ToolbarRootContext-DAlNjZIe.js";import"./getDisabledMountTransitionStyles-D29qu8tE.js";import"./getPseudoElementBounds-DLMPfxRO.js";import"./chevron-down-CfpMyllA.js";import"./index-0Ykzd783.js";import"./error-D6eViXnU.js";import"./BaseCbacBanner-BFnJR_Re.js";import"./makeExternalStore-DvD94buu.js";import"./Tooltip-CS9dv8wY.js";import"./PopoverPopup-BFyAfkPc.js";import"./toNumber-BOOCVMDJ.js";import"./useOsdkClient-DbA3yZIX.js";import"./tick-Jg4GGiJ3.js";import"./DropdownField-Cbab9S3i.js";import"./withOsdkMetrics-DHFbf_VX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
