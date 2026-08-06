import{f as p,j as e}from"./iframe-BfpGyLEa.js";import{O as i}from"./object-table-CReHjQqT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B3VqCvDk.js";import"./Table-DBzqhcXp.js";import"./index-HQRwX0sG.js";import"./Dialog-BfwGzw59.js";import"./cross-On_Sn6mV.js";import"./svgIconContainer-DjfkGdUu.js";import"./useBaseUiId-ByeyJXQZ.js";import"./InternalBackdrop-DRhc4Tux.js";import"./composite-BgeLt9pq.js";import"./index-CnwcoLiT.js";import"./index-C1hBHqbI.js";import"./index-DI4kr843.js";import"./useEventCallback-CLrYJF5s.js";import"./SkeletonBar-CVXLUSoX.js";import"./LoadingCell-CjGrgX8S.js";import"./ColumnConfigDialog-B22PE52R.js";import"./DraggableList-BYAI8JzX.js";import"./search-PEXLOihg.js";import"./Input-CzADAXYu.js";import"./useControlled-BVUZlzvp.js";import"./isEqual-Dgi0ZaAt.js";import"./isObject-DDhARXOo.js";import"./Button-DxBNRoWp.js";import"./ActionButton-CxBd5f-7.js";import"./Checkbox-ChqM5Q0I.js";import"./useValueChanged-Br-kPmpL.js";import"./CollapsiblePanel-Xt2EWbql.js";import"./MultiColumnSortDialog-9V2M6VCH.js";import"./MenuTrigger-DMQaU_hF.js";import"./CompositeItem-D07VWMUd.js";import"./ToolbarRootContext-DSTawcBa.js";import"./getDisabledMountTransitionStyles-B03uOhek.js";import"./getPseudoElementBounds-BkubrDWa.js";import"./chevron-down-D80S2cyc.js";import"./index-BOHHG715.js";import"./error-_erutXgY.js";import"./BaseCbacBanner-1vi7wFhA.js";import"./makeExternalStore-p4wOuTs-.js";import"./Tooltip-D8X_gFsZ.js";import"./PopoverPopup-CSvozSxL.js";import"./toNumber-B-CjzLUf.js";import"./useOsdkClient-wg32HbIo.js";import"./tick-CS4u37BA.js";import"./DropdownField-ClrrHaef.js";import"./withOsdkMetrics-C1uTzjR-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
