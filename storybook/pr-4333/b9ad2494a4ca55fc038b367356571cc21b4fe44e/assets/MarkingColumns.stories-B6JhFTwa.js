import{f as p,j as e}from"./iframe-CQFC4dx4.js";import{O as i}from"./object-table-Dnv0ViWy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-JcY_IPoe.js";import"./Table-BTK2n7nU.js";import"./index-Cspojgcw.js";import"./Dialog-BBd3TNav.js";import"./cross-DOs9H1e3.js";import"./svgIconContainer-BKBde2aY.js";import"./useBaseUiId-Dc6nK4KF.js";import"./InternalBackdrop-p5Nji8FI.js";import"./composite-7q0vYS_p.js";import"./index-P5yCg6P1.js";import"./index-C4XVD7Cr.js";import"./index-DJ2zeZf_.js";import"./useEventCallback-Dl77xwkN.js";import"./SkeletonBar-ChRHj5aR.js";import"./LoadingCell-BvlFH3ka.js";import"./ColumnConfigDialog-DIjjncwE.js";import"./DraggableList-C7CbzhdC.js";import"./search-BU20I270.js";import"./Input-DXeuXn9d.js";import"./useControlled-BVb8ax9g.js";import"./Button-CcSga4fz.js";import"./small-cross-ikuTq--X.js";import"./ActionButton-BtWiE4im.js";import"./Checkbox-CJvTu61c.js";import"./useValueChanged-CeSGtFUw.js";import"./CollapsiblePanel-DGJbWxdi.js";import"./MultiColumnSortDialog-Czv1TaUU.js";import"./MenuTrigger-NY2NuTUy.js";import"./CompositeItem-Don4IZ7P.js";import"./ToolbarRootContext-Bi5DI-Ar.js";import"./getDisabledMountTransitionStyles-BKOCz1MI.js";import"./getPseudoElementBounds-D0fP0qz1.js";import"./chevron-down-giF0vKbh.js";import"./index-xDMkfL05.js";import"./error-CkMA_OFf.js";import"./BaseCbacBanner-CoZ29RCo.js";import"./makeExternalStore-BfZd500_.js";import"./Tooltip-DMkJ1Y0i.js";import"./PopoverPopup-DbpUO5Ur.js";import"./debounce-CsZvoLYJ.js";import"./useOsdkClient-BWxKj0GW.js";import"./tick-BMJ6Rzun.js";import"./DropdownField-DfsozA8n.js";import"./isEqual-Dxh7MnJY.js";import"./withOsdkMetrics-N-oYpdpA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
