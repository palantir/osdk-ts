import{j as i}from"./iframe-oqiETzjs.js";import{O as p}from"./object-table-rNXIHn5Q.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CRx7p4hm.js";import"./preload-helper-DY6GVQaH.js";import"./Table-BflKtP03.js";import"./index-ZtK2AEsr.js";import"./Dialog-Cz1Kh4Dd.js";import"./cross-CMMlEidH.js";import"./svgIconContainer-C-hQGfLn.js";import"./useBaseUiId-DB5E9Fa7.js";import"./InternalBackdrop-BD9FMsgH.js";import"./composite-DUWgXaax.js";import"./index-D6-tP7ey.js";import"./index-BcAnoDMR.js";import"./index-CDmWDyVL.js";import"./useEventCallback-CgLXQDBT.js";import"./SkeletonBar-BrsaaqIx.js";import"./LoadingCell-DZynjFCS.js";import"./ColumnConfigDialog-DWQC5Adn.js";import"./DraggableList-Zvqqdsz9.js";import"./search-Hb2jWcJP.js";import"./Input-DVeUb6S9.js";import"./useControlled-CGzg1vVh.js";import"./Button-BnpV_XVG.js";import"./small-cross-CVZbPmwP.js";import"./ActionButton-Br3jBZ8T.js";import"./Checkbox-CFStyuqq.js";import"./useValueChanged-DvOpzAYW.js";import"./CollapsiblePanel-BJpSAUrV.js";import"./MultiColumnSortDialog-CNdNiaKX.js";import"./MenuTrigger-D8dN5Oyb.js";import"./CompositeItem-D_YoAFpQ.js";import"./ToolbarRootContext-B7aYE2db.js";import"./getDisabledMountTransitionStyles-Df2F2xk8.js";import"./getPseudoElementBounds-XzSdEMVW.js";import"./chevron-down-B5wuH3n5.js";import"./index-Dg5Wo44B.js";import"./error-B914xSJQ.js";import"./BaseCbacBanner-DnRPWhLM.js";import"./makeExternalStore-BIBGwZYl.js";import"./Tooltip-BjFPs1Cw.js";import"./PopoverPopup-C_RplgjD.js";import"./debounce--r48Cn5x.js";import"./useOsdkClient-B_WbWNUS.js";import"./tick-Bf3wXGgd.js";import"./DropdownField-WW4hkpJ1.js";import"./isEqual-p6GWxLy9.js";import"./withOsdkMetrics-tcmfqEow.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
