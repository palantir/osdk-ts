import{f as p,j as e}from"./iframe-ChS3imFp.js";import{O as i}from"./object-table-BPYfgJHo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CbLZMJZq.js";import"./Table-1iNzrKdw.js";import"./index-BhUaDBrt.js";import"./Dialog-CNUb0HiZ.js";import"./cross-B14JKiqa.js";import"./svgIconContainer-CrPK_Tf2.js";import"./useBaseUiId-D54mwsVu.js";import"./InternalBackdrop-BxgcnVtt.js";import"./composite-BXiRclhX.js";import"./index-q2j62sEE.js";import"./index-jVTOKRrt.js";import"./index-C5fCn2Oc.js";import"./useEventCallback-DkRfzjT3.js";import"./SkeletonBar-Cj6_TZPS.js";import"./LoadingCell-Bvndp_nD.js";import"./ColumnConfigDialog-6QS0FE1C.js";import"./DraggableList-4xfXmqhr.js";import"./search-DsoYH40Z.js";import"./Input-Ceo2lduN.js";import"./useControlled-BRbOyxdk.js";import"./Button-DheVbQ5T.js";import"./small-cross-BvcSZeK5.js";import"./ActionButton-5Bimgsql.js";import"./Checkbox-BeMf2eoX.js";import"./useValueChanged-BrvbqScR.js";import"./CollapsiblePanel-6nrQcjmf.js";import"./MultiColumnSortDialog-CRuuO82b.js";import"./MenuTrigger-C8EJ5VzV.js";import"./CompositeItem-Ciy3kTde.js";import"./ToolbarRootContext-Ciy-U0ts.js";import"./getDisabledMountTransitionStyles-CDYtl7Ns.js";import"./getPseudoElementBounds-j94sMqWn.js";import"./chevron-down-CE8oNUyN.js";import"./index-x3Y6GJ5x.js";import"./error-qSLqjDm7.js";import"./BaseCbacBanner-Ddq1Akzn.js";import"./makeExternalStore-vRVo58Vz.js";import"./Tooltip-Dttn_b8B.js";import"./PopoverPopup-C3wuDmxN.js";import"./debounce-DDb-9VWg.js";import"./useOsdkClient-DGx74XLA.js";import"./tick-X11Khcsu.js";import"./DropdownField-DH0EEhyZ.js";import"./isEqual-CJd-aWLn.js";import"./withOsdkMetrics-uF3PiR7H.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
