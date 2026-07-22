import{f as p,j as e}from"./iframe-CeONtGYE.js";import{O as i}from"./object-table-C-0qyvmt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DvBXsFR0.js";import"./Table-rtjH63Iv.js";import"./index-bFgDLkru.js";import"./Dialog-DZUJVDj6.js";import"./cross-CNEWv4-m.js";import"./svgIconContainer-CQgzwcHS.js";import"./useBaseUiId-Dx7XmX8N.js";import"./InternalBackdrop-CxNVhvRT.js";import"./composite-BsZkzPht.js";import"./index-DxRvRo72.js";import"./index-C4EeMnB3.js";import"./index-K450AsIM.js";import"./useEventCallback-CjvTvM1n.js";import"./SkeletonBar-Di-FKU_W.js";import"./LoadingCell-BrQVVFKz.js";import"./ColumnConfigDialog-nrL98A_0.js";import"./DraggableList-CSTPq7_h.js";import"./search-CVSxuCGC.js";import"./Input-D0sau520.js";import"./useControlled-CG2mEVzV.js";import"./isEqual-Ce4oGXJ4.js";import"./isObject-BmhJRh0P.js";import"./Button-ChHvGo4U.js";import"./ActionButton-AFO9eSpU.js";import"./Checkbox-4rErH6sT.js";import"./useValueChanged-B1xeCjzy.js";import"./CollapsiblePanel-Bgt_TMxz.js";import"./MultiColumnSortDialog-CKqcLFul.js";import"./MenuTrigger-CvAhWxJk.js";import"./CompositeItem-Cj5a69yU.js";import"./ToolbarRootContext-uLaFcH8c.js";import"./getDisabledMountTransitionStyles-DPlOhD36.js";import"./getPseudoElementBounds-C5I4UJ-M.js";import"./chevron-down-2yZeoid0.js";import"./index-CcKLGiy2.js";import"./error-DarXGylQ.js";import"./BaseCbacBanner-K0igv0lw.js";import"./makeExternalStore-RXvhCFRl.js";import"./Tooltip-DBPhmiDX.js";import"./PopoverPopup-BGU653ug.js";import"./toNumber-BO345wWH.js";import"./useOsdkClient-Cb3NTTyB.js";import"./tick-B6DaleAW.js";import"./DropdownField-CYKO4B5H.js";import"./withOsdkMetrics-Xgj9igKU.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
