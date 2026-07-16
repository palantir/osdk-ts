import{f as n,j as t}from"./iframe-ypGDbWmZ.js";import{O as p}from"./object-table-BLqoaWeA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DOKq-ADj.js";import"./Table-CulZMLU9.js";import"./index-Bb1fXhg6.js";import"./Dialog-B94zlqNn.js";import"./cross-BLrUbUvw.js";import"./svgIconContainer-DhmJGll4.js";import"./useBaseUiId-C3R3oVzO.js";import"./InternalBackdrop-C0bGJO9q.js";import"./composite-OPXoirfb.js";import"./index-Bz5FfFNw.js";import"./index-raFGnCfX.js";import"./index-BVfGFksJ.js";import"./useEventCallback-C-1d3yF2.js";import"./SkeletonBar-D4ufo65y.js";import"./LoadingCell-91Up5hyb.js";import"./ColumnConfigDialog-BkR9UzlO.js";import"./DraggableList-C_SdCB6N.js";import"./search-C-NpwX8I.js";import"./Input-BNwGntRi.js";import"./useControlled-BuHWxoI9.js";import"./isEqual-ZNB5jZBd.js";import"./isObject-rs-CAWBW.js";import"./Button-DGelSHBk.js";import"./ActionButton-DaDdkYzT.js";import"./Checkbox-BXWHAgfz.js";import"./useValueChanged-Bhv2IVu3.js";import"./CollapsiblePanel-BcxyJj68.js";import"./MultiColumnSortDialog-DtPRZvLt.js";import"./MenuTrigger-Dd5kqUMV.js";import"./CompositeItem-B2ZiZyws.js";import"./ToolbarRootContext-DKmaOtqD.js";import"./getDisabledMountTransitionStyles-CPJWweJg.js";import"./getPseudoElementBounds-B-gat87m.js";import"./chevron-down-Cl0J7uZD.js";import"./index-DkFWgfXu.js";import"./error-DNRz_71B.js";import"./BaseCbacBanner-CX9DhMMV.js";import"./makeExternalStore-CuxCTWSG.js";import"./Tooltip-Di4wCyUW.js";import"./PopoverPopup-QVu25NbU.js";import"./toNumber-lVujfo0b.js";import"./useOsdkClient-BzxrzH_M.js";import"./tick-Q9yCmvvA.js";import"./DropdownField-DlGwKjQ6.js";import"./withOsdkMetrics-G3X7P_JF.js";const er={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,er as default};
