import{f as p,j as e}from"./iframe-Bosp4Kfk.js";import{O as i}from"./object-table-CIvJAmm_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ClWiB6VL.js";import"./Table-C6h5Imx9.js";import"./index-C6XIr_j0.js";import"./Dialog-BdMUVq1d.js";import"./cross-Dp0rkMBN.js";import"./svgIconContainer-Qe3SZPH2.js";import"./useBaseUiId-CYPagWj7.js";import"./InternalBackdrop-CcdE1zeW.js";import"./composite-C0RZtlqO.js";import"./index-D_IOkl0_.js";import"./index-Cq35IRn6.js";import"./index-CrFnkiFr.js";import"./useEventCallback-BmUH0wYY.js";import"./SkeletonBar-DjkVJCj3.js";import"./LoadingCell-7pUl9puK.js";import"./ColumnConfigDialog-DJssRAan.js";import"./DraggableList-vV-YW89g.js";import"./search-BiUx3u5j.js";import"./Input-CGDWreR8.js";import"./useControlled-DTohw9V1.js";import"./Button-CieAMe_p.js";import"./small-cross-CrYiAO_J.js";import"./ActionButton-Dr97457V.js";import"./Checkbox-BLQiWWKW.js";import"./useValueChanged-Ch87rtp2.js";import"./CollapsiblePanel-B3vcSNej.js";import"./MultiColumnSortDialog-BZXXkkZR.js";import"./MenuTrigger-DlFlzUl5.js";import"./CompositeItem-BU4XWpDF.js";import"./ToolbarRootContext-Bz28bgEE.js";import"./getDisabledMountTransitionStyles-BGeKaQZr.js";import"./getPseudoElementBounds-D1VPFEDe.js";import"./chevron-down-BmQ0fXj1.js";import"./index-Dez8kNJl.js";import"./error-7C0gNJGe.js";import"./BaseCbacBanner-De58Nn1x.js";import"./makeExternalStore-KCU4dCkA.js";import"./Tooltip-9q3J9nO5.js";import"./PopoverPopup-M52DYMvO.js";import"./debounce-b8voU-g_.js";import"./useOsdkClient-Bz0UU2Hd.js";import"./tick-2lM_ezsG.js";import"./DropdownField-45SlxEfM.js";import"./isEqual-BfE8QgFE.js";import"./withOsdkMetrics-DRBPjASM.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
