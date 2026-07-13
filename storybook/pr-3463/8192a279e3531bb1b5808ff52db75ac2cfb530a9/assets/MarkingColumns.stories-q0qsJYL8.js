import{f as n,j as t}from"./iframe-C-UwW4DG.js";import{O as p}from"./object-table-BsVfNAmJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Db0XYIFl.js";import"./Table-siluBYMm.js";import"./index-DooFDgSw.js";import"./Dialog-CHq16UVE.js";import"./cross-C0jFn5SQ.js";import"./svgIconContainer-URl-rwet.js";import"./useBaseUiId-ClnYH1ug.js";import"./InternalBackdrop-7r1JThPf.js";import"./composite-Ypfb1Edk.js";import"./index-BcDdhWi-.js";import"./index-C555AqYe.js";import"./index-SeJE5K1u.js";import"./useEventCallback-mlqLfTOu.js";import"./SkeletonBar-DcJYy0af.js";import"./LoadingCell-Cas1PXJZ.js";import"./ColumnConfigDialog-Ce7QaykP.js";import"./DraggableList-BREzxWea.js";import"./search-DBoTeCbD.js";import"./Input-pe3OoF5W.js";import"./useControlled-TZvgmE5C.js";import"./Button-C5eVdiFy.js";import"./small-cross-DzcS9Sfk.js";import"./ActionButton-D8f08hWL.js";import"./Checkbox-DLPeEt5P.js";import"./useValueChanged-uSaOUwxj.js";import"./CollapsiblePanel-D1c5zj7J.js";import"./MultiColumnSortDialog-EDjUfL6p.js";import"./MenuTrigger-DKh9OuxX.js";import"./CompositeItem-CIDE_9zh.js";import"./ToolbarRootContext-CyZPcg8f.js";import"./getDisabledMountTransitionStyles-CnpEvHSU.js";import"./getPseudoElementBounds-CZJCNdSk.js";import"./chevron-down-BSTe-vxS.js";import"./index-C5XF08j0.js";import"./error-BfMTzUHm.js";import"./BaseCbacBanner-CFYRgQHF.js";import"./makeExternalStore-DrLBbM23.js";import"./Tooltip-BNdc_-gR.js";import"./PopoverPopup-DpKdHFZB.js";import"./toNumber-BIFpfNaH.js";import"./useOsdkClient-Bw1-1gYp.js";import"./tick--4nTmnEn.js";import"./DropdownField-lqpOA4_8.js";import"./withOsdkMetrics-B7RoOYcb.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
