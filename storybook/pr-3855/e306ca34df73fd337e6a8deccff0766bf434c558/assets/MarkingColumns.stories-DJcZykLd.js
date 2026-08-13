import{f as p,j as e}from"./iframe-BJrSrRma.js";import{O as i}from"./object-table-CE2q3N5f.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-83yR054m.js";import"./Table-DQw_Fm5L.js";import"./index-DFXfJE3M.js";import"./Dialog-CIeMT4_a.js";import"./cross-DFiuK2I5.js";import"./svgIconContainer-CUA3xiLW.js";import"./useBaseUiId-BdZoOrU1.js";import"./InternalBackdrop-CX1L_1sQ.js";import"./composite-DimSL5Dw.js";import"./index-Cxlf7HqO.js";import"./index-BaVB7RYf.js";import"./index-DwJoAW6Z.js";import"./useEventCallback-C_smlSfI.js";import"./SkeletonBar-7oNPY7ub.js";import"./LoadingCell-Cx8g6Kor.js";import"./ColumnConfigDialog-DqDhi-7s.js";import"./DraggableList-B1TTFqcD.js";import"./search-Bcym4jdA.js";import"./Input-bMqivlqR.js";import"./useControlled-D5g6V7fQ.js";import"./Button-DWYMaUrj.js";import"./small-cross-Bj4sfQyy.js";import"./ActionButton-CwBTvNNT.js";import"./Checkbox-BvzX-4RF.js";import"./useValueChanged-Bwvej-Ce.js";import"./CollapsiblePanel-5Ce4VwIJ.js";import"./MultiColumnSortDialog-ClipWpCL.js";import"./MenuTrigger-CAbN0KqP.js";import"./CompositeItem-je4-aaCh.js";import"./ToolbarRootContext-CM7Fz4lg.js";import"./getDisabledMountTransitionStyles-DkpoARP_.js";import"./getPseudoElementBounds-BoflN6Xu.js";import"./chevron-down-CP4830r-.js";import"./index-w5EjZqSi.js";import"./error-lgLbUxfX.js";import"./BaseCbacBanner-GDLEtZZt.js";import"./makeExternalStore-BJhWzj4_.js";import"./Tooltip-I_exNZ7U.js";import"./PopoverPopup-DA2ANurn.js";import"./toNumber-DkdmQXwg.js";import"./useOsdkClient-CBENBplO.js";import"./tick-DgQBhy3o.js";import"./DropdownField-t3qnicyE.js";import"./withOsdkMetrics-DyVFL9JC.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
