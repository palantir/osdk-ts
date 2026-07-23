import{f as p,j as e}from"./iframe-BxrPZaNO.js";import{O as i}from"./object-table-x_M-xICi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cx3YQJHu.js";import"./Table-BmoqWH96.js";import"./index-J6lGX-m2.js";import"./Dialog-RbvnsOmy.js";import"./cross-BmUQIuiH.js";import"./svgIconContainer-BEnRdrAB.js";import"./useBaseUiId-Di1mefXN.js";import"./InternalBackdrop-D4XZcSF_.js";import"./composite-DfF43hpZ.js";import"./index-D_nzKAep.js";import"./index-BCG6silL.js";import"./index-Ot472uRJ.js";import"./useEventCallback-CrPdpknM.js";import"./SkeletonBar-BUlCSkf0.js";import"./LoadingCell-C-YiETW-.js";import"./ColumnConfigDialog-VEP7O-ZA.js";import"./DraggableList-DVT8VoXV.js";import"./search-CfnXtNGj.js";import"./Input-BGI14JLq.js";import"./useControlled-BtpDwHUZ.js";import"./isEqual-DBEr3yIs.js";import"./isObject-ByG7RK6C.js";import"./Button-B7x6CZke.js";import"./ActionButton-BWhtJHeB.js";import"./Checkbox-CrjH7Efp.js";import"./useValueChanged-DCfT8qbt.js";import"./CollapsiblePanel-BFETjxaU.js";import"./MultiColumnSortDialog-B9G5hIec.js";import"./MenuTrigger-B5P8IXx7.js";import"./CompositeItem-DTxAmhYK.js";import"./ToolbarRootContext-Bqz8S5Yi.js";import"./getDisabledMountTransitionStyles-BjZgcrwj.js";import"./getPseudoElementBounds-Bbwc-RQ9.js";import"./chevron-down-Be0JtK3U.js";import"./index-Cp78tmdM.js";import"./error-ChOD6vLs.js";import"./BaseCbacBanner-CgoxDGzA.js";import"./makeExternalStore-9Fofboy5.js";import"./Tooltip-DNoJovMa.js";import"./PopoverPopup-Bg6BFVuU.js";import"./toNumber-CN-X1Wq4.js";import"./useOsdkClient-D4yGb6wb.js";import"./tick-CyYxxVPP.js";import"./DropdownField-Cqh4Clp4.js";import"./withOsdkMetrics-D9tI6rXs.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
