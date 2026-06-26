import{f as n,j as t}from"./iframe-DC19xooj.js";import{O as p}from"./object-table-C7_wrU95.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BZ_IOEhy.js";import"./Table-CbiTV1VR.js";import"./index-_P8AfKQ3.js";import"./Dialog-BoZ-SbTp.js";import"./cross-CMeAD0T-.js";import"./svgIconContainer-BH_Zry2S.js";import"./useBaseUiId-Ba04pMfS.js";import"./InternalBackdrop-Dl9iDoUd.js";import"./composite-B2mHIuwH.js";import"./index-BEOGISTY.js";import"./index-DpR57bmZ.js";import"./index-CmnTyAXQ.js";import"./useEventCallback-BYbl8qoF.js";import"./SkeletonBar-B9s2Nf0I.js";import"./LoadingCell-s0FRmdFy.js";import"./ColumnConfigDialog-CgZYFXme.js";import"./DraggableList-BN5laZjs.js";import"./Input-37zCFm8R.js";import"./useControlled-CHm9sItW.js";import"./Button-FB3IBhGm.js";import"./small-cross-WEKm3dLe.js";import"./ActionButton-Di17nzc3.js";import"./Checkbox-OMqKQYfI.js";import"./minus-DYFkzZlj.js";import"./useValueChanged-rMhMUaM3.js";import"./caret-down-BGz7UjwA.js";import"./CollapsiblePanel-Bbofiw9Y.js";import"./MultiColumnSortDialog-DyFwSOly.js";import"./MenuTrigger-CsS_bRIs.js";import"./CompositeItem-CIhklEiu.js";import"./ToolbarRootContext-DRBgAPnJ.js";import"./getDisabledMountTransitionStyles-Bm3AtsIb.js";import"./getPseudoElementBounds-7A0Exn1x.js";import"./chevron-down-BYi9AOZa.js";import"./index-DS3D7O-s.js";import"./error-DFIPW5Q0.js";import"./BaseCbacBanner-Ded-sFOF.js";import"./makeExternalStore-Cg3qbtS4.js";import"./Tooltip-DoJBdxUH.js";import"./PopoverPopup-CPze6oDm.js";import"./toNumber-CvpobmZU.js";import"./useOsdkClient-Cl63KmAs.js";import"./DropdownField-D71IcPUc.js";import"./withOsdkMetrics-BYK11Mj0.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
