import{f as p,j as e}from"./iframe-CUIuiQ8M.js";import{O as i}from"./object-table-DcpRmsy_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-w0MMDoBI.js";import"./Table-BcVAwvAP.js";import"./index-B5rq4E8c.js";import"./Dialog-lzK4Gi-J.js";import"./cross-BEDlXMDX.js";import"./svgIconContainer-XQGxfFa5.js";import"./useBaseUiId-CO_Scg4B.js";import"./InternalBackdrop-Y4Nj-4X1.js";import"./composite-CfWLpG35.js";import"./index-BXDM3eUI.js";import"./index-nHMpUj1A.js";import"./index-DkpbIJUD.js";import"./useEventCallback-C_grctXi.js";import"./SkeletonBar-CwNsNlh8.js";import"./LoadingCell-KsTWRBcy.js";import"./ColumnConfigDialog-BvqKgg-q.js";import"./DraggableList-CKtkyqle.js";import"./search-DuRjWaqd.js";import"./Input-CUX61x5u.js";import"./useControlled-AW4odFH0.js";import"./Button-BsH4UFjg.js";import"./small-cross-DaAqxcp4.js";import"./ActionButton-DtPhv0MM.js";import"./Checkbox-CDbOUomX.js";import"./useValueChanged-CL6SvqY3.js";import"./CollapsiblePanel-CUDS3fRJ.js";import"./MultiColumnSortDialog-DT-P02CM.js";import"./MenuTrigger-BsuBD8Wj.js";import"./CompositeItem-DqTHESiL.js";import"./ToolbarRootContext-mQ2qjFjd.js";import"./getDisabledMountTransitionStyles-vKVZiAas.js";import"./getPseudoElementBounds-QgHfLMx-.js";import"./chevron-down-BPe3l6Fo.js";import"./index-BupjIogH.js";import"./error-BGt6yMaY.js";import"./BaseCbacBanner-BcfsTXre.js";import"./makeExternalStore-elmJ7ql4.js";import"./Tooltip-DLKdaeP_.js";import"./PopoverPopup-BR39rcA2.js";import"./debounce-COj0D1HK.js";import"./useOsdkClient-B4O694Ba.js";import"./tick-Clfa24KY.js";import"./DropdownField-CUeKvgWP.js";import"./isEqual-l3r_0yQ_.js";import"./withOsdkMetrics-CQMJUMD-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
