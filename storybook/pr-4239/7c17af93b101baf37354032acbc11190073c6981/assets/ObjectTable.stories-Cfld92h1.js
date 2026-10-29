import{j as i}from"./iframe-BXMaRU6d.js";import{O as p}from"./object-table-DZwAmuc0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-OcykqVxW.js";import"./preload-helper-m1fl9yzx.js";import"./Table-hCJx8EAj.js";import"./index-D34UCeFi.js";import"./Dialog-DyZjmmlP.js";import"./cross-MZH7NFlC.js";import"./svgIconContainer-M8lsqLmU.js";import"./useBaseUiId-CnVJ9pTQ.js";import"./InternalBackdrop-Cr2zqXSQ.js";import"./composite-CTlCsHkl.js";import"./index-C36yrfOW.js";import"./index-BtCN2h1R.js";import"./index-Cy-78AF4.js";import"./useEventCallback-Rp-dYNNH.js";import"./SkeletonBar-Bq1t_P3v.js";import"./LoadingCell-4BCksriU.js";import"./ColumnConfigDialog-B6uFBm9n.js";import"./DraggableList-NCX9u6Mi.js";import"./search-B6DdGciv.js";import"./Input-B62f65LS.js";import"./useControlled-CqKbYNY-.js";import"./Button-DtbuXO0-.js";import"./small-cross-DKwt6Bqu.js";import"./ActionButton-CE9KfMfn.js";import"./Checkbox-B0Dt0FcT.js";import"./useValueChanged-CcVyEc1Q.js";import"./CollapsiblePanel-D3ddVpva.js";import"./MultiColumnSortDialog-DdD2HwOZ.js";import"./MenuTrigger-D0vPsvrL.js";import"./CompositeItem-CxCbcCcw.js";import"./ToolbarRootContext-01ULS3om.js";import"./getDisabledMountTransitionStyles-BvsTv5-I.js";import"./getPseudoElementBounds-ChoJiaDP.js";import"./chevron-down-ByBb-_AI.js";import"./index-CLYhKnEi.js";import"./error-DqaLhFsi.js";import"./BaseCbacBanner-f48-IYcu.js";import"./makeExternalStore-DZLA8zoV.js";import"./Tooltip-Bn2GpGak.js";import"./PopoverPopup-mvEM4RXX.js";import"./debounce-Cu2khlmU.js";import"./useOsdkClient-D2KP4OFp.js";import"./tick-D0-iauHd.js";import"./DropdownField-lw-NWBQn.js";import"./isEqual-BvAueMPn.js";import"./withOsdkMetrics-DErkFYVR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
