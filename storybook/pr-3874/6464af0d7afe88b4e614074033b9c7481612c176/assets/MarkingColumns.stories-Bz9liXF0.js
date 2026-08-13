import{f as p,j as e}from"./iframe-BcorHIlW.js";import{O as i}from"./object-table-B4UCWN34.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BKVHm-mS.js";import"./Table-48TCEO5W.js";import"./index-B_6nd-ig.js";import"./Dialog-DAgFtXxB.js";import"./cross-Dc1AyHJB.js";import"./svgIconContainer-CELc8YnE.js";import"./useBaseUiId-BNEl6a46.js";import"./InternalBackdrop-CqIU_AG5.js";import"./composite-CnKbnVU6.js";import"./index-DJgr8Ve3.js";import"./index-D0G6bTH7.js";import"./index-DmDsZq4W.js";import"./useEventCallback-BYEh8Lbq.js";import"./SkeletonBar-BQXc3_7i.js";import"./LoadingCell-BUKaj-MN.js";import"./ColumnConfigDialog-Dhs_TrtO.js";import"./DraggableList-CxHrnm_O.js";import"./search-DFDm-vhN.js";import"./Input-BDlnjPS-.js";import"./useControlled-BLGT_C96.js";import"./Button-D2Dfqz9N.js";import"./small-cross-CdBaewXq.js";import"./ActionButton-DrT_2S6p.js";import"./Checkbox-DF42yLUz.js";import"./useValueChanged-D0_LNJKx.js";import"./CollapsiblePanel-B0ClWT18.js";import"./MultiColumnSortDialog-W7cLl08V.js";import"./MenuTrigger-D7x_HiMZ.js";import"./CompositeItem-DAtA6HT0.js";import"./ToolbarRootContext-Dnx5ruWW.js";import"./getDisabledMountTransitionStyles-HxwKF_Gp.js";import"./getPseudoElementBounds-BeqhPp8n.js";import"./chevron-down-CuN7D4lo.js";import"./index-CrslJJ0M.js";import"./error-CqYYLkEc.js";import"./BaseCbacBanner-BXOWAbH2.js";import"./makeExternalStore-BLgd-akh.js";import"./Tooltip-jSHec6Gx.js";import"./PopoverPopup-COUulOaZ.js";import"./debounce-Bdi5BoLl.js";import"./useOsdkClient-DeO7tP5S.js";import"./tick-CUL9CaAQ.js";import"./DropdownField-D1C-_OGE.js";import"./isEqual-BGVz6dle.js";import"./withOsdkMetrics-CeNDUVo3.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
