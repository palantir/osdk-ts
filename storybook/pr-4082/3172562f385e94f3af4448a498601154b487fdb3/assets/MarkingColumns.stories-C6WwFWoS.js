import{f as p,j as e}from"./iframe-CuaBTThM.js";import{O as i}from"./object-table-CdsNOXNH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BgQMGQD9.js";import"./Table-CrGwcl_q.js";import"./index-GgZf0ymo.js";import"./Dialog-BcQj24m7.js";import"./cross-CR1o8CWA.js";import"./svgIconContainer-CzPEr09G.js";import"./useBaseUiId-BS0XPI08.js";import"./InternalBackdrop-Clzk9XeE.js";import"./composite-CR2xOePv.js";import"./index-oUfyUaR2.js";import"./index-CpY0VuZR.js";import"./index-M-I7sgYK.js";import"./useEventCallback-m_NUBECY.js";import"./SkeletonBar-DSN2gcPw.js";import"./LoadingCell-Qolnhcmm.js";import"./ColumnConfigDialog-yePfITsL.js";import"./DraggableList-TOCZNNp5.js";import"./search-D87DQ5KE.js";import"./Input-CPr8OQD6.js";import"./useControlled-BV5LNAXf.js";import"./Button-CkWuBE5W.js";import"./small-cross-BK9Py7ht.js";import"./ActionButton-m1-HZ51Y.js";import"./Checkbox-BijzNCd1.js";import"./useValueChanged-CFw9gLVH.js";import"./CollapsiblePanel-XiNOh9Gj.js";import"./MultiColumnSortDialog-CSlAmV1e.js";import"./MenuTrigger-DLa-uREd.js";import"./CompositeItem-BGC4JuuI.js";import"./ToolbarRootContext-ChhVj2PO.js";import"./getDisabledMountTransitionStyles-CDB_t-dK.js";import"./getPseudoElementBounds-ChIjHzI9.js";import"./chevron-down-Bk4mo7mA.js";import"./index-BsMXAZnQ.js";import"./error-B4mawlQh.js";import"./BaseCbacBanner-DIzV_hl8.js";import"./makeExternalStore-pp23vOCb.js";import"./Tooltip-HTpDMf45.js";import"./PopoverPopup-DCxI2WDv.js";import"./debounce-C6OjGsRu.js";import"./useOsdkClient-jDqaMA4t.js";import"./tick-Dm48v928.js";import"./DropdownField-Es7JKCIb.js";import"./isEqual-B0V4Ry29.js";import"./withOsdkMetrics-DEQltQtw.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
