import{f as p,j as e}from"./iframe-CM6PGdDe.js";import{O as i}from"./object-table-BNUYk56W.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D1fSyZoT.js";import"./Table-BRdRf5GH.js";import"./index-Bufk09qs.js";import"./Dialog-BQ-X74dR.js";import"./cross-YKaVQcDW.js";import"./svgIconContainer-CIrlyu8h.js";import"./useBaseUiId-DMGzivLa.js";import"./InternalBackdrop-0-UXKcoL.js";import"./composite-xrlucZDA.js";import"./index-ri1u8Qn4.js";import"./index-BAhrf8CJ.js";import"./index-CDUsmoFh.js";import"./useEventCallback-DW0JoJ0F.js";import"./SkeletonBar-DFjD6J69.js";import"./LoadingCell-BrMK9CtL.js";import"./ColumnConfigDialog-CLXHNx-K.js";import"./DraggableList-BqPGn7Lb.js";import"./search-BY_dMaVv.js";import"./Input-CW95l1_M.js";import"./useControlled-CnS9__rI.js";import"./isEqual-DMbnnFdH.js";import"./isObject-C9vkAka7.js";import"./Button-BgnXQklC.js";import"./ActionButton-DTDvv4Cx.js";import"./Checkbox-CUgYAGPH.js";import"./useValueChanged-CkU1VnjI.js";import"./CollapsiblePanel-CixrgWyH.js";import"./MultiColumnSortDialog-DmzhnwDq.js";import"./MenuTrigger-DxQrATrc.js";import"./CompositeItem-BtR2x_yZ.js";import"./ToolbarRootContext-B7F75xzl.js";import"./getDisabledMountTransitionStyles-w8EqFY88.js";import"./getPseudoElementBounds-Dx2hkedH.js";import"./chevron-down-DXMYU1sy.js";import"./index-CsmpaWCG.js";import"./error-CZyQ1xT9.js";import"./BaseCbacBanner-DCD0xxow.js";import"./makeExternalStore-Cew3RdoD.js";import"./Tooltip-BICdbK9r.js";import"./PopoverPopup-BzlEP8zh.js";import"./toNumber-C0s7vZ2r.js";import"./useOsdkClient-BhluDU-l.js";import"./tick-DlW3Bwgk.js";import"./DropdownField-DQlr0QqX.js";import"./withOsdkMetrics-xiZQ-Ys9.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
