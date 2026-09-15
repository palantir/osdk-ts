import{f as p,j as e}from"./iframe-bRpqvs55.js";import{O as i}from"./object-table-DTJeYCjX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C6x1Ezwe.js";import"./Table-pzOwgnpp.js";import"./index-BIhwktUh.js";import"./Dialog-BUuRiFkm.js";import"./cross-W-3E-IIi.js";import"./svgIconContainer-Bb8sMP7z.js";import"./useBaseUiId-DlF45aum.js";import"./InternalBackdrop-JgiXSQHJ.js";import"./composite-eCHjWiuj.js";import"./index-D6zU7-mJ.js";import"./index-D5Q_aXSH.js";import"./index-BOSpr031.js";import"./useEventCallback-6oyiY6oL.js";import"./SkeletonBar-DJvvFheA.js";import"./LoadingCell-ktQQDCh9.js";import"./ColumnConfigDialog-BuMSNPk8.js";import"./DraggableList-C-GVw4zx.js";import"./search-CyiikVap.js";import"./Input-prVuRYoh.js";import"./useControlled-Bp_OFH7Y.js";import"./Button-0l6_p_5m.js";import"./small-cross-DEvpNvc7.js";import"./ActionButton-Dy3mGQhY.js";import"./Checkbox-BUsUHpSL.js";import"./useValueChanged-5Fh0Mmuj.js";import"./CollapsiblePanel-_w77ihX2.js";import"./MultiColumnSortDialog-B3hai6Pi.js";import"./MenuTrigger-CvmpGqAN.js";import"./CompositeItem-Cz1caG-o.js";import"./ToolbarRootContext-BWkwcBK1.js";import"./getDisabledMountTransitionStyles-Cafoyzdu.js";import"./getPseudoElementBounds-CX56f88n.js";import"./chevron-down-hYv0Ya8W.js";import"./index-sU6oAp9b.js";import"./error-DYIwcxmR.js";import"./BaseCbacBanner-r5IeGzMT.js";import"./makeExternalStore-BuZjAFov.js";import"./Tooltip-BmDPAYhk.js";import"./PopoverPopup-DKbTsux3.js";import"./debounce-BIS8_Qcl.js";import"./useOsdkClient-BUIu772_.js";import"./tick-BJJF7W42.js";import"./DropdownField-BIZpi39T.js";import"./isEqual-BzRAwugt.js";import"./withOsdkMetrics-BMXSfQyV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
