import{f as p,j as e}from"./iframe-BlJB-hqv.js";import{O as i}from"./object-table-Dx1_sm97.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-AMj6u5EH.js";import"./Table-BX9S7ZEB.js";import"./index-B5X20bPi.js";import"./Dialog-ByzDHqcR.js";import"./cross-DteZeQw8.js";import"./svgIconContainer-LeVtNk5w.js";import"./useBaseUiId-D_Y5M0eI.js";import"./InternalBackdrop-CnwxfMrX.js";import"./composite-DR-h0Lzn.js";import"./index-8mNQJ1FG.js";import"./index-BqrWcgCk.js";import"./index-DVOW4T_z.js";import"./useEventCallback-C5iZzYF4.js";import"./SkeletonBar-CHb4nNBx.js";import"./LoadingCell-B3nzhONR.js";import"./ColumnConfigDialog-ClVyxpxj.js";import"./DraggableList-CSu-P_zf.js";import"./search-VsI7BQQc.js";import"./Input-DoCeanz4.js";import"./useControlled-CETXoNMf.js";import"./Button-bd2H5948.js";import"./small-cross-CpwYw5hd.js";import"./ActionButton-DPyl9ZnK.js";import"./Checkbox-3vpggLtq.js";import"./useValueChanged-BP2yugp1.js";import"./CollapsiblePanel-1SWkbhUw.js";import"./MultiColumnSortDialog-BJARPMsx.js";import"./MenuTrigger-LXD8Yc6w.js";import"./CompositeItem-BMH16CTX.js";import"./ToolbarRootContext-Br80IfNP.js";import"./getDisabledMountTransitionStyles-D0uVHRDQ.js";import"./getPseudoElementBounds-DnmAl4RP.js";import"./chevron-down-CGFUoA8B.js";import"./index-CEuYTBSI.js";import"./error-DWdskqLp.js";import"./BaseCbacBanner-etN_nGS3.js";import"./makeExternalStore-CrrUaLlQ.js";import"./Tooltip-M7jHN8Vr.js";import"./PopoverPopup-BJoZOrql.js";import"./debounce-Cy2hjM5h.js";import"./useOsdkClient-DYR-Y9ga.js";import"./tick-Cjvc8nAS.js";import"./DropdownField-DOhdXC82.js";import"./isEqual-DU3uQxt6.js";import"./withOsdkMetrics-BbC1R7NS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
