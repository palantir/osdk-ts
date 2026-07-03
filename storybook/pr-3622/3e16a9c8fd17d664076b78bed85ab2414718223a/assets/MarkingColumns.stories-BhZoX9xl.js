import{f as n,j as t}from"./iframe-eqI2Tp6U.js";import{O as p}from"./object-table-RXxNp8Oa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C854kg2c.js";import"./Table-DF6pHPDX.js";import"./index-BQvj20dN.js";import"./Dialog-DRjdbwoz.js";import"./cross-BwZn1LQT.js";import"./svgIconContainer-CceqgUJ5.js";import"./useBaseUiId-BUPOa5yP.js";import"./InternalBackdrop-BwLVrEhh.js";import"./composite-ynT6IuNJ.js";import"./index-CZ3HCvN9.js";import"./index-BbGLmSZs.js";import"./index-D8w0NXIP.js";import"./useEventCallback-XTjkOuDM.js";import"./SkeletonBar-nX5C-Hmp.js";import"./LoadingCell-D9LLv4ya.js";import"./ColumnConfigDialog-DVkyZklA.js";import"./DraggableList-BfGL3K-h.js";import"./search-BTDUraC3.js";import"./Input-C5vJD5Vp.js";import"./useControlled-CvWZUFGS.js";import"./Button-B8Q21Qnn.js";import"./small-cross-DhXRq_IT.js";import"./ActionButton-CutNvpaL.js";import"./Checkbox-BltVKZ8a.js";import"./useValueChanged-C8xgAF1l.js";import"./CollapsiblePanel-BXEfh1A7.js";import"./MultiColumnSortDialog-Df7pYt6U.js";import"./MenuTrigger-BxnroB_h.js";import"./CompositeItem-Dh86pUX-.js";import"./ToolbarRootContext-DQKwC3ay.js";import"./getDisabledMountTransitionStyles-IuXyN76c.js";import"./getPseudoElementBounds-Iu56eXpl.js";import"./chevron-down-DESWDvR5.js";import"./index-CkexdKE9.js";import"./error-HIwS0nVv.js";import"./BaseCbacBanner-Bz3HImOF.js";import"./makeExternalStore-Bl270xTs.js";import"./Tooltip-CJdcLiLg.js";import"./PopoverPopup-Dg68_C7t.js";import"./toNumber-DuKyHq5e.js";import"./useOsdkClient-BIT-BsU_.js";import"./tick-DzlhWLO4.js";import"./DropdownField-Ncf3j8t_.js";import"./withOsdkMetrics-CEwxpbuR.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
