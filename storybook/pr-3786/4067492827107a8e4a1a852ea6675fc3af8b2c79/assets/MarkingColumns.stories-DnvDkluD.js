import{f as p,j as e}from"./iframe-BzPs2xHz.js";import{O as i}from"./object-table-BjXTcb2K.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dn3dBWKD.js";import"./Table-CNOGfrVv.js";import"./index-lf_bX8Ds.js";import"./Dialog-DyjdaCir.js";import"./cross-O7xa3Rso.js";import"./svgIconContainer-DhTEATNC.js";import"./useBaseUiId-BMa9eygA.js";import"./InternalBackdrop-Bc7OL2GY.js";import"./composite-DpdAhGyH.js";import"./index-bYLveQI0.js";import"./index-D7e7z0jb.js";import"./index-BO1yNazz.js";import"./useEventCallback-DKpLD8d5.js";import"./SkeletonBar-ChhBmRnb.js";import"./LoadingCell-CkkDFPXD.js";import"./ColumnConfigDialog-D5TgloPk.js";import"./DraggableList-D1aUyZ11.js";import"./search-CRuJLPg-.js";import"./Input-DTycr8bw.js";import"./useControlled-Cj3uSm2N.js";import"./isEqual-B1msFTbl.js";import"./isObject-Cs-BHMix.js";import"./Button-CbC3WPW_.js";import"./ActionButton-DoVkuwyM.js";import"./Checkbox-C4q84H12.js";import"./useValueChanged-B35CBxnf.js";import"./CollapsiblePanel-BMvzd42c.js";import"./MultiColumnSortDialog-kRDKJnam.js";import"./MenuTrigger-BeLVmjwr.js";import"./CompositeItem-CVol_ESW.js";import"./ToolbarRootContext-CRZmb0il.js";import"./getDisabledMountTransitionStyles-7DfCiWwS.js";import"./getPseudoElementBounds-E9OyDYgJ.js";import"./chevron-down-CrUow07b.js";import"./index-8MCdg044.js";import"./error-DW-Bjygh.js";import"./BaseCbacBanner-CI0k0Xav.js";import"./makeExternalStore-BjwsBrDG.js";import"./Tooltip-BG05sR6Z.js";import"./PopoverPopup-xglJO5RD.js";import"./toNumber-CJYn9s_6.js";import"./useOsdkClient-D6ZxsDuF.js";import"./tick-BtgF0ZkK.js";import"./DropdownField-CuWczfpM.js";import"./withOsdkMetrics-DED3H3a2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
