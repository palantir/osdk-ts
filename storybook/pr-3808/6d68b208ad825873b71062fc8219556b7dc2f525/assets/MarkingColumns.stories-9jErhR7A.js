import{f as p,j as e}from"./iframe-DPcQ5jr3.js";import{O as i}from"./object-table-Cvi2wsSZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DaFFMXPg.js";import"./Table-JBCu0p6N.js";import"./index-BszcYN5m.js";import"./Dialog-DF8bCGRt.js";import"./cross-Ex3v7yAY.js";import"./svgIconContainer-knuh2bP-.js";import"./useBaseUiId-BfxjoMWT.js";import"./InternalBackdrop-BzDztsGv.js";import"./composite-cfOgAKY3.js";import"./index-Pgg50vLk.js";import"./index-D9X45JE7.js";import"./index-Iri7IIar.js";import"./useEventCallback-CaNhgfml.js";import"./SkeletonBar-C16aZ_fC.js";import"./LoadingCell-D9M7rjOe.js";import"./ColumnConfigDialog-Xzoir5jn.js";import"./DraggableList-B30YwC0o.js";import"./search-B1p0IMpD.js";import"./Input-D9StspzA.js";import"./useControlled-DdUaVlhi.js";import"./isEqual-CjzuMNVr.js";import"./isObject-CCdIJM0g.js";import"./Button-C7yoanwN.js";import"./ActionButton-DmcXermo.js";import"./Checkbox-DoBj_QBg.js";import"./useValueChanged-DgXaNmo2.js";import"./CollapsiblePanel-CwlNVmFC.js";import"./MultiColumnSortDialog-D5QJrZUi.js";import"./MenuTrigger-DxZ_38mw.js";import"./CompositeItem-DWSmEBV1.js";import"./ToolbarRootContext-DmbNoojd.js";import"./getDisabledMountTransitionStyles-2mqSuo-H.js";import"./getPseudoElementBounds-BxPMf3nx.js";import"./chevron-down-CMCQfOjD.js";import"./index-m3p1lG2O.js";import"./error-68oFQ-J3.js";import"./BaseCbacBanner-CWBS5cM7.js";import"./makeExternalStore-KDZTlrjP.js";import"./Tooltip-C-kXwqkE.js";import"./PopoverPopup-7zJxTzug.js";import"./toNumber-ClsUi4f1.js";import"./useOsdkClient-79jhrNfk.js";import"./tick-CLohUieJ.js";import"./DropdownField-Ih0KYJXy.js";import"./withOsdkMetrics-Bg5F8JCY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
