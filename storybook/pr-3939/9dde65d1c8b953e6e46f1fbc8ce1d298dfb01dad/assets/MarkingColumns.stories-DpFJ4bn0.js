import{f as p,j as e}from"./iframe-K5CHCEyg.js";import{O as i}from"./object-table-utOg00_0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D3jqeprX.js";import"./Table-2808Kid_.js";import"./index-WTmR64bn.js";import"./Dialog-CBJLGwFN.js";import"./cross-B8J6ezai.js";import"./svgIconContainer-CtkNh0IR.js";import"./useBaseUiId-BkIc8eue.js";import"./InternalBackdrop-Bf6ULDwV.js";import"./composite-D8qWS-r5.js";import"./index-C8BgW1zx.js";import"./index-BnXdLwCf.js";import"./index-BI6KD8R2.js";import"./useEventCallback-D-391N3D.js";import"./SkeletonBar-Dbxh5j0B.js";import"./LoadingCell-CDNalvIE.js";import"./ColumnConfigDialog-BNnBoxvr.js";import"./DraggableList-CvJLlVkT.js";import"./search-Cx6gmk0L.js";import"./Input-Db1Oj9ts.js";import"./useControlled-CuFQy_dq.js";import"./Button-D0f7TRtC.js";import"./small-cross-B1L4Fyai.js";import"./ActionButton-BMmiIdeT.js";import"./Checkbox-2PlZ_7fg.js";import"./useValueChanged-DnjGf5bs.js";import"./CollapsiblePanel-DBckIGuI.js";import"./MultiColumnSortDialog-Cjy8BRra.js";import"./MenuTrigger-Bg_3sd4W.js";import"./CompositeItem-DJQSjI0-.js";import"./ToolbarRootContext-B1_4tWZH.js";import"./getDisabledMountTransitionStyles-5iGhb6ia.js";import"./getPseudoElementBounds-Bm0MNApQ.js";import"./chevron-down-DVsK0MgR.js";import"./index-CrVnq262.js";import"./error-DpZJYfkw.js";import"./BaseCbacBanner-CyWI_pHr.js";import"./makeExternalStore-CufeVhpI.js";import"./Tooltip-CNcnbhhh.js";import"./PopoverPopup-DPvs26VO.js";import"./debounce-BWGDeaB6.js";import"./useOsdkClient-BMXoort9.js";import"./tick-uVU4NU8V.js";import"./DropdownField-VEWroYGj.js";import"./isEqual-BBzaNYNe.js";import"./withOsdkMetrics-gwVSMO6S.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
