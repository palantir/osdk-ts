import{f as p,j as e}from"./iframe-BvlK2p8r.js";import{O as i}from"./object-table-B8BhsAwI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bf1QTDA3.js";import"./Table-VrlY8bUZ.js";import"./index-CJtyvgYT.js";import"./Dialog--FJPiMUE.js";import"./cross-XBkVoEMi.js";import"./svgIconContainer-CLWMH6Fx.js";import"./useBaseUiId-DiGEHRWv.js";import"./InternalBackdrop-Cvxe13O2.js";import"./composite-DLYbiM9i.js";import"./index-BXSqz-r8.js";import"./index-DR4zhZlK.js";import"./index-BXKLk0LB.js";import"./useEventCallback-YMzXT1lg.js";import"./SkeletonBar-CGq0TYtq.js";import"./LoadingCell-BOX2GpiG.js";import"./ColumnConfigDialog-CmefXAym.js";import"./DraggableList-C40V0O03.js";import"./search-CWi8yKUA.js";import"./Input-5I-CO4CQ.js";import"./useControlled-B_OuFYE6.js";import"./isEqual-D0ITe3HQ.js";import"./small-cross-C2NIy0Lo.js";import"./Button-CwuonV3H.js";import"./ActionButton-6FVwa-nx.js";import"./Checkbox-Dwe_ZHAJ.js";import"./useValueChanged-DColRsxd.js";import"./CollapsiblePanel-B2S2rCZq.js";import"./MultiColumnSortDialog-CxV4v8xh.js";import"./MenuTrigger-C44b3RoE.js";import"./CompositeItem-DBLtjtTq.js";import"./ToolbarRootContext-B8YXpq5u.js";import"./getDisabledMountTransitionStyles-DDUBMXqp.js";import"./getPseudoElementBounds-BoJCJ9ri.js";import"./chevron-down-Bpyob3k8.js";import"./index-C-Bgj_rI.js";import"./error-CHnt8F1v.js";import"./BaseCbacBanner-Cnz8SeR-.js";import"./makeExternalStore-uNOWdKm-.js";import"./Tooltip-Dl9Maat9.js";import"./PopoverPopup-DzIb0oW3.js";import"./Combobox-B-MC9o5q.js";import"./useOsdkClient-CJwHvTQr.js";import"./tick-DDScHrxu.js";import"./DropdownField-CjecytYH.js";import"./withOsdkMetrics-BEFCVJp2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
