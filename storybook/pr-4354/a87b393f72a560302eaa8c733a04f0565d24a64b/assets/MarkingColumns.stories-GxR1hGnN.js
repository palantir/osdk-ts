import{f as p,j as e}from"./iframe-CMoZd53O.js";import{O as i}from"./object-table-B64XDPLb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bvb7-fL5.js";import"./Table-D89PqbJQ.js";import"./index-BRB1GWD7.js";import"./Dialog-DxzEyTMa.js";import"./cross-CaFf6aAK.js";import"./svgIconContainer-SBUhRCLt.js";import"./useBaseUiId-Qhb38DP0.js";import"./InternalBackdrop-CI4NflJZ.js";import"./composite-ltKATKpa.js";import"./index-D19nvIzc.js";import"./index-C8cm2zeY.js";import"./index-r2odiPSn.js";import"./useEventCallback-DmmmsQD4.js";import"./SkeletonBar-Bb_eLXH3.js";import"./LoadingCell-3HVcMKXE.js";import"./ColumnConfigDialog-BQ4r2gKD.js";import"./DraggableList-qUW-lzdm.js";import"./search-DX4bcztW.js";import"./Input-M24j8YBw.js";import"./useControlled-BxfFaTP6.js";import"./Button-BA8xBSZI.js";import"./small-cross-DxRqsWYU.js";import"./ActionButton-Da5m8m-t.js";import"./Checkbox-C8ThQ8oz.js";import"./useValueChanged-DM2V32Pl.js";import"./CollapsiblePanel-Dd0lgXNb.js";import"./MultiColumnSortDialog-BJ6kBSXR.js";import"./MenuTrigger-x8kLwg7c.js";import"./CompositeItem-Djz6OTaL.js";import"./ToolbarRootContext-dQ-vGvin.js";import"./getDisabledMountTransitionStyles-Dcud9JWR.js";import"./getPseudoElementBounds-D2DVxAFX.js";import"./chevron-down-BCXbJ6WN.js";import"./index-fQcFOjTC.js";import"./error-CjE7xCZl.js";import"./BaseCbacBanner-vACh-Wv-.js";import"./makeExternalStore-BA3QwJHc.js";import"./Tooltip-Bop0VDhD.js";import"./isObject-CebNioKg.js";import"./debounce-Dcl3ILN3.js";import"./useOsdkClient-Bd2KZ-42.js";import"./tick-Fvi9O2LX.js";import"./DropdownField-BmedYyFU.js";import"./isEqual-WnOi-718.js";import"./_baseIsEqual-FpV28sjW.js";import"./withOsdkMetrics-DG_FiXeR.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
