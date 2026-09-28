import{f as p,j as e}from"./iframe-CdZ1-8VD.js";import{O as i}from"./object-table-DDvSb5Kt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BfsuwAVK.js";import"./Table-C3-BZLyv.js";import"./index-DyOp5UTf.js";import"./Dialog-BVsM3nhX.js";import"./cross-D0Gcop_x.js";import"./svgIconContainer-BzSPbIbT.js";import"./useBaseUiId-Bn-Ngw1_.js";import"./InternalBackdrop-BIdMsz61.js";import"./composite-DXQ2UI8x.js";import"./index-B0esJxNQ.js";import"./index-DVUFOk1V.js";import"./index-CXL10vF5.js";import"./useEventCallback-Cu7C16-m.js";import"./SkeletonBar-8SPBEh-g.js";import"./LoadingCell-DAfUInab.js";import"./ColumnConfigDialog-C9RPYwH1.js";import"./DraggableList-DEKgyEc5.js";import"./search-BZxjL_1A.js";import"./Input-KSBtG81T.js";import"./useControlled-U2uKb9nR.js";import"./Button-Bt5t_54D.js";import"./small-cross-DR7ny8zU.js";import"./ActionButton-Cru8Qy-m.js";import"./Checkbox-R3-afLLJ.js";import"./useValueChanged-C1GpysCg.js";import"./CollapsiblePanel-CFarmLG5.js";import"./MultiColumnSortDialog-h-aCTogI.js";import"./MenuTrigger-_in--5sv.js";import"./CompositeItem-yiTSbTdQ.js";import"./ToolbarRootContext-2AFAS280.js";import"./getDisabledMountTransitionStyles-BI1VlBVA.js";import"./getPseudoElementBounds-BdSlNVkb.js";import"./chevron-down-ElNoZV5X.js";import"./index-BDrIE1q3.js";import"./error-C5_AkzgF.js";import"./BaseCbacBanner-BNo88gI0.js";import"./makeExternalStore-xgvF_Gz5.js";import"./Tooltip-DhGkKgsN.js";import"./PopoverPopup-DXgfGfh3.js";import"./debounce-mQD2mSjp.js";import"./useOsdkClient-8doQ3A6W.js";import"./tick-Ds5_YkYs.js";import"./DropdownField-D6ZvZlxb.js";import"./isEqual-jIhDHEUI.js";import"./withOsdkMetrics-Bjc_co0T.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
