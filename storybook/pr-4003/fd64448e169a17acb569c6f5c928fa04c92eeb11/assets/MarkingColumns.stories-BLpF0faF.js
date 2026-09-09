import{f as p,j as e}from"./iframe-C5ao1IvQ.js";import{O as i}from"./object-table-DerlADk9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DGRqXtXi.js";import"./Table-2ZURcp6C.js";import"./index-Ceo1TM0H.js";import"./Dialog-DLgxAKbr.js";import"./cross-tL6C68Y8.js";import"./svgIconContainer-XtON82xh.js";import"./useBaseUiId-CnKjhxxS.js";import"./InternalBackdrop-DX4I219N.js";import"./composite-C9s-0UsJ.js";import"./index-BdE4NmrR.js";import"./index-BR9sQfcO.js";import"./index-Dl_5gpp4.js";import"./useEventCallback-DU-6RHtA.js";import"./SkeletonBar-BYTqUIXM.js";import"./LoadingCell-DjsZgBMi.js";import"./ColumnConfigDialog-BbaOeUCq.js";import"./DraggableList-CLh4Tyq3.js";import"./search-Cn03k3ET.js";import"./Input-jSAQ8Oo5.js";import"./useControlled-BT4ixp-u.js";import"./Button-dQ0hHaFn.js";import"./small-cross-CExx4_xi.js";import"./ActionButton-BqCFxwRp.js";import"./Checkbox-CV3uDaMQ.js";import"./useValueChanged-BGuUHdGP.js";import"./CollapsiblePanel-D2FHKx7N.js";import"./MultiColumnSortDialog-CqK_MWJM.js";import"./MenuTrigger-j5B5SFgt.js";import"./CompositeItem-CbSSSK8r.js";import"./ToolbarRootContext-DALSiAmf.js";import"./getDisabledMountTransitionStyles-rgB5HMnj.js";import"./getPseudoElementBounds-ZCf_GkCq.js";import"./chevron-down-CMM_2MNN.js";import"./index-BrUG7ik_.js";import"./error-MOhUoXAM.js";import"./BaseCbacBanner-Dcllmg5_.js";import"./makeExternalStore-CCjQfhEF.js";import"./Tooltip-Dhg69mhl.js";import"./PopoverPopup-CummcjH_.js";import"./debounce-DqZmCH0E.js";import"./useOsdkClient-CZSnsobV.js";import"./tick-Btjr_S2K.js";import"./DropdownField-BNnQ-S--.js";import"./isEqual-c7N1e270.js";import"./withOsdkMetrics-vcpuoudd.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
