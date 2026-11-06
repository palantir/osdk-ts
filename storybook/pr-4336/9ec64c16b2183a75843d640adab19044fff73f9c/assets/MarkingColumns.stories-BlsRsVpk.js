import{f as p,j as e}from"./iframe-29gR9XhZ.js";import{O as i}from"./object-table-B_Rv7_z1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DlT-mGxO.js";import"./Table-8XFDe7Kt.js";import"./index-CrsEpx0M.js";import"./Dialog-CjGGuHXe.js";import"./cross-CuUhPQxd.js";import"./svgIconContainer-B81IYS8r.js";import"./useBaseUiId-s8FPLP5u.js";import"./InternalBackdrop-BprBEkhL.js";import"./composite-C-osCGVl.js";import"./index-DdlQpJHG.js";import"./index-BVNMC1S5.js";import"./index-Cch7mQ8a.js";import"./useEventCallback-DBhYM9Hy.js";import"./SkeletonBar-C37AZzuf.js";import"./LoadingCell-CwQHZBtp.js";import"./ColumnConfigDialog-aevR0De2.js";import"./DraggableList-D3CO-Yut.js";import"./search-DAxbo9jb.js";import"./Input-5lsFnUBK.js";import"./useControlled-DH4JcH5f.js";import"./Button-DYk_F-qJ.js";import"./small-cross-B-y2x7T0.js";import"./ActionButton-DBsW9PSK.js";import"./Checkbox-DVxcG_YL.js";import"./useValueChanged-B5seCtbl.js";import"./CollapsiblePanel-CQQxgaFT.js";import"./MultiColumnSortDialog-ClDrcpFd.js";import"./MenuTrigger-B8Mb7Vam.js";import"./CompositeItem-7um1p8gd.js";import"./ToolbarRootContext-Vw1tC3hX.js";import"./getDisabledMountTransitionStyles-D9EBmjTC.js";import"./getPseudoElementBounds-BV3Dd7LZ.js";import"./chevron-down-C2ebRgMi.js";import"./index-DG-eMoMu.js";import"./error-C8ioQ8xA.js";import"./BaseCbacBanner-CiBPlSfz.js";import"./makeExternalStore-CAnIClXP.js";import"./Tooltip-BXN6Rclk.js";import"./PopoverPopup-CIsYphuH.js";import"./debounce-DxHc7Ker.js";import"./useOsdkClient-CwzE6u8u.js";import"./tick-T4_w1PlJ.js";import"./DropdownField-BNL8L0v5.js";import"./isEqual-0bZjIzta.js";import"./withOsdkMetrics-B8queKnp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
