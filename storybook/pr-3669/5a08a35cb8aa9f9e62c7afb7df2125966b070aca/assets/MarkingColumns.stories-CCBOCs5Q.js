import{f as n,j as t}from"./iframe-GU5huNjj.js";import{O as p}from"./object-table-DheV5bQe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D6IeEgQ3.js";import"./Table-DS8TeNKO.js";import"./index-CYANVHig.js";import"./Dialog-DLcOaada.js";import"./cross-0T0GobBU.js";import"./svgIconContainer-D6-dD1e3.js";import"./useBaseUiId-Dwu8RDil.js";import"./InternalBackdrop-H2UawJif.js";import"./composite-CMwYviem.js";import"./index-B1cF_57h.js";import"./index-DUK177OS.js";import"./index-CC-GLGWi.js";import"./useEventCallback-Gz8MA5HS.js";import"./SkeletonBar-tPJU2Yqt.js";import"./LoadingCell-DmSNMIpP.js";import"./ColumnConfigDialog-B0K-1ouk.js";import"./DraggableList-BkJMrE8E.js";import"./search-C9C0hb80.js";import"./Input-B3p4pAfD.js";import"./useControlled-Dwh0wJWj.js";import"./Button-BCwk1sjY.js";import"./small-cross-C3FbRn-m.js";import"./ActionButton-BMMUAvEu.js";import"./Checkbox-BODpKlU-.js";import"./useValueChanged-NaleUj53.js";import"./CollapsiblePanel-X6g9PlKU.js";import"./MultiColumnSortDialog-CGAObf3-.js";import"./MenuTrigger-CgMMfU7i.js";import"./CompositeItem-CLkBNBip.js";import"./ToolbarRootContext-C9yy8qxn.js";import"./getDisabledMountTransitionStyles-CzXpRrC1.js";import"./getPseudoElementBounds-lwfedBj1.js";import"./chevron-down-DZv0-fr0.js";import"./index-vwBXq9DG.js";import"./error-CVXM8CYg.js";import"./BaseCbacBanner-BthcCFzh.js";import"./makeExternalStore-OmdI1n8K.js";import"./Tooltip-8az9l4Mx.js";import"./PopoverPopup-JEQbuJTy.js";import"./toNumber-C0LaArO-.js";import"./useOsdkClient-CdofJnIu.js";import"./tick-C2rn8bvl.js";import"./DropdownField-DeH1RKzz.js";import"./withOsdkMetrics-D9Re_7zX.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
