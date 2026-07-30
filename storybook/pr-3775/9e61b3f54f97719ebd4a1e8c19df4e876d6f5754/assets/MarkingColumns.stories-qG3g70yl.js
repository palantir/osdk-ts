import{f as p,j as e}from"./iframe-ZAeU3zkK.js";import{O as i}from"./object-table-BI32PtsP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DFsW7uwK.js";import"./Table-l3mPBzd1.js";import"./index-C9bCg_D0.js";import"./Dialog-Btj1QDjF.js";import"./cross-ItoF_QFP.js";import"./svgIconContainer-kZIk52CD.js";import"./useBaseUiId-Cr86WIIa.js";import"./InternalBackdrop-lV80e5CV.js";import"./composite-DFfGy7b5.js";import"./index-BrY0sG19.js";import"./index-BSgExDm2.js";import"./index-B_QXRGZh.js";import"./useEventCallback-D1zmtjsN.js";import"./SkeletonBar-ke7cILwX.js";import"./LoadingCell-q8CMiXdE.js";import"./ColumnConfigDialog-CtJCCHtI.js";import"./DraggableList-BDeEbSFQ.js";import"./search-DGJLlzUF.js";import"./Input-DZJFdIf0.js";import"./useControlled-CsDf-xSS.js";import"./isEqual-B3qe3pS1.js";import"./isObject-DRgm0nAf.js";import"./Button-btiulsx-.js";import"./ActionButton-swfO8HME.js";import"./Checkbox-BaVNDqn9.js";import"./useValueChanged-BqnyuSl8.js";import"./CollapsiblePanel-BwEoPyuP.js";import"./MultiColumnSortDialog-C9IFmKTT.js";import"./MenuTrigger-Uiz0PELH.js";import"./CompositeItem-B-J0xggi.js";import"./ToolbarRootContext-6UgAqfrb.js";import"./getDisabledMountTransitionStyles-KElE6z_O.js";import"./getPseudoElementBounds-BeDlRbET.js";import"./chevron-down-D_k3Y51h.js";import"./index-CjDYZjtC.js";import"./error-MpDB7OgY.js";import"./BaseCbacBanner-BEF2jKkB.js";import"./makeExternalStore-CLF-6_HY.js";import"./Tooltip-h2W3NXYk.js";import"./PopoverPopup-COPtTg9S.js";import"./toNumber-CEti0auR.js";import"./useOsdkClient-CACsolCb.js";import"./tick-CK1j0r_S.js";import"./DropdownField-D279pPiY.js";import"./withOsdkMetrics-D_HYVVwC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
