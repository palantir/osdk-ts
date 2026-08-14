import{j as i}from"./iframe-DYHiAth1.js";import{O as p}from"./object-table-DEWC-nn6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BjHBX4pw.js";import"./preload-helper-BP3stq1X.js";import"./Table-2K-cGukF.js";import"./index-CFqT-tg2.js";import"./Dialog-DQ4YCnYw.js";import"./cross-NVvu5W38.js";import"./svgIconContainer-CpmCT8qJ.js";import"./useBaseUiId-D0-MqLY3.js";import"./InternalBackdrop-CxXrMN-4.js";import"./composite-rM29Crwf.js";import"./index-CkiCmIU-.js";import"./index-BwwRvQBw.js";import"./index-DciWkXkh.js";import"./useEventCallback-DC29l974.js";import"./SkeletonBar-DYoISvdk.js";import"./LoadingCell-FtlHLmdg.js";import"./ColumnConfigDialog-ntW35Xqz.js";import"./DraggableList-DiqY5Ru2.js";import"./search-CQsEHw2u.js";import"./Input-_kt7fmI_.js";import"./useControlled-CC9eDEXu.js";import"./Button-BEfeLVww.js";import"./small-cross-DjRHx6o3.js";import"./ActionButton-92N3WJHq.js";import"./Checkbox-Cj0lmbVz.js";import"./useValueChanged-B4YQUOGh.js";import"./CollapsiblePanel-Cj4OFHRl.js";import"./MultiColumnSortDialog-D9iHHBDb.js";import"./MenuTrigger-picsPTWZ.js";import"./CompositeItem-BzTzzhBW.js";import"./ToolbarRootContext-DKtHKjj0.js";import"./getDisabledMountTransitionStyles-BgEZbX8N.js";import"./getPseudoElementBounds-BF9Su6Vc.js";import"./chevron-down-CN-or4pg.js";import"./index-Cw0Wnr-O.js";import"./error-5z49WPo0.js";import"./BaseCbacBanner-CJYJCrD1.js";import"./makeExternalStore-QtZrVkJy.js";import"./Tooltip-B5wcixUa.js";import"./PopoverPopup-of74B-iq.js";import"./debounce-DR7Pr710.js";import"./useOsdkClient-BQwErlmz.js";import"./tick-Di6EJAuo.js";import"./DropdownField-CGvMTI-U.js";import"./isEqual-CUVGUpjO.js";import"./withOsdkMetrics-0_t_tujb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
