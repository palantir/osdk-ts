import{f as p,j as e}from"./iframe-YrpSpTvs.js";import{O as i}from"./object-table-t3OUf3ip.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DxNq55wa.js";import"./Table-DZ0iaFpj.js";import"./index-BrVf8lWl.js";import"./Dialog-DjLl79nO.js";import"./cross-B0Aawxg9.js";import"./svgIconContainer-BtBzrjkO.js";import"./useBaseUiId-nYNd-3tJ.js";import"./InternalBackdrop-B7DfYIYc.js";import"./composite-5Mv9D3-A.js";import"./index-Di4tHAvA.js";import"./index-BIHLBcFj.js";import"./index-CsSm3NU5.js";import"./useEventCallback-BgeJ4XJ6.js";import"./SkeletonBar-CaULgTN_.js";import"./LoadingCell-nlkp1zok.js";import"./ColumnConfigDialog-BLNg6qZa.js";import"./DraggableList-Blumv0Fv.js";import"./search-B0P1cBIF.js";import"./Input-32CO0l-U.js";import"./useControlled-2o6j3dfP.js";import"./Button-CYGEL5Qg.js";import"./small-cross-BGabRNmn.js";import"./ActionButton-CHDejxq_.js";import"./Checkbox-DASKdpQc.js";import"./useValueChanged-BqrtuFIH.js";import"./CollapsiblePanel-sGxNkfQy.js";import"./MultiColumnSortDialog-Cld8H5W0.js";import"./MenuTrigger-Cb6vZPp0.js";import"./CompositeItem-B56fR4fH.js";import"./ToolbarRootContext-8z2gQ1ff.js";import"./getDisabledMountTransitionStyles-BnFsI7c-.js";import"./getPseudoElementBounds-Dw8pXuDb.js";import"./chevron-down-BfPcmD3R.js";import"./index-BS-m42I7.js";import"./error-DewscpxX.js";import"./BaseCbacBanner-msBh7mIJ.js";import"./makeExternalStore-C6NSSiHx.js";import"./Tooltip-DoIwzql8.js";import"./PopoverPopup-Bz5N51mo.js";import"./debounce-BaFZDc5z.js";import"./useOsdkClient-hs785eW6.js";import"./tick-B5LbKbnR.js";import"./DropdownField-BFTWMxkB.js";import"./isEqual-B8DwposS.js";import"./withOsdkMetrics-GBGU8c2D.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
