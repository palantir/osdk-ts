import{f as p,j as e}from"./iframe-DYP6I0EJ.js";import{O as i}from"./object-table-DMM2jzgg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-sS4hYFkK.js";import"./Table-CuYv3cn2.js";import"./index-DIhwEquj.js";import"./Dialog-BjY_b077.js";import"./cross-bDPWwylA.js";import"./svgIconContainer-C4jga87M.js";import"./useBaseUiId-BZiJrEE8.js";import"./InternalBackdrop-71TCmGDX.js";import"./composite-DQKMgq2L.js";import"./index-kgSrvS5D.js";import"./index-C2R1rTgL.js";import"./index-Bu9lWdWG.js";import"./useEventCallback-viQBOCoU.js";import"./SkeletonBar-BcB8RILE.js";import"./LoadingCell-BACnWh3V.js";import"./ColumnConfigDialog-12MNYR_s.js";import"./DraggableList-ka3cAseo.js";import"./search-DC-q2Fvd.js";import"./Input-CX9B7mOe.js";import"./useControlled-CBcSqYsQ.js";import"./Button-BBpZA8JE.js";import"./small-cross--hwGWXHG.js";import"./ActionButton-BWEQ465S.js";import"./Checkbox-C66Slb1i.js";import"./useValueChanged-DYyvPFZ9.js";import"./CollapsiblePanel-gA7_qpOX.js";import"./MultiColumnSortDialog--pqZCkrG.js";import"./MenuTrigger-DaJlolSj.js";import"./CompositeItem-BuWL3KPI.js";import"./ToolbarRootContext-6dERQM_o.js";import"./getDisabledMountTransitionStyles-_04rz-EH.js";import"./getPseudoElementBounds-pXf6ipeD.js";import"./chevron-down-DgAcZbyD.js";import"./index-Bbf985kl.js";import"./error-BJ0QSSt_.js";import"./BaseCbacBanner-Dh6gG5qi.js";import"./makeExternalStore-DN0LusY8.js";import"./Tooltip-BRru9_rR.js";import"./PopoverPopup-BtgbBgDL.js";import"./debounce-BaQbuarC.js";import"./useOsdkClient-Cplqkh8-.js";import"./tick-Clj_LCer.js";import"./DropdownField-CjaSoiXx.js";import"./isEqual-CZ5dkiZB.js";import"./withOsdkMetrics-1ciRu-eY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
