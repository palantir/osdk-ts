import{j as i}from"./iframe-4W_gqfri.js";import{O as p}from"./object-table-9J7pqHDM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Chn0tc2O.js";import"./preload-helper-iH2eX15p.js";import"./Table-BjxlZ7nu.js";import"./index-BE7X2I8k.js";import"./Dialog-QjDlU9kM.js";import"./cross-DPXC28es.js";import"./svgIconContainer-DXl_IpNa.js";import"./useBaseUiId-CkmLLk3_.js";import"./InternalBackdrop-CUPpQvP1.js";import"./composite-iwN2p37r.js";import"./index-DIt5uu1h.js";import"./index-Xj4teAhO.js";import"./index-DOVruLCM.js";import"./useEventCallback-CfmYFYMZ.js";import"./SkeletonBar-Co4nSFIq.js";import"./LoadingCell-DoRpWxDA.js";import"./ColumnConfigDialog-CdVbA8k5.js";import"./DraggableList-C0lbi6DE.js";import"./search-BfzYHGGv.js";import"./Input-BayiWgWk.js";import"./useControlled-BKLbSuyG.js";import"./Button-DmhydU5X.js";import"./small-cross-brVItmZZ.js";import"./ActionButton-Qd3Ay8Ri.js";import"./Checkbox-06IyHyXP.js";import"./useValueChanged-7OtEnUZo.js";import"./CollapsiblePanel-CdkBP2mF.js";import"./MultiColumnSortDialog-Cc89E02k.js";import"./MenuTrigger-Cl4eIY0V.js";import"./CompositeItem-BflBgmdx.js";import"./ToolbarRootContext-DldxC3FJ.js";import"./getDisabledMountTransitionStyles-tXQmkZ9Q.js";import"./getPseudoElementBounds-CAzCOJ3L.js";import"./chevron-down-DAwV2NNc.js";import"./index-OuSfth0Z.js";import"./error-DvgnJEpu.js";import"./BaseCbacBanner-CA_tZLUE.js";import"./makeExternalStore-DcNKv6Lc.js";import"./Tooltip-D_C8QLsG.js";import"./PopoverPopup-BtHZXFbP.js";import"./debounce-WcXDhRUO.js";import"./useOsdkClient-Dm3jcQQp.js";import"./tick-fx0AyRna.js";import"./DropdownField-DY4lNhEH.js";import"./isEqual-BRRPuctS.js";import"./withOsdkMetrics-CNNLqNUF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
