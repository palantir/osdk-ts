import{f as p,j as e}from"./iframe-Cd5diGA4.js";import{O as i}from"./object-table-DK-Vk0K8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BVhb1VDS.js";import"./index-CzM4WAmt.js";import"./Dialog-SqqO26FL.js";import"./cross-ButwHlHJ.js";import"./svgIconContainer-DaB2_UOp.js";import"./useBaseUiId-visX6u-_.js";import"./InternalBackdrop-BH_ajHFZ.js";import"./composite-CvjMA8y2.js";import"./index-DAgKjLrT.js";import"./index-Y3NM_UBm.js";import"./index-B-PHEzSN.js";import"./useEventCallback-gcr9TNzx.js";import"./SkeletonBar-BLoGGC6L.js";import"./LoadingCell-DFlWXzkK.js";import"./ColumnConfigDialog-COxdtVMj.js";import"./DraggableList-B-3f11gE.js";import"./search-Dn_Ud8yw.js";import"./Input-BTdSlwyz.js";import"./useControlled-BM2rkvMt.js";import"./Button-CqfMgiGG.js";import"./small-cross-D8C9SWIq.js";import"./ActionButton-D1mJzJ86.js";import"./Checkbox-DH-ovV7p.js";import"./useValueChanged-BwYeNo1h.js";import"./CollapsiblePanel-Df68r8NJ.js";import"./MultiColumnSortDialog-moChkA17.js";import"./MenuTrigger-Cx_EZ4Jt.js";import"./CompositeItem-Bud6cqZd.js";import"./ToolbarRootContext-BsB0g93g.js";import"./getDisabledMountTransitionStyles-BvKshnXk.js";import"./getPseudoElementBounds-BJZWWLa0.js";import"./chevron-down-BxrXgsF8.js";import"./index-BqTfBsD7.js";import"./error-BudjlwPt.js";import"./BaseCbacBanner-CzbfxawI.js";import"./makeExternalStore-CFuKSi4I.js";import"./Tooltip-2UDphehv.js";import"./PopoverPopup-CkIT-hq_.js";import"./debounce-DpmfyqFC.js";import"./useOsdkClient-DNLZbnGw.js";import"./tick-B8kZrpYx.js";import"./DropdownField-Bg6DPx3N.js";import"./isEqual-BA5U0Dg4.js";import"./withOsdkMetrics-C_0Aw4CV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
