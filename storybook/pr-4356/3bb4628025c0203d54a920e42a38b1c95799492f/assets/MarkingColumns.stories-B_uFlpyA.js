import{f as p,j as e}from"./iframe-BL-M0CJv.js";import{O as i}from"./object-table-DyjahA3Z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C0zkmkXS.js";import"./Table-CwPyldrC.js";import"./index-Db0LO39w.js";import"./Dialog-X47xU8WG.js";import"./cross-x8jhhqfq.js";import"./svgIconContainer-BX2v_cR0.js";import"./useBaseUiId-TPr_qZ_1.js";import"./InternalBackdrop-DQF7Nf_d.js";import"./composite-Dx0NSDUH.js";import"./index-Bt9OIo2s.js";import"./index-DIwpmFcE.js";import"./index-H5T9X240.js";import"./useEventCallback-ClZrDBfO.js";import"./SkeletonBar-D3gneFRh.js";import"./LoadingCell-CIZRZJiV.js";import"./ColumnConfigDialog-CrhkzJOT.js";import"./DraggableList-DJESFfbU.js";import"./search-BiWkoGJW.js";import"./Input-EsCXPtCp.js";import"./useControlled-CKiiitZS.js";import"./Button-CC9Ubwa3.js";import"./small-cross-BM9iFkVs.js";import"./ActionButton-bQlrAOg4.js";import"./Checkbox-B2PO8JSa.js";import"./useValueChanged-DM3_Gsn0.js";import"./CollapsiblePanel-nIuDIxIE.js";import"./MultiColumnSortDialog-_iw8uLQh.js";import"./MenuTrigger-DKUx42mN.js";import"./CompositeItem-XRZQ4yN6.js";import"./ToolbarRootContext-D7bnZbhq.js";import"./getDisabledMountTransitionStyles-D6fdD7kD.js";import"./getPseudoElementBounds-KY_ZlW1R.js";import"./chevron-down-5PA4SDET.js";import"./index-BFvrjhEh.js";import"./error-BIo7wVIV.js";import"./BaseCbacBanner-CMUORDC1.js";import"./makeExternalStore-DG0rmoX7.js";import"./Tooltip-CZJO9zR4.js";import"./PopoverPopup-B1aR8zHS.js";import"./debounce-zXiB5GmY.js";import"./useOsdkClient-Dx2Qs5xK.js";import"./tick-Ba6iW8gF.js";import"./DropdownField-CYb_vMw7.js";import"./isEqual-CJqL8oc3.js";import"./withOsdkMetrics-BYapBjuA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
