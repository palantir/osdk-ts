import{f as p,j as e}from"./iframe-70ZuGjkJ.js";import{O as i}from"./object-table-BBc3Fn8T.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DK4xKHY4.js";import"./Table-aU-H_NwX.js";import"./index-CckhOj8-.js";import"./Dialog-Ct-6ZDgi.js";import"./cross-CO8zitM2.js";import"./svgIconContainer-CtTs4nyb.js";import"./useBaseUiId-CqgzcpTd.js";import"./InternalBackdrop-BAIsbWIF.js";import"./composite-E4mw46H8.js";import"./index-C6_lfWdp.js";import"./index-CDzhFE3P.js";import"./index-CPgNI8HV.js";import"./useEventCallback-Cl-1X7df.js";import"./SkeletonBar-t3va8Dsz.js";import"./LoadingCell-DR2MUXbF.js";import"./ColumnConfigDialog-B1vOObiT.js";import"./DraggableList-DZlKofNL.js";import"./search-_UcRnrjw.js";import"./Input-sBtVPl75.js";import"./useControlled-0e2XrUt8.js";import"./Button-D2KYgMT_.js";import"./small-cross-CYwlKW4r.js";import"./ActionButton-B4h22XNy.js";import"./Checkbox-C8sqlJMk.js";import"./useValueChanged-CQFhtmgn.js";import"./CollapsiblePanel-2ZNF-ZYn.js";import"./MultiColumnSortDialog-aAcEJHDq.js";import"./MenuTrigger-_GYM6HPo.js";import"./CompositeItem-A9SMjz1N.js";import"./ToolbarRootContext-DmAs8e4b.js";import"./getDisabledMountTransitionStyles-DjkGWHfc.js";import"./getPseudoElementBounds-CmYlGZ2P.js";import"./chevron-down-BPIjaHnC.js";import"./index-C1hIfcQ2.js";import"./error-Ho0rrjia.js";import"./BaseCbacBanner-ASzHDe0B.js";import"./makeExternalStore-Vi6b8A7J.js";import"./Tooltip-I-YOK7jy.js";import"./PopoverPopup-Cy9eVAix.js";import"./debounce-B50OUnXf.js";import"./useOsdkClient-D5Q8UXIy.js";import"./tick-eYRv4TLQ.js";import"./DropdownField-B1h3MVUP.js";import"./isEqual-Cp8PtEv6.js";import"./withOsdkMetrics-DyYS57kA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
