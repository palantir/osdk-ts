import{f as p,j as e}from"./iframe-U_ccsXOa.js";import{O as i}from"./object-table-C6K2P1RQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-65xl7bLJ.js";import"./Table-BOJeRv4C.js";import"./index-BOhpqcbq.js";import"./Dialog-CrJCnScq.js";import"./cross-Dx8cyWlu.js";import"./svgIconContainer-Bdip5v4Z.js";import"./useBaseUiId-CsjkwTP2.js";import"./InternalBackdrop-CzMDIOGh.js";import"./composite-jcTrqHdY.js";import"./index-CPxksT-G.js";import"./index-CZOfpX0o.js";import"./index-DZLzj8Gd.js";import"./useEventCallback-C1NlRVeF.js";import"./SkeletonBar-jdk0Bs2q.js";import"./LoadingCell-BnptFSiK.js";import"./ColumnConfigDialog-D9Yv-20N.js";import"./DraggableList-CRzWXSc_.js";import"./search-V9O-Ezy9.js";import"./Input-W79UZ-Qi.js";import"./useControlled-CXjwM6_M.js";import"./Button-6VeiZu2O.js";import"./small-cross-B3RKx4IS.js";import"./ActionButton-CTTQu7QA.js";import"./Checkbox-PiFtXeB5.js";import"./useValueChanged-C_srctpf.js";import"./CollapsiblePanel-DDwW0VQA.js";import"./MultiColumnSortDialog-DjLVYiiu.js";import"./MenuTrigger-BSlHd9Sm.js";import"./CompositeItem-6mTD-F3x.js";import"./ToolbarRootContext-D5-PfmM6.js";import"./getDisabledMountTransitionStyles-BAfvW3aU.js";import"./getPseudoElementBounds-BvimzBGn.js";import"./chevron-down-B2jqRAv_.js";import"./index-BncXt_hB.js";import"./error-DWlA1yK3.js";import"./BaseCbacBanner-CGA1WM7M.js";import"./makeExternalStore-CBJBG8Ns.js";import"./Tooltip-BIBIqrVp.js";import"./PopoverPopup-B1HFntX8.js";import"./debounce-BKzmkk5O.js";import"./useOsdkClient-DMSQnpj7.js";import"./tick-y5pUQKDJ.js";import"./DropdownField-DkE0n-zM.js";import"./isEqual-DuIqjLXy.js";import"./withOsdkMetrics-DkeqZkcw.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
