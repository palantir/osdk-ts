import{f as p,j as e}from"./iframe-cXUSCCB6.js";import{O as i}from"./object-table-6XnqKcwQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-adOW_bmV.js";import"./Table-DwvxmZRS.js";import"./index-DBMlmXL0.js";import"./Dialog-BdOgGv_w.js";import"./cross-DLTJIT7_.js";import"./svgIconContainer-tVdoUfqY.js";import"./useBaseUiId-CRVXGosA.js";import"./InternalBackdrop-D2TKBBWC.js";import"./composite-Do3saceV.js";import"./index-DUupLJDG.js";import"./index-defWb760.js";import"./index-BoQ-yDKy.js";import"./useEventCallback-C8yKHfi2.js";import"./SkeletonBar-C8cuZi-g.js";import"./LoadingCell-1tdnReNN.js";import"./ColumnConfigDialog-CoRjzqhL.js";import"./DraggableList-BxDpQ5QZ.js";import"./search-CJIpoAKT.js";import"./Input-CXM44AHw.js";import"./useControlled-DboXIBjA.js";import"./Button-0UL0G0NB.js";import"./small-cross-CaWrlcpM.js";import"./ActionButton-DhzZi43U.js";import"./Checkbox-BnvfGDrP.js";import"./useValueChanged-btkvjNa5.js";import"./CollapsiblePanel-Bg1TLScK.js";import"./MultiColumnSortDialog-DiFy_qi3.js";import"./MenuTrigger-u0wPTgmO.js";import"./CompositeItem-DJYWyjQd.js";import"./ToolbarRootContext-BXvi54FI.js";import"./getDisabledMountTransitionStyles-Dc3btUOj.js";import"./getPseudoElementBounds-B4b0mkX5.js";import"./chevron-down-CiiM93uJ.js";import"./index-Hhj64oQw.js";import"./error-BiDYwilF.js";import"./BaseCbacBanner--wVvfq6l.js";import"./makeExternalStore-CLMwzEq6.js";import"./Tooltip-EqI8EUoF.js";import"./PopoverPopup-B1qYlCLn.js";import"./debounce-DUeQK-_L.js";import"./useOsdkClient-Cw1zJZ0U.js";import"./tick-BOTkIjTY.js";import"./DropdownField-DKMtjVPQ.js";import"./isEqual-2_X_7Niv.js";import"./withOsdkMetrics-B49tYBTG.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
