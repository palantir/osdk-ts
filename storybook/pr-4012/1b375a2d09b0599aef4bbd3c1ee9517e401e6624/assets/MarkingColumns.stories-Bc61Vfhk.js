import{f as p,j as e}from"./iframe-BHMJk_pQ.js";import{O as i}from"./object-table-CEwmRrXK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-yZDhH5uY.js";import"./Table-d8i9MRUg.js";import"./index-CGIFCVjE.js";import"./Dialog-DxVtYtNu.js";import"./cross-Ca7k_LyQ.js";import"./svgIconContainer-EnhuaKpb.js";import"./useBaseUiId-q1ez9o9O.js";import"./InternalBackdrop-BiA6TLUL.js";import"./composite-vsetCZGp.js";import"./index-DlggJEEa.js";import"./index-CzKMl-a_.js";import"./index-CpCHJENW.js";import"./useEventCallback-xm841LUs.js";import"./SkeletonBar-CzOTj0Px.js";import"./LoadingCell-B7ZMIDfw.js";import"./ColumnConfigDialog-BWEen_Od.js";import"./DraggableList-VFAUNwz9.js";import"./search-BSgVHkt6.js";import"./Input-Bs3tYIFL.js";import"./useControlled-CoWycKh2.js";import"./Button-agVfxQZq.js";import"./small-cross-_-iQX0fq.js";import"./ActionButton-B-A1N2em.js";import"./Checkbox-BSj_-O_d.js";import"./useValueChanged-DbGFjP29.js";import"./CollapsiblePanel-DfUPQ-ZF.js";import"./MultiColumnSortDialog-BzHnW22D.js";import"./MenuTrigger-D-rANtVw.js";import"./CompositeItem-C-ykAJ2x.js";import"./ToolbarRootContext-eWmTNPN4.js";import"./getDisabledMountTransitionStyles-D8ahXwaA.js";import"./getPseudoElementBounds-CbcE4Eyu.js";import"./chevron-down-DAwRR1Ih.js";import"./index-DYYPIily.js";import"./error-DwwBySlx.js";import"./BaseCbacBanner-C_uEXybe.js";import"./makeExternalStore-BvwVYkGq.js";import"./Tooltip-8-o0FWqB.js";import"./PopoverPopup-B7XXhvdV.js";import"./debounce-CB6HZpU1.js";import"./useOsdkClient-BikzBIxv.js";import"./tick-DGaeG0X3.js";import"./DropdownField-C0pXdzvg.js";import"./isEqual-DK9oB8Fi.js";import"./withOsdkMetrics-Bfl9jveo.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
