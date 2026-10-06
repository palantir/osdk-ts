import{f as p,j as e}from"./iframe-D6fPZnqe.js";import{O as i}from"./object-table-BcOuIXmc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CBKbTLo4.js";import"./Table-BlXSDbw9.js";import"./index-DhSFErPm.js";import"./Dialog-DOJWZ1NL.js";import"./cross-9F8JKEQy.js";import"./svgIconContainer-DubCep_u.js";import"./useBaseUiId-D4NDHa5t.js";import"./InternalBackdrop-C5Ye3Vqn.js";import"./composite-Be4p-4ws.js";import"./index-DAhymAav.js";import"./index-D-Gucmtt.js";import"./index-BewO9ECR.js";import"./useEventCallback-DEXHHYRn.js";import"./SkeletonBar-BsphNaN3.js";import"./LoadingCell-DpcTNjt7.js";import"./ColumnConfigDialog-CDyMzNiq.js";import"./DraggableList-Boy9Qx86.js";import"./search-j5vkqq1q.js";import"./Input-DoNUyN0C.js";import"./useControlled-iYay2yJT.js";import"./Button-BLxStAZZ.js";import"./small-cross-DR8DSWW3.js";import"./ActionButton-S2mIoAOj.js";import"./Checkbox-CXAqa0cU.js";import"./useValueChanged-1d_1m1_Q.js";import"./CollapsiblePanel-CxtE82_6.js";import"./MultiColumnSortDialog-eCNJ10dK.js";import"./MenuTrigger-C9Drb-bv.js";import"./CompositeItem--v0QRyqL.js";import"./ToolbarRootContext-DyAqKFWo.js";import"./getDisabledMountTransitionStyles-DV-WhxgY.js";import"./getPseudoElementBounds-DJZ8Mcmv.js";import"./chevron-down-ClCJem65.js";import"./index-CB6cfHnU.js";import"./error-1a5mXdNM.js";import"./BaseCbacBanner-CFtSOy4j.js";import"./makeExternalStore-DTY2ua9-.js";import"./Tooltip-CfEkDLj5.js";import"./PopoverPopup-Can2UDel.js";import"./debounce-BxsvKDso.js";import"./useOsdkClient-wl1q4R-Q.js";import"./tick-Cmu8hVd0.js";import"./DropdownField-DSKwjEDD.js";import"./isEqual-CZNfwh1Q.js";import"./withOsdkMetrics-IqNfL-7w.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
