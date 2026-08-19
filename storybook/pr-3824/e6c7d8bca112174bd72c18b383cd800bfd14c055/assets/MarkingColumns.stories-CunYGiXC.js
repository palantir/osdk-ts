import{f as p,j as e}from"./iframe-CFnZv6W6.js";import{O as i}from"./object-table-Bjjj8n_l.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DaeNTAOB.js";import"./Table-GJdNKuHh.js";import"./index-CVGV4KeD.js";import"./Dialog-w2kTwReC.js";import"./cross-C-tbaQSm.js";import"./svgIconContainer-Ds9wq937.js";import"./useBaseUiId-BHfosarc.js";import"./InternalBackdrop-B6eJf4h8.js";import"./composite-DpDQBUJx.js";import"./index-DxTVc7UT.js";import"./index-DqFASQeC.js";import"./index-DH3Lt-T4.js";import"./useEventCallback-CDzNiTKq.js";import"./SkeletonBar-DTeIxuG5.js";import"./LoadingCell-bclLlGod.js";import"./ColumnConfigDialog-BsoTMV0c.js";import"./DraggableList-CkGcCJHd.js";import"./search-CtPaFwvz.js";import"./Input-vKjFw9JB.js";import"./useControlled-C4TNuFLH.js";import"./Button-DWKNQBaA.js";import"./small-cross-D-8SDjlK.js";import"./ActionButton-BG_gQsLt.js";import"./Checkbox-DEsFYHqM.js";import"./useValueChanged-DGrgz3RO.js";import"./CollapsiblePanel-C1_1ATE6.js";import"./MultiColumnSortDialog-CN0GVjqJ.js";import"./MenuTrigger-X7sAyzkO.js";import"./CompositeItem-DPJBvKky.js";import"./ToolbarRootContext-CVCFeaES.js";import"./getDisabledMountTransitionStyles-COvsik1i.js";import"./getPseudoElementBounds-BeF4-PN3.js";import"./chevron-down-CzFq3N2b.js";import"./index-BSlJchRS.js";import"./error-Dr-3Rs7Z.js";import"./BaseCbacBanner-C3IHannt.js";import"./makeExternalStore-Di8vK866.js";import"./Tooltip-4s0ejNja.js";import"./PopoverPopup-Bn_YebPn.js";import"./debounce-CrW4vDcQ.js";import"./useOsdkClient-C-GCPnL_.js";import"./tick-Dmm-IbHN.js";import"./DropdownField-CJnnFWVL.js";import"./isEqual-DE3KBIZr.js";import"./withOsdkMetrics-BPf1l7aJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
