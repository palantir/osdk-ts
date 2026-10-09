import{f as p,j as e}from"./iframe-CZ4qo6TA.js";import{O as i}from"./object-table-Cl7osAGz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D40KpOHN.js";import"./Table-Du3ldVPy.js";import"./index-B1VXkh3r.js";import"./Dialog-C3B0-q6F.js";import"./cross-BdgbMHZq.js";import"./svgIconContainer-CMijeJNG.js";import"./useBaseUiId-DO15ulBB.js";import"./InternalBackdrop-DWj837um.js";import"./composite-CODWVvxq.js";import"./index-CZQei39W.js";import"./index-SZhdlURA.js";import"./index-CuFz-_kG.js";import"./useEventCallback-ExrAdjX-.js";import"./SkeletonBar-CJS4EpKQ.js";import"./LoadingCell-DjMywnOg.js";import"./ColumnConfigDialog-Bf6vPSqo.js";import"./DraggableList--GRLHIPj.js";import"./search-DMBvmHVz.js";import"./Input-RFD7u_HI.js";import"./useControlled-Cx3Ij5Mu.js";import"./Button-BtVUzCrS.js";import"./small-cross-QLvraUt0.js";import"./ActionButton-CsLidLTo.js";import"./Checkbox-BpqpeK9_.js";import"./useValueChanged-CVtnd4HJ.js";import"./CollapsiblePanel-DEkl0vLO.js";import"./MultiColumnSortDialog-Ch4aEIXg.js";import"./MenuTrigger-B9t6PfLv.js";import"./CompositeItem-deIgJifw.js";import"./ToolbarRootContext-Bml6QJba.js";import"./getDisabledMountTransitionStyles-DVK3xheu.js";import"./getPseudoElementBounds-BxmnbCl3.js";import"./chevron-down-BdE_cbUf.js";import"./index-Dn5MssWf.js";import"./error-CVxsYLyQ.js";import"./BaseCbacBanner-BO36fmcs.js";import"./makeExternalStore-ChVKEbDO.js";import"./Tooltip-DW57x_s5.js";import"./PopoverPopup-X1NXKjjR.js";import"./debounce-CgqyealR.js";import"./useOsdkClient-58hcDjFk.js";import"./tick-C-ZfBZ86.js";import"./DropdownField-C-3zm9pF.js";import"./isEqual-CLDOcZzH.js";import"./withOsdkMetrics-BKNh995o.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
