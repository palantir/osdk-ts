import{f as p,j as e}from"./iframe-DroyfEdp.js";import{O as i}from"./object-table-zvF5puNZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DE-s4jHf.js";import"./Table-DXM3Vmnd.js";import"./index-DKMli8iM.js";import"./Dialog-CLIsAuRE.js";import"./cross-BriOBw5J.js";import"./svgIconContainer-CAEQYwKx.js";import"./useBaseUiId-pK5yffkm.js";import"./InternalBackdrop-B8R4iyvE.js";import"./composite-CNL7aYdy.js";import"./index-CnNUuV9s.js";import"./index-C74kuOpO.js";import"./index-BJ1GCCCw.js";import"./useEventCallback-CM-KCUTe.js";import"./SkeletonBar-iXSzVjAk.js";import"./LoadingCell-OoDlRZi8.js";import"./ColumnConfigDialog-ta5VV2KO.js";import"./DraggableList-BWyXHPtW.js";import"./search-BjVtZrtO.js";import"./Input-CIFY8xRI.js";import"./useControlled-CyNj1h6c.js";import"./Button-DQlH9UOj.js";import"./small-cross-CpVAMOV5.js";import"./ActionButton-Bo5K6E7v.js";import"./Checkbox-AzHcXRs-.js";import"./useValueChanged-l9ugVdto.js";import"./CollapsiblePanel-XsDrNHSw.js";import"./MultiColumnSortDialog-Bf4BQuX_.js";import"./MenuTrigger-CBfIFjIR.js";import"./CompositeItem-Dn6R0SEl.js";import"./ToolbarRootContext-COAtqpEr.js";import"./getDisabledMountTransitionStyles-DYm48-D_.js";import"./getPseudoElementBounds-BIC4My0w.js";import"./chevron-down-CNLIjVlD.js";import"./index-DBslVvKA.js";import"./error-DXyNBqI3.js";import"./BaseCbacBanner-DlKrtvoz.js";import"./makeExternalStore-BCFNzFHX.js";import"./Tooltip-C6pHptAP.js";import"./PopoverPopup-D9izk2qS.js";import"./debounce-7vvo2FtY.js";import"./useOsdkClient-Dm16U9MA.js";import"./tick-CiJt-Vxn.js";import"./DropdownField-0LHmrOpE.js";import"./isEqual-a_9omfBa.js";import"./withOsdkMetrics-C_wBtmZt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
