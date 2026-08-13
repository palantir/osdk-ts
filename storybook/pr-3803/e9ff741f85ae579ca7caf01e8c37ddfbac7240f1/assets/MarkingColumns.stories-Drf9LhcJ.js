import{f as p,j as e}from"./iframe-BYHcOnYC.js";import{O as i}from"./object-table-Ch24TxKl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-MS29zNf3.js";import"./Table-Budi2vR5.js";import"./index-CPW0YqJ1.js";import"./Dialog-BbfO80Zz.js";import"./cross-DcO4hFL4.js";import"./svgIconContainer-Cxrh5Db1.js";import"./useBaseUiId-RORmPNfM.js";import"./InternalBackdrop-CutR-Fy6.js";import"./composite-CiXZG6Yk.js";import"./index-BlYuIQd_.js";import"./index-D704UY4m.js";import"./index-XgtragRI.js";import"./useEventCallback-BCkMP6cG.js";import"./SkeletonBar-Bd1fWeO-.js";import"./LoadingCell-DVO5zLx6.js";import"./ColumnConfigDialog-BoaSxr7Y.js";import"./DraggableList-CfxTK_om.js";import"./search-DQmYjeD3.js";import"./Input-MJBSejsj.js";import"./useControlled-BTIUHun_.js";import"./isEqual-CNKLS4I8.js";import"./isObject-BwQfkHqy.js";import"./Button-9cPBIdv7.js";import"./ActionButton-8hzqk5h4.js";import"./Checkbox-Dc_BHEOM.js";import"./useValueChanged-BhFqJI-7.js";import"./CollapsiblePanel--su-kBcM.js";import"./MultiColumnSortDialog-BuJvTPmK.js";import"./MenuTrigger-BpEH-B1z.js";import"./CompositeItem-im0wuBUU.js";import"./ToolbarRootContext-BzowVjD3.js";import"./getDisabledMountTransitionStyles-c2dOjv9a.js";import"./getPseudoElementBounds-DI_0UEB4.js";import"./chevron-down-VM28Feil.js";import"./index-CQfeV39g.js";import"./error-DlU4geYq.js";import"./BaseCbacBanner-BkXevk_e.js";import"./makeExternalStore-BJqA2WUa.js";import"./Tooltip-BRRsXMkj.js";import"./PopoverPopup-BJkMqKU9.js";import"./toNumber-Tcx7OgeQ.js";import"./useOsdkClient-BbUW0UNC.js";import"./tick-BpZ0GiiH.js";import"./DropdownField-Dwwqa4qu.js";import"./withOsdkMetrics-Bxe5ZrJW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
