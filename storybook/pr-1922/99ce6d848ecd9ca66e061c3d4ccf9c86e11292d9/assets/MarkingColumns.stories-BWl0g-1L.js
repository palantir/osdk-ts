import{f as p,j as e}from"./iframe-Cit8dWXp.js";import{O as i}from"./object-table-CLprNm-d.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CCWrzc8D.js";import"./Table-BVpt2fUo.js";import"./index-DjKRvWyY.js";import"./Dialog-Be2F3-FV.js";import"./cross-gQNsGHqK.js";import"./svgIconContainer-CnhTjGYI.js";import"./useBaseUiId-DYvasBbv.js";import"./InternalBackdrop-CHY-7UBX.js";import"./composite-BgoZwE_5.js";import"./index-keZnzdM5.js";import"./index-BWFrdUWl.js";import"./index-BVRufQb7.js";import"./useEventCallback-C9HAZCRG.js";import"./SkeletonBar-u4-76qTo.js";import"./LoadingCell-nBjE1ndy.js";import"./ColumnConfigDialog-BWi2X-eS.js";import"./DraggableList-D2uNEbk7.js";import"./search-BOSFG60z.js";import"./Input-D4pO2QO0.js";import"./useControlled-D1zi4BZe.js";import"./isEqual-CFsLy166.js";import"./isObject-DIwas83d.js";import"./Button-Dq2cEP2I.js";import"./ActionButton-4Aw8VsKu.js";import"./Checkbox-DHQAVcVh.js";import"./useValueChanged-nr9Fn3vC.js";import"./CollapsiblePanel-ChQIa99W.js";import"./MultiColumnSortDialog-C2OT4-v6.js";import"./MenuTrigger-uIFIt69N.js";import"./CompositeItem-BbrpyRMV.js";import"./ToolbarRootContext-N4iCvs8E.js";import"./getDisabledMountTransitionStyles-Cs5mf5KU.js";import"./getPseudoElementBounds-BK_ei7WU.js";import"./chevron-down-grDpNC0P.js";import"./index-DTPUrDLg.js";import"./error-CsqJDmzd.js";import"./BaseCbacBanner-BlBv9MrF.js";import"./makeExternalStore-DCWmOVk3.js";import"./Tooltip-DG1w5Z16.js";import"./PopoverPopup-BuX_5jbW.js";import"./toNumber-D-wCb8lw.js";import"./useOsdkClient-stsJawmz.js";import"./tick-Cn-ugVOT.js";import"./DropdownField-X_4V0sjX.js";import"./withOsdkMetrics-DjoWeLgm.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
