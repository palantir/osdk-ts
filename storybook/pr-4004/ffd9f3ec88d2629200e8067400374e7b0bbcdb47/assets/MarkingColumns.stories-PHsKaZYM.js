import{f as p,j as e}from"./iframe-Ds1oJ6aB.js";import{O as i}from"./object-table-DxGk5C4S.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BuU6EXxB.js";import"./Table-B9BzzCYb.js";import"./index-DV-RsCBD.js";import"./Dialog-CtyGPeOn.js";import"./cross-GX9DzQOW.js";import"./svgIconContainer-DhoJ1wKf.js";import"./useBaseUiId-SveB9MiJ.js";import"./InternalBackdrop-dHXXhMSx.js";import"./composite-B685C7pj.js";import"./index-Z-0SkI97.js";import"./index-Dg7JsOD2.js";import"./index-DjBs4z29.js";import"./useEventCallback-BIuUY0VI.js";import"./SkeletonBar-CgiMkEwi.js";import"./LoadingCell-Cu7oZNVj.js";import"./ColumnConfigDialog-qhy8ZuqX.js";import"./DraggableList-CC_UvAAX.js";import"./search-C9RUzGD8.js";import"./Input-DCigff7H.js";import"./useControlled-Bb3j5PDR.js";import"./Button-DEZznyRx.js";import"./small-cross-OSqOWbbs.js";import"./ActionButton-y1-kR7HQ.js";import"./Checkbox-04oMgZo9.js";import"./useValueChanged-DiKNib74.js";import"./CollapsiblePanel-DJPu7lg7.js";import"./MultiColumnSortDialog-BLl7b0AQ.js";import"./MenuTrigger-SsRAk4WD.js";import"./CompositeItem-DRYBX4C7.js";import"./ToolbarRootContext-D5DhHef8.js";import"./getDisabledMountTransitionStyles-M6DMXfnH.js";import"./getPseudoElementBounds-BevdPYrx.js";import"./chevron-down-BTaheqba.js";import"./index-DBvZrrqp.js";import"./error-Cpa8ixp-.js";import"./BaseCbacBanner-D37f3xf5.js";import"./makeExternalStore-Bpmh1YoV.js";import"./Tooltip-CiCS2vte.js";import"./PopoverPopup-BW8M19fp.js";import"./debounce-CaEJ8DE5.js";import"./useOsdkClient-Dx_YLbK3.js";import"./tick-4HEv4TzV.js";import"./DropdownField--RBhVTBF.js";import"./isEqual-B6VYb55l.js";import"./withOsdkMetrics-BWv1tGJm.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
