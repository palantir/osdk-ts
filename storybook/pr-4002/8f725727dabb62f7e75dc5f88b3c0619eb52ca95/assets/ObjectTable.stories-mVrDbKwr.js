import{j as i}from"./iframe-DeDsL1Xz.js";import{O as p}from"./object-table-CXBuoulD.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-E5MbsDAh.js";import"./preload-helper-BVBQesVt.js";import"./Table-C2qcYqvw.js";import"./index-BU8-F79N.js";import"./Dialog-D99dL4kL.js";import"./cross-jIk7qGHQ.js";import"./svgIconContainer-Aqj8Zd5l.js";import"./useBaseUiId-CQ4hkA7O.js";import"./InternalBackdrop-4afONjlA.js";import"./composite-BCcUbicN.js";import"./index-DoWEUVS1.js";import"./index-Cy0o1bod.js";import"./index-Dtahr6U8.js";import"./useEventCallback-CmDQnEvR.js";import"./SkeletonBar-1tazywhq.js";import"./LoadingCell-CmM8i9RW.js";import"./ColumnConfigDialog-DNpnrmLZ.js";import"./DraggableList-pPr8ghmD.js";import"./search-DyYzy_rN.js";import"./Input-W5uf4VNK.js";import"./useControlled-BbxyP0yd.js";import"./Button-B4hehT03.js";import"./small-cross-DQ2KEs4l.js";import"./ActionButton-DiAydvYe.js";import"./Checkbox-B58D9TWu.js";import"./useValueChanged-DBT53UD4.js";import"./CollapsiblePanel-Dk_vAxzI.js";import"./MultiColumnSortDialog-CkWr0sXr.js";import"./MenuTrigger-Dm7LqmlE.js";import"./CompositeItem-DHAlezUZ.js";import"./ToolbarRootContext-DhOdNxhK.js";import"./getDisabledMountTransitionStyles-BBa3Ka3T.js";import"./getPseudoElementBounds-DpElGvOE.js";import"./chevron-down-DuWqNP_i.js";import"./index-DG83v6db.js";import"./error-IDubZlnB.js";import"./BaseCbacBanner-DoaOzdxo.js";import"./makeExternalStore-v6gib538.js";import"./Tooltip-Ab0jMRiD.js";import"./PopoverPopup-D1st1umy.js";import"./debounce-BXSbFmiL.js";import"./useOsdkClient-CW853sZV.js";import"./tick-BDUK9RwE.js";import"./DropdownField-DNH1-jJL.js";import"./isEqual-CuyGmH72.js";import"./withOsdkMetrics-CfFdQ5R1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
