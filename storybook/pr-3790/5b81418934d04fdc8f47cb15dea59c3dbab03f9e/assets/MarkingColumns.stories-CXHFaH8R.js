import{f as p,j as e}from"./iframe-CGXoYzNm.js";import{O as i}from"./object-table-CDJRukBU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BIk0pbFW.js";import"./Table-_m0WJ524.js";import"./index-B-gIGFxM.js";import"./Dialog-B3tENyb1.js";import"./cross-CZLvPMyq.js";import"./svgIconContainer-C2yUySQD.js";import"./useBaseUiId-C9lxuB2E.js";import"./InternalBackdrop-C8oAvnCv.js";import"./composite-Djf7LOAP.js";import"./index-CgUoB6rh.js";import"./index-BsvWREke.js";import"./index-BElCNRLp.js";import"./useEventCallback-CX8TP_4U.js";import"./SkeletonBar-BqzKfT_o.js";import"./LoadingCell-wWZERl_W.js";import"./ColumnConfigDialog-CsNju5Yu.js";import"./DraggableList-CYH6t1FV.js";import"./search-BEs5Tf1l.js";import"./Input-DrVjLFlw.js";import"./useControlled-cr2h64km.js";import"./isEqual-DA2i7ag6.js";import"./isObject-B1jVfnC1.js";import"./Button-C7KwiNiL.js";import"./ActionButton-BGAEhQ3Z.js";import"./Checkbox-Bb8kDQc_.js";import"./useValueChanged-D3XdwU6I.js";import"./CollapsiblePanel-CW40sKj7.js";import"./MultiColumnSortDialog-w9tjiZja.js";import"./MenuTrigger-CdWn6Jeu.js";import"./CompositeItem-B6G0eofa.js";import"./ToolbarRootContext-CHmIfeJy.js";import"./getDisabledMountTransitionStyles-DLecrRJs.js";import"./getPseudoElementBounds-BvW4VCsl.js";import"./chevron-down-vvZtnb7b.js";import"./index-D3FEBDFq.js";import"./error-DhIsr36w.js";import"./BaseCbacBanner-uZzzZFEw.js";import"./makeExternalStore-C-D2sCmQ.js";import"./Tooltip-DqouU193.js";import"./PopoverPopup-wCz21lM9.js";import"./toNumber-rR3YkCjK.js";import"./useOsdkClient-CP_tnrVl.js";import"./tick-KBwgeRib.js";import"./DropdownField-DKcPGVTO.js";import"./withOsdkMetrics-BepqP3Ct.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
