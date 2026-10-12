import{f as p,j as e}from"./iframe-DYtUFfpV.js";import{O as i}from"./object-table-CHj9aW6t.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C-exNfje.js";import"./index-B_B03ZgQ.js";import"./Dialog-sifnIZBJ.js";import"./cross-BnbnB9qW.js";import"./svgIconContainer-DFzm68WI.js";import"./useBaseUiId-DGMDSr1w.js";import"./InternalBackdrop-Cq3aXNy6.js";import"./composite-5PJSFBR3.js";import"./index-ByCETvNt.js";import"./index-DLk7paK9.js";import"./index-Dh6PcIHr.js";import"./useEventCallback-DGyohyoy.js";import"./SkeletonBar-tfS1beTf.js";import"./LoadingCell-BEHbwI_i.js";import"./ColumnConfigDialog-Zd1CPmCy.js";import"./DraggableList-ZaDVBZ2K.js";import"./search-DZ2fRThm.js";import"./Input-Rz5gB3-F.js";import"./useControlled-CTXIF64s.js";import"./Button-CBBF9I1J.js";import"./small-cross-DUMNP9nm.js";import"./ActionButton-gd9T6Q6m.js";import"./Checkbox-BgMpsQG8.js";import"./useValueChanged-BXTPeGrG.js";import"./CollapsiblePanel-DsmHbGwh.js";import"./MultiColumnSortDialog-DzoZtfQh.js";import"./MenuTrigger--IiolMwr.js";import"./CompositeItem-BjuvjbZw.js";import"./ToolbarRootContext-DcFxLx-B.js";import"./getDisabledMountTransitionStyles-BbPZ6Y-H.js";import"./getPseudoElementBounds-BIAPaGxa.js";import"./chevron-down-tphWLm1B.js";import"./index-DYE6Durp.js";import"./error-B2G3Ssl-.js";import"./BaseCbacBanner-cm8XduCf.js";import"./makeExternalStore-ByCDRZNg.js";import"./Tooltip-BlCaFm9g.js";import"./PopoverPopup-DZoDE-qB.js";import"./debounce-DoOyh8jW.js";import"./useOsdkClient-BdXrEp_e.js";import"./tick-C7X186oI.js";import"./DropdownField-0kxHenat.js";import"./isEqual-CGtQ-Eza.js";import"./withOsdkMetrics-CSoHl_un.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
