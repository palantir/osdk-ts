import{f as p,j as e}from"./iframe-C5NFvgiE.js";import{O as i}from"./object-table-Cg7a57bf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BC8VBrum.js";import"./Table-CqajLfYx.js";import"./index-EtmTyaay.js";import"./Dialog-9uBVf05K.js";import"./cross-DLjyYdWF.js";import"./svgIconContainer-B_PFiYn8.js";import"./useBaseUiId-CJ9Huyf7.js";import"./InternalBackdrop-D4cRPaZh.js";import"./composite-DmGpycId.js";import"./index-sVGPqYhb.js";import"./index-882meA1k.js";import"./index-DjhrnFTk.js";import"./useEventCallback-Dc5URW6d.js";import"./SkeletonBar-D__uNuhL.js";import"./LoadingCell-BCt_KtF5.js";import"./ColumnConfigDialog-DZn8srL5.js";import"./DraggableList-DuxWmrwF.js";import"./search-7RMpjv9g.js";import"./Input-DaHV-cOW.js";import"./useControlled-Duv0di0B.js";import"./isEqual-IZ72ZoN5.js";import"./isObject-9m007JNC.js";import"./Button-CQssBVED.js";import"./ActionButton-CTNaJHR0.js";import"./Checkbox-bcwpqp2K.js";import"./useValueChanged-Dc6x029G.js";import"./CollapsiblePanel-D-SkO8jl.js";import"./MultiColumnSortDialog-mSj5H4Kw.js";import"./MenuTrigger-CW5x8DBX.js";import"./CompositeItem-Cf7M82EQ.js";import"./ToolbarRootContext-By2zkM1j.js";import"./getDisabledMountTransitionStyles-D0XUgT8Q.js";import"./getPseudoElementBounds-DGNrj8Lp.js";import"./chevron-down-9I0-3TkX.js";import"./index-2E7TPCj-.js";import"./error-DAH-eKl0.js";import"./BaseCbacBanner-BKgfll48.js";import"./makeExternalStore-CqR_y6G8.js";import"./Tooltip-aBmYTUan.js";import"./PopoverPopup-BTbYxYaC.js";import"./toNumber-Dtl6tkmX.js";import"./useOsdkClient-BJfh_Cmy.js";import"./tick-BQrydFrT.js";import"./DropdownField-BhtG85if.js";import"./withOsdkMetrics-V3Vr0ZXu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
