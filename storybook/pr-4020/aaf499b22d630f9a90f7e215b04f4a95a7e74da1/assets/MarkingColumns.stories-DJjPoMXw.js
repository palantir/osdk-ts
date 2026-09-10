import{f as p,j as e}from"./iframe-CpcWMsh2.js";import{O as i}from"./object-table-CoyGYxq-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CN3GQMjz.js";import"./Table-BgONAB3g.js";import"./index-Crz8jB-9.js";import"./Dialog-BhB2EVK-.js";import"./cross-BGaRJcvO.js";import"./svgIconContainer-Huh63JJu.js";import"./useBaseUiId-DXzATXKT.js";import"./InternalBackdrop-9c6OTDK9.js";import"./composite-CtH7isvm.js";import"./index-BBtYj7J3.js";import"./index-doObrpzR.js";import"./index-DJLjrcri.js";import"./useEventCallback-BGZ2MJrW.js";import"./SkeletonBar-Cx2Gs9qW.js";import"./LoadingCell-TZC5cUR_.js";import"./ColumnConfigDialog-D2vG7jTz.js";import"./DraggableList-WEV7a9Jj.js";import"./search-BprxbqFd.js";import"./Input-BdQWVtdR.js";import"./useControlled-nerw9-6R.js";import"./Button-CUMMFBAM.js";import"./small-cross-5mwwvKLt.js";import"./ActionButton-BHZtYOuv.js";import"./Checkbox-DEm2cTN7.js";import"./useValueChanged-W8zfC5hp.js";import"./CollapsiblePanel-DfsLMHyx.js";import"./MultiColumnSortDialog-ebFoK4Ku.js";import"./MenuTrigger-DyhEEdzn.js";import"./CompositeItem-Bm31Wr9o.js";import"./ToolbarRootContext-nw5M_EUa.js";import"./getDisabledMountTransitionStyles-UM54dXw7.js";import"./getPseudoElementBounds-BytC3tPt.js";import"./chevron-down-ByJuuwk-.js";import"./index-BbnSTWOo.js";import"./error-Cea5AChJ.js";import"./BaseCbacBanner-CdrCSqf6.js";import"./makeExternalStore-6VRmQlrr.js";import"./Tooltip-DshyWHE3.js";import"./PopoverPopup-BmebcJ3w.js";import"./debounce-B90qMA3e.js";import"./useOsdkClient-Bf3Wfvs3.js";import"./tick-DWjjoXoQ.js";import"./DropdownField-BHTMsNk1.js";import"./isEqual-C99oM3wL.js";import"./withOsdkMetrics-CnzpNQ91.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
