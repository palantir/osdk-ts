import{f as p,j as e}from"./iframe-BTFFJnjn.js";import{O as i}from"./object-table-gj9Lc75C.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CSZsPkfX.js";import"./Table-yVCzvX5z.js";import"./index-C_Z722LV.js";import"./Dialog-DzBBRwDf.js";import"./cross-LRAZ9qps.js";import"./svgIconContainer-gp9RWo3r.js";import"./useBaseUiId-DHyYX2RX.js";import"./InternalBackdrop-BHLBjXqJ.js";import"./composite-DBRlpOlr.js";import"./index-B4NnbGlh.js";import"./index-CrQcuE9G.js";import"./index-0gaZ0R5v.js";import"./useEventCallback-D2JKsoPj.js";import"./SkeletonBar-CyQFjxNz.js";import"./LoadingCell-Sg18K7xn.js";import"./ColumnConfigDialog-CYv9Vbqr.js";import"./DraggableList-D-9GgOT5.js";import"./search-DOiBQX63.js";import"./Input-D5tlOD_j.js";import"./useControlled-DbgXwRAA.js";import"./Button-XND01Fh-.js";import"./small-cross-DcEGFbkq.js";import"./ActionButton-BOqgyglZ.js";import"./Checkbox-B0yfJxSM.js";import"./useValueChanged-BrxBLzAH.js";import"./CollapsiblePanel--hZtn4S3.js";import"./MultiColumnSortDialog-Uxi7YfUX.js";import"./MenuTrigger-Ff7CWCoo.js";import"./CompositeItem-0772M-C_.js";import"./ToolbarRootContext-BsMzvLUB.js";import"./getDisabledMountTransitionStyles-DPkci45d.js";import"./getPseudoElementBounds-C_NyFnLm.js";import"./chevron-down-C34taKQb.js";import"./index-Dw0-j0VX.js";import"./error-D1AJOnUs.js";import"./BaseCbacBanner-DUePnqQ9.js";import"./makeExternalStore-Dk37SoTO.js";import"./Tooltip-D6bixjsm.js";import"./PopoverPopup-Cc0ymlLC.js";import"./debounce-COoRFcah.js";import"./useOsdkClient-6aibAJDm.js";import"./tick-BwSmQKfq.js";import"./DropdownField-CINIO7u-.js";import"./isEqual-B-bsFdvN.js";import"./withOsdkMetrics-B7f6_6X-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
