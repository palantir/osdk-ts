import{f as p,j as e}from"./iframe-D07_tlNY.js";import{O as i}from"./object-table-mDZNy2eA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BZ5VSi4J.js";import"./Table-DhmSo6kc.js";import"./index-BQ0PEMCN.js";import"./Dialog-zKwf6kcN.js";import"./cross-cfoeTeHb.js";import"./svgIconContainer-BLgeYPC8.js";import"./useBaseUiId-B0wQwkXS.js";import"./InternalBackdrop-B6N_TrYF.js";import"./composite-gwuj_Yg_.js";import"./index-EmEIjE8b.js";import"./index-Dy14VnsS.js";import"./index-Djr2tU3g.js";import"./useEventCallback-CacU8cTK.js";import"./SkeletonBar-Y8JMEaWt.js";import"./LoadingCell-Eyo1i6r7.js";import"./ColumnConfigDialog-CLjvnD13.js";import"./DraggableList-HRQfyvgY.js";import"./search-c3tWQKm6.js";import"./Input-C_nbkkcq.js";import"./useControlled-BOVJlk7U.js";import"./Button-xkyJItTT.js";import"./small-cross-ByB9N4b6.js";import"./ActionButton-C1-Qn1rI.js";import"./Checkbox-Cu6eiH4X.js";import"./useValueChanged-DGjiOWT_.js";import"./CollapsiblePanel-WfZDl8Bs.js";import"./MultiColumnSortDialog-CR7MeaoO.js";import"./MenuTrigger-DSHQ860W.js";import"./CompositeItem-B62DALdv.js";import"./ToolbarRootContext-A8nSy6Lb.js";import"./getDisabledMountTransitionStyles-BiaitSmC.js";import"./getPseudoElementBounds-De8tJeym.js";import"./chevron-down-Dm8M3XHE.js";import"./index-B2TS2X4n.js";import"./error-D7fddi8p.js";import"./BaseCbacBanner-C7-RK-oc.js";import"./makeExternalStore-DW0gV4Fp.js";import"./Tooltip-D43kVT1Z.js";import"./PopoverPopup-BogJF-KW.js";import"./debounce--cq45Syc.js";import"./useOsdkClient-Dp-gfOqY.js";import"./tick-D3lvgpVt.js";import"./DropdownField-Xg10lVkk.js";import"./isEqual-BPrEtiGy.js";import"./withOsdkMetrics-CK10C4kZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
