import{f as n,j as t}from"./iframe-RSBzroZA.js";import{O as p}from"./object-table-BUTK7hNd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B4pqtO3e.js";import"./Table-CgPlKEpL.js";import"./index-DsipxA2q.js";import"./Dialog-CFLnvbQs.js";import"./cross-CABh21Cd.js";import"./svgIconContainer-BxXFYwkv.js";import"./useBaseUiId-CJ4Ks2Ai.js";import"./InternalBackdrop-DF0hisRy.js";import"./composite-DIcLGdQ7.js";import"./index-DJJ0-3Pk.js";import"./index-dlV8mm3m.js";import"./index-BZiS1BkS.js";import"./useEventCallback-DB5OsjdU.js";import"./SkeletonBar-DTfA0e6H.js";import"./LoadingCell-DmfgHSqu.js";import"./ColumnConfigDialog-CQMPcN_U.js";import"./DraggableList-Cj-hbc2z.js";import"./search-C4loYzDO.js";import"./Input-Csq9oOiA.js";import"./useControlled-DfRhNfSK.js";import"./Button-B0v0hQqc.js";import"./small-cross-DyIaTVkY.js";import"./ActionButton-DcikdlIm.js";import"./Checkbox-uEz3Sakp.js";import"./useValueChanged-DK8Rj4WA.js";import"./CollapsiblePanel-D1cMhY1b.js";import"./MultiColumnSortDialog-CJ5svC7f.js";import"./MenuTrigger-3LqrEtDn.js";import"./CompositeItem-Ct757kGS.js";import"./ToolbarRootContext-DSQWIziF.js";import"./getDisabledMountTransitionStyles-BBZ4Y78u.js";import"./getPseudoElementBounds-CrTpBX8G.js";import"./chevron-down-Bi6ZiHsZ.js";import"./index-Bww72sbW.js";import"./error-DiYS0a7N.js";import"./BaseCbacBanner-WDR6Czpd.js";import"./makeExternalStore-CIv3ExRP.js";import"./Tooltip-3m4cvvD7.js";import"./PopoverPopup-Clz7_36S.js";import"./toNumber-My2Vq2mH.js";import"./useOsdkClient-D9_265aP.js";import"./tick-yemFhQTC.js";import"./DropdownField-Blu_smEI.js";import"./withOsdkMetrics-CUzP3NKP.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
