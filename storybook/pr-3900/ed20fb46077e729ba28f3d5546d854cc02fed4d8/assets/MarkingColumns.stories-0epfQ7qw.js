import{f as p,j as e}from"./iframe-DRuc0GBP.js";import{O as i}from"./object-table-DmGO0Vxo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CRRYqW21.js";import"./Table-BR8CCk-8.js";import"./index-Df25XFZb.js";import"./Dialog-BC4bcRh6.js";import"./cross-C3j-rtHx.js";import"./svgIconContainer-8epjwYsu.js";import"./useBaseUiId-DbcBxDLS.js";import"./InternalBackdrop-i581aqEB.js";import"./composite-DCht-HgF.js";import"./index-DpJFda_e.js";import"./index-BalUdg1Y.js";import"./index-YiEFMxhB.js";import"./useEventCallback-Ds2xBSpC.js";import"./SkeletonBar-B8N_Ahmp.js";import"./LoadingCell-Bftk-ZRu.js";import"./ColumnConfigDialog-B521fVb-.js";import"./DraggableList-DgLUOU_-.js";import"./search-De5zerSm.js";import"./Input-qFxyrE0p.js";import"./useControlled-DhQ1jfam.js";import"./Button-DNV5pzPO.js";import"./small-cross-pAWOo5vD.js";import"./ActionButton-C0tEvPDb.js";import"./Checkbox-CR8ot2aQ.js";import"./useValueChanged-TdIj53uF.js";import"./CollapsiblePanel-DEy_naSL.js";import"./MultiColumnSortDialog-BhpT7X1D.js";import"./MenuTrigger-BBa-7LXr.js";import"./CompositeItem-BC6rjLhn.js";import"./ToolbarRootContext-DMBrxqfV.js";import"./getDisabledMountTransitionStyles-CFsGZL01.js";import"./getPseudoElementBounds-DPZ3DPV5.js";import"./chevron-down-Bj7gjeyM.js";import"./index-BUJ8RC2M.js";import"./error-CajMr2N5.js";import"./BaseCbacBanner-DGZigbUp.js";import"./makeExternalStore-DzVXPn5S.js";import"./Tooltip-Bbl8mehV.js";import"./PopoverPopup-_gjSlE1P.js";import"./debounce-OZctj2Y3.js";import"./useOsdkClient-ZsKxr3Nm.js";import"./tick-BX4z4qIP.js";import"./DropdownField-DyPgZ25Y.js";import"./isEqual-B9eMVgOn.js";import"./withOsdkMetrics-BIITkI-U.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
