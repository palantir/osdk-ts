import{f as p,j as e}from"./iframe-D2rEXeQx.js";import{O as i}from"./object-table-DMFO68pV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BoJbTe1v.js";import"./Table-B_09Oj-e.js";import"./index-CfC4mUMZ.js";import"./Dialog-vUBbAyxu.js";import"./cross-C8ubmI2m.js";import"./svgIconContainer-Bn9oRKuF.js";import"./useBaseUiId-De-RVgDd.js";import"./InternalBackdrop-2h9ogoRt.js";import"./composite-ChDY5SZr.js";import"./index-CDRkpD8P.js";import"./index-Djkwo92d.js";import"./index-BRlH2gwe.js";import"./useEventCallback-v_NEjqKI.js";import"./SkeletonBar-Dd-PVnIZ.js";import"./LoadingCell-L7FGSJ4G.js";import"./ColumnConfigDialog-CakMDYHt.js";import"./DraggableList-QThjUTH0.js";import"./search-CV4hoflg.js";import"./Input-C1IdFQeF.js";import"./useControlled-DXA-QYA9.js";import"./isEqual-DgTsCiYw.js";import"./isObject-YelpfKiZ.js";import"./Button-SlZlYUH9.js";import"./ActionButton-BMstLpN5.js";import"./Checkbox-NwFr9nkH.js";import"./useValueChanged-BeDXyIpc.js";import"./CollapsiblePanel-B1R7lMfC.js";import"./MultiColumnSortDialog-B2Po5sh9.js";import"./MenuTrigger-CqfmwcHu.js";import"./CompositeItem-DdzZw4wn.js";import"./ToolbarRootContext-MHlvb9At.js";import"./getDisabledMountTransitionStyles-CySNm427.js";import"./getPseudoElementBounds-bLCWKH_q.js";import"./chevron-down-PuRYmfNg.js";import"./index-BWSIaSOv.js";import"./error-DHkjPhqr.js";import"./BaseCbacBanner-BScbL7hw.js";import"./makeExternalStore-Ta4dVqJI.js";import"./Tooltip-Dybod7Es.js";import"./PopoverPopup-DTET1cyQ.js";import"./toNumber-jUY_203t.js";import"./useOsdkClient-DvTu3-EB.js";import"./tick-DFLVjkdy.js";import"./DropdownField-DQ3tYpiT.js";import"./withOsdkMetrics-Cf9qkm69.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
