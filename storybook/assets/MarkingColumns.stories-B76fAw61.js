import{f as n,j as t}from"./iframe-Bqb8e56z.js";import{O as p}from"./object-table-C1LdXzxs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DArR5i0j.js";import"./index-CReoR6Ri.js";import"./Dialog-DI-WC-dD.js";import"./cross-Fw1aZ42r.js";import"./svgIconContainer-F71y2enf.js";import"./useBaseUiId-DZTItZ6G.js";import"./InternalBackdrop-gfV2EQPd.js";import"./composite-CS1pQ03C.js";import"./index-w_SXVmWn.js";import"./index-DQNPZVpa.js";import"./index-CpMCSrrr.js";import"./useEventCallback-C3cEtpyq.js";import"./SkeletonBar-eij-WKih.js";import"./LoadingCell-BSCq5h0M.js";import"./ColumnConfigDialog-C2q0kqGR.js";import"./DraggableList-C4avHE14.js";import"./search-D_zrQfhi.js";import"./Input-BSsr1nM6.js";import"./useControlled-D2VuLNB-.js";import"./Button-SSzBwglZ.js";import"./small-cross-BMiZIc4s.js";import"./ActionButton-Dygl7oUl.js";import"./Checkbox-0SRGW7dY.js";import"./minus-BmgnG-lu.js";import"./tick-DJTXnkYs.js";import"./useValueChanged-iryy0nsC.js";import"./caret-down-Dn5cXcBi.js";import"./CollapsiblePanel-CZbaOoN1.js";import"./MultiColumnSortDialog-D5VUTZjs.js";import"./MenuTrigger-DTr_qzlC.js";import"./CompositeItem-Be_PCj3i.js";import"./ToolbarRootContext-mnk_5yNn.js";import"./getDisabledMountTransitionStyles-cbQgbD10.js";import"./getPseudoElementBounds-Dj0ya8GA.js";import"./chevron-down-BYuW85L0.js";import"./index-0XcjW038.js";import"./error-BdOjo0Xa.js";import"./BaseCbacBanner-Dxh9GFeJ.js";import"./makeExternalStore-D3mizy5p.js";import"./Tooltip-Cd52InoG.js";import"./PopoverPopup-BTp2y4R0.js";import"./toNumber-B6Z3pcO8.js";import"./useOsdkClient-DhbaFHWJ.js";import"./DropdownField-CayIRrXU.js";import"./withOsdkMetrics-rvBRyKke.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
