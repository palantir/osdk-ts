import{f as p,j as e}from"./iframe-BsJOdbCL.js";import{O as i}from"./object-table-Dp1R9NCg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DxS_Velh.js";import"./Table-Daf9LopS.js";import"./index-BqujQTW3.js";import"./Dialog-BQfhl9fd.js";import"./cross-Bxqdiez_.js";import"./svgIconContainer-CrnbMK0b.js";import"./useBaseUiId-CB5lNuw3.js";import"./InternalBackdrop-B2GNz5hu.js";import"./composite-CaVgyQab.js";import"./index-CEwR0XXE.js";import"./index-rSFhfOaH.js";import"./index-D_l1l0Yv.js";import"./useEventCallback-BINgInB_.js";import"./SkeletonBar-CeSQZW6w.js";import"./LoadingCell-D9LiPaaJ.js";import"./ColumnConfigDialog-nFVX_AzW.js";import"./DraggableList-Bb6he5CK.js";import"./search-DGRADUpj.js";import"./Input-BYGlPWDj.js";import"./useControlled-7DT6e4WZ.js";import"./Button-CWQ0OGf8.js";import"./small-cross-D1GEAGXQ.js";import"./ActionButton-JWlqJiJ4.js";import"./Checkbox-HV55hq3D.js";import"./useValueChanged-T_IVy1TV.js";import"./CollapsiblePanel-DMdta-mT.js";import"./MultiColumnSortDialog-yapUVthL.js";import"./MenuTrigger-jQfAwnOD.js";import"./CompositeItem-BS607TGd.js";import"./ToolbarRootContext-DI-YguYW.js";import"./getDisabledMountTransitionStyles-DqSxt_J-.js";import"./getPseudoElementBounds-CXXR7gCg.js";import"./chevron-down-CLIxImQx.js";import"./index-BwHn30HN.js";import"./error-Btl7YeDY.js";import"./BaseCbacBanner-Mp7AFB5Z.js";import"./makeExternalStore-DWYVyprO.js";import"./Tooltip-cqHh73tY.js";import"./PopoverPopup-BGpU1k4a.js";import"./debounce-MidBPb8y.js";import"./useOsdkClient-CHvyPAtQ.js";import"./tick-DnQLWeom.js";import"./DropdownField-BBHxtCFQ.js";import"./isEqual-DEGlTRmV.js";import"./withOsdkMetrics-DV_LS9FP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
