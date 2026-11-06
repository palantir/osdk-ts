import{f as p,j as e}from"./iframe-CwWTpKqE.js";import{O as i}from"./object-table-zJLOk_40.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B09VY0AV.js";import"./Table-BNWhTBV5.js";import"./index-ibAAsAIP.js";import"./Dialog-DZNa0wWF.js";import"./cross-DKdi2fit.js";import"./svgIconContainer-BQKxLrqz.js";import"./useBaseUiId-KfzYfEP4.js";import"./InternalBackdrop-Dn9iyTJK.js";import"./composite-BQxf11e7.js";import"./index-nzJ3ZmYt.js";import"./index-lXeJxgff.js";import"./index-DffI0gsz.js";import"./useEventCallback-D71N8cWx.js";import"./SkeletonBar-B52QORjF.js";import"./LoadingCell-Dl2kEIxe.js";import"./ColumnConfigDialog-CI6VqC0f.js";import"./DraggableList-C2W-z-be.js";import"./search-sqlqxwkc.js";import"./Input-Chlp8aHK.js";import"./useControlled-Bv0Nsxvt.js";import"./Button-CRkFmj-6.js";import"./small-cross-DyjyycKa.js";import"./ActionButton-CdyawS6Q.js";import"./Checkbox-DioX5sYb.js";import"./useValueChanged-KkTgGyCA.js";import"./CollapsiblePanel-ClyaxKWN.js";import"./MultiColumnSortDialog-DwtkYdDu.js";import"./MenuTrigger-CUjXgFgf.js";import"./CompositeItem-DdcfEsM9.js";import"./ToolbarRootContext-BpNk0gzp.js";import"./getDisabledMountTransitionStyles-C2q5byKc.js";import"./getPseudoElementBounds-COKxlhPa.js";import"./chevron-down-CndDBIBA.js";import"./index-Cf9g6rai.js";import"./error-DLpjz71D.js";import"./BaseCbacBanner-BpDeusrL.js";import"./makeExternalStore-BCW3G7rA.js";import"./Tooltip-DZcs6cWK.js";import"./isObject-CkJtIVIY.js";import"./debounce-BydD4alG.js";import"./useOsdkClient-DMY5woQL.js";import"./tick-Dt7zelIm.js";import"./DropdownField-D0XUXnSf.js";import"./isEqual-1SZ4U_aG.js";import"./_baseIsEqual-BHFmemS8.js";import"./withOsdkMetrics-CfTZp6DM.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
