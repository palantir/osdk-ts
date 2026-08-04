import{f as p,j as e}from"./iframe-eW0Hkx5D.js";import{O as i}from"./object-table-BfM-RhWz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BrSVUlNp.js";import"./Table-DJEveXkn.js";import"./index-D2RKhBA_.js";import"./Dialog-wzBp4l1t.js";import"./cross-BDzkJdpr.js";import"./svgIconContainer-DncqIZzb.js";import"./useBaseUiId-DF1sZBey.js";import"./InternalBackdrop-iYnFgdG3.js";import"./composite-usGAMPIR.js";import"./index-el9I9AU6.js";import"./index-DxrGtqe2.js";import"./index-Ce6kNSeo.js";import"./useEventCallback-B4Mnv5M-.js";import"./SkeletonBar-C5_iPS56.js";import"./LoadingCell-9a3BgmQe.js";import"./ColumnConfigDialog-DnbMGILk.js";import"./DraggableList-CkY-PQrW.js";import"./search-Uy7nbnTV.js";import"./Input-D6VOqKfH.js";import"./useControlled-DyHt7C5v.js";import"./isEqual-CnInsNgD.js";import"./isObject-Bfk74yGT.js";import"./Button-COXaioI0.js";import"./ActionButton-DrmAvEU8.js";import"./Checkbox-BcIymDaH.js";import"./useValueChanged-DfVz66Q7.js";import"./CollapsiblePanel-6tYRFBFM.js";import"./MultiColumnSortDialog-DdmowEKs.js";import"./MenuTrigger-DHcaFLQp.js";import"./CompositeItem-6Fe6wWN7.js";import"./ToolbarRootContext-BjqmUCcn.js";import"./getDisabledMountTransitionStyles-Bzmw5-JY.js";import"./getPseudoElementBounds-BquPH41g.js";import"./chevron-down-D8531Sp8.js";import"./index-Cw13LNzi.js";import"./error-EIPWSpKZ.js";import"./BaseCbacBanner-D-aN3uiT.js";import"./makeExternalStore-BTGS1fMn.js";import"./Tooltip-ivLdiLw3.js";import"./PopoverPopup-BwtdOo4G.js";import"./toNumber-DE3-i91E.js";import"./useOsdkClient-DPj6Xj16.js";import"./tick-2EgyxYOL.js";import"./DropdownField-Bc6nqXg7.js";import"./withOsdkMetrics-U1NMWhqT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
