import{f as p,j as e}from"./iframe-D8GtPwc8.js";import{O as i}from"./object-table-CudRMjsB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DM7AYsRe.js";import"./Table-Dnd_Z03K.js";import"./index-BHvqAHvK.js";import"./Dialog-BQAfoqXB.js";import"./cross-DB6ZQcJi.js";import"./svgIconContainer-DlryWN-T.js";import"./useBaseUiId-cPjFtQbW.js";import"./InternalBackdrop-BnVhbZ_p.js";import"./composite-C3gA3n5a.js";import"./index-BFpMtvXB.js";import"./index-hBVFoSAx.js";import"./index--mveQ4GA.js";import"./useEventCallback-JoMVAP4J.js";import"./SkeletonBar-DhDYamN9.js";import"./LoadingCell-CpxY2g9E.js";import"./ColumnConfigDialog-CgqnQaBc.js";import"./DraggableList-H11g_daa.js";import"./search-1VHOmlrx.js";import"./Input-BQZ4zqRI.js";import"./useControlled-BGR8D7jw.js";import"./Button-BY4p0q88.js";import"./small-cross-AU0AwZv4.js";import"./ActionButton-COwhhG-g.js";import"./Checkbox-CYnr5sf0.js";import"./useValueChanged-Bvcq1JkK.js";import"./CollapsiblePanel-DRmMBXX1.js";import"./MultiColumnSortDialog-w5gbJQoX.js";import"./MenuTrigger-CQvmaUV7.js";import"./CompositeItem-DiLTW9IV.js";import"./ToolbarRootContext-BqDTk1g9.js";import"./getDisabledMountTransitionStyles-OSessTJH.js";import"./getPseudoElementBounds-DAdIAfjY.js";import"./chevron-down-7LsT1DrB.js";import"./index-BZjshZ5O.js";import"./error-DXFVtY0P.js";import"./BaseCbacBanner-DJmT2hTZ.js";import"./makeExternalStore-ByNN_qQg.js";import"./Tooltip-CWkY425s.js";import"./PopoverPopup-DnmZzlUY.js";import"./debounce-4ipI9nx9.js";import"./useOsdkClient-D4kcyEkr.js";import"./tick-DbzPDmMF.js";import"./DropdownField-DIakJXQh.js";import"./isEqual-DcZVMsbL.js";import"./withOsdkMetrics-BajG3tch.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
