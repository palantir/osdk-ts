import{f as p,j as e}from"./iframe-B9hGOcVW.js";import{O as i}from"./object-table-1qd0gbMo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CEHJKNgD.js";import"./Table-BDWzuPuG.js";import"./index-WMs6XgHc.js";import"./Dialog-C7AaENM5.js";import"./cross-Kg25sWVz.js";import"./svgIconContainer-DJVhztLr.js";import"./useBaseUiId-Bv7mJDK-.js";import"./InternalBackdrop-CY5Sv-p0.js";import"./composite-BPGo720E.js";import"./index-DDiAWfcg.js";import"./index-C0zF1Hh-.js";import"./index-CLY61b3h.js";import"./useEventCallback-CRuXPfRQ.js";import"./SkeletonBar-DdBk-iAs.js";import"./LoadingCell-DMo5yi-9.js";import"./ColumnConfigDialog-CuHUO7sD.js";import"./DraggableList-72YsiWQv.js";import"./search-CIz89Kd0.js";import"./Input-DL4wCDaa.js";import"./useControlled-CuLTDJ7U.js";import"./Button-Kv95ZBq_.js";import"./small-cross-k_dWUzGn.js";import"./ActionButton-5hOfXxX5.js";import"./Checkbox-DmRWx-yX.js";import"./useValueChanged-BRgm995r.js";import"./CollapsiblePanel-BLpDHRNH.js";import"./MultiColumnSortDialog-CUeoMZUg.js";import"./MenuTrigger-D2PAdEJf.js";import"./CompositeItem-DJ_648IQ.js";import"./ToolbarRootContext-CI0oTBSQ.js";import"./getDisabledMountTransitionStyles-Btetjrhd.js";import"./getPseudoElementBounds-DoIsGQ2e.js";import"./chevron-down-cOiqTWha.js";import"./index-BOZqc1dp.js";import"./error-D0SwKHMs.js";import"./BaseCbacBanner-BK1b6COz.js";import"./makeExternalStore-X3bc05mq.js";import"./Tooltip-C5Zr6U13.js";import"./PopoverPopup-BOcc2TJb.js";import"./debounce-CzUX5qpY.js";import"./useOsdkClient-Dl6R5ARr.js";import"./tick-BCju8FEy.js";import"./DropdownField-DCxSSnaY.js";import"./isEqual-edacVGT3.js";import"./withOsdkMetrics-CgdP6FhV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
