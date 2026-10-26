import{f as p,j as e}from"./iframe-DOyQxJvH.js";import{O as i}from"./object-table-rCHTTNrC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-b99Wj4jj.js";import"./Table-BDyrIjWH.js";import"./index-DohetWl-.js";import"./Dialog-t2KrNQJf.js";import"./cross-Clcl0FW-.js";import"./svgIconContainer-B_aagRLN.js";import"./useBaseUiId-DieRYZnL.js";import"./InternalBackdrop-ByEBsKrq.js";import"./composite-ZJn0pY0h.js";import"./index-BPvIlRyU.js";import"./index-Bj0URVYm.js";import"./index-BkqZ1wLV.js";import"./useEventCallback-jKGT4Pcx.js";import"./SkeletonBar-ySgrjMCk.js";import"./LoadingCell-BedFgeOa.js";import"./ColumnConfigDialog-5y16klfk.js";import"./DraggableList-DcvsfxCi.js";import"./search-CFvqb_6m.js";import"./Input-1EVSbUy3.js";import"./useControlled-D5_WZpq_.js";import"./Button-Siw5hwdL.js";import"./small-cross-DHIK5OPW.js";import"./ActionButton-Cj8YJ3F7.js";import"./Checkbox-CsbfOGVY.js";import"./useValueChanged-BcjC7Q7U.js";import"./CollapsiblePanel-Amuq13yP.js";import"./MultiColumnSortDialog-C1c_eJ9g.js";import"./MenuTrigger-CfbmdoAo.js";import"./CompositeItem-CClLQtRU.js";import"./ToolbarRootContext-CL9w8adf.js";import"./getDisabledMountTransitionStyles-C53WijiN.js";import"./getPseudoElementBounds-veJLu94H.js";import"./chevron-down-CHciOX2j.js";import"./index-jxIBoeRQ.js";import"./error-CImoxm8w.js";import"./BaseCbacBanner-NdHkp8P6.js";import"./makeExternalStore-C8fED8Be.js";import"./Tooltip-CycvzHTs.js";import"./PopoverPopup-aigE3Okr.js";import"./debounce-Blq-yKsA.js";import"./useOsdkClient-9mLaoDY9.js";import"./tick-Z9gea7hj.js";import"./DropdownField-BqmCeBVH.js";import"./isEqual-Bi80oFRx.js";import"./withOsdkMetrics-CkKOCKYX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
