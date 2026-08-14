import{f as p,j as e}from"./iframe-3nC60a4v.js";import{O as i}from"./object-table-CV-F6wRx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CtQiSH5M.js";import"./Table-kq55NlgD.js";import"./index--5KTZ4Ep.js";import"./Dialog-BiWAkt-w.js";import"./cross-CMAuZjpn.js";import"./svgIconContainer-Hgjanp0y.js";import"./useBaseUiId-BM6_UXz4.js";import"./InternalBackdrop-BiiOafg8.js";import"./composite-BrRtjrgR.js";import"./index-CLrFIYZg.js";import"./index-DzaKOe1M.js";import"./index-CocS6_I5.js";import"./useEventCallback-ywBwLJd_.js";import"./SkeletonBar-CiKIs5AX.js";import"./LoadingCell-DqkoVxAw.js";import"./ColumnConfigDialog-_767sJGS.js";import"./DraggableList-BQ1mmbNV.js";import"./search-DQ5LXzk6.js";import"./Input-ChkMuz1l.js";import"./useControlled-Ba8inJDj.js";import"./Button-Cnm3S-R_.js";import"./small-cross-KPK1DvK4.js";import"./ActionButton-DJqZpL4G.js";import"./Checkbox-Db399nrU.js";import"./useValueChanged-CGG_8xpf.js";import"./CollapsiblePanel-Cpc-708g.js";import"./MultiColumnSortDialog-lsuxLQhA.js";import"./MenuTrigger-Q6-vCaVA.js";import"./CompositeItem-BEbKblcQ.js";import"./ToolbarRootContext-BdFb43yO.js";import"./getDisabledMountTransitionStyles-kg_yOzXE.js";import"./getPseudoElementBounds-CmEHJYzZ.js";import"./chevron-down-D0HgWRzj.js";import"./index-CsKQS3Xc.js";import"./error-mCE2N3tZ.js";import"./BaseCbacBanner-CqS2gRe5.js";import"./makeExternalStore-0l0defH5.js";import"./Tooltip-DhpiXHiy.js";import"./PopoverPopup-CF0wadjB.js";import"./debounce-CyQSshlk.js";import"./useOsdkClient-yREfglk8.js";import"./tick-DXiaINGh.js";import"./DropdownField-DjbTnSu5.js";import"./isEqual-DBChHJW0.js";import"./withOsdkMetrics-BFnBWSw3.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
