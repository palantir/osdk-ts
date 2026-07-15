import{f as n,j as t}from"./iframe-dtQGF2H8.js";import{O as p}from"./object-table-I88mk49v.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BWpFyzI-.js";import"./Table-B3evzDXu.js";import"./index-La2oWZLR.js";import"./Dialog-BPuYjqOd.js";import"./cross-BjzqCDqF.js";import"./svgIconContainer-DHcHrD2t.js";import"./useBaseUiId-Azsu5E94.js";import"./InternalBackdrop-DfVy9Nt5.js";import"./composite-CeuAcLgt.js";import"./index-Cp83hyWP.js";import"./index-CBKOlPq_.js";import"./index-BEdoipx_.js";import"./useEventCallback-CYp-Yp9S.js";import"./SkeletonBar-Bk5hUi7n.js";import"./LoadingCell-B1BJR1f_.js";import"./ColumnConfigDialog-BFYX2Mij.js";import"./DraggableList-C4NL5m1E.js";import"./search-CPkCqnH_.js";import"./Input-CaHZesQ6.js";import"./useControlled-DThz--pU.js";import"./Button-eBJ6jWEy.js";import"./small-cross-CHroNWjp.js";import"./ActionButton-CJMHD3_A.js";import"./Checkbox-D0fvJ4FZ.js";import"./useValueChanged-B427uuEJ.js";import"./CollapsiblePanel-DuFiAF44.js";import"./MultiColumnSortDialog-Cq3lRWOR.js";import"./MenuTrigger-Cx8sIruQ.js";import"./CompositeItem-CzqPG5V9.js";import"./ToolbarRootContext-DHEUMd4X.js";import"./getDisabledMountTransitionStyles-DdKjbuyV.js";import"./getPseudoElementBounds-BWl9KYrf.js";import"./chevron-down-BkVScMkI.js";import"./index-BrHrBPS0.js";import"./error-DvPjLIxS.js";import"./BaseCbacBanner-dza1xV9m.js";import"./makeExternalStore-CaYFwkGE.js";import"./Tooltip-Cu2WOHRo.js";import"./PopoverPopup-YsRpxEHV.js";import"./toNumber-D0-z6_k5.js";import"./useOsdkClient-B-4BJfqs.js";import"./tick-CVjOIY9V.js";import"./DropdownField-xr5OBmUK.js";import"./withOsdkMetrics-B0_3LDNQ.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
