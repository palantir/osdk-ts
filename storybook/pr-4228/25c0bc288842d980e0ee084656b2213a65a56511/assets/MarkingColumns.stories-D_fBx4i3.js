import{f as p,j as e}from"./iframe-DCDy9VYS.js";import{O as i}from"./object-table-DcIcsg-z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DYzeOhdi.js";import"./Table-BcMOzAOA.js";import"./index-As1ywJYE.js";import"./Dialog-C2cLJb9y.js";import"./cross-BJlA6QIm.js";import"./svgIconContainer-D9qShJuw.js";import"./useBaseUiId-BwVm2U7U.js";import"./InternalBackdrop-ijCyx1er.js";import"./composite-c9aHe9jO.js";import"./index-CvF6o7Ro.js";import"./index-Dg2YILHW.js";import"./index-DqVXKAlF.js";import"./useEventCallback-BpL75y-I.js";import"./SkeletonBar-DroWMPlj.js";import"./LoadingCell-Bq-U8EXT.js";import"./ColumnConfigDialog-XyrM1zkL.js";import"./DraggableList-BQ460tmS.js";import"./search-Nu3soqfg.js";import"./Input-1IBLw1l4.js";import"./useControlled-Ck2v8yj-.js";import"./Button-CEFR6_SV.js";import"./small-cross-uadXp9F-.js";import"./ActionButton-DqA_w_SP.js";import"./Checkbox-B8VnA7oI.js";import"./useValueChanged-CPtG6vDl.js";import"./CollapsiblePanel-BzeOsHAl.js";import"./MultiColumnSortDialog-CwTztmsw.js";import"./MenuTrigger-C5KhP-2u.js";import"./CompositeItem-DLLGFuyo.js";import"./ToolbarRootContext-cMntifXn.js";import"./getDisabledMountTransitionStyles-BooTnCUs.js";import"./getPseudoElementBounds-Dbq8OiTZ.js";import"./chevron-down-hGs_IVeQ.js";import"./index-CMTxTXNi.js";import"./error-5cMYD3vI.js";import"./BaseCbacBanner-Bo2AUWFr.js";import"./makeExternalStore-BQWaZP2I.js";import"./Tooltip-C_BJoEQ_.js";import"./PopoverPopup-C3K-ljQu.js";import"./debounce-C0GenXTw.js";import"./useOsdkClient-DE_N4tYE.js";import"./tick-CxNHTulf.js";import"./DropdownField-CGJbjv2M.js";import"./isEqual-DHXL-66W.js";import"./withOsdkMetrics-D5GlFsUX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
