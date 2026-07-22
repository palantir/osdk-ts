import{f as p,j as e}from"./iframe-DSMWrXPe.js";import{O as i}from"./object-table-brzJdw4z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BlZGs9G1.js";import"./Table-FLFX5WVY.js";import"./index-D6D_nts1.js";import"./Dialog-CxwSbKcE.js";import"./cross-mTQyjJ68.js";import"./svgIconContainer-UJFGmyTn.js";import"./useBaseUiId-Cx1Xrpmr.js";import"./InternalBackdrop-D0nVKbjz.js";import"./composite-B-A3OnRf.js";import"./index-CN-8IRxo.js";import"./index-DNaGfyxP.js";import"./index-DSxEGt0t.js";import"./useEventCallback-B5PgNgv2.js";import"./SkeletonBar-CNF74keQ.js";import"./LoadingCell-D3IcZ7G9.js";import"./ColumnConfigDialog-q2xCJ1vk.js";import"./DraggableList-DEuHSCUq.js";import"./search-Cw6Jc9Ce.js";import"./Input-wgU5PuR4.js";import"./useControlled-2qj00gpi.js";import"./isEqual-DpvqD4Se.js";import"./isObject-V_1Zj_Zw.js";import"./Button-DZHdVHGV.js";import"./ActionButton-DXOcgc9O.js";import"./Checkbox-eegeH5wv.js";import"./useValueChanged-BNgYpVJr.js";import"./CollapsiblePanel-bfaXjnr1.js";import"./MultiColumnSortDialog-BSM2ZWp1.js";import"./MenuTrigger-BjB-MtHP.js";import"./CompositeItem-B-YTSQE9.js";import"./ToolbarRootContext-CUL72IU0.js";import"./getDisabledMountTransitionStyles-C0KhBNLA.js";import"./getPseudoElementBounds-aUbKXBHu.js";import"./chevron-down-B5dAgewr.js";import"./index-CDy6IKMN.js";import"./error-CoP_lWQF.js";import"./BaseCbacBanner-CsBjL5vT.js";import"./makeExternalStore-TjOOI6Gz.js";import"./Tooltip-DNENNQFW.js";import"./PopoverPopup-BbkLso8i.js";import"./toNumber-_WDj94yf.js";import"./useOsdkClient-C-RzX03l.js";import"./tick-jHimGsho.js";import"./DropdownField-BgvzeuHw.js";import"./withOsdkMetrics-5xZP9LUJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
