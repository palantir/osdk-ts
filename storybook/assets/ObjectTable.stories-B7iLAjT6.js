import{j as i}from"./iframe-CWCaAWug.js";import{O as p}from"./object-table-DNhheKF7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DOgjFED7.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D7PEFPsb.js";import"./index-BCUxEitH.js";import"./Dialog-D0tQayuO.js";import"./cross-DIjpr0JB.js";import"./svgIconContainer-B05glsOt.js";import"./useBaseUiId-BW_UtI62.js";import"./InternalBackdrop-T6iq9MEL.js";import"./composite-BR9g6bcx.js";import"./index-BWfbtsx7.js";import"./index-j1R37CPf.js";import"./index-BU_p4HZd.js";import"./useEventCallback-BlDNNPjw.js";import"./SkeletonBar-AwAWP3QT.js";import"./LoadingCell-DGngu3K1.js";import"./ColumnConfigDialog-qTe30KBW.js";import"./DraggableList-DUGUB3sg.js";import"./search-CqQdgI04.js";import"./Input-BfCxIW-2.js";import"./useControlled-BTf1PsUt.js";import"./Button-DiqPmqG4.js";import"./small-cross-BB4Y9Jap.js";import"./ActionButton-DMHzSnUh.js";import"./Checkbox-3wkD7hFA.js";import"./useValueChanged-BEwxMfrB.js";import"./CollapsiblePanel-CahaDsZJ.js";import"./MultiColumnSortDialog-CSXBKDEz.js";import"./MenuTrigger-DBWzCSvu.js";import"./CompositeItem-DoJwIv2T.js";import"./ToolbarRootContext-BlDQXh6V.js";import"./getDisabledMountTransitionStyles-2GoPE3mv.js";import"./getPseudoElementBounds-DBJhYukF.js";import"./chevron-down-TdN2wngs.js";import"./index-BctpQ9zM.js";import"./error-B3tx7_Th.js";import"./BaseCbacBanner-7JilAzUJ.js";import"./makeExternalStore-DuyB91Wg.js";import"./Tooltip-CYwiJioN.js";import"./PopoverPopup-BMHfvJBq.js";import"./debounce-Cn_0io8o.js";import"./useOsdkClient-BEPV8xbi.js";import"./tick-C2bp2J2X.js";import"./DropdownField-BfsjfsE0.js";import"./isEqual-CuLZYDbS.js";import"./withOsdkMetrics-IvetZHLX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
