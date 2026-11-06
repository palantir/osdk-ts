import{f as p,j as e}from"./iframe-gdP396qb.js";import{O as i}from"./object-table-BxXIpblp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C9uq-iVz.js";import"./Table-gA3Wz3zS.js";import"./index-ClCZ0Ati.js";import"./Dialog-BQKYYTBz.js";import"./cross-DtCUEBMv.js";import"./svgIconContainer-afKcLYb0.js";import"./useBaseUiId-C_ToupKC.js";import"./InternalBackdrop-Dq6m4vJr.js";import"./composite-BvrmChzz.js";import"./index-BNFLba0z.js";import"./index-mgQPQKNR.js";import"./index-BZUsCMPC.js";import"./useEventCallback-DCdboZtN.js";import"./SkeletonBar-Blsmqup6.js";import"./LoadingCell-CMIsHrqu.js";import"./ColumnConfigDialog-B4dsqwP-.js";import"./DraggableList-DUngJXQK.js";import"./search-CRn0JbZd.js";import"./Input-DWlBDhXd.js";import"./useControlled-D2ey04Mp.js";import"./Button-CTlmrId0.js";import"./small-cross-X3ECwxK6.js";import"./ActionButton-Ckf3gmBM.js";import"./Checkbox-D_JVC0Qk.js";import"./useValueChanged-DSiA270H.js";import"./CollapsiblePanel-DHW97HGw.js";import"./MultiColumnSortDialog-BqMGh898.js";import"./MenuTrigger-DXz0NnsQ.js";import"./CompositeItem-CmcqEdwc.js";import"./ToolbarRootContext-txczp7dw.js";import"./getDisabledMountTransitionStyles-tj4MPdJt.js";import"./getPseudoElementBounds-skNxDQry.js";import"./chevron-down-D4IdPQsy.js";import"./index-DchLPEO5.js";import"./error-CUjlToFo.js";import"./BaseCbacBanner-BDs_xxej.js";import"./makeExternalStore-Cq8wmohV.js";import"./Tooltip-DxHEdFsh.js";import"./isObject-CpaAk3bR.js";import"./debounce-dYJtqIeY.js";import"./useOsdkClient-B58tmibE.js";import"./tick-Cx1Dvj4u.js";import"./DropdownField-B2Q-_o7O.js";import"./isEqual-BfFU6RDj.js";import"./_baseIsEqual-C2jmvlYE.js";import"./withOsdkMetrics-CDl4GesU.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
