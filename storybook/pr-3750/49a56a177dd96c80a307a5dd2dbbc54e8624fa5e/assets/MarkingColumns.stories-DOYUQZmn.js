import{f as p,j as e}from"./iframe-Bt4Xobet.js";import{O as i}from"./object-table-ESLraP9c.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CIGldWkI.js";import"./Table-Dh8WrLMe.js";import"./index-C9QCKnRv.js";import"./Dialog-Bt16bQO_.js";import"./cross-EISoXgiZ.js";import"./svgIconContainer-BK5VnXrw.js";import"./useBaseUiId-OZ0hUE_a.js";import"./InternalBackdrop-hUtnwJGp.js";import"./composite-DDgJpTsN.js";import"./index-CZKjIZkZ.js";import"./index-CjzROSaJ.js";import"./index-BWtyZcA_.js";import"./useEventCallback-1iEm_Jcu.js";import"./SkeletonBar-Ofc__1IX.js";import"./LoadingCell-BvDgL-19.js";import"./ColumnConfigDialog-CbkPAmBR.js";import"./DraggableList-Dwm_DYuN.js";import"./search-BUQOh4mX.js";import"./Input-D-1nEW3a.js";import"./useControlled-DyGKRwST.js";import"./isEqual-EcUHdlDF.js";import"./isObject-DbxEad6g.js";import"./Button-CTrNzNt_.js";import"./ActionButton-Dkt25fua.js";import"./Checkbox-DsIqf523.js";import"./useValueChanged-CG97XxYr.js";import"./CollapsiblePanel-BrwiE-29.js";import"./MultiColumnSortDialog-DuzVdzTj.js";import"./MenuTrigger-Cyb-YEi4.js";import"./CompositeItem-DgpKcPgo.js";import"./ToolbarRootContext-DIt4thAF.js";import"./getDisabledMountTransitionStyles-B721IT_k.js";import"./getPseudoElementBounds-C1106lzn.js";import"./chevron-down-IwUW_Yhg.js";import"./index-DSNbiTi3.js";import"./error-CzuGt2Gr.js";import"./BaseCbacBanner-D2egufd4.js";import"./makeExternalStore-84IoszYF.js";import"./Tooltip-CvcctPhn.js";import"./PopoverPopup-CwvnG5I6.js";import"./toNumber-B2D77nhi.js";import"./useOsdkClient-CGPWcPnj.js";import"./tick-16BAGEht.js";import"./DropdownField-SRU5zi3R.js";import"./withOsdkMetrics-BjgVacGN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
