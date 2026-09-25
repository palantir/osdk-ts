import{j as i}from"./iframe-BDbu9q2A.js";import{O as p}from"./object-table-r5KIudPw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B1EE0b-S.js";import"./preload-helper-D6UvTfT_.js";import"./Table-5Yml5Xs2.js";import"./index-DEdyH3XD.js";import"./Dialog--obHru8z.js";import"./cross-Bo4wpdXT.js";import"./svgIconContainer-BgjPZfOH.js";import"./useBaseUiId-CtmE4PNK.js";import"./InternalBackdrop-Dy4GWDNn.js";import"./composite-qafLk_f6.js";import"./index-pcLxGNcq.js";import"./index-D3cIaVh4.js";import"./index-xTMwd6_8.js";import"./useEventCallback-DUE__rea.js";import"./SkeletonBar-M79YPoFw.js";import"./LoadingCell-Yqu47OmZ.js";import"./ColumnConfigDialog-tZTWQZOk.js";import"./DraggableList-CZaqx5-r.js";import"./search-0NZlkEeX.js";import"./Input-D0XLj4En.js";import"./useControlled-BgF6R6qa.js";import"./Button-_DMppLDt.js";import"./small-cross-ByEHRRHU.js";import"./ActionButton-C9OU-BMe.js";import"./Checkbox-C0Ae0ETc.js";import"./useValueChanged-CHtKwLX1.js";import"./CollapsiblePanel-DZrk-vCV.js";import"./MultiColumnSortDialog-hYhH0G21.js";import"./MenuTrigger-DwKmIuV2.js";import"./CompositeItem-C6O1ODqo.js";import"./ToolbarRootContext-BVuL7AT2.js";import"./getDisabledMountTransitionStyles-B6rpAzbi.js";import"./getPseudoElementBounds-hadpdZ34.js";import"./chevron-down-CbFUQfJ_.js";import"./index-BlDxMK-s.js";import"./error-fH6ihPoO.js";import"./BaseCbacBanner-QJ9nuAqq.js";import"./makeExternalStore-BESDrPLk.js";import"./Tooltip-lyyHm0PB.js";import"./PopoverPopup--CBugPnx.js";import"./debounce-C0l7oIGH.js";import"./useOsdkClient-BZtGer6H.js";import"./tick-pXXOgXsW.js";import"./DropdownField-DE_NmpmO.js";import"./isEqual-CXEdjpTk.js";import"./withOsdkMetrics-B5onp4Cc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
