import{f as p,j as e}from"./iframe-BAjgPtEd.js";import{O as i}from"./object-table-BGE3lmLd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CvSpShLn.js";import"./Table-uO2bG5NP.js";import"./index-DkQET497.js";import"./Dialog-CzVvxDJ1.js";import"./cross-Zmf20Klh.js";import"./svgIconContainer-RrdsKFgG.js";import"./useBaseUiId-QgJXrsod.js";import"./InternalBackdrop-DVevY0e1.js";import"./composite-17xRguTl.js";import"./index-2jadBPxc.js";import"./index-DNkRyEMq.js";import"./index-CpXxZpck.js";import"./useEventCallback-TLq2luMM.js";import"./SkeletonBar-Cjk3uSES.js";import"./LoadingCell-D1aWb7Nd.js";import"./ColumnConfigDialog-Bjak5h1P.js";import"./DraggableList-DVFdr1ln.js";import"./search-moMGOLYA.js";import"./Input-BkIr6Cv-.js";import"./useControlled-DSQPO38y.js";import"./Button-7st_Ze6e.js";import"./small-cross-jzbeAole.js";import"./ActionButton-lEBAIWe4.js";import"./Checkbox-DwmUbSNt.js";import"./useValueChanged-iTC_WZuQ.js";import"./CollapsiblePanel-CrYZSgVe.js";import"./MultiColumnSortDialog-BujVVTIE.js";import"./MenuTrigger-Di0nR9__.js";import"./CompositeItem-9sostI2N.js";import"./ToolbarRootContext-DYBHmzGt.js";import"./getDisabledMountTransitionStyles-BxkbLjPv.js";import"./getPseudoElementBounds-knK5p6iP.js";import"./chevron-down-C_c1RpTk.js";import"./index-BC-EQLUC.js";import"./error-BPyKBfp3.js";import"./BaseCbacBanner-5kzGYKN7.js";import"./makeExternalStore-ucFYf-xR.js";import"./Tooltip-D6v0Q2e4.js";import"./isObject-BIkKAW4r.js";import"./debounce-DYx6ReB0.js";import"./useOsdkClient-BCGm5mz_.js";import"./tick-BykmFIBb.js";import"./DropdownField-Dd_PGUOx.js";import"./isEqual-DvSExQkd.js";import"./_baseIsEqual-CBo-f9pi.js";import"./withOsdkMetrics-CitYO8jf.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
