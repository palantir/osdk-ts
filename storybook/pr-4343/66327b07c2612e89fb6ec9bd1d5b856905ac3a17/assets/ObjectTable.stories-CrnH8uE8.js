import{j as i}from"./iframe-CwWTpKqE.js";import{O as p}from"./object-table-zJLOk_40.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Crl6yO4e.js";import"./preload-helper-B09VY0AV.js";import"./Table-BNWhTBV5.js";import"./index-ibAAsAIP.js";import"./Dialog-DZNa0wWF.js";import"./cross-DKdi2fit.js";import"./svgIconContainer-BQKxLrqz.js";import"./useBaseUiId-KfzYfEP4.js";import"./InternalBackdrop-Dn9iyTJK.js";import"./composite-BQxf11e7.js";import"./index-nzJ3ZmYt.js";import"./index-lXeJxgff.js";import"./index-DffI0gsz.js";import"./useEventCallback-D71N8cWx.js";import"./SkeletonBar-B52QORjF.js";import"./LoadingCell-Dl2kEIxe.js";import"./ColumnConfigDialog-CI6VqC0f.js";import"./DraggableList-C2W-z-be.js";import"./search-sqlqxwkc.js";import"./Input-Chlp8aHK.js";import"./useControlled-Bv0Nsxvt.js";import"./Button-CRkFmj-6.js";import"./small-cross-DyjyycKa.js";import"./ActionButton-CdyawS6Q.js";import"./Checkbox-DioX5sYb.js";import"./useValueChanged-KkTgGyCA.js";import"./CollapsiblePanel-ClyaxKWN.js";import"./MultiColumnSortDialog-DwtkYdDu.js";import"./MenuTrigger-CUjXgFgf.js";import"./CompositeItem-DdcfEsM9.js";import"./ToolbarRootContext-BpNk0gzp.js";import"./getDisabledMountTransitionStyles-C2q5byKc.js";import"./getPseudoElementBounds-COKxlhPa.js";import"./chevron-down-CndDBIBA.js";import"./index-Cf9g6rai.js";import"./error-DLpjz71D.js";import"./BaseCbacBanner-BpDeusrL.js";import"./makeExternalStore-BCW3G7rA.js";import"./Tooltip-DZcs6cWK.js";import"./isObject-CkJtIVIY.js";import"./debounce-BydD4alG.js";import"./useOsdkClient-DMY5woQL.js";import"./tick-Dt7zelIm.js";import"./DropdownField-D0XUXnSf.js";import"./isEqual-1SZ4U_aG.js";import"./_baseIsEqual-BHFmemS8.js";import"./withOsdkMetrics-CfTZp6DM.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
