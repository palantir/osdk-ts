import{f as p,j as e}from"./iframe-YbZJ4Q2T.js";import{O as i}from"./object-table-BW3KB80g.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-nrcicwIZ.js";import"./Table-D2BU-uGD.js";import"./index-BbeJO0tu.js";import"./Dialog-BMPFF_lX.js";import"./cross-Chqx1Vmd.js";import"./svgIconContainer-CvzqHx8a.js";import"./useBaseUiId-DTGQIw9V.js";import"./InternalBackdrop-UwFwjs-I.js";import"./composite-D3JFLD7k.js";import"./index-CjgLq_Ze.js";import"./index-BArD5hnh.js";import"./index-DaB6Rdj2.js";import"./useEventCallback-Cu0cHPi1.js";import"./SkeletonBar-DIcbo8Ai.js";import"./LoadingCell-qy913ZRO.js";import"./ColumnConfigDialog-DrnL98R1.js";import"./DraggableList-DPV2iFvD.js";import"./search-c-d9DWXs.js";import"./Input-DuCwdPfX.js";import"./useControlled-DLIRtZT-.js";import"./Button-Drmtw-7h.js";import"./small-cross-BaOf2IHH.js";import"./ActionButton-D4JZZuM3.js";import"./Checkbox-BEvItd_I.js";import"./useValueChanged-BXsv3vOm.js";import"./CollapsiblePanel-CB2lFGLk.js";import"./MultiColumnSortDialog-JI3aZi8H.js";import"./MenuTrigger-DnswiPxP.js";import"./CompositeItem-DJS21xnC.js";import"./ToolbarRootContext-hKDDy8Tn.js";import"./getDisabledMountTransitionStyles-BtCYo8Vw.js";import"./getPseudoElementBounds-Jh0Tlk_E.js";import"./chevron-down-DV-3X39-.js";import"./index-Dj7Gzmji.js";import"./error-BpN2G5nD.js";import"./BaseCbacBanner-gQ71dViq.js";import"./makeExternalStore-D3Nkh70z.js";import"./Tooltip-Bxo3fb0L.js";import"./PopoverPopup-C8jr-6dr.js";import"./debounce-qGwGM8IN.js";import"./useOsdkClient-BJz82Q8V.js";import"./tick-yYczsGE5.js";import"./DropdownField-DjUqQXA4.js";import"./isEqual-B7FXvL0y.js";import"./withOsdkMetrics-DAKfNXNY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
