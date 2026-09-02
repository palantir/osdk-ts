import{f as p,j as e}from"./iframe-LK7OOuZ_.js";import{O as i}from"./object-table-D9ETwD5j.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Day3KTOO.js";import"./Table-B1UTJePN.js";import"./index-CwVQ5Krz.js";import"./Dialog-DeA5iwJU.js";import"./cross-BIG9tMZn.js";import"./svgIconContainer-Bm4iT3eI.js";import"./useBaseUiId-B6K6_xMQ.js";import"./InternalBackdrop-DXj_l9qd.js";import"./composite-lCB-i_uM.js";import"./index-BxZZb_0K.js";import"./index-CNFZjGa7.js";import"./index-97qOkHLc.js";import"./useEventCallback-GF5A1PPP.js";import"./SkeletonBar-C2-u18kR.js";import"./LoadingCell-CptE6iqP.js";import"./ColumnConfigDialog-BExXTM8H.js";import"./DraggableList-CiyBThjP.js";import"./search-DoOWQiUr.js";import"./Input-zz_AAM2k.js";import"./useControlled-D18eST4p.js";import"./Button-DOOnpy1b.js";import"./small-cross-Cj_cWLGh.js";import"./ActionButton-Bp5ltgtK.js";import"./Checkbox-CNeKPyQB.js";import"./useValueChanged-BS5zssgA.js";import"./CollapsiblePanel-DFaCEzJh.js";import"./MultiColumnSortDialog-CQjbZz0O.js";import"./MenuTrigger-DwbW3AdY.js";import"./CompositeItem-Dzq7tRMR.js";import"./ToolbarRootContext-DqesGwMA.js";import"./getDisabledMountTransitionStyles-591mdyd3.js";import"./getPseudoElementBounds-CQJtfdLJ.js";import"./chevron-down-Dq5oFVl8.js";import"./index-XVTMlPM4.js";import"./error-BqhqjqOC.js";import"./BaseCbacBanner-JPw4QD5g.js";import"./makeExternalStore-BVPBtEqc.js";import"./Tooltip-CWdCJPSO.js";import"./PopoverPopup-Va_O6hKU.js";import"./debounce-BSTGe6_B.js";import"./useOsdkClient-BTkGaJ3_.js";import"./tick-BVd9NWyG.js";import"./DropdownField-C9okc_y1.js";import"./isEqual-Dn55Gl5y.js";import"./withOsdkMetrics-BMjEIbaa.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
