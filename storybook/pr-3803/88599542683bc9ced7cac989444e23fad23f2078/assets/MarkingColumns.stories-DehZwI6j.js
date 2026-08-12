import{f as p,j as e}from"./iframe-DNE97pGZ.js";import{O as i}from"./object-table-Ch4_sTh9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BahKFp3m.js";import"./Table-BD9ncpKN.js";import"./index-Bp-5OsF-.js";import"./Dialog-Cm_ILZ3B.js";import"./cross-Dx5ZxZuM.js";import"./svgIconContainer-CRfNt06m.js";import"./useBaseUiId-Cp65BJC6.js";import"./InternalBackdrop-BxL756Oz.js";import"./composite-CzLwjv4f.js";import"./index-Dp0A1Fy8.js";import"./index-D5b6Elzx.js";import"./index-BAUv7mXt.js";import"./useEventCallback-BaQLMphi.js";import"./SkeletonBar-Co-Wxcoj.js";import"./LoadingCell-BBXYQi2G.js";import"./ColumnConfigDialog-BJA0l5H2.js";import"./DraggableList-CwyZFsMX.js";import"./search-BNuo8zTf.js";import"./Input-BzjIqYHe.js";import"./useControlled-B0ujXEQq.js";import"./isEqual-D4o4vl7l.js";import"./isObject-DMCyQLYZ.js";import"./Button-DHAmSgJm.js";import"./ActionButton-C282nnu4.js";import"./Checkbox-DhzT-hSX.js";import"./useValueChanged-CY7hmMGH.js";import"./CollapsiblePanel-BcSoQpGZ.js";import"./MultiColumnSortDialog-Cy2FrPls.js";import"./MenuTrigger-CW7TDS3C.js";import"./CompositeItem-Bs6wEv0j.js";import"./ToolbarRootContext-DBqoJQeM.js";import"./getDisabledMountTransitionStyles-DrWPn2zD.js";import"./getPseudoElementBounds-BeRBlX2G.js";import"./chevron-down-DzX2K_Xp.js";import"./index-BrQsf66R.js";import"./error-Cc9LB0hd.js";import"./BaseCbacBanner-aK3rWsBf.js";import"./makeExternalStore-BUUHdmfH.js";import"./Tooltip-1mDazhLH.js";import"./PopoverPopup-XyeYTvL6.js";import"./toNumber-CL_SRDQ3.js";import"./useOsdkClient-BrXtYIpC.js";import"./tick-DKvNgte2.js";import"./DropdownField-BkAFc6vL.js";import"./withOsdkMetrics-B6lPkcGy.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
