import{f as p,j as e}from"./iframe-BTVQ2MDu.js";import{O as i}from"./object-table-DVHeKRvV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-V8IN1a25.js";import"./Table-B8coxLT6.js";import"./index-De5UO2WD.js";import"./Dialog-CkCx041K.js";import"./cross-CiaqJ3Ct.js";import"./svgIconContainer-Z92KrpXF.js";import"./useBaseUiId-ageCLcwt.js";import"./InternalBackdrop-BVNbfTuG.js";import"./composite-j0A6Y-jy.js";import"./index-BQEu1zYD.js";import"./index-kvy3rFgR.js";import"./index-DjK2k_yv.js";import"./useEventCallback-D0vGqTKV.js";import"./SkeletonBar-DArXiFWj.js";import"./LoadingCell-B8bw26Hi.js";import"./ColumnConfigDialog-DRajYg12.js";import"./DraggableList-D0dDLjdf.js";import"./search-DG5bPe3Q.js";import"./Input-BfcaF7JW.js";import"./useControlled-BNBhFfAy.js";import"./Button-Ca-Rehkm.js";import"./small-cross-B4ROqysh.js";import"./ActionButton-B99TtfNQ.js";import"./Checkbox-BDKA0ajc.js";import"./useValueChanged-CdtMTrsN.js";import"./CollapsiblePanel-D03MnXQO.js";import"./MultiColumnSortDialog-D1Q8iyV4.js";import"./MenuTrigger-Ceua_S9s.js";import"./CompositeItem-BYdhC28O.js";import"./ToolbarRootContext-BKviL8sB.js";import"./getDisabledMountTransitionStyles-CTuqZlD-.js";import"./getPseudoElementBounds-CbDHbaqF.js";import"./chevron-down-B2iYughc.js";import"./index-DHPYKUwx.js";import"./error-B4_XiTjG.js";import"./BaseCbacBanner-DQ6y3_rq.js";import"./makeExternalStore-CteyryqD.js";import"./Tooltip-SOy8OEMI.js";import"./PopoverPopup-BDUoftIx.js";import"./debounce-BaTeW3Mf.js";import"./useOsdkClient-BUwzSBMN.js";import"./tick-C7MyDvxF.js";import"./DropdownField-DzdFfboE.js";import"./isEqual-VOjDnJLS.js";import"./withOsdkMetrics-sKDJTdCS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
