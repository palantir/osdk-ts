import{f as p,j as e}from"./iframe-D6y6_Ifg.js";import{O as i}from"./object-table-nYNJPeZT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DyU-boOC.js";import"./Table-D-Yj8yjp.js";import"./index-BGSHUEgZ.js";import"./Dialog-DDgjwDi0.js";import"./cross-DjwwagZM.js";import"./svgIconContainer-kSsZGyO3.js";import"./useBaseUiId-BqYaQHeS.js";import"./InternalBackdrop-Ddo5KuLP.js";import"./composite-DjaGlwPS.js";import"./index-DCLjYuV8.js";import"./index-BgYri-U-.js";import"./index-C3VTJ_3W.js";import"./useEventCallback-Ctt9oFuA.js";import"./SkeletonBar-CDnWHSD6.js";import"./LoadingCell-5nVC5W90.js";import"./ColumnConfigDialog-DhSn3u3u.js";import"./DraggableList-C0L-xZto.js";import"./search-Ds3QYjxm.js";import"./Input-yKev__cZ.js";import"./useControlled-BqujvQcb.js";import"./Button-CWXM-Cv5.js";import"./small-cross-BJjPBosz.js";import"./ActionButton-Drswk3OR.js";import"./Checkbox-Cj9nTQ8T.js";import"./useValueChanged-DgtVOjIu.js";import"./CollapsiblePanel-Cz_Uq3Uc.js";import"./MultiColumnSortDialog-D1J5klGK.js";import"./MenuTrigger-Cmsog5T9.js";import"./CompositeItem-DO83W1mC.js";import"./ToolbarRootContext-CGSlDNd6.js";import"./getDisabledMountTransitionStyles-uDupN6Zi.js";import"./getPseudoElementBounds-BpTbd1eR.js";import"./chevron-down-tZEFHgnG.js";import"./index-qwFFssEr.js";import"./error-kgzj6SX8.js";import"./BaseCbacBanner-BeXsIPJi.js";import"./makeExternalStore-ITPdtG8P.js";import"./Tooltip-CiApLGcm.js";import"./PopoverPopup-GQEpG8wD.js";import"./debounce-CShglMk9.js";import"./useOsdkClient-CSuFL6LS.js";import"./tick-3tfAK9_o.js";import"./DropdownField-B-Y7S6ow.js";import"./isEqual-lwrbts4r.js";import"./withOsdkMetrics-DLWDjTSp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
