import{f as p,j as e}from"./iframe-Bnd7pp_H.js";import{O as i}from"./object-table-4cK8FCON.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CQp4ttna.js";import"./Table-CT49F1bO.js";import"./index-Dq4Q7R9n.js";import"./Dialog-rVHDyjlb.js";import"./cross-nf57os0A.js";import"./svgIconContainer-BHFCuUIe.js";import"./useBaseUiId-C3FoEBlZ.js";import"./InternalBackdrop-DF5eA8FP.js";import"./composite-ChdURaw7.js";import"./index-CdD4spHg.js";import"./index-CFBknfgj.js";import"./index-_ppv4b-3.js";import"./useEventCallback-DrUAM8i2.js";import"./SkeletonBar-DNsqmLz9.js";import"./LoadingCell-Ba7x1O3X.js";import"./ColumnConfigDialog-BE67hQV-.js";import"./DraggableList-dtTt2aoG.js";import"./search-C2rfWWoo.js";import"./Input-Dh0I0gBB.js";import"./useControlled-BJ3TNVDx.js";import"./Button-wIX1QNwU.js";import"./small-cross-Fvp5VPfx.js";import"./ActionButton-Dfv8zCtw.js";import"./Checkbox-DnU42Rli.js";import"./useValueChanged-CBe6yFc7.js";import"./CollapsiblePanel-DplLNpgq.js";import"./MultiColumnSortDialog-Bi-DTI_a.js";import"./MenuTrigger-B6Hf9dfZ.js";import"./CompositeItem-B1cp5WfN.js";import"./ToolbarRootContext-V1EJjV6d.js";import"./getDisabledMountTransitionStyles-B1HGzF4D.js";import"./getPseudoElementBounds-DRM09z-T.js";import"./chevron-down-CkIljS9G.js";import"./index-L92dEHBQ.js";import"./error-vnD_TY7d.js";import"./BaseCbacBanner-BNaku5TU.js";import"./makeExternalStore-BZ_ZxDJW.js";import"./Tooltip-DxkXYJMW.js";import"./PopoverPopup-DVwvpeMg.js";import"./debounce-CLMmEpMo.js";import"./useOsdkClient-Bzkrieut.js";import"./tick-BMXdWkDm.js";import"./DropdownField-28PDU_yD.js";import"./isEqual-DlIlAhIm.js";import"./withOsdkMetrics-CtQ2hxG_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
