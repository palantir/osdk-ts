import{f as p,j as e}from"./iframe-C26fIjAq.js";import{O as i}from"./object-table-CrghsGcJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CzokokTz.js";import"./Table-CL1bC3L9.js";import"./index-DSezQFnS.js";import"./Dialog-KIOCO7Ba.js";import"./cross-DwdPD-y-.js";import"./svgIconContainer-CKLh70Ds.js";import"./useBaseUiId-CZznSoWJ.js";import"./InternalBackdrop-33GFEnuK.js";import"./composite-B7Vf-7yN.js";import"./index-DKSyNOS5.js";import"./index-CvCOxJEM.js";import"./index-Cwq9J0os.js";import"./useEventCallback-DUQbs5oX.js";import"./SkeletonBar-DViOz3Wh.js";import"./LoadingCell-DcEh937u.js";import"./ColumnConfigDialog-DSla1ybE.js";import"./DraggableList-Bt-5589a.js";import"./search-CILTwpty.js";import"./Input-CWfYIH6c.js";import"./useControlled-C5NYvmTr.js";import"./Button-DUEO4ppB.js";import"./small-cross-CQktJtCa.js";import"./ActionButton-5TW8yVIZ.js";import"./Checkbox-SrFRulVK.js";import"./useValueChanged-BXDVDv9P.js";import"./CollapsiblePanel-bkJ3PYEK.js";import"./MultiColumnSortDialog-B4-hIcRf.js";import"./MenuTrigger-Dt9RoogJ.js";import"./CompositeItem-Upla8dz7.js";import"./ToolbarRootContext-BQbj6f0-.js";import"./getDisabledMountTransitionStyles-BbWUI2dB.js";import"./getPseudoElementBounds-DynJ88Gh.js";import"./chevron-down-jqoCvdNC.js";import"./index-BF0VER8K.js";import"./error-W1WiOcUb.js";import"./BaseCbacBanner-D62B0Zzd.js";import"./makeExternalStore-BbYA9c-K.js";import"./Tooltip-CwaJelEY.js";import"./isObject-Clle__At.js";import"./debounce-DStFzp8p.js";import"./useOsdkClient-D0uHWbqN.js";import"./tick-CJNoyutt.js";import"./DropdownField-D0Kss3Mm.js";import"./isEqual-Bx3yP7zp.js";import"./_baseIsEqual-Ckydw60z.js";import"./withOsdkMetrics-DlZr1eO5.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
