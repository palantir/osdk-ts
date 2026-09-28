import{f as p,j as e}from"./iframe-DzwZADhG.js";import{O as i}from"./object-table-Dwzpl75F.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D4CIUPhb.js";import"./Table-6dLVRPa5.js";import"./index-bPezx-Jx.js";import"./Dialog-Du3oLVzS.js";import"./cross-CyC5zJCO.js";import"./svgIconContainer-BcCLnS_P.js";import"./useBaseUiId-DCeowPEc.js";import"./InternalBackdrop-7GfKZLnu.js";import"./composite-C5aR63In.js";import"./index-C3Zy7bdQ.js";import"./index-60H3em-G.js";import"./index-fs5uzBtp.js";import"./useEventCallback-BgizjaWh.js";import"./SkeletonBar-BqhJV5fe.js";import"./LoadingCell-C3mdCADn.js";import"./ColumnConfigDialog-BImV6QDz.js";import"./DraggableList-CL9k6jCW.js";import"./search-BQh3drJY.js";import"./Input-DGm0m1Rw.js";import"./useControlled-BKgOzc4N.js";import"./Button-C5a400vo.js";import"./small-cross-BntxIJHG.js";import"./ActionButton-C4IuHmgY.js";import"./Checkbox-lesEYiMr.js";import"./useValueChanged-DWY6JLGG.js";import"./CollapsiblePanel-B4Pk77Ax.js";import"./MultiColumnSortDialog-Er-0sFD2.js";import"./MenuTrigger-C-YFBDVp.js";import"./CompositeItem-Cis4rFWY.js";import"./ToolbarRootContext-DiUMk1ef.js";import"./getDisabledMountTransitionStyles-B_8U1y7w.js";import"./getPseudoElementBounds-7YMOYGeg.js";import"./chevron-down-CZ1AUZYm.js";import"./index-D8Hs_QlL.js";import"./error-CM-fSgTg.js";import"./BaseCbacBanner-CI6fVmW5.js";import"./makeExternalStore-BH_h44UZ.js";import"./Tooltip-Dz_U-nPI.js";import"./PopoverPopup-BYq4gPbC.js";import"./debounce-CBG8-OsC.js";import"./useOsdkClient-Bcfw9ABs.js";import"./tick-cw0PuptU.js";import"./DropdownField-thhnnQzj.js";import"./isEqual-BfQd3P5k.js";import"./withOsdkMetrics-BnNJyFKx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
