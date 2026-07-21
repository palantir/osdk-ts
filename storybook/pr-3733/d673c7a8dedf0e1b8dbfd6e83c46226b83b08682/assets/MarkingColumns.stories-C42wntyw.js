import{f as n,j as t}from"./iframe-4BKOAzHX.js";import{O as p}from"./object-table-31eC33Iy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BO4QJwpQ.js";import"./Table-DyFcFs3_.js";import"./index-DJ53Sv_K.js";import"./Dialog-B4AL5wFm.js";import"./cross-CpJvS5n9.js";import"./svgIconContainer-AOe-YNRh.js";import"./useBaseUiId-BYyHLbuZ.js";import"./InternalBackdrop-B-2GGlwz.js";import"./composite-KvIfntCm.js";import"./index-B6wYYUZ5.js";import"./index-CypjQWnn.js";import"./index-D6j1DPFw.js";import"./useEventCallback-Dat-ABtJ.js";import"./SkeletonBar-CftuyukT.js";import"./LoadingCell-bTRzVfWs.js";import"./ColumnConfigDialog-BZKASZkh.js";import"./DraggableList-Dj1Ffkkd.js";import"./search-CM3cO5Mi.js";import"./Input-D8FH1XsG.js";import"./useControlled-B7yq0oZo.js";import"./Button-DlKA6KYJ.js";import"./small-cross-N4o5ypSk.js";import"./ActionButton-B_icVaJy.js";import"./Checkbox-D1EIOZyQ.js";import"./useValueChanged-BNrjEFIe.js";import"./CollapsiblePanel-Bo2IXsmD.js";import"./MultiColumnSortDialog-BkwnFagj.js";import"./MenuTrigger-CzBJ__xA.js";import"./CompositeItem-BHqnQa5y.js";import"./ToolbarRootContext-BcRvDpZg.js";import"./getDisabledMountTransitionStyles-BDKMNHMo.js";import"./getPseudoElementBounds-BrUNL0mO.js";import"./chevron-down-CKliXFAW.js";import"./index-CCAGlBy6.js";import"./error-CuEUY6i9.js";import"./BaseCbacBanner-8nAsbhyk.js";import"./makeExternalStore-lVt5fFow.js";import"./Tooltip-Swq8m-0x.js";import"./PopoverPopup-DZxnw2F-.js";import"./toNumber-BBveFLZx.js";import"./useOsdkClient-iSY5V5v7.js";import"./tick-CtNlitw_.js";import"./DropdownField-BCDTEpwB.js";import"./withOsdkMetrics-BlEyaYx5.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
