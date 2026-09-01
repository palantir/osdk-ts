import{f as p,j as e}from"./iframe-CXrz77U6.js";import{O as i}from"./object-table-DPD_mU3I.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CKbgkQtS.js";import"./Table-CB5UJxLD.js";import"./index-X106RkLU.js";import"./Dialog-Zioc4Ynx.js";import"./cross-C0HgBeNT.js";import"./svgIconContainer-C1hoWfOl.js";import"./useBaseUiId-DEWnkFns.js";import"./InternalBackdrop-Dvnlt0Xs.js";import"./composite-ggnTBoJz.js";import"./index-CR04-v9m.js";import"./index-OCshk7-x.js";import"./index-DK9FtqpR.js";import"./useEventCallback-Cx73pa4B.js";import"./SkeletonBar-vVgaks7f.js";import"./LoadingCell-1PcNBJ1K.js";import"./ColumnConfigDialog-D3VP_nkk.js";import"./DraggableList-Bq0K0Mzh.js";import"./search-x_EEQ8qK.js";import"./Input-BytGuL1G.js";import"./useControlled-TnVqlNU3.js";import"./Button-p_Ia-Jx9.js";import"./small-cross-BQ-QsIs6.js";import"./ActionButton-1FqISt18.js";import"./Checkbox-BphtvbA1.js";import"./useValueChanged-BJhA6HMo.js";import"./CollapsiblePanel-DoujH5kJ.js";import"./MultiColumnSortDialog-CWk2ds_5.js";import"./MenuTrigger-Cye0wvZ3.js";import"./CompositeItem-CriE69S9.js";import"./ToolbarRootContext-ly2czwm4.js";import"./getDisabledMountTransitionStyles-C9lNrf-I.js";import"./getPseudoElementBounds-BF8pv6bh.js";import"./chevron-down-CJJaofKQ.js";import"./index-CIyfLN4v.js";import"./error-CjxcPcQH.js";import"./BaseCbacBanner-DITYJcfv.js";import"./makeExternalStore-odtlqelb.js";import"./Tooltip-B6A970Dl.js";import"./PopoverPopup-DBp_YwzX.js";import"./debounce-BnootL-T.js";import"./useOsdkClient-Dzvd5JFF.js";import"./tick-jaAesBj2.js";import"./DropdownField-CipAhaef.js";import"./isEqual-lu6Kov14.js";import"./withOsdkMetrics-gTbfWxlK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
