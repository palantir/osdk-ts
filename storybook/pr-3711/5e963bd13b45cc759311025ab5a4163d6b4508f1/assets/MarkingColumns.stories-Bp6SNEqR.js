import{f as p,j as e}from"./iframe-DT9j0dse.js";import{O as i}from"./object-table-CdKiu6ZE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CS6ZnhOo.js";import"./Table-CnL15Yfm.js";import"./index-_oeWpIzU.js";import"./Dialog-DvTyiQnM.js";import"./cross-D8t5PTmZ.js";import"./svgIconContainer-B46pfafK.js";import"./useBaseUiId-Dw_jGLyx.js";import"./InternalBackdrop-BbXRATS7.js";import"./composite-CYwrF1Sd.js";import"./index-DC4s8G3k.js";import"./index-CteNZEY4.js";import"./index-PfKBH265.js";import"./useEventCallback-CgYcak53.js";import"./SkeletonBar-DM5ubK3z.js";import"./LoadingCell-B1DujWrv.js";import"./ColumnConfigDialog-DW0F3UaA.js";import"./DraggableList-DJi4Xrgv.js";import"./search-BqfLmDKn.js";import"./Input-DvTRsVdv.js";import"./useControlled-D9HvvuD8.js";import"./isEqual-C9oCtYh4.js";import"./isObject-B6YK-otD.js";import"./Button-B7sDvfv4.js";import"./ActionButton-D_CfSjc1.js";import"./Checkbox-CsGT8KlD.js";import"./useValueChanged-vfj2uzkS.js";import"./CollapsiblePanel-HkyRtRmk.js";import"./MultiColumnSortDialog-BQH191sj.js";import"./MenuTrigger-va8ECdMR.js";import"./CompositeItem-CyYlkIbz.js";import"./ToolbarRootContext-C2l5c9OB.js";import"./getDisabledMountTransitionStyles-B3lCOyFG.js";import"./getPseudoElementBounds-mQeYli_6.js";import"./chevron-down-DUAJ1UeP.js";import"./index-CzVU5LdN.js";import"./error-jfnzqbY6.js";import"./BaseCbacBanner-B39LK-9t.js";import"./makeExternalStore-D7EguKd1.js";import"./Tooltip-2eOzHqip.js";import"./PopoverPopup-CpEyooB6.js";import"./toNumber-ui3nS7Sn.js";import"./useOsdkClient-CGciWPLk.js";import"./tick-BUECACac.js";import"./DropdownField-D8WQtnQY.js";import"./withOsdkMetrics-7bJMqpje.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
