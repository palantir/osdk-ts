import{f as p,j as e}from"./iframe-ByMeZtzX.js";import{O as i}from"./object-table-BWfDz0us.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CKCWlQAf.js";import"./Table-CJnRggrL.js";import"./index-MjIH22RC.js";import"./Dialog-ZxxUTcFp.js";import"./cross-BL14zVVR.js";import"./svgIconContainer-BWYJe8Lc.js";import"./useBaseUiId-COE4qdfZ.js";import"./InternalBackdrop-Dunp36dg.js";import"./composite-BJmqHe58.js";import"./index-C5DhJsVj.js";import"./index-CGEFtaju.js";import"./index-BWU4Zziw.js";import"./useEventCallback-CvBku6w-.js";import"./SkeletonBar-DKliZ6jy.js";import"./LoadingCell-By3X5tWM.js";import"./ColumnConfigDialog-BkjViHOX.js";import"./DraggableList-ujhsv7NO.js";import"./search-Cq1vvGyL.js";import"./Input-Cu1JHp0_.js";import"./useControlled-DCuR4lHr.js";import"./Button-CfzUE4zU.js";import"./small-cross-C4a4JTK6.js";import"./ActionButton-DhKaPnov.js";import"./Checkbox-WAVkAh-5.js";import"./useValueChanged-D09un0L_.js";import"./CollapsiblePanel-CD29H3XJ.js";import"./MultiColumnSortDialog-BkGokrZQ.js";import"./MenuTrigger-DDD8T7fc.js";import"./CompositeItem-CEWc-TNz.js";import"./ToolbarRootContext-B0lEY-MF.js";import"./getDisabledMountTransitionStyles-SuR5eTaW.js";import"./getPseudoElementBounds-DVrDM1RK.js";import"./chevron-down-Chsl7nyR.js";import"./index-B41_CCIn.js";import"./error-yKJFbcKE.js";import"./BaseCbacBanner-D7vjhjJY.js";import"./makeExternalStore-DbH4cGZ0.js";import"./Tooltip-CP2jx6MZ.js";import"./PopoverPopup-CpgQFEX8.js";import"./debounce-BUN5jtxl.js";import"./useOsdkClient-ixFLeVu3.js";import"./tick-DcrvbN3Y.js";import"./DropdownField-8MU5Z2g6.js";import"./isEqual-DIZ47AXY.js";import"./withOsdkMetrics-CJVxpJaf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
