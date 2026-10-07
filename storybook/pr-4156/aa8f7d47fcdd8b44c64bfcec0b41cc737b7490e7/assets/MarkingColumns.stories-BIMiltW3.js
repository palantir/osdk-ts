import{f as p,j as e}from"./iframe-CDX-NTfD.js";import{O as i}from"./object-table-_hz3q5Et.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CSvLju02.js";import"./Table-D5yx9evC.js";import"./index-D6xAz9PB.js";import"./Dialog-G0b2VcwQ.js";import"./cross-CUWzhEFb.js";import"./svgIconContainer-99TPvqBc.js";import"./useBaseUiId-CM3Yhx5P.js";import"./InternalBackdrop-DiaJjHCs.js";import"./composite-CpWLo2c3.js";import"./index-qkQ_SGyl.js";import"./index-DmFJgdYe.js";import"./index-B2Z1_nfV.js";import"./useEventCallback-Cd_Dk0li.js";import"./SkeletonBar-Dt_qbNYC.js";import"./LoadingCell-GRxU-9a2.js";import"./ColumnConfigDialog-Dnjip8-F.js";import"./DraggableList-Dj-x_Sxv.js";import"./search-DvrI77MS.js";import"./Input-Dz-cSGCu.js";import"./useControlled-CLUlXrHb.js";import"./Button-CscfG-hh.js";import"./small-cross-5qXULdiz.js";import"./ActionButton-bEISj8yJ.js";import"./Checkbox-De-raZKJ.js";import"./useValueChanged-CsNJxGB2.js";import"./CollapsiblePanel-OIYRVxIj.js";import"./MultiColumnSortDialog-DMiLKeyK.js";import"./MenuTrigger-CabmK2Fj.js";import"./CompositeItem-nsBHK6f-.js";import"./ToolbarRootContext-BX6M6ShK.js";import"./getDisabledMountTransitionStyles-DJOApo6o.js";import"./getPseudoElementBounds-Dfao8WFR.js";import"./chevron-down-r7sEOhf_.js";import"./index-DTEUSjqo.js";import"./error-BplB6VbP.js";import"./BaseCbacBanner-P7JgUlKM.js";import"./makeExternalStore-DXrOIATy.js";import"./Tooltip-BVBB5Hov.js";import"./PopoverPopup-BLtOX9gX.js";import"./debounce-D1B6swv0.js";import"./useOsdkClient-ZKN6ZGl4.js";import"./tick-BHhyW78u.js";import"./DropdownField-CQBpCIOv.js";import"./isEqual-BdXiBc78.js";import"./withOsdkMetrics-CUdmlJda.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
