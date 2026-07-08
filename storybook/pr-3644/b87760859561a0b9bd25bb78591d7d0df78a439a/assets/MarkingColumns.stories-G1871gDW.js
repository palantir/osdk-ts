import{f as n,j as t}from"./iframe-DjySQ7rG.js";import{O as p}from"./object-table-DTBFpCko.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CIgVa9We.js";import"./Table-ETcEc0NG.js";import"./index-Bd6DGpSd.js";import"./Dialog-CyspR6Mb.js";import"./cross-C_e6DyPY.js";import"./svgIconContainer-CT7d8rBE.js";import"./useBaseUiId-D6CaYaBf.js";import"./InternalBackdrop-BSx9VD1t.js";import"./composite-C5fuEr92.js";import"./index-6XzXhnTB.js";import"./index-Df20DDE5.js";import"./index-BD4jvkf9.js";import"./useEventCallback-CFOcauRI.js";import"./SkeletonBar-zUJ6x9rY.js";import"./LoadingCell-CpoHUb7z.js";import"./ColumnConfigDialog-DmH2deL0.js";import"./DraggableList-DQVnNIoS.js";import"./search-aBbNIVHX.js";import"./Input-MSfp4l71.js";import"./useControlled-BCsEanuS.js";import"./Button-BoUYQZGI.js";import"./small-cross-C7Ni-_pr.js";import"./ActionButton-CgA4xAah.js";import"./Checkbox-CLQdY7uA.js";import"./useValueChanged-DG0qp8vS.js";import"./CollapsiblePanel-gmC8YIba.js";import"./MultiColumnSortDialog-BlxeUGxc.js";import"./MenuTrigger-DCw53318.js";import"./CompositeItem-DYzR2KlF.js";import"./ToolbarRootContext-IMcRNGop.js";import"./getDisabledMountTransitionStyles-CIxV1KDH.js";import"./getPseudoElementBounds-Bzhbh-jt.js";import"./chevron-down-CcbPaUaB.js";import"./index-CSAsjnsn.js";import"./error-DEspa3T_.js";import"./BaseCbacBanner-Dln7eyJV.js";import"./makeExternalStore-CHUDZOYx.js";import"./Tooltip-ttxlMu5V.js";import"./PopoverPopup-DwdLeM_d.js";import"./toNumber-CzPZn80q.js";import"./useOsdkClient-RHuZekwh.js";import"./tick-Cet-PArU.js";import"./DropdownField-CB3KYSoR.js";import"./withOsdkMetrics-Cn3JpTCt.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
