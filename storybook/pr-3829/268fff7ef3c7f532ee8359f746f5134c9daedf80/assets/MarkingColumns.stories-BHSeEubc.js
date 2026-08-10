import{f as p,j as e}from"./iframe-DRvkx6EA.js";import{O as i}from"./object-table-DBzD_XBm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BhyZ3nJx.js";import"./Table-BJVVduwt.js";import"./index-L1UV-AGh.js";import"./Dialog-D5KZ70gI.js";import"./cross-3oIIwt46.js";import"./svgIconContainer-CJyvIw8C.js";import"./useBaseUiId-BUt3PNYZ.js";import"./InternalBackdrop-BGysF7SW.js";import"./composite-C22uJ7fn.js";import"./index-B_NabjnV.js";import"./index-B-a3URan.js";import"./index-DDpThYmQ.js";import"./useEventCallback-BL9HNNgV.js";import"./SkeletonBar-10kcximA.js";import"./LoadingCell-BiNuQWiA.js";import"./ColumnConfigDialog-cT-S5m8y.js";import"./DraggableList-DT1V9Nl5.js";import"./search-N-0jef5s.js";import"./Input-BYnQBqlk.js";import"./useControlled-CGkNej65.js";import"./isEqual-D_kar9of.js";import"./isObject-CXFfOXwZ.js";import"./Button-CQpi19yq.js";import"./ActionButton-D8KHjoz1.js";import"./Checkbox-C9Aygl69.js";import"./useValueChanged-CiS0FQ1d.js";import"./CollapsiblePanel-Cigm9Q9z.js";import"./MultiColumnSortDialog-BhQMtyJX.js";import"./MenuTrigger-CeJr3_rM.js";import"./CompositeItem-dZ8Gs4gk.js";import"./ToolbarRootContext-BNhBTPnD.js";import"./getDisabledMountTransitionStyles-BzS1BqnD.js";import"./getPseudoElementBounds-B-RFj-UH.js";import"./chevron-down-CVLOcSCE.js";import"./index-CJP3bEHO.js";import"./error-DPz_nmti.js";import"./BaseCbacBanner-B4fMA4Z9.js";import"./makeExternalStore-CHxLaRQK.js";import"./Tooltip-avIVaAD_.js";import"./PopoverPopup-DIktmPWA.js";import"./toNumber-CKb77F0n.js";import"./useOsdkClient-D1Ep5ZCP.js";import"./tick-_tjAc4OO.js";import"./DropdownField-D5R8WxXW.js";import"./withOsdkMetrics-GVKSYvIi.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
