import{f as p,j as e}from"./iframe-gxyWVbj2.js";import{O as i}from"./object-table-BV9fTc-i.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DE7utxpQ.js";import"./Table-B_dwHuEn.js";import"./index-QxbQkIyi.js";import"./Dialog-C3P5MjZq.js";import"./cross-VeIfZqt8.js";import"./svgIconContainer-DKbE6d31.js";import"./useBaseUiId-DviQ__RH.js";import"./InternalBackdrop-DwvYd_J6.js";import"./composite-iqOIimru.js";import"./index-BTPrH0w0.js";import"./index-NWW1BWCJ.js";import"./index-CEVBBPUN.js";import"./useEventCallback-26YzMxUe.js";import"./SkeletonBar-B50ZyoLs.js";import"./LoadingCell-CFBUM8ue.js";import"./ColumnConfigDialog-C5deL7Ed.js";import"./DraggableList-BW-vGzIl.js";import"./search-CyP3n12E.js";import"./Input-DTxeHNru.js";import"./useControlled-BNWlhOxQ.js";import"./Button-B4AYvQgI.js";import"./small-cross-D8cOGc_K.js";import"./ActionButton-DZr01Jaf.js";import"./Checkbox-C9sVYdhx.js";import"./useValueChanged-KXUkRbwe.js";import"./CollapsiblePanel-o-2jp67C.js";import"./MultiColumnSortDialog-DSmITdKp.js";import"./MenuTrigger-DsM6mbXw.js";import"./CompositeItem-CfmR6sON.js";import"./ToolbarRootContext-BbmcYQfJ.js";import"./getDisabledMountTransitionStyles-rpYg7a2m.js";import"./getPseudoElementBounds-BU1znkpG.js";import"./chevron-down-D0C-5aC_.js";import"./index-m96J0xcz.js";import"./error-Dq3CHQs2.js";import"./BaseCbacBanner-BgNW9o-N.js";import"./makeExternalStore-CU05zhJ7.js";import"./Tooltip-Cxy0TAi_.js";import"./PopoverPopup--JzGS9uQ.js";import"./debounce-CCj_OJPJ.js";import"./useOsdkClient-CUfX5Tns.js";import"./tick-CzmTrzOp.js";import"./DropdownField-DBl_-PYC.js";import"./isEqual-DgFl3X9R.js";import"./withOsdkMetrics-DtZ9khmC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
