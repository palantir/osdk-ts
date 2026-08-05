import{j as i}from"./iframe-DZKZRMfI.js";import{O as p}from"./object-table-BsWjOEgt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CLPF0nZ2.js";import"./preload-helper-CyDM0kIy.js";import"./Table-U9dRKIWF.js";import"./index-UHNo6JXh.js";import"./Dialog-C9zFjDwL.js";import"./cross-7qoEAdfk.js";import"./svgIconContainer-C1JqEOuF.js";import"./useBaseUiId-BrAP3Vhg.js";import"./InternalBackdrop-Bd1Fm7m7.js";import"./composite-Wbt-b0Wx.js";import"./index-BcZyi5e5.js";import"./index-GUxQVV6o.js";import"./index-DuUfF7np.js";import"./useEventCallback-ZFvhVecb.js";import"./SkeletonBar-B4noTuJE.js";import"./LoadingCell-jvnZxHuU.js";import"./ColumnConfigDialog-CWL9Lvpm.js";import"./DraggableList-QUK3qw-p.js";import"./search-BMN_5avI.js";import"./Input-DAp8ZrwB.js";import"./useControlled-Dg2uTPRC.js";import"./isEqual-B35GUBBd.js";import"./isObject-CZrcnf8_.js";import"./Button-Clu6RzPE.js";import"./ActionButton-DV1gQ_3M.js";import"./Checkbox-DvrL_Cuc.js";import"./useValueChanged-CES4Mr1K.js";import"./CollapsiblePanel-ChxW3qwi.js";import"./MultiColumnSortDialog-Bnt2nhz5.js";import"./MenuTrigger-DM0YWJsi.js";import"./CompositeItem-BToRPTQx.js";import"./ToolbarRootContext-DRj1zGHd.js";import"./getDisabledMountTransitionStyles-BKGiXkNj.js";import"./getPseudoElementBounds-CnkNCKmG.js";import"./chevron-down-B-VJcggY.js";import"./index-CzSoEYKc.js";import"./error-BGz2U_dj.js";import"./BaseCbacBanner-DlYIXUuu.js";import"./makeExternalStore-BdBWg-q-.js";import"./Tooltip-m2lNKbbq.js";import"./PopoverPopup-rf4F-xS_.js";import"./toNumber-C0YbIGo7.js";import"./useOsdkClient-BeGqXuUC.js";import"./tick-Cf7fJ5Zm.js";import"./DropdownField-Cmzd4G9b.js";import"./withOsdkMetrics-hhq9mBBz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
