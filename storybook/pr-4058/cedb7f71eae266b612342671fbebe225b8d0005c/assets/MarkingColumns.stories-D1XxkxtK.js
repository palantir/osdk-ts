import{f as p,j as e}from"./iframe-CNtj4pm0.js";import{O as i}from"./object-table-BdWu6-xy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BS75hAbV.js";import"./Table-DSQlX70T.js";import"./index-sjmYZucR.js";import"./Dialog-D3lioHOd.js";import"./cross-BI_rXiCk.js";import"./svgIconContainer-KAKJdeY6.js";import"./useBaseUiId-lN80hZHi.js";import"./InternalBackdrop-BMWNtsZU.js";import"./composite-GfxKj1uF.js";import"./index-Cgs0l_sb.js";import"./index-CUZALXVA.js";import"./index-djpdBoFm.js";import"./useEventCallback-DuERb84G.js";import"./SkeletonBar-CZrTeSVQ.js";import"./LoadingCell-BRNwHJc1.js";import"./ColumnConfigDialog-CMgbih-7.js";import"./DraggableList-WdI-3es1.js";import"./search-D7W-cB43.js";import"./Input-C4ZhagKB.js";import"./useControlled-B0rx1snt.js";import"./Button-eHM7dp0m.js";import"./small-cross-DtFIErRB.js";import"./ActionButton-CmPvNCl_.js";import"./Checkbox-BMufYA8q.js";import"./useValueChanged-DDRJQ_I0.js";import"./CollapsiblePanel-D4KfY0r3.js";import"./MultiColumnSortDialog-CrARlvWc.js";import"./MenuTrigger-Cqg0-xP9.js";import"./CompositeItem-BO5p0iBu.js";import"./ToolbarRootContext-DeNcRZ79.js";import"./getDisabledMountTransitionStyles-BqG7Ghbq.js";import"./getPseudoElementBounds-Cvn7IccH.js";import"./chevron-down-DuRgHJud.js";import"./index-vLqmlx6U.js";import"./error-BoQP4cSo.js";import"./BaseCbacBanner-Bpgn6iSi.js";import"./makeExternalStore-CJ8yXjVF.js";import"./Tooltip-CC9kMvNv.js";import"./PopoverPopup-D6qb_igd.js";import"./debounce--s-i1_AZ.js";import"./useOsdkClient-VbnySwVH.js";import"./tick-BMhhdG7H.js";import"./DropdownField-Bnf0PiqN.js";import"./isEqual-C16MQX7m.js";import"./withOsdkMetrics-D3scg1-Z.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
