import{f as p,j as e}from"./iframe-CDXR5TiH.js";import{O as i}from"./object-table-Y-ZKWo4Y.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dl7TLzKT.js";import"./Table-DwGvkhwd.js";import"./index-BUlTo8si.js";import"./Dialog-CknkactG.js";import"./cross-BNFw8vL_.js";import"./svgIconContainer-DvE8o4ZI.js";import"./useBaseUiId-DQwBq2Ep.js";import"./InternalBackdrop-DlnunXky.js";import"./composite-DrLkfYl3.js";import"./index-DyQAqcSx.js";import"./index-DgZ9bURa.js";import"./index-x4aOtmip.js";import"./useEventCallback-B5U4l4Fa.js";import"./SkeletonBar-CRB2LJn0.js";import"./LoadingCell-B_wF0LOF.js";import"./ColumnConfigDialog-DDwygbq8.js";import"./DraggableList-DHDxCBbK.js";import"./search-B19UftdY.js";import"./Input-CpjIkFYJ.js";import"./useControlled-D1Q05_VM.js";import"./Button-BX5bEl7N.js";import"./small-cross-Dzb4rQCP.js";import"./ActionButton-CnTp065j.js";import"./Checkbox-CnY15wSu.js";import"./useValueChanged-B2pE4_D0.js";import"./CollapsiblePanel-BQrF_G1l.js";import"./MultiColumnSortDialog-CkySjwCK.js";import"./MenuTrigger-B9Ivl0ZW.js";import"./CompositeItem-BwsWbkWf.js";import"./ToolbarRootContext-DIR8ob_8.js";import"./getDisabledMountTransitionStyles-BD4bCjuO.js";import"./getPseudoElementBounds-d0kuGfS4.js";import"./chevron-down-D5h4llJH.js";import"./index-a1CxhX_F.js";import"./error-DB4Z3Bk1.js";import"./BaseCbacBanner-D4pC6ex0.js";import"./makeExternalStore-DS89lBNV.js";import"./Tooltip-qSG85F-j.js";import"./PopoverPopup-4v2nZ5OG.js";import"./debounce-jTnZ1WYt.js";import"./useOsdkClient-DHGjCNuj.js";import"./tick-DBGC9sWR.js";import"./DropdownField-DnLaVkF3.js";import"./isEqual-C-LTDJqP.js";import"./withOsdkMetrics-DTJ2dgc2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
