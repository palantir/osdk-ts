import{f as p,j as e}from"./iframe-CJ4psHOg.js";import{O as i}from"./object-table-GRMKk6hj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CnvWLU9s.js";import"./Table-cMA2hIFX.js";import"./index-C3yQNnbT.js";import"./Dialog-BqlzrAU9.js";import"./cross-Bare-byH.js";import"./svgIconContainer-BaNWfr18.js";import"./useBaseUiId-DyrOymcM.js";import"./InternalBackdrop-DqSa3KH2.js";import"./composite-BxTUVSqW.js";import"./index-B0t-MH7Z.js";import"./index-Cld24Chi.js";import"./index-BmDdDnIx.js";import"./useEventCallback-dIcMHu5I.js";import"./SkeletonBar-ClzesOCU.js";import"./LoadingCell-CRcYa4DL.js";import"./ColumnConfigDialog-Clp3O73i.js";import"./DraggableList-DvYKoDc9.js";import"./search-B2UifxoD.js";import"./Input-C8hdlhUf.js";import"./useControlled-FXpF1HMA.js";import"./Button-23ABSMgl.js";import"./small-cross-BUvQb5Jp.js";import"./ActionButton-I4J4bzq7.js";import"./Checkbox-E2qT6viP.js";import"./useValueChanged-Eg63Arfo.js";import"./CollapsiblePanel-BPqkIw8T.js";import"./MultiColumnSortDialog-DacSDA-_.js";import"./MenuTrigger-C2UBxzqP.js";import"./CompositeItem-CwkxMYBx.js";import"./ToolbarRootContext-C-4jRAr6.js";import"./getDisabledMountTransitionStyles-CGJlU2Jf.js";import"./getPseudoElementBounds-BQVnQvY_.js";import"./chevron-down-BegRN8q-.js";import"./index-d1HP_js7.js";import"./error-Bn4V0LpQ.js";import"./BaseCbacBanner-D0ajWtjX.js";import"./makeExternalStore-CZxqc8La.js";import"./Tooltip-X1bNRoko.js";import"./PopoverPopup-ZyXkzEeN.js";import"./debounce-DtKena2t.js";import"./useOsdkClient-Bs3HId-B.js";import"./tick-CaD1yuR8.js";import"./DropdownField-DJtngQjG.js";import"./isEqual-BUIEKy8Q.js";import"./withOsdkMetrics-DlR5OldO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
