import{f as n,j as t}from"./iframe-Dgh8VYtn.js";import{O as p}from"./object-table-CrK3D4Ob.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CFJZ_ler.js";import"./Table-Ba1C4EO2.js";import"./index-CR8Gg0Zj.js";import"./Dialog-Bbn-ZaMm.js";import"./cross-DPNz-mem.js";import"./svgIconContainer-blw7niRf.js";import"./useBaseUiId-BzDeHhXv.js";import"./InternalBackdrop-BSutcF3C.js";import"./composite-D6oOJknJ.js";import"./index-DKfcKTHa.js";import"./index-B6PBiQ8K.js";import"./index-DTfohs9h.js";import"./useEventCallback-Vun2FRva.js";import"./SkeletonBar-hPocAHhW.js";import"./LoadingCell-DBobtsIr.js";import"./ColumnConfigDialog-CcogqKvL.js";import"./DraggableList-BmY3ilue.js";import"./search-B0l3LahF.js";import"./Input-5-CxMabY.js";import"./useControlled-B4IBQ9ng.js";import"./Button-BZm5BN2k.js";import"./small-cross-DWUvjwZL.js";import"./ActionButton-BPLuCXk7.js";import"./Checkbox-C1xVzc04.js";import"./useValueChanged-DVst17AL.js";import"./CollapsiblePanel-DrvbrhF2.js";import"./MultiColumnSortDialog-CXVzXi8y.js";import"./MenuTrigger-CCN_all-.js";import"./CompositeItem-Ckfi4QX3.js";import"./ToolbarRootContext-B-exhe9d.js";import"./getDisabledMountTransitionStyles-YN6L_PSY.js";import"./getPseudoElementBounds-Bb46lt1o.js";import"./chevron-down-CdpMlX1J.js";import"./index-CQ-zXVd9.js";import"./error-_UZv3G_I.js";import"./BaseCbacBanner-CRLlI3Gp.js";import"./makeExternalStore-BNACMlLS.js";import"./Tooltip-DGN4ft4r.js";import"./PopoverPopup-Cz46GyD3.js";import"./toNumber-DDthKoEs.js";import"./useOsdkClient-CZzw9Szu.js";import"./tick-CxEQ1pAU.js";import"./DropdownField-CwNxU7hW.js";import"./withOsdkMetrics-Dg6KSq_n.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
