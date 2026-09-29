import{f as p,j as e}from"./iframe-lKHX2RT0.js";import{O as i}from"./object-table-Bc4WIn5Y.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CPQlIB48.js";import"./Table-CL_aIROu.js";import"./index-DN0L_sQz.js";import"./Dialog-CTKIyT5I.js";import"./cross-BS8Ys0sh.js";import"./svgIconContainer-CI8K89aC.js";import"./useBaseUiId-BNpyRqoY.js";import"./InternalBackdrop-CN7gDkpU.js";import"./composite-Cid_avm0.js";import"./index-C5DiV1o7.js";import"./index-nDWqsS2b.js";import"./index-CIthZ6_f.js";import"./useEventCallback-BiQpxw87.js";import"./SkeletonBar-CjbRBu-J.js";import"./LoadingCell-CqqZdURq.js";import"./ColumnConfigDialog-DxRJKGk2.js";import"./DraggableList-yPuiK1Qh.js";import"./search-DYMiyHIs.js";import"./Input-Bw27QJ9U.js";import"./useControlled-CuEFhIkH.js";import"./Button-BEKYhgY7.js";import"./small-cross-gLhT5iIM.js";import"./ActionButton-5BHbkKfJ.js";import"./Checkbox-DsSCYp1f.js";import"./useValueChanged-CgAPPxks.js";import"./CollapsiblePanel-C2fgakez.js";import"./MultiColumnSortDialog-BclQGH37.js";import"./MenuTrigger-Cz8IFqra.js";import"./CompositeItem-YCGN9OAN.js";import"./ToolbarRootContext-DHnu7bP1.js";import"./getDisabledMountTransitionStyles-BaPsLnpd.js";import"./getPseudoElementBounds-CtuiofEl.js";import"./chevron-down-5rT0_jwP.js";import"./index-mAvkRfFj.js";import"./error-Zaa9-6nd.js";import"./BaseCbacBanner-B1P_USXd.js";import"./makeExternalStore-BxeHtCAo.js";import"./Tooltip-CxNH616S.js";import"./PopoverPopup-VlygiTLm.js";import"./debounce-CjBjqfvI.js";import"./useOsdkClient-BttjugBK.js";import"./tick-DFRjlTY6.js";import"./DropdownField-dvCdI0vW.js";import"./isEqual-6_xjYyh7.js";import"./withOsdkMetrics-BcneEdmh.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
