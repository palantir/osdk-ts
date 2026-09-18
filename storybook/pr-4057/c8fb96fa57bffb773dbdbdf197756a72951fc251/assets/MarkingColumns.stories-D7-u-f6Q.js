import{f as p,j as e}from"./iframe-Bnq7KqyA.js";import{O as i}from"./object-table-BwpDc25B.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B3THyb-s.js";import"./Table-OWEu-GPE.js";import"./index-Cp8jliQ7.js";import"./Dialog-DTomyIuC.js";import"./cross-CZ44W-gs.js";import"./svgIconContainer-v0UJxJ5s.js";import"./useBaseUiId-BLC23AR8.js";import"./InternalBackdrop-BNxRDTPk.js";import"./composite-DHkFKHco.js";import"./index-BjxSMAWD.js";import"./index-CAaYrkDS.js";import"./index-forTTHlP.js";import"./useEventCallback-Cv-IdHMI.js";import"./SkeletonBar-BH2Vcofq.js";import"./LoadingCell-D-VOauVN.js";import"./ColumnConfigDialog-vebwNUAA.js";import"./DraggableList-Bc3IwPLk.js";import"./search-BWQsUNEv.js";import"./Input-DqyWCSM_.js";import"./useControlled-lHaiJfgn.js";import"./Button-DTZ1WQtp.js";import"./small-cross-DHVafU_w.js";import"./ActionButton-kJY-Pi0n.js";import"./Checkbox-Ac1xA8sH.js";import"./useValueChanged-DgUwSG6f.js";import"./CollapsiblePanel-DA0tn_f0.js";import"./MultiColumnSortDialog-CJ5ZRoXQ.js";import"./MenuTrigger-DU9Lx3Ha.js";import"./CompositeItem-kZs7JwNO.js";import"./ToolbarRootContext-BytsqpZq.js";import"./getDisabledMountTransitionStyles-DQbfHBKK.js";import"./getPseudoElementBounds-BJWXZAWi.js";import"./chevron-down-Der9zcUh.js";import"./index-CcX-LmS8.js";import"./error-CzhS-DQY.js";import"./BaseCbacBanner-RaTrx7BD.js";import"./makeExternalStore-0aoYVRXh.js";import"./Tooltip-JLD8LHly.js";import"./PopoverPopup-CHUD5U3W.js";import"./debounce-B3lN2MVP.js";import"./useOsdkClient-DLVTWwhI.js";import"./tick-BYRbYgVJ.js";import"./DropdownField-C_c9mkH4.js";import"./isEqual-CwzDsxAX.js";import"./withOsdkMetrics-NPZms2--.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
