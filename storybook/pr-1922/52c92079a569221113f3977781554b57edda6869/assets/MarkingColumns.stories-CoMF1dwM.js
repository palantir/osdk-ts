import{f as p,j as e}from"./iframe-QDaBOsra.js";import{O as i}from"./object-table-BKqIvi-i.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-jyefFMUr.js";import"./Table-CjizmD6_.js";import"./index-D2vpxCu8.js";import"./Dialog-NOed3MXB.js";import"./cross-iJjTw1OM.js";import"./svgIconContainer-CvV-2N9f.js";import"./useBaseUiId-DjqNfgzR.js";import"./InternalBackdrop-Dg-ePZWC.js";import"./composite-BAT7e_UE.js";import"./index-BlPi3lSf.js";import"./index-DKL8AmRe.js";import"./index-BqZA6QHe.js";import"./useEventCallback-BjGyJBWU.js";import"./SkeletonBar-fZmLCcbb.js";import"./LoadingCell-BZuObAeC.js";import"./ColumnConfigDialog-BggjWMt9.js";import"./DraggableList-y-d7ko1t.js";import"./search-kqukl_jl.js";import"./Input-rRK-xJ54.js";import"./useControlled-FhAUZFAL.js";import"./Button-DkAvArvY.js";import"./small-cross--x_z2UwR.js";import"./ActionButton-DqO5e5ax.js";import"./Checkbox-DyooxNyF.js";import"./useValueChanged-CssPl65C.js";import"./CollapsiblePanel-DdjBa-EN.js";import"./MultiColumnSortDialog-BzWsNy6c.js";import"./MenuTrigger-Bwpm1z4T.js";import"./CompositeItem-BZpx2jPT.js";import"./ToolbarRootContext-C6_BvipF.js";import"./getDisabledMountTransitionStyles-BexZtf_H.js";import"./getPseudoElementBounds-DkaQLMrl.js";import"./chevron-down-B1cL2irb.js";import"./index-BpZcid6-.js";import"./error-DIA5xUfH.js";import"./BaseCbacBanner-DrXTtVeG.js";import"./makeExternalStore-CTZ1pZcF.js";import"./Tooltip-BC3kcowS.js";import"./PopoverPopup-CVJvgmsF.js";import"./debounce-DCZQrZ2_.js";import"./useOsdkClient-BIlIYc3q.js";import"./tick-Dp13d1sN.js";import"./DropdownField-LTytfUX6.js";import"./isEqual-CmM27koz.js";import"./withOsdkMetrics-CaEkt7Mu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
