import{f as n,j as t}from"./iframe-Baj4quOh.js";import{O as p}from"./object-table-j23Ixwfr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C_OitlJ6.js";import"./Table-hLxZ8jt9.js";import"./index-Q4qU6G5G.js";import"./Dialog-BsdD8rcf.js";import"./cross-Cx7FqWeo.js";import"./svgIconContainer-CsgxmVJX.js";import"./useBaseUiId-fhaoQTAN.js";import"./InternalBackdrop-BCJt-Vx6.js";import"./composite-C3M2PNVB.js";import"./index-uZz_nwe5.js";import"./index-BuLkE7J9.js";import"./index-DD1fGkfx.js";import"./useEventCallback-C_UrrXlj.js";import"./SkeletonBar-qsDGk_mf.js";import"./LoadingCell-DCrPGhZH.js";import"./ColumnConfigDialog-DMH03ksz.js";import"./DraggableList-ClGJpuT2.js";import"./search-DzRn76hI.js";import"./Input-D1Ff4O9g.js";import"./useControlled-CbgIzrGw.js";import"./Button-TO_HdB2E.js";import"./small-cross-Cik2VN25.js";import"./ActionButton-BcxVwgKC.js";import"./Checkbox-BN_IZAul.js";import"./useValueChanged-BVsxHPlo.js";import"./CollapsiblePanel-C_6ZooUo.js";import"./MultiColumnSortDialog-DAR3ukJ0.js";import"./MenuTrigger-B1Fv-2Q0.js";import"./CompositeItem-BcPnpCMU.js";import"./ToolbarRootContext-mcOzEY4U.js";import"./getDisabledMountTransitionStyles-hGSSIhFG.js";import"./getPseudoElementBounds-qck1bOqa.js";import"./chevron-down-2fbTO193.js";import"./index-BGp5-ojG.js";import"./error-DQZv8iv4.js";import"./BaseCbacBanner-CZMlLkdk.js";import"./makeExternalStore-UYlpadtJ.js";import"./Tooltip-BkN0Hgq2.js";import"./PopoverPopup-_wAJd2oU.js";import"./toNumber-k7Q67kPY.js";import"./useOsdkClient-BfyJAk7a.js";import"./tick-C-BVSOtX.js";import"./DropdownField-CspbxMNa.js";import"./withOsdkMetrics-D-yhAWwr.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
