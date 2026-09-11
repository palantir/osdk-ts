import{f as p,j as e}from"./iframe-BzQifrbm.js";import{O as i}from"./object-table-CDq4I_Kj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CfkbdYt3.js";import"./Table-ShVLN_Dh.js";import"./index-DmrXmCsp.js";import"./Dialog-CQbyHCUs.js";import"./cross-BtXGESXa.js";import"./svgIconContainer-eTPVDcxE.js";import"./useBaseUiId-6fIHZX7k.js";import"./InternalBackdrop-DxY1hq72.js";import"./composite-Bm8VjQnK.js";import"./index-DRwqomtN.js";import"./index-C6mlQsvu.js";import"./index-qmPNzRKp.js";import"./useEventCallback-63f5yGFn.js";import"./SkeletonBar-cD86ls7w.js";import"./LoadingCell-BP04Gi6r.js";import"./ColumnConfigDialog-CP6HVMxA.js";import"./DraggableList-DjQr70Oz.js";import"./search-i0ScbyPC.js";import"./Input-D_KI0oie.js";import"./useControlled-D0PoBQGG.js";import"./Button-DGOVPU6o.js";import"./small-cross-BhH4Yfcj.js";import"./ActionButton-CgR-hyHr.js";import"./Checkbox-CVDiDgCd.js";import"./useValueChanged-DiLiLELv.js";import"./CollapsiblePanel-B1A-vb9Z.js";import"./MultiColumnSortDialog-D9Mo6dF2.js";import"./MenuTrigger-B2J7aceC.js";import"./CompositeItem-CA5vFsEl.js";import"./ToolbarRootContext-CUQpKqWY.js";import"./getDisabledMountTransitionStyles-B7tYoP6C.js";import"./getPseudoElementBounds-DWmaTZ67.js";import"./chevron-down-DgIB0DB7.js";import"./index-YkT_3P70.js";import"./error-C5OE11e3.js";import"./BaseCbacBanner-fX8smd7K.js";import"./makeExternalStore-CKMY6uVx.js";import"./Tooltip-BLUAc2Lq.js";import"./PopoverPopup-D0vD4SOK.js";import"./debounce-Sps1lGtX.js";import"./useOsdkClient-0x6uRQKq.js";import"./tick-XeSdjeFz.js";import"./DropdownField-DraiChM8.js";import"./isEqual-B5oOCPd5.js";import"./withOsdkMetrics-QrXZuSy4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
