import{f as p,j as e}from"./iframe-DXaJ13QU.js";import{O as i}from"./object-table-VofzUvoC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BroFP_lE.js";import"./Table-BFVnIaUX.js";import"./index-DZFr4IUe.js";import"./Dialog-BhsRLiCm.js";import"./cross-B9pf8KCz.js";import"./svgIconContainer-Cok1WmRf.js";import"./useBaseUiId-rib_Fnun.js";import"./InternalBackdrop-Zj2BFMXg.js";import"./composite-BAacjU3A.js";import"./index-DRifIPLC.js";import"./index-Dw57ybl-.js";import"./index-Cr1sYr80.js";import"./useEventCallback-DIhZQMlD.js";import"./SkeletonBar-MGki9n80.js";import"./LoadingCell-DiCXqZhH.js";import"./ColumnConfigDialog-Cnv2RkuX.js";import"./DraggableList-DWGRmIR2.js";import"./search-BhfCLASk.js";import"./Input-5PPkwes4.js";import"./useControlled-DEmQR29N.js";import"./Button-DN8eJVF0.js";import"./small-cross-BBUhfExp.js";import"./ActionButton-Cj_9HOV9.js";import"./Checkbox-BJULk6T0.js";import"./useValueChanged-CGfRbHou.js";import"./CollapsiblePanel-DPEWUotT.js";import"./MultiColumnSortDialog-DAb6n93R.js";import"./MenuTrigger-JsevVKSq.js";import"./CompositeItem-UfCVn6ij.js";import"./ToolbarRootContext-Cz-twL-R.js";import"./getDisabledMountTransitionStyles-BAol_-Lj.js";import"./getPseudoElementBounds-DlPJcayw.js";import"./chevron-down-BggCntkx.js";import"./index-BGAyhcr2.js";import"./error-Cm275nno.js";import"./BaseCbacBanner-CMuvBih-.js";import"./makeExternalStore-YZAYYspW.js";import"./Tooltip-CkUCTSSv.js";import"./PopoverPopup-BKrHCY-Q.js";import"./debounce-C3pc2scv.js";import"./useOsdkClient-B7wuXGjj.js";import"./tick-dOHg_t3C.js";import"./DropdownField-C6212O3_.js";import"./isEqual-BCP2gqmY.js";import"./withOsdkMetrics-hFb6ubqE.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
