import{f as p,j as e}from"./iframe-B6AjvOVJ.js";import{O as i}from"./object-table-BEU4RzJ9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CgjhIKiB.js";import"./Table-CG40JWX8.js";import"./index-DLHnDDYV.js";import"./Dialog-BMr-kk7T.js";import"./cross-W_gu-k5J.js";import"./svgIconContainer-DL0f4zVF.js";import"./useBaseUiId-BduiX7-m.js";import"./InternalBackdrop-DSek19Mb.js";import"./composite-DnmLy1Yk.js";import"./index-Czlm1Cio.js";import"./index-DmwPHze2.js";import"./index-5tpEsUz9.js";import"./useEventCallback-C1lUOTp3.js";import"./SkeletonBar-COJfbiAQ.js";import"./LoadingCell-BHnENJfD.js";import"./ColumnConfigDialog-DLrdRfDT.js";import"./DraggableList-ClAdpW9r.js";import"./search-Dfb92URe.js";import"./Input-m4NvHU99.js";import"./useControlled-D_wxWQiO.js";import"./Button-BGD9VvG8.js";import"./small-cross-Dr1GEPUD.js";import"./ActionButton-BrQB1W26.js";import"./Checkbox-BjVyekTl.js";import"./useValueChanged-ciY3IUlT.js";import"./CollapsiblePanel-CFux4x-H.js";import"./MultiColumnSortDialog-liyRDpcW.js";import"./MenuTrigger-BsP6FL4S.js";import"./CompositeItem-D9TRpIPa.js";import"./ToolbarRootContext-DmnnlMoA.js";import"./getDisabledMountTransitionStyles-BKsVeh9x.js";import"./getPseudoElementBounds-BT_PONuM.js";import"./chevron-down-Defp8KA-.js";import"./index-oQs3Ep3f.js";import"./error-r1aNeJUF.js";import"./BaseCbacBanner-BsOXdwJ3.js";import"./makeExternalStore-CQVb-Jjn.js";import"./Tooltip-CFccCkAV.js";import"./PopoverPopup-Dt-LXHdl.js";import"./debounce-CoGZo14Z.js";import"./useOsdkClient-IHshgW8j.js";import"./tick-C-Ai1Rfc.js";import"./DropdownField-BFwJYvJy.js";import"./useDebouncedCallback-Dwlualwj.js";import"./withOsdkMetrics-D8uoMkfq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
