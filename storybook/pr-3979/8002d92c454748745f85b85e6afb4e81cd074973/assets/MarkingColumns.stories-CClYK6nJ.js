import{f as p,j as e}from"./iframe-Ba48eLUQ.js";import{O as i}from"./object-table-Cc5o22dm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BcQJohn9.js";import"./Table-DasDiIGO.js";import"./index-Biav_Ly4.js";import"./Dialog-BkRI-Gh0.js";import"./cross-CZ3u7Zqk.js";import"./svgIconContainer-Dsy6R3Hn.js";import"./useBaseUiId-BqKeDKog.js";import"./InternalBackdrop-mjZPCf-I.js";import"./composite--55ShNCx.js";import"./index-mue2Ao73.js";import"./index-D49E4xW3.js";import"./index-Btzr8NAV.js";import"./useEventCallback-DAMcGMad.js";import"./SkeletonBar-BU-AQLAZ.js";import"./LoadingCell-Cbi1YDrG.js";import"./ColumnConfigDialog-CoMhZSPA.js";import"./DraggableList-CxwNGygN.js";import"./search-6WIx7b7M.js";import"./Input-J_HicyGE.js";import"./useControlled-Ci9ghEUN.js";import"./Button-DS_jYoZ2.js";import"./small-cross-8kU3x62z.js";import"./ActionButton-DL_leNOj.js";import"./Checkbox-D6r5q9c3.js";import"./useValueChanged-CEkuFjgw.js";import"./CollapsiblePanel-wpg_ooMH.js";import"./MultiColumnSortDialog-C09lEdUu.js";import"./MenuTrigger-CZ9J3ztO.js";import"./CompositeItem-vF0jzrVV.js";import"./ToolbarRootContext-yUsbv0N5.js";import"./getDisabledMountTransitionStyles-A33dEllz.js";import"./getPseudoElementBounds-COwLqwqt.js";import"./chevron-down-Dcg5i-52.js";import"./index-D7LGUR6n.js";import"./error-BM0l7F7K.js";import"./BaseCbacBanner-B7P9dWFP.js";import"./makeExternalStore-CTyMzwZg.js";import"./Tooltip-lY5sugsw.js";import"./PopoverPopup-BneJBWwl.js";import"./debounce-C6KffEiQ.js";import"./useOsdkClient-Bo-oAXnj.js";import"./tick-fCO77waV.js";import"./DropdownField-Bwr07i8-.js";import"./isEqual-D13mUSuI.js";import"./withOsdkMetrics-Cul3xOyv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
