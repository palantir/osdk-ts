import{f as p,j as e}from"./iframe-C-gRhmL7.js";import{O as i}from"./object-table-BuNrcFUB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BRnBMuxX.js";import"./Table-D1wEI7Jw.js";import"./index-BomyFAOQ.js";import"./Dialog-DORMEh_O.js";import"./cross-BgbLU6cP.js";import"./svgIconContainer-D3HKLOfp.js";import"./useBaseUiId-Dr0jpy2a.js";import"./InternalBackdrop-DAQFGGKN.js";import"./composite-abNLhxgk.js";import"./index-Cc3D0dS0.js";import"./index-CMgDy_5O.js";import"./index-Bn78Igy-.js";import"./useEventCallback-L7w5wNTM.js";import"./SkeletonBar-BrXfWJ3s.js";import"./LoadingCell-CGoqfSvN.js";import"./ColumnConfigDialog-CRQ1b3Zi.js";import"./DraggableList-DPdWpbia.js";import"./search-BQdh6WXo.js";import"./Input-D1XkMJrA.js";import"./useControlled-BYigcnNh.js";import"./Button-CE8V4pbx.js";import"./small-cross-QE8L2S61.js";import"./ActionButton-CtsB9LNj.js";import"./Checkbox-BoknC1gS.js";import"./useValueChanged-DfaHdTkd.js";import"./CollapsiblePanel-BKE8iGjK.js";import"./MultiColumnSortDialog-CMd7Ma2F.js";import"./MenuTrigger-B1zMt0LI.js";import"./CompositeItem-Dc0cRnHM.js";import"./ToolbarRootContext-tG5LuvDM.js";import"./getDisabledMountTransitionStyles-BmL3-adz.js";import"./getPseudoElementBounds-Cw9ZB0lo.js";import"./chevron-down-Cj7UC7sg.js";import"./index-CYurDmtO.js";import"./error-AkMr3-YU.js";import"./BaseCbacBanner-CFHgpu92.js";import"./makeExternalStore-s0ePZNdW.js";import"./Tooltip-DQzNOf2f.js";import"./PopoverPopup-BfjojjnZ.js";import"./debounce-DGWONp_t.js";import"./useOsdkClient-CVDU5GOE.js";import"./tick-CwSemnZF.js";import"./DropdownField-Br06tlrV.js";import"./isEqual-CM2lqVB7.js";import"./withOsdkMetrics-Dez2mISn.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
