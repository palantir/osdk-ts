import{f as p,j as e}from"./iframe-C2B-VFRS.js";import{O as i}from"./object-table-BJ5i7PgH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-gVkjcPWs.js";import"./Table-OE5eKuz9.js";import"./index-CibutWy_.js";import"./Dialog-BH9sTQ_Y.js";import"./cross-mlHeLHgf.js";import"./svgIconContainer-CM1uLq-t.js";import"./useBaseUiId-VQFtxAep.js";import"./InternalBackdrop-CJYBMOj7.js";import"./composite-C2cqujK-.js";import"./index-DV_a4T4n.js";import"./index-BPBEeE2g.js";import"./index-CHTq1_qN.js";import"./useEventCallback-BashrAx4.js";import"./SkeletonBar-DWukyqXK.js";import"./LoadingCell-C9_4ywTt.js";import"./ColumnConfigDialog-qgZJ46M8.js";import"./DraggableList-BcZ88qI6.js";import"./search-BLJN7rrF.js";import"./Input-FVPyTFRQ.js";import"./useControlled-BCVnds_y.js";import"./Button-Mk-BPYCM.js";import"./small-cross-Cz9QG-kv.js";import"./ActionButton-D85etQjf.js";import"./Checkbox-DktXiTxH.js";import"./useValueChanged-RJlV-1X-.js";import"./CollapsiblePanel-DS7gWxno.js";import"./MultiColumnSortDialog-CARKhX7X.js";import"./MenuTrigger-DALOgPOG.js";import"./CompositeItem-CfE-UZcL.js";import"./ToolbarRootContext-CfiR31pw.js";import"./getDisabledMountTransitionStyles-CuVxlwmy.js";import"./getPseudoElementBounds-KVjV016-.js";import"./chevron-down-BhxKf9kJ.js";import"./index-PJ8iOaai.js";import"./error-qCP94tkU.js";import"./BaseCbacBanner-2HHCZ3oe.js";import"./makeExternalStore-D8T9YNbX.js";import"./Tooltip-DnchQPHR.js";import"./PopoverPopup-Bl_99L64.js";import"./debounce-B7lhl0_T.js";import"./useOsdkClient-GURrMHyG.js";import"./tick-EdYP3z7-.js";import"./DropdownField-RoShH29N.js";import"./isEqual-BbjptkFW.js";import"./withOsdkMetrics-CLj2Tgqh.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
