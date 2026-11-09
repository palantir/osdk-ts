import{f as p,j as e}from"./iframe-Chfnu1YD.js";import{O as i}from"./object-table-GXQqgEvs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-8IaaIvc6.js";import"./Table-BYiLzy7V.js";import"./index-vEtNoJy3.js";import"./Dialog-C0NkkaLW.js";import"./cross-DDh1oeg3.js";import"./svgIconContainer-Cemmf0nA.js";import"./useBaseUiId-1GAAVutu.js";import"./InternalBackdrop-DLHFnO4E.js";import"./composite-ptzmGyTW.js";import"./index-DvqaWTEs.js";import"./index-Bbt8955e.js";import"./index-C4q2PejQ.js";import"./useEventCallback-Dz5cwNMH.js";import"./SkeletonBar-ikqiEJT9.js";import"./LoadingCell-CvbYgRpj.js";import"./ColumnConfigDialog-nCGkIgug.js";import"./DraggableList-D5aJDVZs.js";import"./search-BNvr0C3M.js";import"./Input-DWPUbvhX.js";import"./useControlled-G2n_omSR.js";import"./Button-Ciq9JFcz.js";import"./small-cross-CA-g_M_D.js";import"./ActionButton-CBNCZv9P.js";import"./Checkbox-C2BsILr5.js";import"./useValueChanged-NA9qAH4Q.js";import"./CollapsiblePanel-C_TGf3AQ.js";import"./MultiColumnSortDialog-BQDGa9D6.js";import"./MenuTrigger-CH8gjYXg.js";import"./CompositeItem-B84_RNVq.js";import"./ToolbarRootContext-BC9rkGH_.js";import"./getDisabledMountTransitionStyles-BhZDCpH_.js";import"./getPseudoElementBounds-BJU_D_lr.js";import"./chevron-down-lrpzUfD-.js";import"./index-DvPbsGeG.js";import"./error-Dy9PQux-.js";import"./BaseCbacBanner-CmZapzw4.js";import"./makeExternalStore-CYR-IDnU.js";import"./Tooltip-D2XqF5oz.js";import"./isObject-BCq84zEs.js";import"./debounce-D2wam908.js";import"./useOsdkClient-v00nyVWz.js";import"./tick-DN0NnQtg.js";import"./DropdownField-BBRj5dwe.js";import"./isEqual-BQpI83mS.js";import"./_baseIsEqual-CmLtIxcO.js";import"./withOsdkMetrics-DRREQEVj.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
