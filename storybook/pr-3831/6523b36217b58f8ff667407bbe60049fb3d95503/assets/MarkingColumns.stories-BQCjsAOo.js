import{f as p,j as e}from"./iframe-B34J-v6h.js";import{O as i}from"./object-table-DTjiON6u.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DktNXW3g.js";import"./Table-Dfg77Bxb.js";import"./index-BszbKXdM.js";import"./Dialog-DqrZKH8L.js";import"./cross-pUUxARqk.js";import"./svgIconContainer-DmCHV_gw.js";import"./useBaseUiId-Do4jndxX.js";import"./InternalBackdrop-BhgSPtRS.js";import"./composite-DxIIqapU.js";import"./index-DAodypt3.js";import"./index-BqaRlPNX.js";import"./index-ClzzyEIK.js";import"./useEventCallback-DYWArs4W.js";import"./SkeletonBar-DgZTpj9n.js";import"./LoadingCell-KPodI4gW.js";import"./ColumnConfigDialog-B7uGR623.js";import"./DraggableList-DiF1ea2S.js";import"./search-CeKblNnA.js";import"./Input-C4Ex_DFO.js";import"./useControlled-Bg6sLlzu.js";import"./isEqual-Cx-kf-1u.js";import"./isObject-CnhZ3r5T.js";import"./Button-D_70nOKH.js";import"./ActionButton-DmUBsAeq.js";import"./Checkbox-VXc1ULhl.js";import"./useValueChanged-Dlm4ppkt.js";import"./CollapsiblePanel-nRmpIuct.js";import"./MultiColumnSortDialog-bwM4Ndeq.js";import"./MenuTrigger-CE0WI67H.js";import"./CompositeItem-ILlt-DFI.js";import"./ToolbarRootContext-CsJNA5yH.js";import"./getDisabledMountTransitionStyles-V0s781CD.js";import"./getPseudoElementBounds-CPaE4zmA.js";import"./chevron-down-ChHe2eij.js";import"./index-DFEBs7x6.js";import"./error-DhuwnDiJ.js";import"./BaseCbacBanner-ptnosBco.js";import"./makeExternalStore-DU96TFYm.js";import"./Tooltip-kFbAJLNY.js";import"./PopoverPopup-DlqTesz8.js";import"./toNumber-QrsZyUgq.js";import"./useOsdkClient-BWaZJhGH.js";import"./tick-CqgAuDLT.js";import"./DropdownField-BTqSbvCg.js";import"./withOsdkMetrics-CIjnlwhJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
