import{j as i}from"./iframe-6qR11Bx0.js";import{O as p}from"./object-table-BfBi8LVj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C_75i-Qk.js";import"./preload-helper-B_Yy5CIH.js";import"./Table-DDiHOAxl.js";import"./index-i2tOtYR_.js";import"./Dialog-FvP3Lxw9.js";import"./cross-D7PjcS8z.js";import"./svgIconContainer-XlgOHF0q.js";import"./useBaseUiId-DlgiHfEc.js";import"./InternalBackdrop-AgwqTTbq.js";import"./composite-D16UZS_I.js";import"./index-B2X8PE9_.js";import"./index-DsOGlaAg.js";import"./index-BV0-TMAO.js";import"./useEventCallback-SlOcZxmd.js";import"./SkeletonBar-ycqW4z_S.js";import"./LoadingCell-B44i1nOx.js";import"./ColumnConfigDialog-Dkj9KAW2.js";import"./DraggableList-BOkavqxO.js";import"./search-ByKRFVJz.js";import"./Input-5sdYtdOv.js";import"./useControlled-Da-RuFP2.js";import"./Button-D5kP-zjx.js";import"./small-cross-C7nTj5uN.js";import"./ActionButton-u_S0n9qI.js";import"./Checkbox-yEpVdiPr.js";import"./useValueChanged-BZSxO_it.js";import"./CollapsiblePanel-DoWV0n-r.js";import"./MultiColumnSortDialog-CK2K0niX.js";import"./MenuTrigger-BQRJetgV.js";import"./CompositeItem-BVVIYYWe.js";import"./ToolbarRootContext-BFseEUjE.js";import"./getDisabledMountTransitionStyles-E2XqG_eb.js";import"./getPseudoElementBounds-CUAgg5Mk.js";import"./chevron-down-C16wVk20.js";import"./index-DPYKBcvA.js";import"./error-CXAefsdr.js";import"./BaseCbacBanner-CLTdhhiG.js";import"./makeExternalStore-UJLHcmUF.js";import"./Tooltip-BTLykIEU.js";import"./PopoverPopup-DGPSPBmG.js";import"./debounce-C6dFJgss.js";import"./useOsdkClient-DnvX8IID.js";import"./tick-B7N7dfWe.js";import"./DropdownField-DUtfZmSY.js";import"./isEqual-CwgWlVS2.js";import"./withOsdkMetrics-5m6-j_Ap.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
