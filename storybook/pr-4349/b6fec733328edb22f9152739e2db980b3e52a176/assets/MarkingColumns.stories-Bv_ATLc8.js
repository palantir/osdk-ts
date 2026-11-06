import{f as p,j as e}from"./iframe-6rmEYQ4q.js";import{O as i}from"./object-table-C3g8Rgsf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CQFwNwom.js";import"./Table-DUEsztjk.js";import"./index-DHYmSSVn.js";import"./Dialog-B4_gKkCj.js";import"./cross-D-Hg8nzG.js";import"./svgIconContainer-BTOejcjp.js";import"./useBaseUiId-DutMLbwr.js";import"./InternalBackdrop-DgOuuiso.js";import"./composite-6RMh68ZK.js";import"./index-DTFmmgtm.js";import"./index--7GUs8pc.js";import"./index-Cushj5su.js";import"./useEventCallback-Byxoa0dh.js";import"./SkeletonBar-DOUZ-mE8.js";import"./LoadingCell-5tJCvwxm.js";import"./ColumnConfigDialog-DmAEs3Ph.js";import"./DraggableList-BazWYHtA.js";import"./search-BHn0KTJN.js";import"./Input-DHCuHilz.js";import"./useControlled-HeurI7_b.js";import"./Button-B5wqsid8.js";import"./small-cross-CHICJ2XI.js";import"./ActionButton-BV9UuRgT.js";import"./Checkbox-DlXCmFqY.js";import"./useValueChanged-DNZRcsJs.js";import"./CollapsiblePanel-CDBbZZyU.js";import"./MultiColumnSortDialog-DvErCYRD.js";import"./MenuTrigger-BIbOF5Wa.js";import"./CompositeItem-DuBtWhAd.js";import"./ToolbarRootContext-4ImLkhxO.js";import"./getDisabledMountTransitionStyles-B3ra-kQw.js";import"./getPseudoElementBounds-DlcOVO-y.js";import"./chevron-down-DJM0Z3o9.js";import"./index-O1VLMwtD.js";import"./error-D2aG_W_b.js";import"./BaseCbacBanner-Cr9-xR0n.js";import"./makeExternalStore-D4L5Wrb5.js";import"./Tooltip-C2F6IU3H.js";import"./isObject-SiaksReL.js";import"./debounce-fovSx1xM.js";import"./useOsdkClient-DmHqy9pL.js";import"./tick-qf7hH7wH.js";import"./DropdownField-BIgaE5lU.js";import"./isEqual-LTMCApQW.js";import"./_baseIsEqual-CvZHeATj.js";import"./withOsdkMetrics-23-xBZ5M.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
