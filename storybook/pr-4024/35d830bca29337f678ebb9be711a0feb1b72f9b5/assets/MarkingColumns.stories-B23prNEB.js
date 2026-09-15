import{f as p,j as e}from"./iframe-DSG-Gahl.js";import{O as i}from"./object-table-CP439Oap.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DD3-CUB8.js";import"./Table-EV18WJO-.js";import"./index-4o4hAzg4.js";import"./Dialog-DrDKTUSB.js";import"./cross-DzIvG2rT.js";import"./svgIconContainer-CkL2iDb7.js";import"./useBaseUiId-Br7wSVRu.js";import"./InternalBackdrop-CYQOhGhx.js";import"./composite-WUh_Mv2U.js";import"./index-BRRswYIi.js";import"./index-CphGNIJN.js";import"./index-XAVsYiFD.js";import"./useEventCallback-QoQzxgWp.js";import"./SkeletonBar-D83dsI7U.js";import"./LoadingCell-csM7bcRN.js";import"./ColumnConfigDialog-Ohev5im7.js";import"./DraggableList-CtWzFhxX.js";import"./search-Cif2ZQOV.js";import"./Input-DBWCKen9.js";import"./useControlled-BS70aI_K.js";import"./Button-DCXgUJWi.js";import"./small-cross-CqhPSG41.js";import"./ActionButton-CuCH1v84.js";import"./Checkbox-BMKyb1ND.js";import"./useValueChanged-B-UgLZ_R.js";import"./CollapsiblePanel-VPfhnzag.js";import"./MultiColumnSortDialog-DVhDYf3L.js";import"./MenuTrigger-Qvpr5ZEC.js";import"./CompositeItem-spSeCvAe.js";import"./ToolbarRootContext-B8oHTFsm.js";import"./getDisabledMountTransitionStyles-W0Uyfg0E.js";import"./getPseudoElementBounds-DDNjc80p.js";import"./chevron-down-CBanfjsL.js";import"./index-DaTFX0DM.js";import"./error-DgA6RGKH.js";import"./BaseCbacBanner-1IdyAyi-.js";import"./makeExternalStore-eZw-8kVK.js";import"./Tooltip-Ci09cpDJ.js";import"./PopoverPopup-B_5MQfps.js";import"./debounce-MyXx4KSr.js";import"./useOsdkClient-0TCUTiK2.js";import"./tick-DEJdcIdx.js";import"./DropdownField-CjqZMfYC.js";import"./isEqual-Bvjp7-nb.js";import"./withOsdkMetrics-CBCC75vt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
