import{f as p,j as e}from"./iframe-BiR0bSaX.js";import{O as i}from"./object-table-DsbavqDt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CREsIwfv.js";import"./Table-B8n6aAme.js";import"./index-D0Rro4ck.js";import"./Dialog-Dp9jK4f-.js";import"./cross-gKG73r0q.js";import"./svgIconContainer-DdJYmAvv.js";import"./useBaseUiId-D3ocUoYR.js";import"./InternalBackdrop-D6vDmGzB.js";import"./composite-Cg5vG0V3.js";import"./index-CwYWk3f5.js";import"./index-CDTZ5otF.js";import"./index-zHT7Hyt8.js";import"./useEventCallback-BeraWIcy.js";import"./SkeletonBar-CM8I5OIh.js";import"./LoadingCell-BYFqkMG0.js";import"./ColumnConfigDialog-cXdYH0RF.js";import"./DraggableList-B_QC1B5x.js";import"./search-BVH0nxuW.js";import"./Input-CR7mkMB4.js";import"./useControlled-BCuMNdH3.js";import"./Button-BjLfCn0d.js";import"./small-cross-DYB9MOPk.js";import"./ActionButton-CLSAI2kW.js";import"./Checkbox-BFjDPznL.js";import"./useValueChanged-vxARVLtE.js";import"./CollapsiblePanel-d6aPXtM4.js";import"./MultiColumnSortDialog-CUpLWOUw.js";import"./MenuTrigger-QyLFHO-w.js";import"./CompositeItem-yCWRfwkd.js";import"./ToolbarRootContext-DZbYzNul.js";import"./getDisabledMountTransitionStyles-X1jqNQgo.js";import"./getPseudoElementBounds-BKmEUxkJ.js";import"./chevron-down-wSopSebG.js";import"./index-Pp8hdIUW.js";import"./error-DI1HaZkw.js";import"./BaseCbacBanner-CpKCOvH6.js";import"./makeExternalStore-8TAGYWzx.js";import"./Tooltip-4v0newPD.js";import"./PopoverPopup-By__3K0-.js";import"./debounce-BGMgfz2I.js";import"./useOsdkClient-D2ZfX5sU.js";import"./tick-CS8KJb9P.js";import"./DropdownField-B2dUQyL4.js";import"./isEqual-39wjEv2i.js";import"./withOsdkMetrics-Ft25XtI9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
