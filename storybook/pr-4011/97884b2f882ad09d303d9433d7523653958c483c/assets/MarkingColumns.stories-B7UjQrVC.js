import{f as p,j as e}from"./iframe-EfiBoZIR.js";import{O as i}from"./object-table-_-j2bQLx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D_Wykq9t.js";import"./Table-C_CGpyWA.js";import"./index-0eA-Cgh_.js";import"./Dialog-vs1IxkDw.js";import"./cross-BOeJXaLq.js";import"./svgIconContainer-Daui2Dw7.js";import"./useBaseUiId-cd03ijFK.js";import"./InternalBackdrop-BzXWuiQX.js";import"./composite-CC9kaygZ.js";import"./index-CaF7GUuf.js";import"./index-B7OwTQ75.js";import"./index-QLAugMY9.js";import"./useEventCallback-BLFhQYGq.js";import"./SkeletonBar-RRAm9W8p.js";import"./LoadingCell-C2ulrMWC.js";import"./ColumnConfigDialog-CGmVT9TB.js";import"./DraggableList-CMhSXHv7.js";import"./search-DW9KpidM.js";import"./Input-Bf8UFFCR.js";import"./useControlled-RgsLbGbj.js";import"./Button-WoBFNDMc.js";import"./small-cross-B5IfQiVk.js";import"./ActionButton-B7QgbfJ7.js";import"./Checkbox-Cmu3nVCT.js";import"./useValueChanged-DRM7hTnG.js";import"./CollapsiblePanel-B5r09xR-.js";import"./MultiColumnSortDialog-THzE8H3e.js";import"./MenuTrigger-D2n7tF1q.js";import"./CompositeItem-Bcq4203w.js";import"./ToolbarRootContext-VaUVpuNK.js";import"./getDisabledMountTransitionStyles-CMp4u3oX.js";import"./getPseudoElementBounds-D32SWUco.js";import"./chevron-down-Bjf9KWk2.js";import"./index-kHpZltIW.js";import"./error-CzXhBCLL.js";import"./BaseCbacBanner-CAMpKzDW.js";import"./makeExternalStore-DJM-d-Lr.js";import"./Tooltip-ClBCWMU5.js";import"./PopoverPopup-D88MF7O9.js";import"./debounce-DHoJk0fe.js";import"./useOsdkClient-Cm0A3DMr.js";import"./tick-B421wai_.js";import"./DropdownField-BsrbnwCh.js";import"./isEqual-C3btcwZk.js";import"./withOsdkMetrics-EFBhc3BK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
