import{f as p,j as e}from"./iframe-DUenp6lH.js";import{O as i}from"./object-table-C48Ay4cH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BrQ2IwN3.js";import"./Table-RA08xR2E.js";import"./index-CR7YeDMv.js";import"./Dialog-Bi0-87L8.js";import"./cross-DwLsQDiH.js";import"./svgIconContainer-CPPwWmWb.js";import"./useBaseUiId-C5AD1Gq1.js";import"./InternalBackdrop-BOQvDSVB.js";import"./composite-cl-eg-Mr.js";import"./index-DiIhoR1V.js";import"./index-Ki6h912l.js";import"./index-DzdVgYkQ.js";import"./useEventCallback-DwkKTB_T.js";import"./SkeletonBar-CnPy04Zb.js";import"./LoadingCell-CyhhjVaS.js";import"./ColumnConfigDialog-CBsiNMD4.js";import"./DraggableList-DHAnIO9Z.js";import"./search-DYKYo547.js";import"./Input-D9S29-Xm.js";import"./useControlled-CqXkm6hT.js";import"./Button-HrxQOGa9.js";import"./small-cross-Gsoau07o.js";import"./ActionButton-DG7GAKjE.js";import"./Checkbox-KlXsCHME.js";import"./useValueChanged-BebdI0MG.js";import"./CollapsiblePanel-DyVSO9SW.js";import"./MultiColumnSortDialog-DNU6QNyT.js";import"./MenuTrigger-D0rdQJBG.js";import"./CompositeItem-C4zuFT9w.js";import"./ToolbarRootContext-CHqPptLt.js";import"./getDisabledMountTransitionStyles-B1jh3EhZ.js";import"./getPseudoElementBounds-DK2fCaAe.js";import"./chevron-down-iXJuV4q7.js";import"./index-CVMpflAU.js";import"./error-BN9liXL6.js";import"./BaseCbacBanner-D-Q2jttt.js";import"./makeExternalStore-8dLgdQIB.js";import"./Tooltip-B4-11Oly.js";import"./PopoverPopup-BoCkIIy2.js";import"./debounce-BqwG49z-.js";import"./useOsdkClient-ByG7-mm8.js";import"./tick-Bkdmgl55.js";import"./DropdownField-CKAcXByL.js";import"./isEqual-CuqW1eM_.js";import"./withOsdkMetrics-Zv84aaRv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
