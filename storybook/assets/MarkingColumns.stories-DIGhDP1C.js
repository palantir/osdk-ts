import{f as p,j as e}from"./iframe-BrGo9N9-.js";import{O as i}from"./object-table-Bi_LN2NS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D_Jn-Q8N.js";import"./index-jSRXXJ9w.js";import"./Dialog-AY3J_z1T.js";import"./cross-CqGcj1UP.js";import"./svgIconContainer-C2wfJlD0.js";import"./useBaseUiId-DRzpYMsL.js";import"./InternalBackdrop-H-W5c9Tc.js";import"./composite-BaZ5NPlu.js";import"./index-DDVUHOhP.js";import"./index-0jm5AiV8.js";import"./index-D_R5KUUI.js";import"./useEventCallback-CjQgYfgn.js";import"./SkeletonBar-CTB96FiY.js";import"./LoadingCell-DhKZJqLA.js";import"./ColumnConfigDialog-BEWosdsI.js";import"./DraggableList-DYw0g3m7.js";import"./search-BU8Oy9oR.js";import"./Input-DwliOy2I.js";import"./useControlled-BYX3tO_t.js";import"./Button-lkehQ9sU.js";import"./small-cross-BV2K9RPo.js";import"./ActionButton-BeguVoFM.js";import"./Checkbox-DH6yRrvl.js";import"./useValueChanged-COlcOgxu.js";import"./CollapsiblePanel-DkIS-X1G.js";import"./MultiColumnSortDialog-COK6ImCv.js";import"./MenuTrigger-B_YPwqIO.js";import"./CompositeItem-CK4axcp7.js";import"./ToolbarRootContext-DalYOUw7.js";import"./getDisabledMountTransitionStyles-DHm4QR3G.js";import"./getPseudoElementBounds-DYIfKLY8.js";import"./chevron-down-oLGHrpyq.js";import"./index-DtdHIG9x.js";import"./error-DfpVQDIj.js";import"./BaseCbacBanner-BxhdxHoy.js";import"./makeExternalStore-CajjYTod.js";import"./Tooltip-B_6YM8Q6.js";import"./PopoverPopup-qFUKYGhR.js";import"./debounce-B1TxOqEe.js";import"./useOsdkClient-Skidvwv_.js";import"./tick-HO2XmYO7.js";import"./DropdownField-CSmWHkMO.js";import"./isEqual-DIYgUhnB.js";import"./withOsdkMetrics-CWKbU0FT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
