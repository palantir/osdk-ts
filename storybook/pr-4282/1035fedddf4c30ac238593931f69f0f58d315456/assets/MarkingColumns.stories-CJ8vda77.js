import{f as p,j as e}from"./iframe-C6LjohtU.js";import{O as i}from"./object-table-CcAg2w7E.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-GD_-jSvs.js";import"./Table-ilCXauHI.js";import"./index-Dl2NjNEw.js";import"./Dialog-BM8D0ZJA.js";import"./cross-DaW6OMzU.js";import"./svgIconContainer-B8ItPc1M.js";import"./useBaseUiId-Cap-PPpy.js";import"./InternalBackdrop-BsVUWCWG.js";import"./composite-BaoR0w31.js";import"./index-cI1ynK4N.js";import"./index-CDYomSyo.js";import"./index-B-dD1TvL.js";import"./useEventCallback-DxZxqDUd.js";import"./SkeletonBar-BeY9dT73.js";import"./LoadingCell-yc4sPZge.js";import"./ColumnConfigDialog-Bn8NyW4v.js";import"./DraggableList-BN5t2BlI.js";import"./search-mbcTQJkq.js";import"./Input-B249MGbk.js";import"./useControlled-BmDrUstA.js";import"./Button-PZls5hRh.js";import"./small-cross-BaK91MRB.js";import"./ActionButton-DwbrhZUk.js";import"./Checkbox-qJo_K2uT.js";import"./useValueChanged-W2WuQ5wK.js";import"./CollapsiblePanel-Cs_KG3mc.js";import"./MultiColumnSortDialog-Ct-qU7bQ.js";import"./MenuTrigger-BC5AyEgm.js";import"./CompositeItem-DAAqOuWb.js";import"./ToolbarRootContext-DXm6j23Z.js";import"./getDisabledMountTransitionStyles-BwmyyjtU.js";import"./getPseudoElementBounds-BQ5agBtb.js";import"./chevron-down-7dkGHUAP.js";import"./index--rDorTVG.js";import"./error-DQ-bOeSn.js";import"./BaseCbacBanner-DXERYCjt.js";import"./makeExternalStore-BQYgEbL5.js";import"./Tooltip-D1h-JVHm.js";import"./PopoverPopup-B0rRAlr0.js";import"./debounce-DIQiziXj.js";import"./useOsdkClient-D02NaCPv.js";import"./tick-AtbomG7h.js";import"./DropdownField-CaiM83zQ.js";import"./isEqual-fgbXcHh_.js";import"./withOsdkMetrics-DmxFMu7G.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
