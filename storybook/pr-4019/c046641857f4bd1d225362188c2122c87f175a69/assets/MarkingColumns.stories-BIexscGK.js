import{f as p,j as e}from"./iframe-BTufhzDU.js";import{O as i}from"./object-table-CCtZX51e.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-18tKsGVi.js";import"./Table-BytxhvGb.js";import"./index-Bgh_kCmT.js";import"./Dialog-C9s3lFhW.js";import"./cross-CDJmthjs.js";import"./svgIconContainer-CIDYFOR4.js";import"./useBaseUiId-B_rOieJo.js";import"./InternalBackdrop-BOulsSWB.js";import"./composite-C_GDjy5Q.js";import"./index-COZLl5wP.js";import"./index-B-UiCFnv.js";import"./index-D_PI1Th3.js";import"./useEventCallback-D-COXZHZ.js";import"./SkeletonBar-ymkmzl6c.js";import"./LoadingCell-DYZ88Ngb.js";import"./ColumnConfigDialog-CMRAL8K2.js";import"./DraggableList-CSkdx2wi.js";import"./search-DSjsSTcq.js";import"./Input-GDvhao2V.js";import"./useControlled-B8odZqt5.js";import"./Button-C08Dl8zL.js";import"./small-cross-DeBGztGD.js";import"./ActionButton-CDYSucfC.js";import"./Checkbox-Byh7Dyfc.js";import"./useValueChanged-yHO5JJpr.js";import"./CollapsiblePanel-DnLCtJrZ.js";import"./MultiColumnSortDialog-DHZpgmw8.js";import"./MenuTrigger-C7Fb3nhC.js";import"./CompositeItem-C2mdT24u.js";import"./ToolbarRootContext-c-VxwH3T.js";import"./getDisabledMountTransitionStyles-CJ4mZ_K7.js";import"./getPseudoElementBounds-BRhWDMTt.js";import"./chevron-down-CqOeUkb7.js";import"./index-DEr9UFjH.js";import"./error-DOFx9qT5.js";import"./BaseCbacBanner-52v7dT8q.js";import"./makeExternalStore-CzdIOkHP.js";import"./Tooltip-CqNQQfxr.js";import"./PopoverPopup-vY6UzFEA.js";import"./debounce-BhoGA986.js";import"./useOsdkClient-tOUmwv_4.js";import"./tick-DEzBGa0_.js";import"./DropdownField-Y24yrVFb.js";import"./isEqual-jP6H4NT-.js";import"./withOsdkMetrics-BNGLvviV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
