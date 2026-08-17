import{f as p,j as e}from"./iframe-b0a69-Kg.js";import{O as i}from"./object-table-7DklcUJK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DummAPw7.js";import"./Table-DlhK0xIQ.js";import"./index-D4Xkm7FC.js";import"./Dialog-DHNY33je.js";import"./cross-CVVAhtIH.js";import"./svgIconContainer-DV9o6T8Y.js";import"./useBaseUiId-BAHSPach.js";import"./InternalBackdrop-CgM38rCe.js";import"./composite-C-1iZs8x.js";import"./index-Dq9LK0gI.js";import"./index-BCGssQuO.js";import"./index-BhJVrSQC.js";import"./useEventCallback-B7VGyjZz.js";import"./SkeletonBar-CcsNAgOv.js";import"./LoadingCell-DkcvOk9O.js";import"./ColumnConfigDialog-DmIJ5lP4.js";import"./DraggableList-Xenxhlgo.js";import"./search-D_cjyHC2.js";import"./Input-BBJnalD-.js";import"./useControlled-DazDyppM.js";import"./Button-C9SSgyc6.js";import"./small-cross-B9TzsAKt.js";import"./ActionButton-CvBAfjnY.js";import"./Checkbox-BV2ID8N4.js";import"./useValueChanged-ya-iB3SU.js";import"./CollapsiblePanel-Dt5950Ep.js";import"./MultiColumnSortDialog-ZgDH9_dy.js";import"./MenuTrigger-CNg_k7K6.js";import"./CompositeItem-DAv1Ed90.js";import"./ToolbarRootContext-_XDLJscO.js";import"./getDisabledMountTransitionStyles-C4JFtLhi.js";import"./getPseudoElementBounds-Csl-Q8UW.js";import"./chevron-down-uIlArscK.js";import"./index-mlw8NCjc.js";import"./error-pyjmpYRO.js";import"./BaseCbacBanner-ByXvVPLR.js";import"./makeExternalStore-3K6ZodGD.js";import"./Tooltip-CR5Z6Ui_.js";import"./PopoverPopup-ZiNAjzDI.js";import"./debounce-Di9wyxlF.js";import"./useOsdkClient-Pv9IiTRg.js";import"./tick-Bsn4Wp7F.js";import"./DropdownField-l9nhrIio.js";import"./isEqual-BQrSHnfW.js";import"./withOsdkMetrics-Dy8efZZr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
