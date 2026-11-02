import{f as p,j as e}from"./iframe-bA068ynB.js";import{O as i}from"./object-table-BOJPUH3M.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C9VsmxhQ.js";import"./Table-QfQxDgch.js";import"./index-DBROM1hX.js";import"./Dialog-zP62slpV.js";import"./cross-Bkk1ngCc.js";import"./svgIconContainer-ImDrBsfn.js";import"./useBaseUiId-BMBSefl3.js";import"./InternalBackdrop-CAp1E-tm.js";import"./composite-HNoPL5_Y.js";import"./index-rNZjrxqa.js";import"./index-NJJaf9yA.js";import"./index-B_XB1-MU.js";import"./useEventCallback-l7OAvfu_.js";import"./SkeletonBar-CPuvZGqb.js";import"./LoadingCell-BOttGxxP.js";import"./ColumnConfigDialog-AWh268ua.js";import"./DraggableList-3qYbN4Vj.js";import"./search-bHymEml7.js";import"./Input-Ca6oOOwx.js";import"./useControlled-Cpl65TMC.js";import"./Button-Dqcog7jP.js";import"./small-cross-BNxAoOIY.js";import"./ActionButton-DZrngljD.js";import"./Checkbox-DkUamXVL.js";import"./useValueChanged-g4lOY34t.js";import"./CollapsiblePanel-DlBdk-qD.js";import"./MultiColumnSortDialog-XZXFn790.js";import"./MenuTrigger-BhVkwwlK.js";import"./CompositeItem-yupHDpkm.js";import"./ToolbarRootContext-CUI-NHrb.js";import"./getDisabledMountTransitionStyles-GSnN3fW6.js";import"./getPseudoElementBounds-kM-G-LqQ.js";import"./chevron-down-C3KFPXv7.js";import"./index-BpjGzWVl.js";import"./error-BWkfH6c5.js";import"./BaseCbacBanner-B0HhO3pu.js";import"./makeExternalStore-VPZ76tFl.js";import"./Tooltip-KSItXnvL.js";import"./PopoverPopup-B2AfGcIN.js";import"./debounce-z6aUSNpd.js";import"./useOsdkClient-C4faDiEE.js";import"./tick-wfH5aW9V.js";import"./DropdownField-D4gWGmzj.js";import"./isEqual-Jfqc8hVd.js";import"./withOsdkMetrics-CtZfcEFb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
