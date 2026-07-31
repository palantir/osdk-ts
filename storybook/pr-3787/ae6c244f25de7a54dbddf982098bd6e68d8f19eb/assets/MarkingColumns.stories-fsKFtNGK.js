import{f as p,j as e}from"./iframe-J2J3YjE0.js";import{O as i}from"./object-table-CM_J-_4H.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DSYd8WXZ.js";import"./Table-Cw2yfldV.js";import"./index-BE32fXoe.js";import"./Dialog-Cii-cuRI.js";import"./cross-BUvQ63LS.js";import"./svgIconContainer-DBFfWUAc.js";import"./useBaseUiId-B5sE9yG5.js";import"./InternalBackdrop-BtDoipoP.js";import"./composite-lU6DBoNY.js";import"./index-Cm0SXZ2J.js";import"./index-CIPMrj_t.js";import"./index-DMjr37OC.js";import"./useEventCallback-xXkmYxnE.js";import"./SkeletonBar-Bl4uTwbL.js";import"./LoadingCell-D9RGNs2z.js";import"./ColumnConfigDialog-DfqTinFZ.js";import"./DraggableList-CuF55wpC.js";import"./search-BPhUZmyj.js";import"./Input-Cf887hhU.js";import"./useControlled-DPJfrFUK.js";import"./isEqual-Cis8o_Aq.js";import"./isObject-DgpSn9uj.js";import"./Button-DUn4JLDk.js";import"./ActionButton-COpXEK9s.js";import"./Checkbox-D7BE7lQJ.js";import"./useValueChanged-DSXfrb5B.js";import"./CollapsiblePanel-q-0v4uOT.js";import"./MultiColumnSortDialog-BIGBffeM.js";import"./MenuTrigger-BDeWypFN.js";import"./CompositeItem-fqkCbF8k.js";import"./ToolbarRootContext-DjaLauMl.js";import"./getDisabledMountTransitionStyles-C3z6f6ys.js";import"./getPseudoElementBounds-DOHlHTJk.js";import"./chevron-down-BIUs-Nx1.js";import"./index-CpYQjE-4.js";import"./error-BkUEB81u.js";import"./BaseCbacBanner-ChZtpJcU.js";import"./makeExternalStore-DXZk6z9e.js";import"./Tooltip-CVoKdfvR.js";import"./PopoverPopup-DKjF0w-d.js";import"./toNumber-BNj2hc5a.js";import"./useOsdkClient-CymuhabP.js";import"./tick-C4OBoyql.js";import"./DropdownField-BD0qZeCh.js";import"./withOsdkMetrics-BiH7dj1l.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
