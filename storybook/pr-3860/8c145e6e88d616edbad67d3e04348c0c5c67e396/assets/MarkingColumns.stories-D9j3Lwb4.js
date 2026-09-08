import{f as p,j as e}from"./iframe-Dixwoq4L.js";import{O as i}from"./object-table-BquBdSsi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BsHp-RGP.js";import"./Table-D-bsfsJd.js";import"./index-CcIVVuqf.js";import"./Dialog-CbAPprbB.js";import"./cross-D7TdtDyo.js";import"./svgIconContainer-CffeXbYk.js";import"./useBaseUiId-DaT4VLXm.js";import"./InternalBackdrop-B-8CQy8W.js";import"./composite-BiAYM8pY.js";import"./index-BX_I2TdV.js";import"./index-BXWUqN74.js";import"./index-Ch_N0PFP.js";import"./useEventCallback-C8toBuB-.js";import"./SkeletonBar-Dfdp1Pfv.js";import"./LoadingCell-BxTRRF_Z.js";import"./ColumnConfigDialog-DmKwlnIh.js";import"./DraggableList-DE08IhVc.js";import"./search-DAIXcQnY.js";import"./Input-gkS7bq_U.js";import"./useControlled-CJEoS3fz.js";import"./Button-Dr6WGivc.js";import"./small-cross-CaDB4jvF.js";import"./ActionButton-CdFwVFbZ.js";import"./Checkbox-mPvrwlTQ.js";import"./useValueChanged-CiXWMzHQ.js";import"./CollapsiblePanel-zs8L02cO.js";import"./MultiColumnSortDialog-drY98sLD.js";import"./MenuTrigger-BK7k2QEt.js";import"./CompositeItem-BVhXUg3I.js";import"./ToolbarRootContext-Dg49HtmA.js";import"./getDisabledMountTransitionStyles-DYbvwZ2K.js";import"./getPseudoElementBounds-DeapELKt.js";import"./chevron-down-BK-6EzsA.js";import"./index-nO-PLXJg.js";import"./error-CqJY6TRA.js";import"./BaseCbacBanner-DHUdayUx.js";import"./makeExternalStore-ClZX4f5E.js";import"./Tooltip-yiNDpymw.js";import"./PopoverPopup-CA0CFdoY.js";import"./debounce-atOz-W-P.js";import"./useOsdkClient-DiAIchaF.js";import"./tick-D209HxbV.js";import"./DropdownField-pxQBJOyD.js";import"./isEqual-W3ULvD17.js";import"./withOsdkMetrics-CHTNEF0W.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
