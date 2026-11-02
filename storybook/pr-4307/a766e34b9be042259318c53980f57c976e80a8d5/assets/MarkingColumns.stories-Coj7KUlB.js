import{f as p,j as e}from"./iframe-DeBKMUKb.js";import{O as i}from"./object-table-CHt2U_74.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DtsY9CO2.js";import"./Table-CQ68RVLx.js";import"./index-CSt4SVDo.js";import"./Dialog-DdkCZCI1.js";import"./cross-BJHF5Gx6.js";import"./svgIconContainer-O2AZIUYH.js";import"./useBaseUiId-gjqV4iyZ.js";import"./InternalBackdrop-BfIGilFA.js";import"./composite-CmHTi2sT.js";import"./index-CPngYotl.js";import"./index-Ch6RGO_N.js";import"./index-_vLIc9r1.js";import"./useEventCallback-DgJERIqa.js";import"./SkeletonBar-4gyG0MaM.js";import"./LoadingCell-BHmA_kTX.js";import"./ColumnConfigDialog-COalgmqy.js";import"./DraggableList-BwnxcEbf.js";import"./search-nMx4jBID.js";import"./Input-DiiDZzec.js";import"./useControlled-Cz39Exnz.js";import"./Button-UgQJdLdU.js";import"./small-cross-DF_WxFTT.js";import"./ActionButton-CYaNQ1cM.js";import"./Checkbox-aMR4zvgX.js";import"./useValueChanged-CDAPz_Xc.js";import"./CollapsiblePanel-DrVw8HP_.js";import"./MultiColumnSortDialog-rzrfB_Oa.js";import"./MenuTrigger-BzEp1szS.js";import"./CompositeItem-DxScAMY-.js";import"./ToolbarRootContext-FIq2uNrn.js";import"./getDisabledMountTransitionStyles-75KemxOF.js";import"./getPseudoElementBounds-C2LoIYA3.js";import"./chevron-down-9YGLxBlF.js";import"./index-DwmniFco.js";import"./error-N6V_Mqjh.js";import"./BaseCbacBanner-CeU4EU63.js";import"./makeExternalStore-tOV9_u_X.js";import"./Tooltip-DGFOPRJX.js";import"./PopoverPopup-D_7crJdL.js";import"./debounce-BBaNzBPC.js";import"./useOsdkClient-DaMq1XGG.js";import"./tick-CiGN0ZZM.js";import"./DropdownField-DgQP5JXr.js";import"./isEqual-DxVuaeab.js";import"./withOsdkMetrics-Cw8Hicid.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
