import{f as p,j as e}from"./iframe-BPocqIVt.js";import{O as i}from"./object-table-BHDuSvAo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DJuEbehX.js";import"./Table-CcZ4FuGS.js";import"./index-D8gxTUyX.js";import"./Dialog-ByPzxqeA.js";import"./cross-CP14YMB5.js";import"./svgIconContainer-lu5MT20R.js";import"./useBaseUiId-DHiAnipM.js";import"./InternalBackdrop-CZva0C0U.js";import"./composite-Bsm441N4.js";import"./index-DUErGcWd.js";import"./index-wB13koOt.js";import"./index-BSp8i_SU.js";import"./useEventCallback-aY1-PS5J.js";import"./SkeletonBar-DHiHMD5H.js";import"./LoadingCell-5yIIwy5g.js";import"./ColumnConfigDialog-BYI69Y6r.js";import"./DraggableList-CQhb22zm.js";import"./search-CPyRqeCk.js";import"./Input-DoB758NI.js";import"./useControlled-Cn9j2jZh.js";import"./Button-BAjtVZWF.js";import"./small-cross-DVc0tIFP.js";import"./ActionButton-5HFO0p1A.js";import"./Checkbox-DjeARGO6.js";import"./useValueChanged-DBh8PZxJ.js";import"./CollapsiblePanel-C4vE3Q24.js";import"./MultiColumnSortDialog-pxPrJnpy.js";import"./MenuTrigger-iVAxRcJM.js";import"./CompositeItem-uae9ym8T.js";import"./ToolbarRootContext-Bx5UxeGF.js";import"./getDisabledMountTransitionStyles-BszX_VbO.js";import"./getPseudoElementBounds-3m_HaT0i.js";import"./chevron-down-DzujtnRS.js";import"./index-QphKDK17.js";import"./error-SprCq_Ye.js";import"./BaseCbacBanner-DToPlCN2.js";import"./makeExternalStore-DNWt0sPl.js";import"./Tooltip-CAhNLUkJ.js";import"./PopoverPopup-BwNEzQB7.js";import"./debounce-CT4AXDLg.js";import"./useOsdkClient-Bm2y0aKf.js";import"./tick-a5SZvQAG.js";import"./DropdownField-CtOmtDd4.js";import"./isEqual-DA-bsXp9.js";import"./withOsdkMetrics-DyR4A0wB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
