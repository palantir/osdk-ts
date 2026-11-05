import{f as p,j as e}from"./iframe-D7hanWlH.js";import{O as i}from"./object-table-B9BSBSuY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CO6dxj1b.js";import"./Table-DnfTO7tD.js";import"./index-D-fAM26k.js";import"./Dialog-DykZ-GDW.js";import"./cross-Y5gvP3Fl.js";import"./svgIconContainer-DvWstcAL.js";import"./useBaseUiId-Bu7z_xTH.js";import"./InternalBackdrop-BFQj_iFn.js";import"./composite-D9lkXcst.js";import"./index-D_yrCdEG.js";import"./index-vVHHs4bi.js";import"./index-IdV4lxqA.js";import"./useEventCallback-BbTn_ynB.js";import"./SkeletonBar-DmFGXpbg.js";import"./LoadingCell-BvBSbo6-.js";import"./ColumnConfigDialog-B-cqY6bi.js";import"./DraggableList-BDoSemfa.js";import"./search-DSRtq581.js";import"./Input-Cdf8UtKg.js";import"./useControlled-i2ARdjw-.js";import"./Button-BnMNzQq6.js";import"./small-cross-B6GvYH7n.js";import"./ActionButton-C66CjuoN.js";import"./Checkbox-D6sv6PUT.js";import"./useValueChanged-oGOkIYmK.js";import"./CollapsiblePanel-pB8a9YNp.js";import"./MultiColumnSortDialog-BbVtWN8m.js";import"./MenuTrigger-BSuArtnh.js";import"./CompositeItem-tDOcOAJb.js";import"./ToolbarRootContext-Dx6PUY5o.js";import"./getDisabledMountTransitionStyles-DWFqeBfp.js";import"./getPseudoElementBounds-DqLcKxx9.js";import"./chevron-down-Cjgkim-K.js";import"./index-Dt79Win6.js";import"./error-CzhlMkp_.js";import"./BaseCbacBanner-BcxhCrYW.js";import"./makeExternalStore-UI8ZJEmg.js";import"./Tooltip-Bb8Pjuc6.js";import"./isObject-Ch3YWkBe.js";import"./debounce-mHKnM1xi.js";import"./useOsdkClient-BSYzdils.js";import"./tick-CdQvoyle.js";import"./DropdownField-D4ARGNHY.js";import"./isEqual-CNmW_1dD.js";import"./_baseIsEqual-TTSxSqVi.js";import"./withOsdkMetrics-BemcFffG.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
