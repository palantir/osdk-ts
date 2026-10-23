import{f as p,j as e}from"./iframe-DKFdWtvL.js";import{O as i}from"./object-table-CwQF-Dvg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CE0EJEax.js";import"./Table-Cnic_cB3.js";import"./index-Zr7MzFSe.js";import"./Dialog-DJMUGRQJ.js";import"./cross-DwMbeucq.js";import"./svgIconContainer-mDDpTeTZ.js";import"./useBaseUiId-wiNmPbxB.js";import"./InternalBackdrop-CKISU8v0.js";import"./composite-Cu9id-g4.js";import"./index-CKHkcl8C.js";import"./index-BEWpIeZQ.js";import"./index-CMS4oCXy.js";import"./useEventCallback-CdZBxG17.js";import"./SkeletonBar-DudztDAH.js";import"./LoadingCell-0Z0FWm_3.js";import"./ColumnConfigDialog-CuArSFKY.js";import"./DraggableList-i9-ph0PR.js";import"./search-DRLDRoqN.js";import"./Input-veW-XqjJ.js";import"./useControlled-xNoP3k9v.js";import"./Button-DqI2Ud1s.js";import"./small-cross-DbCXQWOu.js";import"./ActionButton-Hgu8HEXX.js";import"./Checkbox-DOdBL_E2.js";import"./useValueChanged-DNoCn35O.js";import"./CollapsiblePanel-DFGZ9fUj.js";import"./MultiColumnSortDialog-Dug9W_Lj.js";import"./MenuTrigger-BV8zLsAt.js";import"./CompositeItem-BafBUoyW.js";import"./ToolbarRootContext-CrA7gaTE.js";import"./getDisabledMountTransitionStyles-DN20IWb_.js";import"./getPseudoElementBounds-Brijrk7L.js";import"./chevron-down-BKXttnNC.js";import"./index-Esiyv4F3.js";import"./error-D3OaIHY1.js";import"./BaseCbacBanner-BpbKfsaD.js";import"./makeExternalStore-De86ji-X.js";import"./Tooltip-tuRx1ZD5.js";import"./PopoverPopup-BZY02nqM.js";import"./debounce-BET9pivF.js";import"./useOsdkClient-oJ76J3S4.js";import"./tick-DJb0ub8N.js";import"./DropdownField-BJbaqXN1.js";import"./isEqual-CLy-jAf8.js";import"./withOsdkMetrics-DUGrXPH7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
