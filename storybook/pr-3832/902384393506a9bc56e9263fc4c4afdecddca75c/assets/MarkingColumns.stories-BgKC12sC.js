import{f as p,j as e}from"./iframe-CCC2PHCs.js";import{O as i}from"./object-table-JyeIF4Ik.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BFAjaxlT.js";import"./Table-Tr8T08f6.js";import"./index-CsHmWOuW.js";import"./Dialog-Cnh66PvR.js";import"./cross-lgZ_UxXM.js";import"./svgIconContainer-Ba3v3a21.js";import"./useBaseUiId-BFMlM2-S.js";import"./InternalBackdrop-BnM8GG-f.js";import"./composite-BG85D_QD.js";import"./index-BoDdy69P.js";import"./index-64uZX6qw.js";import"./index--yeukdQS.js";import"./useEventCallback-BPpFzH48.js";import"./SkeletonBar-DpWsGDn2.js";import"./LoadingCell-0OdFVmmS.js";import"./ColumnConfigDialog-cmbAROZc.js";import"./DraggableList-BR4LQP_Y.js";import"./search-BST7YF_6.js";import"./Input-DjnHunMe.js";import"./useControlled-DAuImFbI.js";import"./isEqual-KfrDcXUe.js";import"./isObject-CT2uOlZF.js";import"./Button-FRBaRdpx.js";import"./ActionButton-CU0LKqPe.js";import"./Checkbox-GukqDrdT.js";import"./useValueChanged-Be1ntney.js";import"./CollapsiblePanel-6KxruyI2.js";import"./MultiColumnSortDialog-Bhpeg0xl.js";import"./MenuTrigger-BTHi8q0m.js";import"./CompositeItem-D0KbA8wb.js";import"./ToolbarRootContext-BEIRwfim.js";import"./getDisabledMountTransitionStyles-2GwNpLXP.js";import"./getPseudoElementBounds-DyzJnhBQ.js";import"./chevron-down-DUX5MQ0Z.js";import"./index-2S7gRbbX.js";import"./error-DJg-nO-Y.js";import"./BaseCbacBanner-B8w_F0WY.js";import"./makeExternalStore-BFrjPQ7J.js";import"./Tooltip-By9jF44Z.js";import"./PopoverPopup-Dl_tuOw1.js";import"./toNumber-J0EmJ7U_.js";import"./useOsdkClient-k0xy2KcY.js";import"./tick-CY5jNQkl.js";import"./DropdownField-B1uqj5XJ.js";import"./withOsdkMetrics-sn1hY-b7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
