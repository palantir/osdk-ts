import{f as p,j as e}from"./iframe-34VatmEZ.js";import{O as i}from"./object-table-p59KuVgv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DV4gmwFB.js";import"./Table-D9uD0s7O.js";import"./index-BlAm73td.js";import"./Dialog-D1opey4t.js";import"./cross-DvtnLYbI.js";import"./svgIconContainer-_GM_NvIc.js";import"./useBaseUiId-DeI-Jtiv.js";import"./InternalBackdrop-CvK5FjjA.js";import"./composite-1B_4pEYH.js";import"./index-Fj7eg8Eu.js";import"./index-BTVWVA6f.js";import"./index-ADGNjetD.js";import"./useEventCallback-hRIxgR6L.js";import"./SkeletonBar-VDjUVVNd.js";import"./LoadingCell-nvl0Gc8h.js";import"./ColumnConfigDialog-Cq5xAnqD.js";import"./DraggableList-jT1qIjvE.js";import"./search-CVdCifPG.js";import"./Input-BKrVXT7B.js";import"./useControlled-DVccPDBX.js";import"./Button-DV1A9r6F.js";import"./small-cross-CZHtyfX7.js";import"./ActionButton-Czi1TMhc.js";import"./Checkbox-CTzLXv4K.js";import"./useValueChanged-DCa4_FQi.js";import"./CollapsiblePanel-D3pf9y50.js";import"./MultiColumnSortDialog-D1Tv8ymd.js";import"./MenuTrigger-B9hxhTmU.js";import"./CompositeItem-DOiHkRNL.js";import"./ToolbarRootContext-CiWe9x3z.js";import"./getDisabledMountTransitionStyles-DZUNER2j.js";import"./getPseudoElementBounds-IeKEehJb.js";import"./chevron-down-BtQO1pkc.js";import"./index-Dm8AHk8O.js";import"./error-C-NsPFd6.js";import"./BaseCbacBanner-CDA2PalL.js";import"./makeExternalStore-D4cd6CTa.js";import"./Tooltip-Ce33QJzg.js";import"./PopoverPopup-CSKaTK3m.js";import"./debounce-CrVZzVbG.js";import"./useOsdkClient-gxJLLGj5.js";import"./tick-DnmbfsGi.js";import"./DropdownField-BL1cfRQ0.js";import"./isEqual-CGwKoNOy.js";import"./withOsdkMetrics-XZ0oOnyA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
