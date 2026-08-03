import{j as i}from"./iframe-HIMvOqvp.js";import{O as p}from"./object-table-D-WNchmf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-N_G7DbG-.js";import"./preload-helper-CEnOtJNC.js";import"./Table-DedP8waU.js";import"./index-BR1U-F-z.js";import"./Dialog-hMfZrTLx.js";import"./cross-CP4Lwknm.js";import"./svgIconContainer-D1UbEXN0.js";import"./useBaseUiId-CktUDHnZ.js";import"./InternalBackdrop-Dp8-zUCW.js";import"./composite-B18nZLbz.js";import"./index-q5lLjySj.js";import"./index-u6B6c4lm.js";import"./index-EPrc8SCg.js";import"./useEventCallback-DUOVZOFF.js";import"./SkeletonBar-BuEvimm7.js";import"./LoadingCell-CyCzRKtl.js";import"./ColumnConfigDialog-DgDt7beG.js";import"./DraggableList-BgEOUXK-.js";import"./search-BMnX-ou2.js";import"./Input-8GhwsC7r.js";import"./useControlled-BEIkGatI.js";import"./isEqual-DDn24rvx.js";import"./isObject-CWP39A5-.js";import"./Button-B-j85khL.js";import"./ActionButton-tMOref2G.js";import"./Checkbox-B_2ZiK-d.js";import"./useValueChanged-B-SGOTcO.js";import"./CollapsiblePanel-DFw3qCxp.js";import"./MultiColumnSortDialog-BnW2raxD.js";import"./MenuTrigger-Bbr9eKQr.js";import"./CompositeItem-_EU9HVH1.js";import"./ToolbarRootContext-CV8VtjXF.js";import"./getDisabledMountTransitionStyles-CxpC5Tat.js";import"./getPseudoElementBounds-DMIne3Mm.js";import"./chevron-down-BSoyp3dk.js";import"./index-VIT7olFA.js";import"./error-D_5Pa8ED.js";import"./BaseCbacBanner-DOuZWpnY.js";import"./makeExternalStore-BNFQB0ek.js";import"./Tooltip-BzrgJjB9.js";import"./PopoverPopup-CRg247ib.js";import"./toNumber-COT5YTsh.js";import"./useOsdkClient-CxXIQTjd.js";import"./tick-_LERK7Z8.js";import"./DropdownField-CyTwiJSz.js";import"./withOsdkMetrics-BHF9odaV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
