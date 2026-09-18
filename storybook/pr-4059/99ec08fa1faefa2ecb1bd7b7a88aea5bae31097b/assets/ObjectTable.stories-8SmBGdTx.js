import{j as i}from"./iframe-CCVL4Idp.js";import{O as p}from"./object-table-LApLy7sh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B6dmRL_n.js";import"./preload-helper-Bfdvow4t.js";import"./Table-y5i6iDQ6.js";import"./index-CqRYjhYr.js";import"./Dialog-CsuSO74f.js";import"./cross-Bpaou5px.js";import"./svgIconContainer-DLYZviFk.js";import"./useBaseUiId-CNDNQCax.js";import"./InternalBackdrop-BOLrYZlT.js";import"./composite-8_zPWC08.js";import"./index-f-mV_Lh2.js";import"./index-CuMFdNkD.js";import"./index-D1XSNP8S.js";import"./useEventCallback-DNycK2kG.js";import"./SkeletonBar-BQkCbvbz.js";import"./LoadingCell-DKZD2fy5.js";import"./ColumnConfigDialog-BCU4b9nD.js";import"./DraggableList-BWmJYQFV.js";import"./search-C00pZ1Ly.js";import"./Input-Cn7fB1Ph.js";import"./useControlled-wuiuTdj_.js";import"./Button-DYSDt2wl.js";import"./small-cross-D_IDVYYi.js";import"./ActionButton-BoQK0oCg.js";import"./Checkbox-CTiOjQ-V.js";import"./useValueChanged-B0V7HCrV.js";import"./CollapsiblePanel-BdSR7VOY.js";import"./MultiColumnSortDialog-Bz146-0u.js";import"./MenuTrigger-BwcpBOF1.js";import"./CompositeItem-BVwr5vb2.js";import"./ToolbarRootContext-B9eib1V0.js";import"./getDisabledMountTransitionStyles-DsWKjHfV.js";import"./getPseudoElementBounds-B1H8xoBN.js";import"./chevron-down-Ve2FZYZx.js";import"./index-BsgThsOD.js";import"./error-DNOpGdYX.js";import"./BaseCbacBanner-y0OozxMj.js";import"./makeExternalStore-Bx0vFg8y.js";import"./Tooltip-155_4Sip.js";import"./PopoverPopup-ChuxaA1C.js";import"./debounce-DHu_JVgk.js";import"./useOsdkClient-C1izoF8E.js";import"./tick-BXHEK5fI.js";import"./DropdownField-B-zXvzEE.js";import"./isEqual-Do9DtU8-.js";import"./withOsdkMetrics-BTy9Ees1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
