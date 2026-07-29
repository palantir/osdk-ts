import{f as n,j as t}from"./iframe-DOG8I-eL.js";import{O as p}from"./object-table-kSRgb3IW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-lug39fn3.js";import"./Table-DFoDDBSH.js";import"./index-CEwMiCkF.js";import"./Dialog-Du7LcmUl.js";import"./cross-DDgUvHYg.js";import"./svgIconContainer-LPw3jrQi.js";import"./useBaseUiId-DdBDSHzH.js";import"./InternalBackdrop-DEeEcEbL.js";import"./composite-BYVJj0oB.js";import"./index-NgunwP8s.js";import"./index-D-86qJf-.js";import"./index-D_S-I_Xz.js";import"./useEventCallback-BnKTxmQE.js";import"./SkeletonBar-DN-md7S0.js";import"./LoadingCell-Bxkr7_VB.js";import"./ColumnConfigDialog-CR9ue_HW.js";import"./DraggableList-D-LB-r07.js";import"./Input-Ma79ab32.js";import"./useControlled-AIEHDiUm.js";import"./Button-BX-3Osuu.js";import"./small-cross-BHnaW0D8.js";import"./ActionButton-DQo3j25e.js";import"./Checkbox-BZPUVXb8.js";import"./minus-DnT60Wv5.js";import"./useValueChanged-BDU8u3YR.js";import"./caret-down-CiD9MFcw.js";import"./CollapsiblePanel-C5dlScs9.js";import"./MultiColumnSortDialog-LnzmJ3uJ.js";import"./MenuTrigger-BoZRZl4T.js";import"./CompositeItem-DjES7F0t.js";import"./ToolbarRootContext-C5bfDa8R.js";import"./getDisabledMountTransitionStyles-B9Mrq0ii.js";import"./getPseudoElementBounds-De4r8jsc.js";import"./chevron-down-BdiyUQTU.js";import"./index-B5xv-MXC.js";import"./error-C4Ugnr67.js";import"./BaseCbacBanner-ruC1yUDF.js";import"./makeExternalStore-BQy6EPde.js";import"./Tooltip-Bsri5v-j.js";import"./PopoverPopup-D4UbtKlz.js";import"./toNumber-BpkrrDK_.js";import"./useOsdkClient-Cdnxcvj3.js";import"./DropdownField-yKDSWTJe.js";import"./withOsdkMetrics-Dkdq65Zi.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
