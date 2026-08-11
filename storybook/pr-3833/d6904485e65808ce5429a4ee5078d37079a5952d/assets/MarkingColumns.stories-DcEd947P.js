import{f as p,j as e}from"./iframe-BYxEOIgJ.js";import{O as i}from"./object-table-ZGMv6O3p.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CYfeVk8W.js";import"./Table-BQsMFTl4.js";import"./index-DKKaubsW.js";import"./Dialog-9IDRR8Td.js";import"./cross-BIhLN6o-.js";import"./svgIconContainer-BEmlyg-y.js";import"./useBaseUiId-nfkORe0E.js";import"./InternalBackdrop-DNuz-SJQ.js";import"./composite-Cx4sqESm.js";import"./index-tQSEfkeh.js";import"./index-BOJvayi6.js";import"./index-DwnZeONY.js";import"./useEventCallback-Wzc0f3SD.js";import"./SkeletonBar-DkY0CIx2.js";import"./LoadingCell-CQeIxM7f.js";import"./ColumnConfigDialog-C0b_e5gr.js";import"./DraggableList-WHk-6vds.js";import"./search-D-odk6X_.js";import"./Input-DjFm0Vep.js";import"./useControlled-CUdaOkZq.js";import"./isEqual-BhWNui4X.js";import"./isObject-LQOhNoGU.js";import"./Button-BD1cn9XN.js";import"./ActionButton--q9fC4uz.js";import"./Checkbox-B2UQUxW9.js";import"./useValueChanged-Bdy5pI-C.js";import"./CollapsiblePanel-Cq48y23I.js";import"./MultiColumnSortDialog-CxLVk_VS.js";import"./MenuTrigger-Cj5R0CGN.js";import"./CompositeItem-DmtenJN8.js";import"./ToolbarRootContext-49DlEGV6.js";import"./getDisabledMountTransitionStyles-C9TiHE4J.js";import"./getPseudoElementBounds-C8ySOvtU.js";import"./chevron-down-CrQY9uCp.js";import"./index-DHS4kq0m.js";import"./error-Cj50jG_k.js";import"./BaseCbacBanner-DeIJCNJT.js";import"./makeExternalStore-MdKyv_9V.js";import"./Tooltip-BGdIr3DT.js";import"./PopoverPopup-BjEwSVm1.js";import"./toNumber-CMjVeBac.js";import"./useOsdkClient-CNrMQGxQ.js";import"./tick-C7W402bP.js";import"./DropdownField-DOymprAa.js";import"./withOsdkMetrics-C8n5_A-t.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
