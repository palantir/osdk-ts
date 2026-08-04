import{f as p,j as e}from"./iframe-Bu7Ix1IE.js";import{O as i}from"./object-table-C2v13Dut.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C_vXKrgq.js";import"./Table-CcR4BHeD.js";import"./index-CmoSOYw8.js";import"./Dialog-Dy0YakXX.js";import"./cross-DiEWLOow.js";import"./svgIconContainer-DDLtCJpL.js";import"./useBaseUiId-tZcBrbc_.js";import"./InternalBackdrop-D5mqE5uP.js";import"./composite-BYJH93ZN.js";import"./index-BsZCU_gd.js";import"./index-CnmTy_hK.js";import"./index-DQe5Ojpb.js";import"./useEventCallback-D_HhPe5k.js";import"./SkeletonBar-Bzadz-8K.js";import"./LoadingCell-B4MuRYNG.js";import"./ColumnConfigDialog-Ce7H_S2D.js";import"./DraggableList-wBDL6lMx.js";import"./search-DhFNg-wi.js";import"./Input-DLkChbeP.js";import"./useControlled-CGmTThd6.js";import"./isEqual-B0gVi_sG.js";import"./isObject-7o2nEXaI.js";import"./Button-B5h8R3TJ.js";import"./ActionButton-C8nAJG1U.js";import"./Checkbox-D_38qnSN.js";import"./useValueChanged-CNPgNlg_.js";import"./CollapsiblePanel-Bx_iS3iX.js";import"./MultiColumnSortDialog-B1SSBGHa.js";import"./MenuTrigger-BrJ6GrvV.js";import"./CompositeItem-DcF65dQq.js";import"./ToolbarRootContext-DN0znCaz.js";import"./getDisabledMountTransitionStyles-COhOTcSm.js";import"./getPseudoElementBounds-Bc5cMMf-.js";import"./chevron-down-RSnAhjTK.js";import"./index-Bw1Omk53.js";import"./error-Di4qsqoF.js";import"./BaseCbacBanner-DwgH9AvM.js";import"./makeExternalStore-sh41R9y9.js";import"./Tooltip-BqT0KNO0.js";import"./PopoverPopup-DOjZfFhK.js";import"./toNumber-Cjvgkh0x.js";import"./useOsdkClient-wINRGPqb.js";import"./tick-C7sDGere.js";import"./DropdownField-BryjSbxh.js";import"./withOsdkMetrics-BhBd8sSO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
