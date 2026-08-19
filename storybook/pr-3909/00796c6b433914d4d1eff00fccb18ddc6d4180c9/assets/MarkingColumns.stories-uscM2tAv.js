import{f as p,j as e}from"./iframe-DzLmQzfL.js";import{O as i}from"./object-table-BEYWSqeH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DYuv-bf-.js";import"./Table-BENlvreU.js";import"./index-CdQpjacm.js";import"./Dialog-BiDgKXsL.js";import"./cross-DfDMn0pr.js";import"./svgIconContainer-Jv28MIw9.js";import"./useBaseUiId-Bmp5LN4j.js";import"./InternalBackdrop-pKagafuB.js";import"./composite-Cez-p8GT.js";import"./index-D0Om1NOm.js";import"./index-ByLiAsET.js";import"./index-fUD05Gsl.js";import"./useEventCallback-B8lpys4D.js";import"./SkeletonBar-Bs8J-8ST.js";import"./LoadingCell-BNNKrPRM.js";import"./ColumnConfigDialog-KwDlSvr0.js";import"./DraggableList-BINn4pAx.js";import"./search-tY_g51mG.js";import"./Input-ea8HxTa0.js";import"./useControlled-AhpadjFe.js";import"./Button-DyUjkQv3.js";import"./small-cross-CfZYje-b.js";import"./ActionButton-CC-w0u8p.js";import"./Checkbox-CuTCRk_I.js";import"./useValueChanged-DS7g6QS1.js";import"./CollapsiblePanel-UEe2R4Qd.js";import"./MultiColumnSortDialog-Cp37JhTS.js";import"./MenuTrigger-eQ7_Xffg.js";import"./CompositeItem-BgbTo1rM.js";import"./ToolbarRootContext-BM7iC6VN.js";import"./getDisabledMountTransitionStyles-brOSu3I-.js";import"./getPseudoElementBounds-DqBxNzDr.js";import"./chevron-down-B52Hmy6V.js";import"./index-CdaZRfws.js";import"./error-BFLeOIbO.js";import"./BaseCbacBanner-DN_VBjDp.js";import"./makeExternalStore-Bw6HJp50.js";import"./Tooltip-CbYJzNWg.js";import"./PopoverPopup-B3ZeXY53.js";import"./debounce-CfJ7O41a.js";import"./useOsdkClient-DbRHoimk.js";import"./tick-qaJHrmvM.js";import"./DropdownField-CzUzhl01.js";import"./isEqual-1nX8sYVi.js";import"./withOsdkMetrics-lxs0PU1I.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
