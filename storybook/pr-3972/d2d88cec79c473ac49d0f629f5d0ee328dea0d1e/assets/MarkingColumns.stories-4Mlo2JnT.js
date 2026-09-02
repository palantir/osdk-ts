import{f as p,j as e}from"./iframe-2o2kyJSw.js";import{O as i}from"./object-table-azDEgYl1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CiJwpqMw.js";import"./Table-CmFdThQv.js";import"./index-CitRnrnM.js";import"./Dialog-BBfLfR--.js";import"./cross-B_lTfXfQ.js";import"./svgIconContainer-CuK8KMCF.js";import"./useBaseUiId-CpKlAOSJ.js";import"./InternalBackdrop-BikInMxN.js";import"./composite-BjSIx71V.js";import"./index-2rHOwy8w.js";import"./index-CiEsaZes.js";import"./index-DXtnwcW_.js";import"./useEventCallback-C5UTCvLQ.js";import"./SkeletonBar-DGXXhlfa.js";import"./LoadingCell-C2GrCxA_.js";import"./ColumnConfigDialog-CsuV_WmL.js";import"./DraggableList-DraN2KjT.js";import"./search-BjDFLGmu.js";import"./Input-DYGxrYIz.js";import"./useControlled-BXgT251S.js";import"./Button-BNZyyCXs.js";import"./small-cross-BjWdTVSE.js";import"./ActionButton-C6ImwtAS.js";import"./Checkbox-Dgyqqw4w.js";import"./useValueChanged-CBr85hPL.js";import"./CollapsiblePanel-B3UwMjFD.js";import"./MultiColumnSortDialog-3J1w479l.js";import"./MenuTrigger-DO2xD1uK.js";import"./CompositeItem-CeKYfb90.js";import"./ToolbarRootContext-VK9eZ2Nh.js";import"./getDisabledMountTransitionStyles-BI6VDTRC.js";import"./getPseudoElementBounds-e4sYnubV.js";import"./chevron-down-DzSskaX4.js";import"./index--X-EHlCl.js";import"./error-B6s9JUe9.js";import"./BaseCbacBanner-stKdaGYj.js";import"./makeExternalStore-D2otK5Vr.js";import"./Tooltip-CIdYWoah.js";import"./PopoverPopup-TKZ7g6pB.js";import"./debounce-BFnvX-XD.js";import"./useOsdkClient-BuSNta0K.js";import"./tick-_kgMfq2D.js";import"./DropdownField-C_tiYhOd.js";import"./isEqual-DepNuDvP.js";import"./withOsdkMetrics-BmpmfXN7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
