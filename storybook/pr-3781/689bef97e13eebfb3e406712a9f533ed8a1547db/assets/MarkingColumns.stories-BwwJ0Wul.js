import{f as p,j as e}from"./iframe-CVw8lT_p.js";import{O as i}from"./object-table-DX270X06.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-39HDiriG.js";import"./Table-Cm1zmFBp.js";import"./index-seJCcwx0.js";import"./Dialog-DiLz0XQ4.js";import"./cross-CKjM0IJA.js";import"./svgIconContainer-j0iPz0xP.js";import"./useBaseUiId-DX7AvzL6.js";import"./InternalBackdrop-BjPX4DaQ.js";import"./composite-02otrQol.js";import"./index-DOrwx4ox.js";import"./index-BV9_SaTX.js";import"./index-fcZuwg4_.js";import"./useEventCallback-DqnyWBUG.js";import"./SkeletonBar-DTCVeuOr.js";import"./LoadingCell-Cxdnzx9B.js";import"./ColumnConfigDialog-DnyF6P4z.js";import"./DraggableList-4bPUmXfn.js";import"./search-B9c9IUJL.js";import"./Input-aUjsDD_S.js";import"./useControlled-BjfgiGuC.js";import"./isEqual-vos-yDjT.js";import"./isObject-BikITpyp.js";import"./Button-DDnd28Ua.js";import"./ActionButton-To3utIpL.js";import"./Checkbox-CEm1K9hX.js";import"./useValueChanged-DF2Ro_hc.js";import"./CollapsiblePanel-BkJVDq8v.js";import"./MultiColumnSortDialog-BvdVoeew.js";import"./MenuTrigger-BWSPLmCS.js";import"./CompositeItem-DWFZqP11.js";import"./ToolbarRootContext-CDJpuj06.js";import"./getDisabledMountTransitionStyles-BjM-q0Kj.js";import"./getPseudoElementBounds-CZc1qxZw.js";import"./chevron-down-BYHRqgTY.js";import"./index-B0nXunlt.js";import"./error-70eabRvD.js";import"./BaseCbacBanner-C42BTLFx.js";import"./makeExternalStore-DJnA5Pzt.js";import"./Tooltip-pXyO8Ory.js";import"./PopoverPopup-Cm-CCz32.js";import"./toNumber-CvHAYR8q.js";import"./useOsdkClient-lbkGBCiM.js";import"./tick-BBlHqKx_.js";import"./DropdownField-CibN-iRH.js";import"./withOsdkMetrics-B0amdy6Q.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
