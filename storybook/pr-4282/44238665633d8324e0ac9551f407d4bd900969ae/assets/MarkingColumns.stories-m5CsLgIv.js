import{f as p,j as e}from"./iframe-I-ljmhXo.js";import{O as i}from"./object-table-Duv57V1_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-M9MPg2Uh.js";import"./Table-DiEd8xlb.js";import"./index-DHgdi-G8.js";import"./Dialog-Dqa_EKtc.js";import"./cross--08b2Esz.js";import"./svgIconContainer-DTF9Rr_D.js";import"./useBaseUiId-63vNftzH.js";import"./InternalBackdrop-iSyfVaW5.js";import"./composite-BpdBkPyX.js";import"./index-B-RGy6eE.js";import"./index-wV7cEBRP.js";import"./index-CExgYXR8.js";import"./useEventCallback-CKHe2jbt.js";import"./SkeletonBar-Cd4HXeaq.js";import"./LoadingCell-kmBO5qb_.js";import"./ColumnConfigDialog-BJn4CDvF.js";import"./DraggableList-Uy7OWW_r.js";import"./search-Xmbyz7ae.js";import"./Input-DgDEYrB1.js";import"./useControlled-D9MNKFMV.js";import"./Button-BPW8BJKe.js";import"./small-cross-DnRErzPc.js";import"./ActionButton-D7dlIpjS.js";import"./Checkbox-BH5TPj1T.js";import"./useValueChanged-DggnfScN.js";import"./CollapsiblePanel-Bab9PcCA.js";import"./MultiColumnSortDialog-Dqa5-Agb.js";import"./MenuTrigger-BfcfRgsA.js";import"./CompositeItem-BNvc3zNV.js";import"./ToolbarRootContext-Bgx3Oosy.js";import"./getDisabledMountTransitionStyles-qCmZAHN-.js";import"./getPseudoElementBounds-BwyOt2xx.js";import"./chevron-down-C0rEk766.js";import"./index-BuOpPpDi.js";import"./error-Dy0kv_06.js";import"./BaseCbacBanner-DpVqHL5O.js";import"./makeExternalStore-BsQQuJAQ.js";import"./Tooltip-BCS8vY1S.js";import"./PopoverPopup-DL3StlvX.js";import"./debounce-4Bi6pw_i.js";import"./useOsdkClient-jS_u-k2J.js";import"./tick-V_8cWmaE.js";import"./DropdownField-ptXdktt_.js";import"./isEqual-Cnysuxje.js";import"./withOsdkMetrics-COEHBIiY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
