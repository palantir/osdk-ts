import{f as p,j as e}from"./iframe-vcLMjbea.js";import{O as i}from"./object-table-BfvzlUao.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-RU1OdimD.js";import"./Table-CSY55iFj.js";import"./index-CG3KkM6y.js";import"./Dialog-Xcbat__-.js";import"./cross-D-EFak3i.js";import"./svgIconContainer-Gicaxf1s.js";import"./useBaseUiId-DnJ4weT2.js";import"./InternalBackdrop-HVYVXyCg.js";import"./composite-CT0DZWF7.js";import"./index-BIHIRrhw.js";import"./index-CU58PLdw.js";import"./index-NU5zO8vj.js";import"./useEventCallback-D6NEmK7_.js";import"./SkeletonBar-sPDIVMCS.js";import"./LoadingCell-CT123iLI.js";import"./ColumnConfigDialog-DZg6qXzG.js";import"./DraggableList-DZ2o5zTG.js";import"./search-3IXTuiXl.js";import"./Input-B07SGOjF.js";import"./useControlled-BXjUIo-l.js";import"./Button-DY9kTYfp.js";import"./small-cross-Bp4GK8nv.js";import"./ActionButton-BgFvfHoG.js";import"./Checkbox-BwhD0opN.js";import"./useValueChanged-Fi604hGA.js";import"./CollapsiblePanel-DiUY56Er.js";import"./MultiColumnSortDialog-o2Oosgua.js";import"./MenuTrigger-CNqmUXY3.js";import"./CompositeItem-BN5pExu_.js";import"./ToolbarRootContext-6uR7xL1n.js";import"./getDisabledMountTransitionStyles-CMJs3FOY.js";import"./getPseudoElementBounds-CVVRvaQ5.js";import"./chevron-down-CCBKa1Fl.js";import"./index-DM0ijL_x.js";import"./error-CrN3ijuU.js";import"./BaseCbacBanner-CxJGL3mi.js";import"./makeExternalStore-SiSiEnyI.js";import"./Tooltip-bH_4JHn2.js";import"./PopoverPopup-Bma8tsO9.js";import"./debounce-N0qJ7Xu9.js";import"./useOsdkClient-DE3ZbsH3.js";import"./tick-DMkp_lOe.js";import"./DropdownField-DHSmAbjS.js";import"./isEqual-C1DaMkeA.js";import"./withOsdkMetrics-BcVOHfX1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
