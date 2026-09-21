import{f as p,j as e}from"./iframe-BdwSD-4g.js";import{O as i}from"./object-table-Dkf_Wsl_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Q7k08PSu.js";import"./Table-PC-pI0ZM.js";import"./index-DOSkW-9K.js";import"./Dialog-C2jm4GPq.js";import"./cross-ALmhnM-F.js";import"./svgIconContainer-DA4wNVnR.js";import"./useBaseUiId-Dw0luXrm.js";import"./InternalBackdrop-D1YI8GOv.js";import"./composite-5NyIARcH.js";import"./index-Af48Q6og.js";import"./index-FAuKkFnB.js";import"./index-CxgrbPDy.js";import"./useEventCallback-DfqzSU5_.js";import"./SkeletonBar-D6TZf1Z5.js";import"./LoadingCell-CptRX9Y8.js";import"./ColumnConfigDialog-CzZ4BQy7.js";import"./DraggableList-C1r11s45.js";import"./search-zOT-eX5y.js";import"./Input-DFvD33w1.js";import"./useControlled-D1Q7B9_S.js";import"./Button-DT6t-JAZ.js";import"./small-cross-vRrhE9Ne.js";import"./ActionButton-CSVrvW6D.js";import"./Checkbox-p54CWvtE.js";import"./useValueChanged-CIIin2AA.js";import"./CollapsiblePanel-XzAfxH9Z.js";import"./MultiColumnSortDialog-C4bbbTVf.js";import"./MenuTrigger-CuNIwuZO.js";import"./CompositeItem-_wAlG9yG.js";import"./ToolbarRootContext-BvaeGVZU.js";import"./getDisabledMountTransitionStyles-B9XqalxW.js";import"./getPseudoElementBounds-BdDow4jC.js";import"./chevron-down-Dn6L64Ru.js";import"./index-gxw3sShd.js";import"./error-BrVGJ7z5.js";import"./BaseCbacBanner-C59qxhDp.js";import"./makeExternalStore-BaL0IM38.js";import"./Tooltip-BeEpEYbq.js";import"./PopoverPopup-CkTzI9ep.js";import"./debounce-Bij6cuiB.js";import"./useOsdkClient-BNfS8Hn2.js";import"./tick-BCAUztTc.js";import"./DropdownField-BLDXBK7q.js";import"./isEqual-B34gs6iF.js";import"./withOsdkMetrics-De7Bt3A9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
