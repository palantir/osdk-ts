import{f as p,j as e}from"./iframe-DtbzkEzs.js";import{O as i}from"./object-table-K5GTM802.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CL2kdIiG.js";import"./index-Cdl7LtxY.js";import"./Dialog-DXYzGD4Z.js";import"./cross-CkY96ER9.js";import"./svgIconContainer-B1X0MJ2V.js";import"./useBaseUiId-D9GVHSAs.js";import"./InternalBackdrop-uFAfuBcA.js";import"./composite-BCd6_VbD.js";import"./index-CAGi0i5x.js";import"./index-BuXzcc8v.js";import"./index-CQLgKLql.js";import"./useEventCallback-hJNWOq4v.js";import"./SkeletonBar-DurJhUjh.js";import"./LoadingCell-C0RXbiXJ.js";import"./ColumnConfigDialog-BDreHfee.js";import"./DraggableList-D2NHg1n7.js";import"./search-tpVGv-bq.js";import"./Input-CLvZmI34.js";import"./useControlled-D6veSbC8.js";import"./Button-wQYjXV7W.js";import"./small-cross-DcWkxxec.js";import"./ActionButton-DzPIBKy7.js";import"./Checkbox-_PeJjaQL.js";import"./useValueChanged-BzIGSXmS.js";import"./CollapsiblePanel-BQz4jwXH.js";import"./MultiColumnSortDialog-Z7WhS9Nf.js";import"./MenuTrigger-BLzPHP1n.js";import"./CompositeItem-CrrqQtnx.js";import"./ToolbarRootContext-jyIYtAkE.js";import"./getDisabledMountTransitionStyles-Bxj-okW1.js";import"./getPseudoElementBounds-BAZhnTL4.js";import"./chevron-down-BkbtkYMp.js";import"./index-CvbQmAxO.js";import"./error-DdI77Vqv.js";import"./BaseCbacBanner-Cd7_oS2n.js";import"./makeExternalStore-BZkRjIzK.js";import"./Tooltip-DvyWT7G6.js";import"./PopoverPopup-DXMZwimF.js";import"./debounce-DDPZphKn.js";import"./useOsdkClient-B9lCYv0I.js";import"./tick-COKHk2-s.js";import"./DropdownField-CFYYtDEI.js";import"./isEqual-FgnwAmNG.js";import"./withOsdkMetrics-Ad1iX_N9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
