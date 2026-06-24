import{f as n,j as t}from"./iframe-Dzn6kDHO.js";import{O as p}from"./object-table-D10SY8fX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CRlsuczh.js";import"./Table-3u9UrNBz.js";import"./index-CEX8nlfg.js";import"./Dialog-DNZXCzqm.js";import"./cross-CsMHxOcR.js";import"./svgIconContainer-BmhFjX-L.js";import"./useBaseUiId-BpjaguWf.js";import"./InternalBackdrop-Bv8qjWz-.js";import"./composite-DF3FbZ-S.js";import"./index-5LWMefGz.js";import"./index-Bmd0oi7s.js";import"./index-CNDJl3KK.js";import"./useEventCallback-D1O_vli9.js";import"./SkeletonBar-D9Kgqx3Z.js";import"./LoadingCell-DsYjYj-s.js";import"./ColumnConfigDialog-BXXtNrhC.js";import"./DraggableList-D6n-gvbM.js";import"./Input-7CJvBmIT.js";import"./useControlled-BsUltM0i.js";import"./Button-CbW6_xWc.js";import"./small-cross-Bm51H3Dd.js";import"./ActionButton-CZ7rq0JS.js";import"./Checkbox-DejUO5FI.js";import"./minus-BmLS8zVi.js";import"./useValueChanged-CwVqej0E.js";import"./caret-down-Cio7LvdI.js";import"./CollapsiblePanel-DQ6kz8jo.js";import"./MultiColumnSortDialog-B2kW4fqZ.js";import"./MenuTrigger-BCYojwI8.js";import"./CompositeItem-B2w74juz.js";import"./ToolbarRootContext-C4WPhmtl.js";import"./getDisabledMountTransitionStyles-_1m8xHNl.js";import"./getPseudoElementBounds-48PxaARE.js";import"./chevron-down-CEoVaGMn.js";import"./index-D4WLF3MY.js";import"./error-Cra-TsCg.js";import"./BaseCbacBanner-CuKS9xn6.js";import"./makeExternalStore-DckJGkD9.js";import"./Tooltip-CirsdaLW.js";import"./PopoverPopup-BdR2SnFv.js";import"./toNumber-EUS_aOyW.js";import"./useOsdkClient-CIR-sJSq.js";import"./DropdownField-AZX0fWzL.js";import"./withOsdkMetrics-HM4n443P.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
