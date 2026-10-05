import{j as i}from"./iframe-DM2lbhq3.js";import{O as p}from"./object-table-BahOgCWX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BeGlrbgb.js";import"./preload-helper-CVlRJCQ4.js";import"./Table-D8aaq1ON.js";import"./index-BxgMbwQW.js";import"./Dialog-D6Sy0Hei.js";import"./cross-C6M-wOmQ.js";import"./svgIconContainer-DawECmqq.js";import"./useBaseUiId-D_FvUqqy.js";import"./InternalBackdrop-hyoEPQMb.js";import"./composite-iccYdnrf.js";import"./index-CCN1yxkK.js";import"./index-Bpwngerd.js";import"./index-BBAnTYss.js";import"./useEventCallback-CKRLND5s.js";import"./SkeletonBar-B2B70iHE.js";import"./LoadingCell-Cpy76GMo.js";import"./ColumnConfigDialog-d9r3q5wS.js";import"./DraggableList-BJxXS1Me.js";import"./search-B5W8bLyf.js";import"./Input-CY0qF8uS.js";import"./useControlled-Ca36YxvC.js";import"./Button-XbpukpvP.js";import"./small-cross-BKA-Ml9N.js";import"./ActionButton-_pm_iS5i.js";import"./Checkbox-CsYoJ4b7.js";import"./useValueChanged-BxW-Xkhx.js";import"./CollapsiblePanel-DpDskcR4.js";import"./MultiColumnSortDialog-D-GYz7Kr.js";import"./MenuTrigger-BKsdj5VU.js";import"./CompositeItem-BFuIVpH0.js";import"./ToolbarRootContext-Bg6hLVB6.js";import"./getDisabledMountTransitionStyles-CcD-BZKR.js";import"./getPseudoElementBounds-CzHg-ye1.js";import"./chevron-down-DyskK5Yf.js";import"./index-BCS5K0iy.js";import"./error-DJU2sF2P.js";import"./BaseCbacBanner-DdVdOUAf.js";import"./makeExternalStore-BiR7BXmk.js";import"./Tooltip-DbczZTzH.js";import"./PopoverPopup-CX9LkjiZ.js";import"./debounce-vAXahSDb.js";import"./useOsdkClient-BLFd6qg6.js";import"./tick-_p_7zkXC.js";import"./DropdownField-d-diOJrZ.js";import"./isEqual-CZuKKajL.js";import"./withOsdkMetrics-URzhtFq2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
