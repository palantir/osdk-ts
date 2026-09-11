import{f as p,j as e}from"./iframe-CrZ39q4W.js";import{O as i}from"./object-table-D26OUOhu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CBYzcUhb.js";import"./Table-sL8vfG-J.js";import"./index-BD7m3jFK.js";import"./Dialog-C2Aq5Vnf.js";import"./cross-CgqXpQyr.js";import"./svgIconContainer-JiAQFJfX.js";import"./useBaseUiId-sTwbXHgE.js";import"./InternalBackdrop-C5GI9506.js";import"./composite-DRGdlpPN.js";import"./index-C_XnOq4s.js";import"./index--ClJ2plo.js";import"./index-CE_0GkNT.js";import"./useEventCallback-B3yH_W0Y.js";import"./SkeletonBar-CM8cFu92.js";import"./LoadingCell-deaFhM3X.js";import"./ColumnConfigDialog-DbRgxxnF.js";import"./DraggableList-BojvlFr5.js";import"./search-BqRMZJ3s.js";import"./Input-DIQd25cc.js";import"./useControlled-BBNkc-4m.js";import"./Button-C2GAq-XZ.js";import"./small-cross-Dpu5uUbJ.js";import"./ActionButton-DwqwMLmx.js";import"./Checkbox-DxQnBKfn.js";import"./useValueChanged-6_0vBwFL.js";import"./CollapsiblePanel-AgJKSqQy.js";import"./MultiColumnSortDialog-_im0eHu_.js";import"./MenuTrigger-CopAsfDs.js";import"./CompositeItem-DwChmrQE.js";import"./ToolbarRootContext-Bd0nHJjt.js";import"./getDisabledMountTransitionStyles-D3nUrh49.js";import"./getPseudoElementBounds-C_NMVDl6.js";import"./chevron-down-Do1ARTyC.js";import"./index-DyFGpZZr.js";import"./error-mXLWjtku.js";import"./BaseCbacBanner-DsLWPX37.js";import"./makeExternalStore-Bbx2CBha.js";import"./Tooltip-GYXLgvYO.js";import"./PopoverPopup-DSVB_f17.js";import"./debounce-CrnOUVh-.js";import"./useOsdkClient-DGv3o-sm.js";import"./tick-lwLiufa4.js";import"./DropdownField-CpkGq24N.js";import"./isEqual-cp97OYAK.js";import"./withOsdkMetrics-CEEcnA0Y.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
