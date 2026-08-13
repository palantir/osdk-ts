import{j as i}from"./iframe-BYHcOnYC.js";import{O as p}from"./object-table-Ch24TxKl.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BR8LrDZX.js";import"./preload-helper-MS29zNf3.js";import"./Table-Budi2vR5.js";import"./index-CPW0YqJ1.js";import"./Dialog-BbfO80Zz.js";import"./cross-DcO4hFL4.js";import"./svgIconContainer-Cxrh5Db1.js";import"./useBaseUiId-RORmPNfM.js";import"./InternalBackdrop-CutR-Fy6.js";import"./composite-CiXZG6Yk.js";import"./index-BlYuIQd_.js";import"./index-D704UY4m.js";import"./index-XgtragRI.js";import"./useEventCallback-BCkMP6cG.js";import"./SkeletonBar-Bd1fWeO-.js";import"./LoadingCell-DVO5zLx6.js";import"./ColumnConfigDialog-BoaSxr7Y.js";import"./DraggableList-CfxTK_om.js";import"./search-DQmYjeD3.js";import"./Input-MJBSejsj.js";import"./useControlled-BTIUHun_.js";import"./isEqual-CNKLS4I8.js";import"./isObject-BwQfkHqy.js";import"./Button-9cPBIdv7.js";import"./ActionButton-8hzqk5h4.js";import"./Checkbox-Dc_BHEOM.js";import"./useValueChanged-BhFqJI-7.js";import"./CollapsiblePanel--su-kBcM.js";import"./MultiColumnSortDialog-BuJvTPmK.js";import"./MenuTrigger-BpEH-B1z.js";import"./CompositeItem-im0wuBUU.js";import"./ToolbarRootContext-BzowVjD3.js";import"./getDisabledMountTransitionStyles-c2dOjv9a.js";import"./getPseudoElementBounds-DI_0UEB4.js";import"./chevron-down-VM28Feil.js";import"./index-CQfeV39g.js";import"./error-DlU4geYq.js";import"./BaseCbacBanner-BkXevk_e.js";import"./makeExternalStore-BJqA2WUa.js";import"./Tooltip-BRRsXMkj.js";import"./PopoverPopup-BJkMqKU9.js";import"./toNumber-Tcx7OgeQ.js";import"./useOsdkClient-BbUW0UNC.js";import"./tick-BpZ0GiiH.js";import"./DropdownField-Dwwqa4qu.js";import"./withOsdkMetrics-Bxe5ZrJW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
