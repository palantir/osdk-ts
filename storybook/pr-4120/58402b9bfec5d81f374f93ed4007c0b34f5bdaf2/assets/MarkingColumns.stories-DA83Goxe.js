import{f as p,j as e}from"./iframe-BNVJywF1.js";import{O as i}from"./object-table-WiUXGOvy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DWuXY-GF.js";import"./Table-BJyRbGLx.js";import"./index-C4EkKaF7.js";import"./Dialog-vogIGdTb.js";import"./cross-CyiMpI_1.js";import"./svgIconContainer-BcZCykGH.js";import"./useBaseUiId-Bpu1Oowx.js";import"./InternalBackdrop-C0D2fQXF.js";import"./composite-DiO_GxNw.js";import"./index-LJRfcAtw.js";import"./index-BQqTqN1m.js";import"./index-BA6LoZ5G.js";import"./useEventCallback-CAiy3etF.js";import"./SkeletonBar-CTp2bd9M.js";import"./LoadingCell-IDNMoj92.js";import"./ColumnConfigDialog-DZO1ozRr.js";import"./DraggableList-ChmcRqcF.js";import"./search-C7WqGDQC.js";import"./Input-Da27pVQq.js";import"./useControlled-B2RztQtr.js";import"./Button-DMlU0zK6.js";import"./small-cross-Ccbug_SU.js";import"./ActionButton-C-7a2u10.js";import"./Checkbox-mEHD5Fat.js";import"./useValueChanged-Bkw0nzgB.js";import"./CollapsiblePanel-CCdfWJRe.js";import"./MultiColumnSortDialog-Dry_jIHL.js";import"./MenuTrigger-Dhu-Whey.js";import"./CompositeItem-BXGINh9c.js";import"./ToolbarRootContext-D79zfuWP.js";import"./getDisabledMountTransitionStyles-D5wjcBBn.js";import"./getPseudoElementBounds-u1YKpqoa.js";import"./chevron-down-D9ALcooV.js";import"./index-BNfW4Vjp.js";import"./error-Kq-QRHM8.js";import"./BaseCbacBanner-QanKRFIA.js";import"./makeExternalStore-DfPTVVvN.js";import"./Tooltip-Bp6EFdh0.js";import"./PopoverPopup-DaNrxJqx.js";import"./debounce-8B-CyNyC.js";import"./useOsdkClient-CyccGXDI.js";import"./tick-BeYRsnSN.js";import"./DropdownField-C8Q0gJVk.js";import"./isEqual-D_2ZUMl_.js";import"./withOsdkMetrics-BZA_bd9Y.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
