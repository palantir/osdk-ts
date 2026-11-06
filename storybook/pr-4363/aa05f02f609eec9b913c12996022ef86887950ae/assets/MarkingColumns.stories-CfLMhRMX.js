import{f as p,j as e}from"./iframe-DOoViGQC.js";import{O as i}from"./object-table-fsv2meK0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D6M-lWMp.js";import"./Table-XlWncKwC.js";import"./index-x4gpFwBp.js";import"./Dialog-BUVOhGz-.js";import"./cross-BAqH0G--.js";import"./svgIconContainer-DDehFQ37.js";import"./useBaseUiId-CEA0ov3F.js";import"./InternalBackdrop-Cvfzz2Gg.js";import"./composite-DG_OLYDF.js";import"./index-uZqGKRzq.js";import"./index-C5WAn5Dx.js";import"./index-oSIBYKmR.js";import"./useEventCallback-2cQhO8Od.js";import"./SkeletonBar-yxb5jjnx.js";import"./LoadingCell-B8vGHO6K.js";import"./ColumnConfigDialog-DOx981jG.js";import"./DraggableList-uTc7RtXZ.js";import"./search-BtSuJQ9M.js";import"./Input-Bq0XAGaR.js";import"./useControlled-DyFvS3eo.js";import"./Button-DnpTR9kP.js";import"./small-cross-CkiB4kAk.js";import"./ActionButton-CT-L5CB7.js";import"./Checkbox-Dk0n7HNT.js";import"./useValueChanged-sHXiC0u3.js";import"./CollapsiblePanel--B4cqlmx.js";import"./MultiColumnSortDialog-C3caRr3a.js";import"./MenuTrigger-DB0T_UbP.js";import"./CompositeItem-C-YvkCMY.js";import"./ToolbarRootContext-BICNcApQ.js";import"./getDisabledMountTransitionStyles-FChDzxHp.js";import"./getPseudoElementBounds-CCgIuocG.js";import"./chevron-down-BssNm1rB.js";import"./index-v0gYgaE5.js";import"./error-CMiAPzhy.js";import"./BaseCbacBanner-Bxst7se4.js";import"./makeExternalStore-_9NPeB4S.js";import"./Tooltip-Ct-G7N11.js";import"./isObject-B3qfbi9s.js";import"./debounce-DshVKYBV.js";import"./useOsdkClient-BvJQMhJJ.js";import"./tick-BcBfo_Ik.js";import"./DropdownField-CW8S6woh.js";import"./isEqual-D0Vlcsqm.js";import"./_baseIsEqual-BXzcdte9.js";import"./withOsdkMetrics-DkYGNx1N.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
