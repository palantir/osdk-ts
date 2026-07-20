import{f as p,j as e}from"./iframe-7IqfymhU.js";import{O as i}from"./object-table-BrXNgulh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-3r70WJzt.js";import"./Table-BE4zqMOw.js";import"./index-Cm0N0_fF.js";import"./Dialog-B70jK_Md.js";import"./cross-CpnSFL6t.js";import"./svgIconContainer-DWoceTOZ.js";import"./useBaseUiId-g3vrjln3.js";import"./InternalBackdrop-BErkyf6T.js";import"./composite-CUuxck-t.js";import"./index-CH4X5tDr.js";import"./index-DNc5N9FX.js";import"./index-DY325VA7.js";import"./useEventCallback-Ck08j8dq.js";import"./SkeletonBar-DoT6FxlK.js";import"./LoadingCell-DO3QJS_B.js";import"./ColumnConfigDialog-D9lS1CLB.js";import"./DraggableList-VvL2OpMA.js";import"./search-CvDLht4j.js";import"./Input-8mkLamyL.js";import"./useControlled-BleyXyWB.js";import"./isEqual-Bzve7X9q.js";import"./isObject-DSV3VS13.js";import"./Button-CWUDYsaf.js";import"./ActionButton-BQUSyNiT.js";import"./Checkbox-DrjxG0ps.js";import"./useValueChanged-B5eb_rAQ.js";import"./CollapsiblePanel-Ckew2SDO.js";import"./MultiColumnSortDialog-DskoIVFs.js";import"./MenuTrigger-DflVwF1Z.js";import"./CompositeItem-BFoAwlad.js";import"./ToolbarRootContext-KGDaSKUg.js";import"./getDisabledMountTransitionStyles-BkMZzGgl.js";import"./getPseudoElementBounds-BgQa4Fld.js";import"./chevron-down-BgmSLeIb.js";import"./index-1EYlksTG.js";import"./error-BA_egiUG.js";import"./BaseCbacBanner-CdIUyFhN.js";import"./makeExternalStore-gLuSpsoX.js";import"./Tooltip-BhgocwQM.js";import"./PopoverPopup-CGjSxRGg.js";import"./toNumber-HE_DMYV1.js";import"./useOsdkClient-Bv84VoCj.js";import"./tick-DHPMUimz.js";import"./DropdownField-DhLTQNIB.js";import"./withOsdkMetrics-DpAWZ3cs.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
