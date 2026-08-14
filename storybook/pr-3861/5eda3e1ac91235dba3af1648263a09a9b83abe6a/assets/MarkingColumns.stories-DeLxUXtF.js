import{f as p,j as e}from"./iframe-DlDyg67T.js";import{O as i}from"./object-table-BiEHahF8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CxSoH6eo.js";import"./Table-BaN30LxX.js";import"./index-CgLJcHiG.js";import"./Dialog-DY0jltpC.js";import"./cross-BowQxoCZ.js";import"./svgIconContainer-QwkR6eZt.js";import"./useBaseUiId-wAPBNlUt.js";import"./InternalBackdrop-DMSb8auM.js";import"./composite-BaaVWHgq.js";import"./index-8yeQhVbN.js";import"./index-CY8S8b-r.js";import"./index-pO-hmUBS.js";import"./useEventCallback-DyZWpzNl.js";import"./SkeletonBar-CPHW6w0u.js";import"./LoadingCell-BLMAuk93.js";import"./ColumnConfigDialog-CEBUllzq.js";import"./DraggableList-DR0jkjtw.js";import"./search-Cte5LTFX.js";import"./Input-BoCdBbZ_.js";import"./useControlled-04OxKEAS.js";import"./Button-DRPtGoVj.js";import"./small-cross-Bh0kfntJ.js";import"./ActionButton-yq3aXX8T.js";import"./Checkbox-Bijx3aoH.js";import"./useValueChanged-DN_BaKA4.js";import"./CollapsiblePanel-C9sNLz9v.js";import"./MultiColumnSortDialog-SmI9cSzI.js";import"./MenuTrigger-YADL3Fsi.js";import"./CompositeItem-DzH1OEs5.js";import"./ToolbarRootContext-BTmFkUps.js";import"./getDisabledMountTransitionStyles-D3UrETGN.js";import"./getPseudoElementBounds-CAye7PYw.js";import"./chevron-down-CroTI_KF.js";import"./index-B3dgiPES.js";import"./error-D50Cem1g.js";import"./BaseCbacBanner-BUwna6kj.js";import"./makeExternalStore-CODki1eK.js";import"./Tooltip-DOZmAuSo.js";import"./PopoverPopup-D2k_Z-9o.js";import"./debounce-x_9bMniJ.js";import"./useOsdkClient-CjqVDGxb.js";import"./tick-BALaRZX2.js";import"./DropdownField-DMJY3b8d.js";import"./isEqual-Cc_ePZfr.js";import"./withOsdkMetrics-BQw0dFsV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
