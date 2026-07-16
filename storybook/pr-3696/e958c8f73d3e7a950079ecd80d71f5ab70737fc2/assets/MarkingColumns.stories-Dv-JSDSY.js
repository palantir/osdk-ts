import{f as n,j as t}from"./iframe-Drs9PtpT.js";import{O as p}from"./object-table-2c12ukFT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-E4CpQqjO.js";import"./Table-BPooovDQ.js";import"./index-BFJ9VRsG.js";import"./Dialog-BONrRfW4.js";import"./cross-DM4c_Ehx.js";import"./svgIconContainer-DFiUxhoB.js";import"./useBaseUiId-CsSh5-M6.js";import"./InternalBackdrop--I8qbZny.js";import"./composite-CGsQF29V.js";import"./index-BBwlcU-i.js";import"./index-fpVPsiDF.js";import"./index-BAUS1_dg.js";import"./useEventCallback-DdxQ4cSo.js";import"./SkeletonBar-K90X0GlX.js";import"./LoadingCell-iFghZwJ9.js";import"./ColumnConfigDialog-BZG8R8jz.js";import"./DraggableList-Du0UPfKG.js";import"./search-Cla38eR_.js";import"./Input-BaILboJh.js";import"./useControlled-DkxCviXg.js";import"./Button-BW5dLyJk.js";import"./small-cross-D5krY5Yr.js";import"./ActionButton-FW47NW9h.js";import"./Checkbox-BpNtduyJ.js";import"./useValueChanged-pg2MZp9L.js";import"./CollapsiblePanel-BF_ekJln.js";import"./MultiColumnSortDialog-DOrhZ9Fi.js";import"./MenuTrigger-BbPGiurK.js";import"./CompositeItem-DneLKGg6.js";import"./ToolbarRootContext-C8W-kuVs.js";import"./getDisabledMountTransitionStyles-tXuQWLsv.js";import"./getPseudoElementBounds-D8DbuHAi.js";import"./chevron-down-CWlc4pKw.js";import"./index-DhDdmZ2c.js";import"./error-DoFECo31.js";import"./BaseCbacBanner-A3_VoHGe.js";import"./makeExternalStore-C7LxlEOX.js";import"./Tooltip-CJtxpGZZ.js";import"./PopoverPopup-BvDmYjrv.js";import"./toNumber-BLEuXgZx.js";import"./useOsdkClient-CchgGDFY.js";import"./tick-CGdS0h8h.js";import"./DropdownField-B1kjauVP.js";import"./withOsdkMetrics-DS0s9Yhu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
