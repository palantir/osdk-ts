import{f as n,j as t}from"./iframe-BdVamoeG.js";import{O as p}from"./object-table-BfuEkomR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dye3EO5e.js";import"./Table-nADog-9Q.js";import"./index-DuW1XknK.js";import"./Dialog-EsWbjWp0.js";import"./cross-_ryZ0HJ8.js";import"./svgIconContainer-Cu8qhMAy.js";import"./useBaseUiId-C2AcVyH_.js";import"./InternalBackdrop-CwPOB4M-.js";import"./composite-CE_k4VJ_.js";import"./index-BkHR2uR4.js";import"./index-C2-3XFYc.js";import"./index-CofVZtm0.js";import"./useEventCallback-CwSwR97T.js";import"./SkeletonBar-D5P7N9S8.js";import"./LoadingCell-WZvLGDSF.js";import"./ColumnConfigDialog-8itlYiid.js";import"./DraggableList-7GGzXSgR.js";import"./search-BUrwIQwE.js";import"./Input-COSsUxY7.js";import"./useControlled-DtLfw4KF.js";import"./Button-DgF6VF4p.js";import"./small-cross-0RJUhrTi.js";import"./ActionButton-CFfFC32u.js";import"./Checkbox-CVPMe_Qq.js";import"./useValueChanged-CtTLAlwG.js";import"./CollapsiblePanel-CwS0rpOF.js";import"./MultiColumnSortDialog-BfzBEpnu.js";import"./MenuTrigger-ZqTgETJa.js";import"./CompositeItem-uLqgt7zO.js";import"./ToolbarRootContext-DI6SIN63.js";import"./getDisabledMountTransitionStyles-BFK3lfLB.js";import"./getPseudoElementBounds-DRB1feQZ.js";import"./chevron-down-VlFmUn0p.js";import"./index-zD8e3upo.js";import"./error-fKbIgIk_.js";import"./BaseCbacBanner-C4MD5vW4.js";import"./makeExternalStore-BSWGLQXv.js";import"./Tooltip-BS_wYXbH.js";import"./PopoverPopup-DBa6XEP1.js";import"./toNumber-DWHFqoZ9.js";import"./useOsdkClient-DYCIb1h1.js";import"./tick-CUu48cDh.js";import"./DropdownField-CW85attA.js";import"./withOsdkMetrics-N3-MvQLc.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
