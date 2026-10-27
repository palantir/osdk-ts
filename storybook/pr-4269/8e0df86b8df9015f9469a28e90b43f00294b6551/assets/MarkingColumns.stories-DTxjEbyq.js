import{f as p,j as e}from"./iframe-CSjrP8vI.js";import{O as i}from"./object-table-CT8zBU9b.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cx2hoj0m.js";import"./Table-Bz2vcI-y.js";import"./index-CqYglBD0.js";import"./Dialog-ebHFZ4K-.js";import"./cross-Ds3xYnVZ.js";import"./svgIconContainer-B7BQRztY.js";import"./useBaseUiId-DcgW2BGe.js";import"./InternalBackdrop-DRh1UujG.js";import"./composite-CAXBU4pD.js";import"./index-BedFYm95.js";import"./index-BN7bp0b2.js";import"./index-B4CwIOCa.js";import"./useEventCallback-CRfAaycK.js";import"./SkeletonBar-CUZm-PKw.js";import"./LoadingCell-CLME_5DX.js";import"./ColumnConfigDialog-CjkSAnDu.js";import"./DraggableList-DDDC3Ohe.js";import"./search-BM_j1Cww.js";import"./Input-DG23LIw2.js";import"./useControlled-W118GxB4.js";import"./Button-nWxTMLuc.js";import"./small-cross-B5v1tapE.js";import"./ActionButton-DYIYoWW6.js";import"./Checkbox-C9mjcyeE.js";import"./useValueChanged-Bqlwrqtn.js";import"./CollapsiblePanel-B6tadX4-.js";import"./MultiColumnSortDialog-DF0ODZMw.js";import"./MenuTrigger-BR3Xx0z3.js";import"./CompositeItem-C2wpcQLE.js";import"./ToolbarRootContext-Skd8opG_.js";import"./getDisabledMountTransitionStyles-Cc4xA-eS.js";import"./getPseudoElementBounds-D0jv3We1.js";import"./chevron-down-xJOpychc.js";import"./index-v62Ii5_v.js";import"./error-Du9W1yMi.js";import"./BaseCbacBanner-BzKHkrOU.js";import"./makeExternalStore-DptFAV08.js";import"./Tooltip-Cg04CKbW.js";import"./PopoverPopup-BsQv3X8u.js";import"./debounce-BFRee1ws.js";import"./useOsdkClient-DS20s_-p.js";import"./tick-BEtFRrY5.js";import"./DropdownField-DG8Fepg7.js";import"./isEqual-D0FZ_3QJ.js";import"./withOsdkMetrics-sMcDJBip.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
