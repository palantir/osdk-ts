import{f as p,j as e}from"./iframe-BAzoJD_n.js";import{O as i}from"./object-table-CXjRtA9s.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DSHDaNkC.js";import"./Table-D_rBRk7V.js";import"./index-s4lAOVrs.js";import"./Dialog-CR639lRj.js";import"./cross-Cz9X-8vp.js";import"./svgIconContainer-DcEtiJnJ.js";import"./useBaseUiId-X8JbO_jF.js";import"./InternalBackdrop-BEz-Het1.js";import"./composite-C2ZeH-nt.js";import"./index-DnptcgYz.js";import"./index-BMCs90I6.js";import"./index-D9L2mjOB.js";import"./useEventCallback-ClbdUzWy.js";import"./SkeletonBar-JSA8ez91.js";import"./LoadingCell-4aetjgV8.js";import"./ColumnConfigDialog-BY9NBeIW.js";import"./DraggableList-CluNiQuA.js";import"./search-BX5F8_z_.js";import"./Input-DvNrW-kH.js";import"./useControlled-cRyxw0TO.js";import"./isEqual-DiTVCVI3.js";import"./isObject-BRC3jVhz.js";import"./Button-C6-5CX8D.js";import"./ActionButton-xm3OfMXt.js";import"./Checkbox-D82zXn1s.js";import"./useValueChanged-B_BD_Ppi.js";import"./CollapsiblePanel-BOrVcuXG.js";import"./MultiColumnSortDialog-B8YCTi_s.js";import"./MenuTrigger-C2dbIgFm.js";import"./CompositeItem-Dx_RF7XZ.js";import"./ToolbarRootContext-DHhHK4Vd.js";import"./getDisabledMountTransitionStyles-alpHjjXx.js";import"./getPseudoElementBounds-0QkKzEQT.js";import"./chevron-down-BgJhhOtE.js";import"./index-RB9l46zQ.js";import"./error-3n0FpK4k.js";import"./BaseCbacBanner-C9TiEwDc.js";import"./makeExternalStore-C_ctE6bz.js";import"./Tooltip-D3twPyS2.js";import"./PopoverPopup-dsU5wvNs.js";import"./toNumber-Bt6DwShw.js";import"./useOsdkClient-Bfmyk2Eg.js";import"./tick-C3Hz3Jzx.js";import"./DropdownField-DTwMjcEt.js";import"./withOsdkMetrics-CiR7QeDt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
