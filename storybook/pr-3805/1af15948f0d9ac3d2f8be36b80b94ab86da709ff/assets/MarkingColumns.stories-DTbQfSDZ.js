import{f as p,j as e}from"./iframe-CLumNID0.js";import{O as i}from"./object-table-DLcdYrfg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dz-GKNZ3.js";import"./Table-BD70MMX1.js";import"./index-DKU1K2_w.js";import"./Dialog-C-vWojNb.js";import"./cross-D2EPxtxs.js";import"./svgIconContainer-CPoSZbgC.js";import"./useBaseUiId-Bh-y6B9l.js";import"./InternalBackdrop-BIVaWud6.js";import"./composite-BcZGRwv5.js";import"./index-CVKRWWtF.js";import"./index-BZx9EN2X.js";import"./index-CqEKhfCt.js";import"./useEventCallback-DmAk5Nvb.js";import"./SkeletonBar-Cg4i2Eky.js";import"./LoadingCell-pTieUBV_.js";import"./ColumnConfigDialog-CHH6dhJt.js";import"./DraggableList-Cht41XrX.js";import"./search-DLeM-Fzk.js";import"./Input-B4Ein_ID.js";import"./useControlled-CAmMAraC.js";import"./isEqual-DgAnO35B.js";import"./isObject-BQdnS6rT.js";import"./Button-CBLB_2Qn.js";import"./ActionButton-ubYiUC_C.js";import"./Checkbox-Bjs8_wlf.js";import"./useValueChanged-53h7i9dd.js";import"./CollapsiblePanel-B1lI3eRJ.js";import"./MultiColumnSortDialog-DXw6tgQ9.js";import"./MenuTrigger-NPeyU7rU.js";import"./CompositeItem-CO8dmy82.js";import"./ToolbarRootContext-ldJ0ppJC.js";import"./getDisabledMountTransitionStyles-cNfoKVbW.js";import"./getPseudoElementBounds-DiLLOldJ.js";import"./chevron-down-CS76UfJi.js";import"./index-cZ7ucSab.js";import"./error-DDoBRt2_.js";import"./BaseCbacBanner-BN-MpSnO.js";import"./makeExternalStore-CkYrcdla.js";import"./Tooltip-D54JRXPt.js";import"./PopoverPopup-iQufl1us.js";import"./toNumber-dmoB_w4W.js";import"./useOsdkClient-DETgLlTn.js";import"./tick-CZCe4N3w.js";import"./DropdownField-7ALzCTeZ.js";import"./withOsdkMetrics-jJjprDjm.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
