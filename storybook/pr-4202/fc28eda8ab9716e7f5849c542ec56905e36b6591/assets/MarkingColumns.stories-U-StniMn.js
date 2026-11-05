import{f as p,j as e}from"./iframe-DbsqonCE.js";import{O as i}from"./object-table-DA5jSnwV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-j-tWLxPO.js";import"./Table-MNCymP4D.js";import"./index-BcP7gLrZ.js";import"./Dialog-0nGf99oK.js";import"./cross-CjgfYmIf.js";import"./svgIconContainer-dTQS0Q1O.js";import"./useBaseUiId-mLSoMawn.js";import"./InternalBackdrop-BBrETTbv.js";import"./composite-CWSSZekk.js";import"./index-BeGCx8DT.js";import"./index-sTgTffNL.js";import"./index-CPbyyhi1.js";import"./useEventCallback-C5plIhZm.js";import"./SkeletonBar-Cqg3iKwl.js";import"./LoadingCell-D9cR1_vu.js";import"./ColumnConfigDialog-C0IgpjCM.js";import"./DraggableList-D79YeOIz.js";import"./search-CKNMsX_Q.js";import"./Input-CUOKus6W.js";import"./useControlled-DjGJelPK.js";import"./Button-CuTOWFQU.js";import"./small-cross-Bz1qN0Fj.js";import"./ActionButton-eD9eoVja.js";import"./Checkbox-D2q5FQlq.js";import"./useValueChanged-DhjL6tSV.js";import"./CollapsiblePanel-CeGg5-MP.js";import"./MultiColumnSortDialog-DsApXviW.js";import"./MenuTrigger-BlokuDW_.js";import"./CompositeItem-ClfgExBb.js";import"./ToolbarRootContext-Dy_E221D.js";import"./getDisabledMountTransitionStyles-DjGsekTm.js";import"./getPseudoElementBounds-DTkCd2MG.js";import"./chevron-down-C_Jq6VbG.js";import"./index-CXVkt83A.js";import"./error-Cdk7CynS.js";import"./BaseCbacBanner-Bjo_DyOc.js";import"./makeExternalStore-C9jMv8gA.js";import"./Tooltip-DXmh_6cJ.js";import"./PopoverPopup-hUOJJqgD.js";import"./debounce-BsTQJeH4.js";import"./useOsdkClient-5br-viQH.js";import"./tick-Dw_xLuw5.js";import"./DropdownField-jTLe7uIN.js";import"./isEqual-C-a0ZU60.js";import"./withOsdkMetrics-D9Ly-VH2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
