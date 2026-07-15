import{f as n,j as t}from"./iframe-CrtK0oGg.js";import{O as p}from"./object-table-Csf-HNoz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DUgvGLym.js";import"./Table-DWvIgvR2.js";import"./index-uDVvSurO.js";import"./Dialog-CzwhW7t7.js";import"./cross-BMeZsGb9.js";import"./svgIconContainer-BH74CJql.js";import"./useBaseUiId-iQl3YAIc.js";import"./InternalBackdrop-BZTNmoGD.js";import"./composite-C8gWpdiy.js";import"./index-DWFWT__H.js";import"./index-Crs6qkTJ.js";import"./index-uLu2sTPF.js";import"./useEventCallback-B_RZXuIt.js";import"./SkeletonBar-7pNzP4NQ.js";import"./LoadingCell-ZNbkC37r.js";import"./ColumnConfigDialog-DSu-GvIL.js";import"./DraggableList-Bzq9dkuT.js";import"./search-CtEzcMEF.js";import"./Input-Ba_HuI20.js";import"./useControlled-DlabaPsQ.js";import"./Button-6viTJ86W.js";import"./small-cross-6oWW93l8.js";import"./ActionButton-B9xqTVQ2.js";import"./Checkbox-DJTlOYa2.js";import"./useValueChanged-CnGECoDf.js";import"./CollapsiblePanel-B1uDIxCl.js";import"./MultiColumnSortDialog-DCKejx9Y.js";import"./MenuTrigger-BKlZVebT.js";import"./CompositeItem-Co2yt5E5.js";import"./ToolbarRootContext-Dz3VmV3-.js";import"./getDisabledMountTransitionStyles-Bpnc2Hcz.js";import"./getPseudoElementBounds-cn-iOE0y.js";import"./chevron-down-CsjhBaNM.js";import"./index-BkAsY935.js";import"./error-CUWTP8Pf.js";import"./BaseCbacBanner-CG78Rh2O.js";import"./makeExternalStore-8MSmvfdO.js";import"./Tooltip-9t3WSCcY.js";import"./PopoverPopup-DNx20VEC.js";import"./toNumber-DTsh0hDe.js";import"./useOsdkClient-Bpo5kVX2.js";import"./tick-DNwJ6E0Y.js";import"./DropdownField-BnyAf3cA.js";import"./withOsdkMetrics-DfAdNawF.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
