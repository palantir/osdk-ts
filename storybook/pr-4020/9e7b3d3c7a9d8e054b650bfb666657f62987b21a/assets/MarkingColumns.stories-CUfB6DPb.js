import{f as p,j as e}from"./iframe-FtcUBUVc.js";import{O as i}from"./object-table-Cg5qwIEK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C1DqyS6M.js";import"./Table-BfRaiK3i.js";import"./index-BrOlmJ2Z.js";import"./Dialog-CLH8UVx4.js";import"./cross-CzxFF0QG.js";import"./svgIconContainer-N_OtDM-z.js";import"./useBaseUiId-CE5itc9W.js";import"./InternalBackdrop-CIZ6_1M7.js";import"./composite-7rmuBxl6.js";import"./index-D40iZtqR.js";import"./index-DEH9dzt7.js";import"./index-DoRBg5ik.js";import"./useEventCallback-BBlYjqsb.js";import"./SkeletonBar-U4JWfogU.js";import"./LoadingCell-DeypyuwO.js";import"./ColumnConfigDialog-CMfL490p.js";import"./DraggableList-gcmWlo1u.js";import"./search-dRD30Vx4.js";import"./Input-ByVchIyr.js";import"./useControlled-DyZru4zO.js";import"./Button-GQVi1do4.js";import"./small-cross-BOnfyvVq.js";import"./ActionButton-DEqbbTdP.js";import"./Checkbox-CP36iAuz.js";import"./useValueChanged-B76qlGnm.js";import"./CollapsiblePanel-BYu_oFbL.js";import"./MultiColumnSortDialog-BqzEf6pZ.js";import"./MenuTrigger-Ala7VFV4.js";import"./CompositeItem-CnrRuFeY.js";import"./ToolbarRootContext-C1QQQlr9.js";import"./getDisabledMountTransitionStyles-o44LTai8.js";import"./getPseudoElementBounds-Cn7KCI-8.js";import"./chevron-down-gXp7YXqe.js";import"./index-0OE-AeSh.js";import"./error-DVkQT4u5.js";import"./BaseCbacBanner-DE1-9f-i.js";import"./makeExternalStore-_r-qOFy4.js";import"./Tooltip-B0wu6hL7.js";import"./PopoverPopup-mGK6D3QU.js";import"./debounce-CZPjIx0M.js";import"./useOsdkClient-BzBjGJN-.js";import"./tick-BVYtpY6h.js";import"./DropdownField-BOsCn1Qx.js";import"./isEqual-CWJKbuKS.js";import"./withOsdkMetrics-C6QmSgDy.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
