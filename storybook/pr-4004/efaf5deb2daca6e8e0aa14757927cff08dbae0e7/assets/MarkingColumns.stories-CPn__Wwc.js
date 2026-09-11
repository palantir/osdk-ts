import{f as p,j as e}from"./iframe-DsKrzcRN.js";import{O as i}from"./object-table-DBhAnef8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-XXW3l9t_.js";import"./Table-BeDuu-gb.js";import"./index-CsPIGNQb.js";import"./Dialog-B0obumfQ.js";import"./cross-BW2NuQAF.js";import"./svgIconContainer-BOG8o0Qp.js";import"./useBaseUiId-BwjaGsvj.js";import"./InternalBackdrop-D3WUVm8B.js";import"./composite-4l0PTrfd.js";import"./index-CbFdJYZA.js";import"./index-v8oVnP18.js";import"./index-hJuN63ng.js";import"./useEventCallback-CLUwi7QW.js";import"./SkeletonBar-D_kDFvpB.js";import"./LoadingCell-BsInURSZ.js";import"./ColumnConfigDialog-Dytg4qH_.js";import"./DraggableList-DuyEaQju.js";import"./search-Dj7j7f4C.js";import"./Input-C_GhTUPn.js";import"./useControlled-Bqn_3IUK.js";import"./Button-BKP0-2mJ.js";import"./small-cross-4vbxp4Sf.js";import"./ActionButton-CvPzCsuM.js";import"./Checkbox-D_hoBzYk.js";import"./useValueChanged-B1kYQJI9.js";import"./CollapsiblePanel-B3VJ_HAc.js";import"./MultiColumnSortDialog-BJeXbJGy.js";import"./MenuTrigger-CJq6smMb.js";import"./CompositeItem-D26JRJU9.js";import"./ToolbarRootContext-DxArarjC.js";import"./getDisabledMountTransitionStyles-BHlXwaEB.js";import"./getPseudoElementBounds-JpoScsw5.js";import"./chevron-down-DEsS9nYL.js";import"./index-BFmUqTIz.js";import"./error-CfVMT4Jh.js";import"./BaseCbacBanner-D-xOAYw6.js";import"./makeExternalStore-lpe8zccP.js";import"./Tooltip-DsFZs_hy.js";import"./PopoverPopup-ZTUVQmKO.js";import"./debounce-BCcTzWEM.js";import"./useOsdkClient-wqu6WPXo.js";import"./tick-BcIHyu16.js";import"./DropdownField-CWYsNCev.js";import"./isEqual-DYTV2HCP.js";import"./withOsdkMetrics-DQcV-4YY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
