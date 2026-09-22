import{j as i}from"./iframe-bnALbjvc.js";import{O as p}from"./object-table-CQYVfyLk.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-PjOH52pd.js";import"./preload-helper-C8kaRY2F.js";import"./Table-Bhrr6uXR.js";import"./index-CaRZXRvk.js";import"./Dialog-Col9GGkI.js";import"./cross-CGbNp8lf.js";import"./svgIconContainer-C-SVSCUi.js";import"./useBaseUiId-BxyyYmda.js";import"./InternalBackdrop-C-wwUbvn.js";import"./composite-BdnAwbZ3.js";import"./index-C3s-D08F.js";import"./index-D8ht-iMr.js";import"./index-DkcY6kTj.js";import"./useEventCallback-Bgla3un0.js";import"./SkeletonBar-DhafuJvs.js";import"./LoadingCell-B11eB6OI.js";import"./ColumnConfigDialog-Ql0F-LNV.js";import"./DraggableList-DZ59yIIW.js";import"./search-L4rGQlW3.js";import"./Input-sTQZo4x7.js";import"./useControlled-3Q0JUJSo.js";import"./Button-pyIzwVHB.js";import"./small-cross-W4QDLHth.js";import"./ActionButton-CGQnu47F.js";import"./Checkbox-SdKK2Wna.js";import"./useValueChanged-rj55CR90.js";import"./CollapsiblePanel-hHq3Rqpy.js";import"./MultiColumnSortDialog-3sn1qAPg.js";import"./MenuTrigger-D8rKTw1N.js";import"./CompositeItem-DQIpyI6o.js";import"./ToolbarRootContext-mleznJTR.js";import"./getDisabledMountTransitionStyles-CtfsBi68.js";import"./getPseudoElementBounds-CHB398KY.js";import"./chevron-down-CZKe5U1j.js";import"./index-DB9OublQ.js";import"./error-CRPXFfUM.js";import"./BaseCbacBanner-DM4ay7t9.js";import"./makeExternalStore-ICpfmLMh.js";import"./Tooltip-CkyT8l5h.js";import"./PopoverPopup-DUjg4Y47.js";import"./debounce-DN86280o.js";import"./useOsdkClient--44cx8Bj.js";import"./tick-a6w4X9hv.js";import"./DropdownField-FqvN8MA0.js";import"./isEqual-hXRpbEuH.js";import"./withOsdkMetrics-BbTXPZXR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
