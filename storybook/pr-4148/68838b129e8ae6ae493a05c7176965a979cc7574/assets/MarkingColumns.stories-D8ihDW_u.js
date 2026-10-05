import{f as p,j as e}from"./iframe-axSYt9jb.js";import{O as i}from"./object-table-CJL2jtUP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-5clZkVbz.js";import"./Table-wLjkHKgy.js";import"./index-CLjZOMbp.js";import"./Dialog-Dx3n6IVE.js";import"./cross-BV4PjvJc.js";import"./svgIconContainer-CvOpWe1G.js";import"./useBaseUiId-CfampI5m.js";import"./InternalBackdrop-73Bsxdw-.js";import"./composite-G1l_cMk8.js";import"./index-DpGvCUsF.js";import"./index-6T9wCtxW.js";import"./index-DNBA_y2P.js";import"./useEventCallback-BY8e2U_8.js";import"./SkeletonBar-ClNzeAGH.js";import"./LoadingCell-L-L7aGt4.js";import"./ColumnConfigDialog-BIWB67f-.js";import"./DraggableList-BRobuV8K.js";import"./search-B_GR0Y0K.js";import"./Input-nobTN-9C.js";import"./useControlled-BSRNruV1.js";import"./Button-DBXdKKko.js";import"./small-cross-4Md-SBDX.js";import"./ActionButton-BPhZ5AgD.js";import"./Checkbox-CFxX--nm.js";import"./useValueChanged-BLlZH5mo.js";import"./CollapsiblePanel-Dmb31jh2.js";import"./MultiColumnSortDialog-D4YjYgTK.js";import"./MenuTrigger-BRfJLqNl.js";import"./CompositeItem-E4JqZHrS.js";import"./ToolbarRootContext-HNR9-LxP.js";import"./getDisabledMountTransitionStyles-5OnvXmo8.js";import"./getPseudoElementBounds-Bw-YTuG9.js";import"./chevron-down-BijfbkW5.js";import"./index-iV2cA45t.js";import"./error-dOvZleMr.js";import"./BaseCbacBanner-D9H1tQlA.js";import"./makeExternalStore-7VGeqAOs.js";import"./Tooltip-CqT7nzyV.js";import"./PopoverPopup-Smoy6HlE.js";import"./debounce-eexPevCv.js";import"./useOsdkClient-DIUBL3TL.js";import"./tick-BUmA3zHD.js";import"./DropdownField-CLQ_cIrg.js";import"./isEqual-xmdt4oBy.js";import"./withOsdkMetrics-DSBcYRdu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
