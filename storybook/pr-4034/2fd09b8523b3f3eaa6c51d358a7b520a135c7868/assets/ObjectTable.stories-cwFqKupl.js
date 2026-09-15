import{j as i}from"./iframe-DuUcAaP1.js";import{O as p}from"./object-table-Dm_KZ43D.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BPB2V9Fv.js";import"./preload-helper-Cljs7IBf.js";import"./Table-IFeDj94S.js";import"./index-BMAxCDX5.js";import"./Dialog-MJluOa7D.js";import"./cross-DA3pEoMX.js";import"./svgIconContainer-D6Wl3-m9.js";import"./useBaseUiId-CfMTCz35.js";import"./InternalBackdrop-vDVdwV4k.js";import"./composite-D0tirFPb.js";import"./index-C7wdlZ1Q.js";import"./index-C8RlHGqn.js";import"./index-1IuyBqrn.js";import"./useEventCallback-DzTIRB0b.js";import"./SkeletonBar-BSOPCtS0.js";import"./LoadingCell-C21YoYGE.js";import"./ColumnConfigDialog-glg7uWEe.js";import"./DraggableList-D65kdgez.js";import"./search-B301Jn8l.js";import"./Input-ZBAaH2zD.js";import"./useControlled-hj_GBxd9.js";import"./Button-DYK5XWRq.js";import"./small-cross-DsR2FxNg.js";import"./ActionButton-4IxyZ6p9.js";import"./Checkbox-CAqcqw4h.js";import"./useValueChanged-DC9rBEqy.js";import"./CollapsiblePanel-B9wkvjE1.js";import"./MultiColumnSortDialog-K78lmReX.js";import"./MenuTrigger-Bbfe8Edv.js";import"./CompositeItem-t4AJuCm-.js";import"./ToolbarRootContext-USv7Hl-3.js";import"./getDisabledMountTransitionStyles-BMs-QQOr.js";import"./getPseudoElementBounds-CV4Ydp2d.js";import"./chevron-down-DyPw48Bz.js";import"./index-BdrLvqg1.js";import"./error-CQ18bNi9.js";import"./BaseCbacBanner-Dh_Doq3I.js";import"./makeExternalStore-CsrMhPRl.js";import"./Tooltip-kBgFTss4.js";import"./PopoverPopup-RFQNSErN.js";import"./debounce-XJRfHy2s.js";import"./useOsdkClient-CdO-nD-I.js";import"./tick-DZ3AsDHy.js";import"./DropdownField-Cb0RW1j-.js";import"./isEqual-BatthdD_.js";import"./withOsdkMetrics-C2TwiXMB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
