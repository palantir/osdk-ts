import{f as p,j as e}from"./iframe-CdVdrk-Z.js";import{O as i}from"./object-table-62AaPZcn.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D3Uuy_qs.js";import"./Table-B763dVys.js";import"./index-DZVQNLYI.js";import"./Dialog-D5KNMyc3.js";import"./cross-CuXvHsqi.js";import"./svgIconContainer-DLJMdQAX.js";import"./useBaseUiId-BoQp8WF9.js";import"./InternalBackdrop-CCZ79l3M.js";import"./composite-MFKJqOry.js";import"./index-CbzjtGzh.js";import"./index-CfFbwio0.js";import"./index-XbpL-eEk.js";import"./useEventCallback-DZCCTk0w.js";import"./SkeletonBar-CvkPOQgp.js";import"./LoadingCell-Cue4PlOj.js";import"./ColumnConfigDialog-BrENVGwW.js";import"./DraggableList-D9bTfslw.js";import"./search-D2WuN_XZ.js";import"./Input-DfDhmSz8.js";import"./useControlled-pK0m6WTM.js";import"./isEqual-ayoADmPC.js";import"./isObject-Bpzg0px7.js";import"./Button-BHlEgtys.js";import"./ActionButton-sj37GpRw.js";import"./Checkbox-DwE_sQz2.js";import"./useValueChanged-ycOGR68M.js";import"./CollapsiblePanel-B_B20JEh.js";import"./MultiColumnSortDialog-Blb_XgO0.js";import"./MenuTrigger-clvgYZgu.js";import"./CompositeItem-DmMvdKXl.js";import"./ToolbarRootContext-MShXegNP.js";import"./getDisabledMountTransitionStyles-4bCs2qZ_.js";import"./getPseudoElementBounds-B3F-tw-8.js";import"./chevron-down-D-32cGr0.js";import"./index-Bw3b3OYv.js";import"./error-BYGeo1CS.js";import"./BaseCbacBanner-DAUIKKXt.js";import"./makeExternalStore-BwijJ5Bd.js";import"./Tooltip-DTMBJpz3.js";import"./PopoverPopup-CqcM-FgR.js";import"./toNumber-DzlYxzjS.js";import"./useOsdkClient-DqoFUQAl.js";import"./tick-Dege0wf4.js";import"./DropdownField-BTfoIE4K.js";import"./withOsdkMetrics-CiTByfY3.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
