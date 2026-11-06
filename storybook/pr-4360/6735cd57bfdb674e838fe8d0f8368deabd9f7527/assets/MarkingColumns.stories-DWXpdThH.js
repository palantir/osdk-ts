import{f as p,j as e}from"./iframe-D0hYQ0ZS.js";import{O as i}from"./object-table-DLX2MzIu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CA2FQp3d.js";import"./Table-DMz3Y6NY.js";import"./index-DmARC5st.js";import"./Dialog-Bl5C-BqW.js";import"./cross-DGfZ9I8q.js";import"./svgIconContainer-Bnj1Dnpn.js";import"./useBaseUiId-XRgD1fAc.js";import"./InternalBackdrop-SIBrBcO2.js";import"./composite-DkKFn4B2.js";import"./index-dclRq-mv.js";import"./index-DET9q48x.js";import"./index-BbLGiomW.js";import"./useEventCallback-QgwS4DGJ.js";import"./SkeletonBar-C6N4_KPV.js";import"./LoadingCell-Cy3ZG3Ul.js";import"./ColumnConfigDialog-Rnk5vxEV.js";import"./DraggableList-TmF7-AcL.js";import"./search-DXnEIY7b.js";import"./Input-DppPciYW.js";import"./useControlled-DFsigNjS.js";import"./Button-BBjgpomd.js";import"./small-cross-BxDAgcxl.js";import"./ActionButton-DpwsppbT.js";import"./Checkbox-DHbPmO1b.js";import"./useValueChanged-C5EsCsdO.js";import"./CollapsiblePanel-BJaUHEEv.js";import"./MultiColumnSortDialog-Cl36xL0F.js";import"./MenuTrigger-bO1EcLGj.js";import"./CompositeItem-BfeA3NJO.js";import"./ToolbarRootContext-B3P_Il02.js";import"./getDisabledMountTransitionStyles-CI56VyjH.js";import"./getPseudoElementBounds-DLUmkYq-.js";import"./chevron-down-DpAIzyvb.js";import"./index-CwuOLTmH.js";import"./error-DZHrzjAe.js";import"./BaseCbacBanner-Cu3SBgXf.js";import"./makeExternalStore-BcCQ6g4O.js";import"./Tooltip-CRcQ9riQ.js";import"./isObject-BfICCCNa.js";import"./debounce-Dai0imdk.js";import"./useOsdkClient-Dhz58JN-.js";import"./tick-CAmkKM-G.js";import"./DropdownField-DDHVxYRR.js";import"./isEqual-ouCKJr-f.js";import"./_baseIsEqual-B00E2ztM.js";import"./withOsdkMetrics-Dqap3OIg.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
