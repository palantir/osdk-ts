import{f as p,j as e}from"./iframe-4r61WmRz.js";import{O as i}from"./object-table-BsaeOGuC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DDuQcRVJ.js";import"./Table-CUAjVu0c.js";import"./index-kkt68f5x.js";import"./Dialog-Dv_rcbVl.js";import"./cross-CNjOzwil.js";import"./svgIconContainer-EEsRKnTp.js";import"./useBaseUiId-B6Vv4jgV.js";import"./InternalBackdrop-Bzos0xM-.js";import"./composite-DlrParFv.js";import"./index-3UzI-GML.js";import"./index-Nju1pOqo.js";import"./index-YOStIHYQ.js";import"./useEventCallback-Mutezj7j.js";import"./SkeletonBar-qrhSNk5E.js";import"./LoadingCell-CRbSuUAx.js";import"./ColumnConfigDialog-B6dj10_o.js";import"./DraggableList-sEL7oibm.js";import"./search-D6jPfv1v.js";import"./Input-gOgOsLX3.js";import"./useControlled-586q8Cy3.js";import"./Button-gqFcTzpQ.js";import"./small-cross-DRIvZps7.js";import"./ActionButton-CjM_8QQ8.js";import"./Checkbox-BLKo8bIb.js";import"./useValueChanged-Bi7kMqvE.js";import"./CollapsiblePanel-C45NHvuI.js";import"./MultiColumnSortDialog-Cy7Vy43Z.js";import"./MenuTrigger-D1ofJi20.js";import"./CompositeItem-D0ha4eYX.js";import"./ToolbarRootContext-B5z6j76t.js";import"./getDisabledMountTransitionStyles-1j4GIo6j.js";import"./getPseudoElementBounds-DvDk6n8U.js";import"./chevron-down-fJwSRjPJ.js";import"./index-C1bohVU8.js";import"./error-DeL9Ip3k.js";import"./BaseCbacBanner-CP1WFrzm.js";import"./makeExternalStore-DOF5HV2v.js";import"./Tooltip-DaNbGCQf.js";import"./PopoverPopup-DIv3maom.js";import"./debounce-CXjzscB7.js";import"./useOsdkClient-D-iMASPG.js";import"./tick-DLIe0J3Q.js";import"./DropdownField-TF8tLIy4.js";import"./isEqual-661UodeM.js";import"./withOsdkMetrics-B9hUZ7DO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
