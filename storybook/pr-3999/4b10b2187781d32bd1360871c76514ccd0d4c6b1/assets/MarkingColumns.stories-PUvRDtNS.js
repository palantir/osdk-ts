import{f as p,j as e}from"./iframe-DBZ29Q89.js";import{O as i}from"./object-table-DFAMzKrH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cu7dcQLx.js";import"./Table-BgsXMa7R.js";import"./index-DBtD-XxF.js";import"./Dialog-Dq9MvlvH.js";import"./cross-B-xCEuKH.js";import"./svgIconContainer-DNY9aQZJ.js";import"./useBaseUiId-RGrTJ31h.js";import"./InternalBackdrop-BHcPYEam.js";import"./composite-DRG53mMw.js";import"./index-Bo8FiFc5.js";import"./index-Bc39kNYP.js";import"./index-jB4e8NNE.js";import"./useEventCallback-Bph5gx73.js";import"./SkeletonBar-DCuWvPdX.js";import"./LoadingCell-DmomVXl7.js";import"./ColumnConfigDialog-DvnjzPVi.js";import"./DraggableList-CRrQ_cz3.js";import"./search-DFnGvI6Z.js";import"./Input-BW9ftY3W.js";import"./useControlled-CAV9tSJk.js";import"./Button-TF5qO5TO.js";import"./small-cross-DoWs3x27.js";import"./ActionButton-tF-VFP1u.js";import"./Checkbox-AhlW4bmz.js";import"./useValueChanged-g3rU1sEt.js";import"./CollapsiblePanel-BuR1KRlC.js";import"./MultiColumnSortDialog-B7k8x7Cw.js";import"./MenuTrigger-DMDl84wG.js";import"./CompositeItem-CnzplN5I.js";import"./ToolbarRootContext-BDMXA8FN.js";import"./getDisabledMountTransitionStyles-CJavuumC.js";import"./getPseudoElementBounds-CMANdjLh.js";import"./chevron-down-m8Go69fz.js";import"./index-D7JuEvow.js";import"./error-DYp6MgYM.js";import"./BaseCbacBanner-C8d8ZFfK.js";import"./makeExternalStore-Dhyr5JD9.js";import"./Tooltip-DIxNlKyb.js";import"./PopoverPopup-vY89NdJ2.js";import"./debounce-B-C3MBB0.js";import"./useOsdkClient-Cjx5o-tv.js";import"./tick-6gOcudBG.js";import"./DropdownField-ZZtn-RZ5.js";import"./isEqual-I0TXraMo.js";import"./withOsdkMetrics-DDr2NyM9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
