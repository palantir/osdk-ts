import{j as i}from"./iframe-DFGm32Bw.js";import{O as p}from"./object-table-DAoukbAL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CfRqJLE_.js";import"./preload-helper-fy9m8Fnq.js";import"./Table-C-2dN_9g.js";import"./index-DjqFaeTC.js";import"./Dialog-JVhmUD0b.js";import"./cross-DnLg4Ct0.js";import"./svgIconContainer-D-V_MVwY.js";import"./useBaseUiId-DYKNlNgP.js";import"./InternalBackdrop-DMMzhES7.js";import"./composite-B4OJQV7f.js";import"./index-FvgKhH5U.js";import"./index-DyySrusV.js";import"./index-BtNh-TEb.js";import"./useEventCallback-D-auj4HH.js";import"./SkeletonBar-BnB7SRxp.js";import"./LoadingCell-CRI7SY5l.js";import"./ColumnConfigDialog-BcB0_qFv.js";import"./DraggableList-CrzviJA-.js";import"./search-DNzannB5.js";import"./Input-DL-Ka-L9.js";import"./useControlled-DGRdFYYN.js";import"./Button-DZG39NOd.js";import"./small-cross-D1IQ7GLs.js";import"./ActionButton-DvfQCjtU.js";import"./Checkbox-f6-CCXnM.js";import"./useValueChanged-Cy-yyTWd.js";import"./CollapsiblePanel-BUe5kDOz.js";import"./MultiColumnSortDialog-PFk6lrkl.js";import"./MenuTrigger-D4X0o3Kq.js";import"./CompositeItem-BNbv7BXO.js";import"./ToolbarRootContext-8KEPzI9b.js";import"./getDisabledMountTransitionStyles-Bp5WDZ4V.js";import"./getPseudoElementBounds-opeseqFO.js";import"./chevron-down-PQvYLt7R.js";import"./index-CNgLBIA9.js";import"./error-Ce5TqXqV.js";import"./BaseCbacBanner-BHUG4D8Y.js";import"./makeExternalStore-C_KPNZSJ.js";import"./Tooltip-gJq75AB8.js";import"./PopoverPopup-DcPuDwsK.js";import"./debounce-CGY3R00a.js";import"./useOsdkClient-DRvI5chP.js";import"./tick-BLcfeptW.js";import"./DropdownField-DRjEtpTz.js";import"./isEqual-BobN_a0F.js";import"./withOsdkMetrics-DGoS0Q7x.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
