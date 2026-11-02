import{f as p,j as e}from"./iframe-Yw9TZb4u.js";import{O as i}from"./object-table-DaX2y8Ir.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D_xjOrEt.js";import"./Table-CpavOXJj.js";import"./index-8aWnL4Lo.js";import"./Dialog-D2wMKlyn.js";import"./cross-DTT8xN_V.js";import"./svgIconContainer-BIiUvxcP.js";import"./useBaseUiId-BO9crViw.js";import"./InternalBackdrop-B1PWndwc.js";import"./composite-BNHMrFyE.js";import"./index-kxnQI0Cl.js";import"./index-DC5PMXgz.js";import"./index-CJnR7cM_.js";import"./useEventCallback-BiHOi3SY.js";import"./SkeletonBar-3dZxATgt.js";import"./LoadingCell-3c9bVrHn.js";import"./ColumnConfigDialog-BtuzXin0.js";import"./DraggableList-Cmwd3_Yn.js";import"./search-BQQODEli.js";import"./Input-CSG_diAL.js";import"./useControlled-BzIkjd0M.js";import"./Button-C1MrjwiB.js";import"./small-cross-DkpqNIrR.js";import"./ActionButton-wy0NESyC.js";import"./Checkbox-DJL0SHLK.js";import"./useValueChanged-CulitGOu.js";import"./CollapsiblePanel-DTI6vdFY.js";import"./MultiColumnSortDialog-mkWalreF.js";import"./MenuTrigger-DKA7SRF7.js";import"./CompositeItem-BD6lDA45.js";import"./ToolbarRootContext-BU6uR7dz.js";import"./getDisabledMountTransitionStyles-8x2Gf4ix.js";import"./getPseudoElementBounds-DuGEZlai.js";import"./chevron-down-oj878TNR.js";import"./index-CibthTqO.js";import"./error-BrfIeh_k.js";import"./BaseCbacBanner-BLH2XH0j.js";import"./makeExternalStore-C9-V4S7e.js";import"./Tooltip-DMJgRtRS.js";import"./PopoverPopup-5dJ4xSYR.js";import"./debounce-BfGqlc0J.js";import"./useOsdkClient-ClnO36Ir.js";import"./tick-8C35Ay4D.js";import"./DropdownField-Dzx1y_MO.js";import"./isEqual-D6Dds2Xo.js";import"./withOsdkMetrics-ChgDZqBx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
