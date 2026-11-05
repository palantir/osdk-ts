import{f as p,j as e}from"./iframe-CzN2QreI.js";import{O as i}from"./object-table-BhXf9gA2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BXZu3mB8.js";import"./Table-D-s_rfWN.js";import"./index-Bj6GQi9V.js";import"./Dialog-vvjS-bkJ.js";import"./cross-B7QKnjh-.js";import"./svgIconContainer-DJR2Y9nG.js";import"./useBaseUiId-XpXvVpGq.js";import"./InternalBackdrop-t9svslOk.js";import"./composite-CvZGZMr_.js";import"./index-CP-vzmXq.js";import"./index-_8V292Ph.js";import"./index-LOsE3mZd.js";import"./useEventCallback-Bm9HIaTl.js";import"./SkeletonBar-CLEVVnPB.js";import"./LoadingCell-Bq12_82I.js";import"./ColumnConfigDialog-CeXz8J4h.js";import"./DraggableList-OvooNtbU.js";import"./search-CBwzahSV.js";import"./Input-CegjBPQP.js";import"./useControlled-DC4k4z6-.js";import"./Button-CdEdBbWo.js";import"./small-cross-BfZaK0QA.js";import"./ActionButton-DTFbCjfZ.js";import"./Checkbox-D8x43nJp.js";import"./useValueChanged-CvEwy5iK.js";import"./CollapsiblePanel-BUy1MqPT.js";import"./MultiColumnSortDialog-CBT_vACM.js";import"./MenuTrigger-6qVuDcDW.js";import"./CompositeItem-C2xi6NQ8.js";import"./ToolbarRootContext-CKTJAN59.js";import"./getDisabledMountTransitionStyles-qsFKgmF7.js";import"./getPseudoElementBounds-BxGUr7sx.js";import"./chevron-down-CQ9C1iv5.js";import"./index-DT9lB2o2.js";import"./error-Ds-mn25o.js";import"./BaseCbacBanner-HjtbhaLm.js";import"./makeExternalStore-zsuQEbmY.js";import"./Tooltip-BoGe89IF.js";import"./isObject-BPoSeG26.js";import"./debounce-BSJqKk9p.js";import"./useOsdkClient-5OnXM-6H.js";import"./tick-Cvtd471A.js";import"./DropdownField-BHbHoXLN.js";import"./isEqual-COArf5ti.js";import"./_baseIsEqual-CLLJPHoE.js";import"./withOsdkMetrics-2pGXUPgq.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
