import{f as p,j as e}from"./iframe-DOKsSIoF.js";import{O as i}from"./object-table-CNgp4EiJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DIcDZjtS.js";import"./Table-etEm7Ywu.js";import"./index-_xXvNYcY.js";import"./Dialog-BbwWD5pu.js";import"./cross-D475DauV.js";import"./svgIconContainer-Dpin5oqd.js";import"./useBaseUiId-DGSgOirr.js";import"./InternalBackdrop-B4AaEj4N.js";import"./composite-DQ6AxwFj.js";import"./index-BvLhZQjl.js";import"./index-DhP_5L9k.js";import"./index-dUaqq4Fq.js";import"./useEventCallback-Bf7s2Mxp.js";import"./SkeletonBar-DqSYWxQm.js";import"./LoadingCell-_akYhzPq.js";import"./ColumnConfigDialog-123MZYmZ.js";import"./DraggableList-B4HYopJH.js";import"./search-BcWq1pIm.js";import"./Input-Do1A5iUq.js";import"./useControlled-B82oHfdu.js";import"./isEqual-C6NR7xGt.js";import"./isObject-eWIrV8l-.js";import"./Button-CR4Jq5Wr.js";import"./ActionButton-C0SV8vyY.js";import"./Checkbox-DfUnlU1Y.js";import"./useValueChanged-DjjpCRBs.js";import"./CollapsiblePanel-G5gSfGtG.js";import"./MultiColumnSortDialog-Dlkwq0zz.js";import"./MenuTrigger-RF-8Atpf.js";import"./CompositeItem-C0yPEj0b.js";import"./ToolbarRootContext-BPvqgk36.js";import"./getDisabledMountTransitionStyles-B3Ro6IiM.js";import"./getPseudoElementBounds-B1JJ3_Zd.js";import"./chevron-down-DsDR74iP.js";import"./index-Db4L4DG0.js";import"./error-0smIlLow.js";import"./BaseCbacBanner-Dn9SakR8.js";import"./makeExternalStore-DJgCcd_q.js";import"./Tooltip-DMiQsrpr.js";import"./PopoverPopup-CKQaqJiX.js";import"./toNumber-CB6N3auG.js";import"./useOsdkClient-D9i1t7RY.js";import"./tick-WOBuXuXo.js";import"./DropdownField-Cd10dKpj.js";import"./withOsdkMetrics-DxFA8_hv.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
