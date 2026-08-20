import{f as p,j as e}from"./iframe-DHxsU2_I.js";import{O as i}from"./object-table-Wmcnqtqi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BR3ABpJE.js";import"./Table-CQZZcuKq.js";import"./index-vnjM7992.js";import"./Dialog-BlJuLB3G.js";import"./cross-RIzAoTK6.js";import"./svgIconContainer-B2plqKMw.js";import"./useBaseUiId-pTRtJO1U.js";import"./InternalBackdrop-DUaK7Jhb.js";import"./composite-6SoNaUP7.js";import"./index-CDRJBt8l.js";import"./index-BjXFS9V3.js";import"./index-C4c1CFQV.js";import"./useEventCallback-CqytFUcr.js";import"./SkeletonBar-Tdn8qzhi.js";import"./LoadingCell-BixbKxJ-.js";import"./ColumnConfigDialog-CkumhtfO.js";import"./DraggableList-BFqnGUBM.js";import"./search-Cyzg0Z92.js";import"./Input-CHAbdjgV.js";import"./useControlled-DDSoMtR7.js";import"./Button-DytbmDZO.js";import"./small-cross-Bagi3YzR.js";import"./ActionButton-Dwew71_H.js";import"./Checkbox-DPm7-wkJ.js";import"./useValueChanged-BI16DUVB.js";import"./CollapsiblePanel-DHckIMdd.js";import"./MultiColumnSortDialog-R7s0XjIw.js";import"./MenuTrigger-BxdhLVXv.js";import"./CompositeItem-B_q3XIVN.js";import"./ToolbarRootContext-Brnit9i4.js";import"./getDisabledMountTransitionStyles-uvRwRUIa.js";import"./getPseudoElementBounds-Eh1BWRFI.js";import"./chevron-down-zF0nXAC0.js";import"./index-COpwRMNV.js";import"./error-CPSw0Cte.js";import"./BaseCbacBanner-WtSiJJpE.js";import"./makeExternalStore-BfJvolns.js";import"./Tooltip-CJPtjYYA.js";import"./PopoverPopup-CEuqgSR5.js";import"./debounce-tNYRe4e5.js";import"./useOsdkClient-CORV7Qba.js";import"./tick-CquZwjil.js";import"./DropdownField-BRqSpCyG.js";import"./isEqual-DIqld6JC.js";import"./withOsdkMetrics-flaJFZYR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
