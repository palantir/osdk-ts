import{f as p,j as e}from"./iframe-BoRHmw1P.js";import{O as i}from"./object-table-DRTkPZ2B.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BwC4djfE.js";import"./Table-CV6WvzaU.js";import"./index-CKE1HitJ.js";import"./Dialog-S7w-4bYU.js";import"./cross-CXHDS3ru.js";import"./svgIconContainer-BiIenURc.js";import"./useBaseUiId-CclY9vCT.js";import"./InternalBackdrop-C0dWxoMX.js";import"./composite-NGGk8Cjx.js";import"./index-DtzOCkwB.js";import"./index-CrIjACAu.js";import"./index-DJcZ5Upx.js";import"./useEventCallback-s1Vmoh60.js";import"./SkeletonBar-BF5QQ5Lz.js";import"./LoadingCell-DSLWPUZ7.js";import"./ColumnConfigDialog-CPmcrKEX.js";import"./DraggableList-DlA04W8l.js";import"./search-DY5E4Hwb.js";import"./Input-C1OYcJfy.js";import"./useControlled-DCVjIVG_.js";import"./Button-D_pTSnh0.js";import"./small-cross-tSFsGM1S.js";import"./ActionButton-Uz6_D_U2.js";import"./Checkbox-CPnCeEYm.js";import"./useValueChanged-DZj1boR2.js";import"./CollapsiblePanel-CuhbJXth.js";import"./MultiColumnSortDialog-ztN2Cs7y.js";import"./MenuTrigger-Cb1Y06t2.js";import"./CompositeItem-BuKhldON.js";import"./ToolbarRootContext-CcVDjx55.js";import"./getDisabledMountTransitionStyles-CL6SxWwa.js";import"./getPseudoElementBounds-BowpVekl.js";import"./chevron-down-DOBMuKk4.js";import"./index-DupFExnL.js";import"./error-sO_QuGwO.js";import"./BaseCbacBanner-BrqYtPd-.js";import"./makeExternalStore-DDuoJFnu.js";import"./Tooltip-0AEySry7.js";import"./PopoverPopup-DYqs8h8g.js";import"./debounce-fg_UNTnM.js";import"./useOsdkClient-CMKxLvF9.js";import"./tick-DIjubJnt.js";import"./DropdownField-D0TX0D9X.js";import"./isEqual-CHt0Jf51.js";import"./withOsdkMetrics-D9OdN7A-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
