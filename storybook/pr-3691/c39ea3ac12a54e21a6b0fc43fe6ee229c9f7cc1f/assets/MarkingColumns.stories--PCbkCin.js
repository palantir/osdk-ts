import{f as n,j as t}from"./iframe-CIOKnh8Y.js";import{O as p}from"./object-table-Dyv94P0V.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CxTGLae-.js";import"./Table-Cj2iUmo0.js";import"./index-DviZ6p37.js";import"./Dialog-jaBftH1d.js";import"./cross-hPNuRJt1.js";import"./svgIconContainer-tgoUQrBB.js";import"./useBaseUiId-BwNnw9h8.js";import"./InternalBackdrop-C9wkpZC1.js";import"./composite-mfuAD7zc.js";import"./index-aDrB57cO.js";import"./index-hV7zgoI_.js";import"./index-CgOajskJ.js";import"./useEventCallback-Do4XcILF.js";import"./SkeletonBar-DgIEwAao.js";import"./LoadingCell-DNrTfp66.js";import"./ColumnConfigDialog-06sELTwT.js";import"./DraggableList-DDIBwIPj.js";import"./search-NPO9ZctR.js";import"./Input-vo-yH0cr.js";import"./useControlled-8pQu5kKy.js";import"./Button-D3qKhovW.js";import"./small-cross-5RV99_q9.js";import"./ActionButton-BjB_08Jl.js";import"./Checkbox-DDWiGnf0.js";import"./useValueChanged-CkgDsemk.js";import"./CollapsiblePanel-CA5ufKdf.js";import"./MultiColumnSortDialog-BUwd9nbF.js";import"./MenuTrigger-BZ5Fxf0s.js";import"./CompositeItem-rwn7_Z3T.js";import"./ToolbarRootContext-SIyYjj0F.js";import"./getDisabledMountTransitionStyles-K5I-PVEW.js";import"./getPseudoElementBounds-C3M2Jrdy.js";import"./chevron-down-BoAnXeYV.js";import"./index-CCsc-d1B.js";import"./error-CFVkJ0Jb.js";import"./BaseCbacBanner-B5jkW8SR.js";import"./makeExternalStore-vt54oNBr.js";import"./Tooltip-a-4wsUgP.js";import"./PopoverPopup-BR-w2poR.js";import"./toNumber-f98vtDU3.js";import"./useOsdkClient-CjeVhyHQ.js";import"./tick-Sja2x-3M.js";import"./DropdownField-Bb70UE_s.js";import"./withOsdkMetrics-C8Dkr2u3.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
