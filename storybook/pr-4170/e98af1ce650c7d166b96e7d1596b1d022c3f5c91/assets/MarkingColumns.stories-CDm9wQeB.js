import{f as p,j as e}from"./iframe-q2c2VLg1.js";import{O as i}from"./object-table-B4HfjqZM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dd4fXQyN.js";import"./Table-CHyiWqlF.js";import"./index-CRaifptZ.js";import"./Dialog-BbMkATkH.js";import"./cross-CcrMbm-0.js";import"./svgIconContainer-BlrvzrEz.js";import"./useBaseUiId-omTFJ4IU.js";import"./InternalBackdrop-CTJCbO8j.js";import"./composite-NSumfvPY.js";import"./index-4j_oKqKk.js";import"./index-9q1QNwoC.js";import"./index-Ch4BOwgF.js";import"./useEventCallback-BNjTdnVh.js";import"./SkeletonBar-CmnjTk1p.js";import"./LoadingCell-Cwt8KlOw.js";import"./ColumnConfigDialog-02CFeY74.js";import"./DraggableList-CLoGBAZH.js";import"./search-B-fHJPoD.js";import"./Input-BRmugyzW.js";import"./useControlled-CAFIwmV7.js";import"./Button-BsjIA1gg.js";import"./small-cross-BupKOZtI.js";import"./ActionButton-B33HwgcC.js";import"./Checkbox-DSR4bz5U.js";import"./useValueChanged-DKgjsggr.js";import"./CollapsiblePanel-Dpq-3A02.js";import"./MultiColumnSortDialog-vjsXkIXe.js";import"./MenuTrigger-DQv_UTwZ.js";import"./CompositeItem-DvufjjXa.js";import"./ToolbarRootContext-gOhTdtut.js";import"./getDisabledMountTransitionStyles-CnTFITkJ.js";import"./getPseudoElementBounds-D7yijoXW.js";import"./chevron-down-BiLdY5Pu.js";import"./index-Br8J5rfr.js";import"./error-D-r93luQ.js";import"./BaseCbacBanner-3Q4NPe38.js";import"./makeExternalStore-BO8xauxU.js";import"./Tooltip-Di0qEmWK.js";import"./PopoverPopup--4kjghnN.js";import"./debounce-C-ob5Pqr.js";import"./useOsdkClient-hNGabp8J.js";import"./tick-Bb3qh1mv.js";import"./DropdownField-Bthj7fif.js";import"./isEqual-3wGjHPnA.js";import"./withOsdkMetrics-DYLb2cmM.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
