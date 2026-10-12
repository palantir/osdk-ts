import{f as p,j as e}from"./iframe-3uOeStlO.js";import{O as i}from"./object-table-qJDWYpnJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B_uYGV8k.js";import"./Table-COy7OTJg.js";import"./index-B_qY6xMA.js";import"./Dialog-Ccqoblb9.js";import"./cross-waxScdAW.js";import"./svgIconContainer-BXcgfdNM.js";import"./useBaseUiId-DFf4k_ND.js";import"./InternalBackdrop-DeK6mcEC.js";import"./composite-DbFqwck4.js";import"./index-CkR9lTv2.js";import"./index-CV8wC36m.js";import"./index-K1gQz8hL.js";import"./useEventCallback-B_uqfwHC.js";import"./SkeletonBar-Cx2xW1pn.js";import"./LoadingCell-CII1RZf_.js";import"./ColumnConfigDialog-B9tNGQiq.js";import"./DraggableList-tGDRcHwH.js";import"./search-DB4T2psl.js";import"./Input-CYQFeP5H.js";import"./useControlled-Iq2zkhRy.js";import"./Button-B1JQinsR.js";import"./small-cross-DBqN_GPD.js";import"./ActionButton-B-_2-j29.js";import"./Checkbox-TNqUNqJn.js";import"./useValueChanged-BPuYePe0.js";import"./CollapsiblePanel-o2O4Ppa4.js";import"./MultiColumnSortDialog-BVqdM4HG.js";import"./MenuTrigger--u7WeyuR.js";import"./CompositeItem-B84OCPkr.js";import"./ToolbarRootContext-Dbkjbr9t.js";import"./getDisabledMountTransitionStyles-BEO9K8qN.js";import"./getPseudoElementBounds-hiaVLHB1.js";import"./chevron-down-Bzj-jMLe.js";import"./index-BiPZja9p.js";import"./error-BXiGRUyR.js";import"./BaseCbacBanner-Bcx0lEUZ.js";import"./makeExternalStore-B5qagnOI.js";import"./Tooltip-CiOtNwo6.js";import"./PopoverPopup-B8-ohf43.js";import"./debounce-D-3tGswa.js";import"./useOsdkClient-BR5uz5xP.js";import"./tick-Cvl3VbM3.js";import"./DropdownField-DiWe0nIp.js";import"./isEqual-LJdz_BZ3.js";import"./withOsdkMetrics-DtWegvZ6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
