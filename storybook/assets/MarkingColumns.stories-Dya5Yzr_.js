import{f as n,j as t}from"./iframe-pqikbp1T.js";import{O as p}from"./object-table-DtBzSdbg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BADe0yhy.js";import"./index-DJV7MrxA.js";import"./Dialog-CQs45pOc.js";import"./cross-B8qY8_DU.js";import"./svgIconContainer-fV5dpGZ7.js";import"./useBaseUiId-DePnZrOw.js";import"./InternalBackdrop-BloV3oCz.js";import"./composite-D9kjIxpw.js";import"./index-Bdf0f9qr.js";import"./index-C4xwSSFJ.js";import"./index-CcrVjZ4C.js";import"./useEventCallback-I2cfLEs0.js";import"./SkeletonBar-BRMoB9VN.js";import"./LoadingCell-DqgcPsMe.js";import"./ColumnConfigDialog-wcNEDMzm.js";import"./DraggableList-DqQ_I0zv.js";import"./search-BwR87sZg.js";import"./Input-BDoTBJAC.js";import"./useControlled-CFPJHFiX.js";import"./Button-V_gbWJyj.js";import"./small-cross-Bn5zy5-V.js";import"./ActionButton-DT6fuZSg.js";import"./Checkbox-DU4kyGyB.js";import"./useValueChanged-B6nglj1i.js";import"./CollapsiblePanel-BruQsfwI.js";import"./MultiColumnSortDialog-CvFxtR3Z.js";import"./MenuTrigger-zvAplRG-.js";import"./CompositeItem-C1TBmO7C.js";import"./ToolbarRootContext-BMoftUML.js";import"./getDisabledMountTransitionStyles-CxL3Vvt9.js";import"./getPseudoElementBounds-onX-prnH.js";import"./chevron-down-CK5zrnWf.js";import"./index-Dkfsiw2Q.js";import"./error-CURsrQzW.js";import"./BaseCbacBanner-Bs4zLZET.js";import"./makeExternalStore-DbUJkcpl.js";import"./Tooltip-CvfJtmeS.js";import"./PopoverPopup-DUKTqcMI.js";import"./toNumber-JUJV_keB.js";import"./useOsdkClient-7-pQGaTS.js";import"./tick-iTQoZWMT.js";import"./DropdownField-QDMJUed5.js";import"./withOsdkMetrics-NTh6_Y2c.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
