import{j as i}from"./iframe-1EZc9Vvz.js";import{O as p}from"./object-table-F4LOopU4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DPgd-ewe.js";import"./preload-helper-CLuirsTV.js";import"./Table-CnSb0lhx.js";import"./index-BNjxneHe.js";import"./Dialog-CfNkR8cT.js";import"./cross-D233-9JU.js";import"./svgIconContainer-DddMQ667.js";import"./useBaseUiId-C0l4a2Ks.js";import"./InternalBackdrop-DC_5-L4z.js";import"./composite-DZuvf2CH.js";import"./index-wo0YcWBb.js";import"./index-GxQ4mgfe.js";import"./index-kMGF4pB_.js";import"./useEventCallback-CZdhbhrn.js";import"./SkeletonBar-Dp4ro8ef.js";import"./LoadingCell-zWNXnzaU.js";import"./ColumnConfigDialog-BmyLHU72.js";import"./DraggableList-DBWveP6P.js";import"./search-B7Z28YY3.js";import"./Input-CfmhHq2c.js";import"./useControlled-B4wso0gz.js";import"./Button-CyGBEuY5.js";import"./small-cross-C9WXcI7t.js";import"./ActionButton-0NE2jdyP.js";import"./Checkbox-DtYZgvl2.js";import"./useValueChanged-CpaHtHLE.js";import"./CollapsiblePanel-kRaCp6lQ.js";import"./MultiColumnSortDialog-C6n7GJqR.js";import"./MenuTrigger-D-uh_MYz.js";import"./CompositeItem-BEhpKQGd.js";import"./ToolbarRootContext-Dy97HIXP.js";import"./getDisabledMountTransitionStyles-CkQXgYap.js";import"./getPseudoElementBounds-BKtB6fyV.js";import"./chevron-down-x8-eEnGm.js";import"./index-yOGSpXNC.js";import"./error-DEyOyWdk.js";import"./BaseCbacBanner-C1xBi6T7.js";import"./makeExternalStore-QJC4cEbR.js";import"./Tooltip-DbozeTXw.js";import"./PopoverPopup-CM-aTsvn.js";import"./debounce-COI3MFvy.js";import"./useOsdkClient-CT0P5DcQ.js";import"./tick-DfyQF2qS.js";import"./DropdownField-OVJum9EQ.js";import"./isEqual-BxB9S4Ii.js";import"./withOsdkMetrics-4lDw3Mk4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
