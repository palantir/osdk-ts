import{f as p,j as e}from"./iframe-X83lPBeu.js";import{O as i}from"./object-table-Y_3wYW9d.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B2sKPI8B.js";import"./Table-MemkOZOO.js";import"./index-BQDctdoe.js";import"./Dialog-DEiSH4_y.js";import"./cross-DESSfx8f.js";import"./svgIconContainer-CrLLWaC0.js";import"./useBaseUiId-CXpBK7Xe.js";import"./InternalBackdrop-CPq4-grn.js";import"./composite-C3KQbPWK.js";import"./index-CC_w3gYY.js";import"./index-DeDXgDsX.js";import"./index-DJhqSZmI.js";import"./useEventCallback-BzkW8p-_.js";import"./SkeletonBar-C-PQinYo.js";import"./LoadingCell-CZpi8tRS.js";import"./ColumnConfigDialog-DEaTwFfm.js";import"./DraggableList-DWHIIeJB.js";import"./search-CGhIjKAK.js";import"./Input-C5377Qeu.js";import"./useControlled-CRW8vka0.js";import"./Button-C6LVoI3t.js";import"./small-cross-BGOiG0gJ.js";import"./ActionButton-CA6MrVcg.js";import"./Checkbox-DY07kqsM.js";import"./useValueChanged-CpfWf914.js";import"./CollapsiblePanel-CrXH_pxU.js";import"./MultiColumnSortDialog-BhobuEes.js";import"./MenuTrigger-DjoQlH_H.js";import"./CompositeItem-DmkSf1ho.js";import"./ToolbarRootContext-DNKVBjDF.js";import"./getDisabledMountTransitionStyles-DAbmYawC.js";import"./getPseudoElementBounds-Mr0Voovu.js";import"./chevron-down-C6VkVqqF.js";import"./index-ArSP-sSJ.js";import"./error-gzJnjayk.js";import"./BaseCbacBanner-KZqmSl10.js";import"./makeExternalStore-D0mNPEg-.js";import"./Tooltip-BTG2SIH8.js";import"./PopoverPopup-G2s0F852.js";import"./debounce-CJcmUv4x.js";import"./useOsdkClient-CMlwPsT9.js";import"./tick-ClK8H8tK.js";import"./DropdownField-D0HzhIcj.js";import"./isEqual-C0ftKMoJ.js";import"./withOsdkMetrics-DWVSjT_8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
