import{f as p,j as e}from"./iframe-Cuh-yC9g.js";import{O as i}from"./object-table-wHVrjsXR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Co1xc5DN.js";import"./Table-BOCORQWQ.js";import"./index-DWUob4WV.js";import"./Dialog-CLhnFK8s.js";import"./cross-BjB39GcZ.js";import"./svgIconContainer-GL6glClw.js";import"./useBaseUiId-Czk2OPtm.js";import"./InternalBackdrop-C4Ajfn1E.js";import"./composite-BCtP-Clm.js";import"./index-3lcaIBPr.js";import"./index-wPALhrfN.js";import"./index-JbFM852B.js";import"./useEventCallback-DUCHvBP3.js";import"./SkeletonBar-AJdj2On-.js";import"./LoadingCell-JuUg-bDY.js";import"./ColumnConfigDialog-B71UfVu_.js";import"./DraggableList-1zBnwzrY.js";import"./search-B0_wC5Cw.js";import"./Input-LmihMdos.js";import"./useControlled-7KsxQpTK.js";import"./Button-B6v4dcvN.js";import"./small-cross-DgWoWQa5.js";import"./ActionButton-DA-iy0n8.js";import"./Checkbox-B1OLVDGO.js";import"./useValueChanged-DOSJ9FDd.js";import"./CollapsiblePanel-DzmzUJIf.js";import"./MultiColumnSortDialog-CbojQAM1.js";import"./MenuTrigger-BHBZAP5o.js";import"./CompositeItem-BJ_X-ts8.js";import"./ToolbarRootContext-D0bBBUnA.js";import"./getDisabledMountTransitionStyles-Cia47Kmq.js";import"./getPseudoElementBounds-9rPRi8u7.js";import"./chevron-down-Bl1gRnzA.js";import"./index-EP_PqEfu.js";import"./error-0z2irTLT.js";import"./BaseCbacBanner-Bnl6rnI0.js";import"./makeExternalStore-BdhPqHms.js";import"./Tooltip-DSUYLnJr.js";import"./PopoverPopup-COd_DNnA.js";import"./debounce-CQG_FcjT.js";import"./useOsdkClient-0vYp7gi6.js";import"./tick-0nIkpLfk.js";import"./DropdownField-jqoPL6Hs.js";import"./isEqual-BzyRIl74.js";import"./withOsdkMetrics-2__WXqYS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
