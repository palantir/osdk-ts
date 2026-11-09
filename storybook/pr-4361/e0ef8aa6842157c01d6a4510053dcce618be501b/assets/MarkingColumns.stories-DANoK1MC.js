import{f as p,j as e}from"./iframe-CQjpYJVQ.js";import{O as i}from"./object-table-BmToVaRO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-5bhpmr97.js";import"./Table-DJBSUaTM.js";import"./index-zd6HXz9_.js";import"./Dialog-CM4XLviM.js";import"./cross-Deh5uDpB.js";import"./svgIconContainer-CE1ZQVk8.js";import"./useBaseUiId-jFZ68_bH.js";import"./InternalBackdrop-CTLp_BJs.js";import"./composite-D-zcsHj1.js";import"./index-CULyv4a8.js";import"./index-plWBun5g.js";import"./index-DSMMhLR-.js";import"./useEventCallback-eP2xfpVZ.js";import"./SkeletonBar-BOoh_hK9.js";import"./LoadingCell-DVXZLGmA.js";import"./ColumnConfigDialog-C74PQ5xm.js";import"./DraggableList-DKoTnVlC.js";import"./search-DStplL8v.js";import"./Input-BiPNpz_C.js";import"./useControlled-Ft9yJ31_.js";import"./Button-fOyW8XxT.js";import"./small-cross-DJff8L-H.js";import"./ActionButton-CnnTCenO.js";import"./Checkbox-CZm4gJDd.js";import"./useValueChanged-D_5yXDiE.js";import"./CollapsiblePanel-DOU8qtuA.js";import"./MultiColumnSortDialog-DWANlOyK.js";import"./MenuTrigger-91XlII8E.js";import"./CompositeItem-C0zU83Hu.js";import"./ToolbarRootContext-DqJWDTyy.js";import"./getDisabledMountTransitionStyles-YjHiHV9j.js";import"./getPseudoElementBounds-BLYD-n1h.js";import"./chevron-down-BDQkglqC.js";import"./index-RDlQB4dD.js";import"./error-BRCQmACx.js";import"./BaseCbacBanner-BvAKGDgp.js";import"./makeExternalStore-Cn0Nj4g1.js";import"./Tooltip-Dgp5uIQr.js";import"./isObject-uzU1Ylcp.js";import"./debounce-dJHnwnXb.js";import"./useOsdkClient-DD-lOblu.js";import"./tick-BHxlRL9h.js";import"./DropdownField-C1a46o93.js";import"./isEqual-C9gdny9X.js";import"./_baseIsEqual-DRNRy5kD.js";import"./withOsdkMetrics-By-ZCu6K.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
