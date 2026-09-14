import{j as i}from"./iframe-DNB7pKwx.js";import{O as p}from"./object-table-NhqJjfhz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-IAGY_3BF.js";import"./preload-helper-zsyjqppt.js";import"./Table-6ooXf9WE.js";import"./index-CO8W_kBY.js";import"./Dialog-CXIS6D4l.js";import"./cross-Z_Cymmuf.js";import"./svgIconContainer-C0yR1K-j.js";import"./useBaseUiId-CFk2utP-.js";import"./InternalBackdrop-CIfMg3nl.js";import"./composite-Bsz5rAKx.js";import"./index-Cw7J0xRI.js";import"./index-BWzAq-lx.js";import"./index-ByG_Kyzm.js";import"./useEventCallback-TZn-4x3i.js";import"./SkeletonBar-w-Qq4Ert.js";import"./LoadingCell-C9GMa5FX.js";import"./ColumnConfigDialog-nfmzFuly.js";import"./DraggableList-BNjC8l2T.js";import"./search-B9wO7VDL.js";import"./Input-D7pQEHrn.js";import"./useControlled-CZirorca.js";import"./Button-HIyOMk5a.js";import"./small-cross-Cm5tY5N1.js";import"./ActionButton-BDTx-Qbk.js";import"./Checkbox-Cw-ak7s5.js";import"./useValueChanged-CqJ9Z422.js";import"./CollapsiblePanel-B-v-suKQ.js";import"./MultiColumnSortDialog-BBCRPuIP.js";import"./MenuTrigger-ZMUMiY9J.js";import"./CompositeItem-DZ0O8IVJ.js";import"./ToolbarRootContext-Bsj6zD7P.js";import"./getDisabledMountTransitionStyles-C1tq72oP.js";import"./getPseudoElementBounds-C6kDNpun.js";import"./chevron-down-DkSb3Fq2.js";import"./index-B7VbqBWX.js";import"./error-DTTI1i1g.js";import"./BaseCbacBanner-6LauhKz6.js";import"./makeExternalStore-rGxpfiad.js";import"./Tooltip-CPCusgxO.js";import"./PopoverPopup-CBmLhNWS.js";import"./debounce-o7CNYw6i.js";import"./useOsdkClient-DLQVDV9-.js";import"./tick-avU0SFao.js";import"./DropdownField-BbJfNZO2.js";import"./isEqual-DDNJ2-ln.js";import"./withOsdkMetrics-aAvnjy0e.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
