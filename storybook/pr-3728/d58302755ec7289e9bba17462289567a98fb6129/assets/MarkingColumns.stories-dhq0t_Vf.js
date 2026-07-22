import{f as p,j as e}from"./iframe-DJ3TGWQb.js";import{O as i}from"./object-table-BoZIPXGh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BU83upYw.js";import"./Table-DxURho6x.js";import"./index-D9ONpsPS.js";import"./Dialog-DutnSkd9.js";import"./cross-Cs83IqU-.js";import"./svgIconContainer-Cc1PjpjS.js";import"./useBaseUiId-DwsC2bmK.js";import"./InternalBackdrop-CWM1LKyB.js";import"./composite-D8A6hiAh.js";import"./index-Dm4q3qgD.js";import"./index-BKNWNeBp.js";import"./index-BxpRcwFE.js";import"./useEventCallback-CYcD7hBu.js";import"./SkeletonBar-DhWJ3CUm.js";import"./LoadingCell-C80eQ5gr.js";import"./ColumnConfigDialog-CLiRwRs3.js";import"./DraggableList-KZCMeFo7.js";import"./search-B_-2qGNb.js";import"./Input-Cq7wf3mo.js";import"./useControlled-Ca6ic55i.js";import"./isEqual-BEpg39f5.js";import"./isObject-BooyKohD.js";import"./Button-BNwxk59k.js";import"./ActionButton-DPBbdVNV.js";import"./Checkbox-CxJLl3t2.js";import"./useValueChanged-CfCwlGsI.js";import"./CollapsiblePanel-CERictzI.js";import"./MultiColumnSortDialog-BG5P1s4S.js";import"./MenuTrigger-CDm54MQG.js";import"./CompositeItem-BcncBx6K.js";import"./ToolbarRootContext-C3QngCj9.js";import"./getDisabledMountTransitionStyles-DxuGYbwG.js";import"./getPseudoElementBounds-DGOsrAWG.js";import"./chevron-down-A7DMZ8ch.js";import"./index-Dq7sbfDU.js";import"./error-40X5yncK.js";import"./BaseCbacBanner-GWJ1GeUb.js";import"./makeExternalStore-CHR1Ir4C.js";import"./Tooltip-Ed4jyJIg.js";import"./PopoverPopup-_AuQFDRr.js";import"./toNumber-BfA99eKI.js";import"./useOsdkClient-C7QVwltI.js";import"./tick-CLBxH3aY.js";import"./DropdownField-CMZ2YtDT.js";import"./withOsdkMetrics-cXiF9TRs.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
