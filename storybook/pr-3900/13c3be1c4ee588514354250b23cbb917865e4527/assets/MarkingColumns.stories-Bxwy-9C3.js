import{f as p,j as e}from"./iframe-CJUBUTub.js";import{O as i}from"./object-table-DwddERxx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CIaS7xmC.js";import"./Table-D6LAu_qp.js";import"./index-D6RKL9xW.js";import"./Dialog-tFwyZqn4.js";import"./cross-CLjLUeJo.js";import"./svgIconContainer-CXg-3J8w.js";import"./useBaseUiId-YnyDNtng.js";import"./InternalBackdrop-Rxhs1aJY.js";import"./composite-IgJfsXTy.js";import"./index-DmjIOSHs.js";import"./index-BfGfq02Q.js";import"./index-C5qONp6M.js";import"./useEventCallback-L7RTqL_n.js";import"./SkeletonBar-BdJVeNGK.js";import"./LoadingCell-BA54JClW.js";import"./ColumnConfigDialog-0w9-pAgF.js";import"./DraggableList-K0eBUk7L.js";import"./search-5t0wk0Gr.js";import"./Input-DfF7VsZQ.js";import"./useControlled-C4N2tr7p.js";import"./Button-DCqz38K7.js";import"./small-cross-BLph0oUA.js";import"./ActionButton-aE1Vn891.js";import"./Checkbox-C1_eXCF3.js";import"./useValueChanged-BhGo1cQZ.js";import"./CollapsiblePanel-BUDs43GM.js";import"./MultiColumnSortDialog-DqqkdhJm.js";import"./MenuTrigger-PEhyz_-A.js";import"./CompositeItem-CL-JcIqG.js";import"./ToolbarRootContext-BtuYN_1f.js";import"./getDisabledMountTransitionStyles-CpqTqMd3.js";import"./getPseudoElementBounds-BF4H2UwQ.js";import"./chevron-down-CuNdvUfz.js";import"./index-C3hSlA2p.js";import"./error--zLI5MtK.js";import"./BaseCbacBanner-CYib6Qd_.js";import"./makeExternalStore-DKQcCda3.js";import"./Tooltip-DIGJzMd5.js";import"./PopoverPopup-CRY5tVUJ.js";import"./debounce-DNVsdhoz.js";import"./useOsdkClient-B1B799x9.js";import"./tick-iXfhAnSu.js";import"./DropdownField-Colf05W8.js";import"./isEqual-X86jlpqw.js";import"./withOsdkMetrics-DJlQtgHI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
