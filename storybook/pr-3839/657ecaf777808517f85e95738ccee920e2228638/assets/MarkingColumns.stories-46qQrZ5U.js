import{f as p,j as e}from"./iframe-DbOzOGDn.js";import{O as i}from"./object-table-CnHgsnlH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CEOnTWAP.js";import"./Table-K52p4n9o.js";import"./index-Dg0aL1Ya.js";import"./Dialog-D-I0jKPM.js";import"./cross-p3kX_C4C.js";import"./svgIconContainer-BkMavql5.js";import"./useBaseUiId-BHeQMfEi.js";import"./InternalBackdrop-oULkb1ND.js";import"./composite-BwS7DM51.js";import"./index-DXhnYg4n.js";import"./index-CR6MxkSt.js";import"./index-CTUo3yCV.js";import"./useEventCallback-DlBcu5ho.js";import"./SkeletonBar-N1bXFhek.js";import"./LoadingCell-DrlWD_f-.js";import"./ColumnConfigDialog-NQ0ghzKG.js";import"./DraggableList-BdGFR88X.js";import"./search-B4i-bCdH.js";import"./Input-DhGctLIw.js";import"./useControlled-1SoxEbMs.js";import"./isEqual-CmtwWJaV.js";import"./isObject-YLlwJBkh.js";import"./Button-F6Bjz8AF.js";import"./ActionButton-H1WvZcF1.js";import"./Checkbox-DmJ7kxVi.js";import"./useValueChanged-fPXgHsVW.js";import"./CollapsiblePanel-J3B3q2NF.js";import"./MultiColumnSortDialog-DZdikWlT.js";import"./MenuTrigger-BqOdHhDk.js";import"./CompositeItem-BHfyFTGc.js";import"./ToolbarRootContext-BcsxKm3i.js";import"./getDisabledMountTransitionStyles-DpC69aQF.js";import"./getPseudoElementBounds-DcwtftU4.js";import"./chevron-down-DWiP-M1R.js";import"./index-CNFuF0v3.js";import"./error-AkXLsrSc.js";import"./BaseCbacBanner-Cy7-gQ95.js";import"./makeExternalStore-BRXhYe85.js";import"./Tooltip-DEmas6fX.js";import"./PopoverPopup-CZMDX-Af.js";import"./toNumber-DorZ4yjy.js";import"./useOsdkClient-DnKXdJAr.js";import"./tick-e1TkvrqX.js";import"./DropdownField-CR1fQbVR.js";import"./withOsdkMetrics-C0unEn4u.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
