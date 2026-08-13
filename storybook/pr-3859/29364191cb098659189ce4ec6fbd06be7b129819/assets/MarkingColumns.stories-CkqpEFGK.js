import{f as p,j as e}from"./iframe-ClxO4NjR.js";import{O as i}from"./object-table-B_1CuulK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C0zwqbnX.js";import"./Table-CPN45vOi.js";import"./index-BWCYhOnm.js";import"./Dialog-BuPKBq1e.js";import"./cross-DXyr0bNz.js";import"./svgIconContainer-BvC_SFje.js";import"./useBaseUiId-mbHRa4ig.js";import"./InternalBackdrop-DGb5grRA.js";import"./composite-B__OAHDn.js";import"./index-BZg1jqES.js";import"./index-DE2Njq5W.js";import"./index-DpzXFkZR.js";import"./useEventCallback-Co3RDJvl.js";import"./SkeletonBar-bSEBZ09P.js";import"./LoadingCell-CXMRjvOm.js";import"./ColumnConfigDialog-CHDvFhNn.js";import"./DraggableList-BMsve3lG.js";import"./search-C0Wbe_TX.js";import"./Input-CDMrsEOr.js";import"./useControlled-CBuD11wc.js";import"./isEqual-zsjKM9aa.js";import"./isObject-Cm7OR2iz.js";import"./Button-CrUVT3U1.js";import"./ActionButton-BYrKQTuf.js";import"./Checkbox-BQ07bYzl.js";import"./useValueChanged-DH6dVKYy.js";import"./CollapsiblePanel-Cn58OeIc.js";import"./MultiColumnSortDialog-BuljqIUh.js";import"./MenuTrigger-DzzjAqeR.js";import"./CompositeItem-CIWFMAgC.js";import"./ToolbarRootContext-CCOvFsGt.js";import"./getDisabledMountTransitionStyles-tEdN7Og9.js";import"./getPseudoElementBounds-C05aLgmo.js";import"./chevron-down-BXi8nOG0.js";import"./index-D92ajlqI.js";import"./error-97F9Ilv7.js";import"./BaseCbacBanner-DoEUJfvC.js";import"./makeExternalStore-CFCzzqiP.js";import"./Tooltip-dtP77QJH.js";import"./PopoverPopup-BCBH3KD8.js";import"./toNumber-D2QUkYkC.js";import"./useOsdkClient-COh8E9Bx.js";import"./tick-C-J6268_.js";import"./DropdownField-BvThcx6q.js";import"./withOsdkMetrics-CfQvwroh.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
