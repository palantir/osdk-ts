import{f as n,j as t}from"./iframe-Des8t2Az.js";import{O as p}from"./object-table-CTumchXK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BcWrTvAv.js";import"./index-Co5a_AvC.js";import"./Dialog-CDtnY8sy.js";import"./cross-Coxr0_XI.js";import"./svgIconContainer-hWb0Fl79.js";import"./useBaseUiId-C3JxYlFf.js";import"./InternalBackdrop-BGspajPU.js";import"./composite-GBweYFly.js";import"./index-DrDLy9L6.js";import"./index-BtFpKESY.js";import"./index-DqLXxkPo.js";import"./useEventCallback-DrAdehVO.js";import"./SkeletonBar-DsNWOsZ2.js";import"./LoadingCell-9RA0aZ8L.js";import"./ColumnConfigDialog-C3Bb8JEZ.js";import"./DraggableList-BsbDtIm6.js";import"./search-BMIEbG7h.js";import"./Input-DJPIkCHj.js";import"./useControlled-CxZXwXUz.js";import"./Button-D3yQD9f5.js";import"./small-cross-TVZS4uG8.js";import"./ActionButton-CcsO8KRJ.js";import"./Checkbox-E81pm8oy.js";import"./useValueChanged-j8AJLrNl.js";import"./CollapsiblePanel-BNk0_AEm.js";import"./MultiColumnSortDialog-CdT1vccn.js";import"./MenuTrigger-DBjXOeJt.js";import"./CompositeItem-Cy4qI2E9.js";import"./ToolbarRootContext-BilpdKjJ.js";import"./getDisabledMountTransitionStyles-CqaTyxCv.js";import"./getPseudoElementBounds-CJEFG-MB.js";import"./chevron-down-COAlsjLu.js";import"./index-CLt9yKFu.js";import"./error-11J-5iGh.js";import"./BaseCbacBanner-BIYw6KQ-.js";import"./makeExternalStore-um0-4jo2.js";import"./Tooltip-DabYaZgG.js";import"./PopoverPopup-BDAgPbBY.js";import"./toNumber-avZ_lO-D.js";import"./useOsdkClient-BO3xqqXm.js";import"./tick-S3Cxr8zw.js";import"./DropdownField-BR0qcjko.js";import"./withOsdkMetrics-QuH2RrzW.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
