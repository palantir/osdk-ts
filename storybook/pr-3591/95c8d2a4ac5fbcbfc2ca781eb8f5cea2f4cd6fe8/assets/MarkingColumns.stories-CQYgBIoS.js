import{f as n,j as t}from"./iframe-C9KukGcT.js";import{O as p}from"./object-table-i8JiZmY5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B5RKkod9.js";import"./Table-cao5fnBs.js";import"./index-DckjiwPg.js";import"./Dialog-CPWPQYar.js";import"./cross-v2Orz344.js";import"./svgIconContainer-DQNVzmGK.js";import"./useBaseUiId-BYPPXWEn.js";import"./InternalBackdrop-DXF0IfpD.js";import"./composite-CC0qdsOn.js";import"./index-CaS66MGw.js";import"./index-CtW_zaYy.js";import"./index-RzysaKKG.js";import"./useEventCallback-9--cS9GV.js";import"./SkeletonBar-BGF9v-ex.js";import"./LoadingCell-Bpyn2zl4.js";import"./ColumnConfigDialog-B6s7ElCo.js";import"./DraggableList-CXV22mk-.js";import"./search-B1su9-q6.js";import"./Input-BHuG8cS0.js";import"./useControlled-tBnUvvmj.js";import"./Button-CWiFTA_A.js";import"./small-cross-C2fkXenN.js";import"./ActionButton-CcuBXR07.js";import"./Checkbox-GCwqRK1R.js";import"./minus-CGUS0-7m.js";import"./tick-nKrxvkZu.js";import"./useValueChanged-B9p_8VXo.js";import"./caret-down-56pyq4E9.js";import"./CollapsiblePanel-BXvE43wS.js";import"./MultiColumnSortDialog-vk3hOaJU.js";import"./MenuTrigger-BlYPJKYw.js";import"./CompositeItem-CP7tqChf.js";import"./ToolbarRootContext-C0apraRP.js";import"./getDisabledMountTransitionStyles-DMpcUqSC.js";import"./getPseudoElementBounds-DfpC0Pt1.js";import"./chevron-down-DrEALlKG.js";import"./index-BhtC8O2w.js";import"./error-CN9Oe3Cl.js";import"./BaseCbacBanner-DOMsQNSo.js";import"./makeExternalStore-D6Xki7Fj.js";import"./Tooltip-CLpihoAH.js";import"./PopoverPopup-j4BrGDst.js";import"./toNumber-zCFqC9IV.js";import"./useOsdkClient-D-T2KEEL.js";import"./DropdownField-B6BNUNGI.js";import"./withOsdkMetrics-Dxk7tSfz.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
